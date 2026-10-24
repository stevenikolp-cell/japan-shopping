(() => {
  "use strict";

  const PRODUCTS = Array.isArray(window.PRODUCTS)
    ? window.PRODUCTS
    : [];

  const PRICE_CONFIG =
    window.PRODUCT_PRICE_CONFIG || {
      jpyToKrw: 8.45,
      krwRoundTo: 100
    };

  const STATUS_LABELS =
    window.PRODUCT_STATUS || {
      active: "판매 중",
      limited: "기간한정",
      "check-stock": "재고 확인",
      discontinued: "판매 종료"
    };

  const STORAGE_KEY =
    "japanShopping.cart.v2";

  const LEGACY_KEYS = [
    "japanShopping.cart",
    "japanShoppingList",
    "japan-shopping-list",
    "shoppingList"
  ];

  const state = {
    query: "",
    category: "all",
    status: "all",
    storeGroup: "all",
    sort: "number-asc",
    cart: [],
    cartOpen: false
  };

  const els = {};

  document.addEventListener(
    "DOMContentLoaded",
    init
  );


  // ========================================
  // 초기화
  // ========================================

  function init() {
    cacheElements();

    if (!PRODUCTS.length) {
      showFatalError(
        "상품 데이터를 불러오지 못했습니다. products.js가 app.js보다 먼저 로드되었는지 확인하세요."
      );
      return;
    }

    const validation =
      validateProducts(PRODUCTS);

    if (validation.errors.length) {
      console.warn(
        "[Japan Shopping] products.js 검증 경고",
        validation.errors
      );
    }

    state.cart = loadCart();

    migrateLegacyCart();
    normalizeCartAgainstProducts();
    saveCart();

    buildFilters();
    bindEvents();
    renderCommonNotice();
    renderAll();
  }


  // ========================================
  // HTML 요소 연결
  // ========================================

  function cacheElements() {
    const ids = [
      "searchInput",
      "categoryFilter",
      "statusFilter",
      "storeFilter",
      "sortSelect",

      "quickAddNumber",
      "quickAddQuantity",
      "quickAddButton",
      "quickAddMessage",

      "productList",
      "resultCount",

      "cartItems",
      "cartCount",
      "cartTotal",
      "cartPanel",
      "cartOpenButton",
      "cartCloseButton",
      "cartBackdrop",
      "clearPurchasedButton",
      "emptyCartButton",

      "noticeArea",
      "priceConfigInfo"
    ];

    ids.forEach((id) => {
      els[id] =
        document.getElementById(id);
    });
  }


  // ========================================
  // products.js 데이터 검사
  // ========================================

  function validateProducts(products) {
    const errors = [];

    const seenNumbers =
      new Set();

    const seenIds =
      new Set();

    products.forEach(
      (product, index) => {
        if (
          !Number.isInteger(
            product.number
          )
        ) {
          errors.push(
            `index ${index}: number가 정수가 아님`
          );
        }

        if (!product.id) {
          errors.push(
            `index ${index}: id 누락`
          );
        }

        if (
          seenNumbers.has(
            product.number
          )
        ) {
          errors.push(
            `중복 number: ${product.number}`
          );
        }

        seenNumbers.add(
          product.number
        );

        if (
          seenIds.has(
            product.id
          )
        ) {
          errors.push(
            `중복 id: ${product.id}`
          );
        }

        seenIds.add(
          product.id
        );

        const expectedCode =
          `#${String(
            product.number
          ).padStart(3, "0")}`;

        if (
          product.code !==
          expectedCode
        ) {
          errors.push(
            `${product.id}: code가 ${JSON.stringify(
              product.code
            )} / 예상 ${expectedCode}`
          );
        }
      }
    );

    return {
      errors
    };
  }


  // ========================================
  // 필터 생성
  // ========================================

  function buildFilters() {
    fillSelect(
      els.categoryFilter,
      uniqueSorted(
        PRODUCTS
          .map(
            (product) =>
              product.category
          )
          .filter(Boolean)
      ),
      "전체 카테고리"
    );

    fillSelect(
      els.storeFilter,
      uniqueSorted(
        PRODUCTS
          .map(
            (product) =>
              product.storeGroup
          )
          .filter(Boolean)
      ),
      "전체 판매처"
    );

    if (els.statusFilter) {
      els.statusFilter.innerHTML =
        "";

      addOption(
        els.statusFilter,
        "all",
        "전체 상태"
      );

      Object.entries(
        STATUS_LABELS
      ).forEach(
        ([value, label]) => {
          addOption(
            els.statusFilter,
            value,
            label
          );
        }
      );
    }
  }

  function fillSelect(
    select,
    values,
    firstLabel
  ) {
    if (!select) {
      return;
    }

    select.innerHTML = "";

    addOption(
      select,
      "all",
      firstLabel
    );

    values.forEach(
      (value) => {
        addOption(
          select,
          value,
          value
        );
      }
    );
  }

  function addOption(
    select,
    value,
    label
  ) {
    const option =
      document.createElement(
        "option"
      );

    option.value =
      value;

    option.textContent =
      label;

    select.appendChild(
      option
    );
  }

  function uniqueSorted(values) {
    return [
      ...new Set(values)
    ].sort(
      (a, b) =>
        String(a).localeCompare(
          String(b),
          "ko"
        )
    );
  }


  // ========================================
  // 이벤트 연결
  // ========================================

  function bindEvents() {
    els.searchInput?.addEventListener(
      "input",
      (event) => {
        state.query =
          event.target.value.trim();

        renderProducts();
      }
    );

    els.categoryFilter?.addEventListener(
      "change",
      (event) => {
        state.category =
          event.target.value;

        renderProducts();
      }
    );

    els.statusFilter?.addEventListener(
      "change",
      (event) => {
        state.status =
          event.target.value;

        renderProducts();
      }
    );

    els.storeFilter?.addEventListener(
      "change",
      (event) => {
        state.storeGroup =
          event.target.value;

        renderProducts();
      }
    );

    els.sortSelect?.addEventListener(
      "change",
      (event) => {
        state.sort =
          event.target.value;

        renderProducts();
      }
    );

    els.quickAddButton?.addEventListener(
      "click",
      handleQuickAdd
    );

    els.quickAddNumber?.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key ===
          "Enter"
        ) {
          handleQuickAdd();
        }
      }
    );

    els.quickAddQuantity?.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key ===
          "Enter"
        ) {
          handleQuickAdd();
        }
      }
    );

    els.productList?.addEventListener(
      "click",
      handleProductListClick
    );

    els.productList?.addEventListener(
      "change",
      handleProductListChange
    );

    els.cartItems?.addEventListener(
      "click",
      handleCartClick
    );

    els.cartItems?.addEventListener(
      "change",
      handleCartChange
    );

    els.cartOpenButton?.addEventListener(
      "click",
      () => {
        setCartOpen(true);
      }
    );

    els.cartCloseButton?.addEventListener(
      "click",
      () => {
        setCartOpen(false);
      }
    );

    els.cartBackdrop?.addEventListener(
      "click",
      () => {
        setCartOpen(false);
      }
    );

    els.clearPurchasedButton?.addEventListener(
      "click",
      clearPurchasedItems
    );

    els.emptyCartButton?.addEventListener(
      "click",
      emptyCart
    );

    document.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key ===
            "Escape" &&
          state.cartOpen
        ) {
          setCartOpen(false);
        }
      }
    );
  }


  // ========================================
  // 전체 화면 렌더링
  // ========================================

  function renderAll() {
    renderProducts();
    renderCart();
    renderPriceConfig();
  }


  // ========================================
  // 검색
  // ========================================

  function normalizeNumberQuery(
    value
  ) {
    const cleaned =
      String(
        value || ""
      ).trim();

    if (!cleaned) {
      return null;
    }

    const match =
      cleaned.match(
        /^#?0*(\d{1,3})$/
      );

    if (!match) {
      return null;
    }

    const number =
      Number(match[1]);

    return (
      Number.isInteger(
        number
      ) &&
      number > 0
    )
      ? number
      : null;
  }

  function getSearchableText(
    product
  ) {
    const optionNames =
      Array.isArray(
        product.options
      )
        ? product.options
            .map(
              (option) =>
                option.name
            )
            .join(" ")
        : "";

    return [
      product.code,
      product.number,
      product.name,
      product.japanese,
      product.category,
      product.storeGroup,
      product.store,
      product.series,
      product.summary,
      optionNames
    ]
      .filter(
        (value) =>
          value !==
            undefined &&
          value !==
            null
      )
      .join(" ")
      .toLowerCase();
  }

  function productMatchesQuery(
    product,
    query
  ) {
    if (!query) {
      return true;
    }

    const normalizedNumber =
      normalizeNumberQuery(
        query
      );

    if (
      normalizedNumber !==
      null
    ) {
      return (
        product.number ===
        normalizedNumber
      );
    }

    return getSearchableText(
      product
    ).includes(
      query.toLowerCase()
    );
  }

  function getFilteredProducts() {
    const filtered =
      PRODUCTS.filter(
        (product) => {
          if (
            !productMatchesQuery(
              product,
              state.query
            )
          ) {
            return false;
          }

          if (
            state.category !==
              "all" &&
            product.category !==
              state.category
          ) {
            return false;
          }

          if (
            state.status !==
              "all" &&
            product.status !==
              state.status
          ) {
            return false;
          }

          if (
            state.storeGroup !==
              "all" &&
            product.storeGroup !==
              state.storeGroup
          ) {
            return false;
          }

          return true;
        }
      );

    return sortProducts(
      filtered,
      state.sort
    );
  }


  // ========================================
  // 정렬
  // ========================================

  function sortProducts(
    products,
    sortType
  ) {
    const copied = [
      ...products
    ];

    switch (sortType) {
      case "number-desc":
        return copied.sort(
          (a, b) =>
            b.number -
            a.number
        );

      case "name-asc":
        return copied.sort(
          (a, b) =>
            String(
              a.name || ""
            ).localeCompare(
              String(
                b.name || ""
              ),
              "ko"
            )
        );

      case "name-desc":
        return copied.sort(
          (a, b) =>
            String(
              b.name || ""
            ).localeCompare(
              String(
                a.name || ""
              ),
              "ko"
            )
        );

      case "price-asc":
        return copied.sort(
          (a, b) =>
            getProductMinPrice(
              a
            ) -
            getProductMinPrice(
              b
            )
        );

      case "price-desc":
        return copied.sort(
          (a, b) =>
            getProductMaxPrice(
              b
            ) -
            getProductMaxPrice(
              a
            )
        );

      case "number-asc":
      default:
        return copied.sort(
          (a, b) =>
            a.number -
            b.number
        );
    }
  }


  // ========================================
  // 가격
  // ========================================

  function getProductMinPrice(
    product
  ) {
    const value =
      product?.price
        ?.jpyMin;

    return Number.isFinite(
      Number(value)
    )
      ? Number(value)
      : 0;
  }

  function getProductMaxPrice(
    product
  ) {
    const value =
      product?.price
        ?.jpyMax;

    return Number.isFinite(
      Number(value)
    )
      ? Number(value)
      : getProductMinPrice(
          product
        );
  }

  function getExchangeRate() {
    const rate =
      Number(
        PRICE_CONFIG.jpyToKrw
      );

    return (
      Number.isFinite(rate) &&
      rate > 0
    )
      ? rate
      : 8.45;
  }

  function getKrwRoundUnit() {
    const unit =
      Number(
        PRICE_CONFIG.krwRoundTo
      );

    return (
      Number.isFinite(unit) &&
      unit > 0
    )
      ? unit
      : 100;
  }

  function convertJpyToKrw(
    jpy
  ) {
    const amount =
      Number(jpy);

    if (
      !Number.isFinite(
        amount
      )
    ) {
      return null;
    }

    const raw =
      amount *
      getExchangeRate();

    const unit =
      getKrwRoundUnit();

    return (
      Math.round(
        raw / unit
      ) * unit
    );
  }

  function formatNumber(value) {
    return Number(
      value
    ).toLocaleString(
      "ko-KR"
    );
  }

  function formatJpy(value) {
    if (
      value === null ||
      value ===
        undefined ||
      !Number.isFinite(
        Number(value)
      )
    ) {
      return "-";
    }

    return `¥${formatNumber(
      value
    )}`;
  }

  function formatKrw(value) {
    if (
      value === null ||
      value ===
        undefined ||
      !Number.isFinite(
        Number(value)
      )
    ) {
      return "-";
    }

    return `약 ${formatNumber(
      value
    )}원`;
  }

  function formatPriceRange(
    product
  ) {
    const min =
      getProductMinPrice(
        product
      );

    const max =
      getProductMaxPrice(
        product
      );

    const minKrw =
      convertJpyToKrw(
        min
      );

    const maxKrw =
      convertJpyToKrw(
        max
      );

    const jpyText =
      min === max
        ? formatJpy(min)
        : `${formatJpy(
            min
          )} ~ ${formatJpy(
            max
          )}`;

    const krwText =
      minKrw === maxKrw
        ? formatKrw(
            minKrw
          )
        : `약 ${formatNumber(
            minKrw
          )} ~ ${formatNumber(
            maxKrw
          )}원`;

    return {
      jpyText,
      krwText
    };
  }


  // ========================================
  // 상품 옵션
  // ========================================

  function getDefaultOption(
    product
  ) {
    if (
      !Array.isArray(
        product.options
      ) ||
      product.options.length ===
        0
    ) {
      return {
        id: "default",
        name: "기본",
        status: "active"
      };
    }

    const activeOption =
      product.options.find(
        (option) =>
          option.status !==
          "discontinued"
      );

    return (
      activeOption ||
      product.options[0]
    );
  }

  function getOptionById(
    product,
    optionId
  ) {
    if (
      !Array.isArray(
        product.options
      )
    ) {
      return null;
    }

    return (
      product.options.find(
        (option) =>
          String(
            option.id
          ) ===
          String(
            optionId
          )
      ) || null
    );
  }

  function getProductById(
    productId
  ) {
    return (
      PRODUCTS.find(
        (product) =>
          String(
            product.id
          ) ===
          String(
            productId
          )
      ) || null
    );
  }

  function getProductByNumber(
    number
  ) {
    return (
      PRODUCTS.find(
        (product) =>
          product.number ===
          Number(number)
      ) || null
    );
  }


  // ========================================
  // 장바구니 기본 구조
  // ========================================

  function makeCartKey(
    productId,
    optionId
  ) {
    return `${productId}::${
      optionId ||
      "default"
    }`;
  }

  function normalizeQuantity(
    value
  ) {
    const parsed =
      parseInt(
        value,
        10
      );

    if (
      !Number.isFinite(
        parsed
      ) ||
      parsed < 1
    ) {
      return 1;
    }

    return Math.min(
      parsed,
      999
    );
  }

  function normalizeCartItem(
    item
  ) {
    if (!item) {
      return null;
    }

    const productId =
      item.productId ||
      item.id ||
      "";

    const product =
      getProductById(
        productId
      );

    if (!product) {
      return null;
    }

    let optionId =
      item.optionId;

    if (!optionId) {
      optionId =
        getDefaultOption(
          product
        ).id;
    }

    let option =
      getOptionById(
        product,
        optionId
      );

    if (!option) {
      option =
        getDefaultOption(
          product
        );

      optionId =
        option.id;
    }

    return {
      key: makeCartKey(
        product.id,
        optionId
      ),

      productId:
        product.id,

      optionId,

      quantity:
        normalizeQuantity(
          item.quantity ?? 1
        ),

      purchased:
        Boolean(
          item.purchased
        )
    };
  }


  // ========================================
  // localStorage
  // ========================================

  function loadCart() {
    try {
      const raw =
        localStorage.getItem(
          STORAGE_KEY
        );

      if (!raw) {
        return [];
      }

      const parsed =
        JSON.parse(raw);

      if (
        !Array.isArray(
          parsed
        )
      ) {
        return [];
      }

      return parsed
        .map(
          normalizeCartItem
        )
        .filter(Boolean);
    } catch (error) {
      console.warn(
        "[Japan Shopping] 장바구니 불러오기 실패",
        error
      );

      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
          state.cart
        )
      );
    } catch (error) {
      console.warn(
        "[Japan Shopping] 장바구니 저장 실패",
        error
      );
    }
  }

  function migrateLegacyCart() {
    if (
      state.cart.length >
      0
    ) {
      return;
    }

    for (
      const legacyKey
      of LEGACY_KEYS
    ) {
      const raw =
        localStorage.getItem(
          legacyKey
        );

      if (!raw) {
        continue;
      }

      try {
        const parsed =
          JSON.parse(raw);

        if (
          !Array.isArray(
            parsed
          )
        ) {
          continue;
        }

        const migrated =
          parsed
            .map(
              normalizeLegacyCartItem
            )
            .filter(Boolean);

        if (
          migrated.length >
          0
        ) {
          state.cart =
            mergeDuplicateCartItems(
              migrated
            );

          saveCart();
          return;
        }
      } catch (error) {
        console.warn(
          `[Japan Shopping] 이전 장바구니 변환 실패: ${legacyKey}`,
          error
        );
      }
    }
  }

  function normalizeLegacyCartItem(
    item
  ) {
    if (!item) {
      return null;
    }

    let product =
      null;

    if (
      item.productId
    ) {
      product =
        getProductById(
          item.productId
        );
    }

    if (
      !product &&
      item.id
    ) {
      product =
        getProductById(
          item.id
        );
    }

    if (
      !product &&
      item.number
    ) {
      product =
        getProductByNumber(
          item.number
        );
    }

    if (!product) {
      return null;
    }

    const option =
      item.optionId
        ? getOptionById(
            product,
            item.optionId
          )
        : getDefaultOption(
            product
          );

    const finalOption =
      option ||
      getDefaultOption(
        product
      );

    return {
      key: makeCartKey(
        product.id,
        finalOption.id
      ),

      productId:
        product.id,

      optionId:
        finalOption.id,

      quantity:
        normalizeQuantity(
          item.quantity ?? 1
        ),

      purchased:
        Boolean(
          item.purchased ??
          item.checked ??
          false
        )
    };
  }

  function mergeDuplicateCartItems(
    items
  ) {
    const merged =
      new Map();

    items.forEach(
      (item) => {
        const existing =
          merged.get(
            item.key
          );

        if (!existing) {
          merged.set(
            item.key,
            {
              ...item
            }
          );

          return;
        }

        existing.quantity =
          normalizeQuantity(
            existing.quantity +
              item.quantity
          );

        existing.purchased =
          existing.purchased &&
          item.purchased;
      }
    );

    return [
      ...merged.values()
    ];
  }

  function normalizeCartAgainstProducts() {
    state.cart =
      mergeDuplicateCartItems(
        state.cart
          .map(
            normalizeCartItem
          )
          .filter(Boolean)
      );
  }


  // ========================================
  // 장바구니 상품 처리
  // ========================================

  function findCartItem(
    productId,
    optionId
  ) {
    const key =
      makeCartKey(
        productId,
        optionId
      );

    return (
      state.cart.find(
        (item) =>
          item.key === key
      ) || null
    );
  }

  function addToCart(
    productId,
    optionId,
    quantity = 1
  ) {
    const product =
      getProductById(
        productId
      );

    if (!product) {
      return false;
    }

    let option =
      getOptionById(
        product,
        optionId
      );

    if (!option) {
      option =
        getDefaultOption(
          product
        );
    }

    if (
      product.status ===
      "discontinued"
    ) {
      return false;
    }

    if (
      option.status ===
      "discontinued"
    ) {
      return false;
    }

    const finalQuantity =
      normalizeQuantity(
        quantity
      );

    const existing =
      findCartItem(
        product.id,
        option.id
      );

    if (existing) {
      existing.quantity =
        normalizeQuantity(
          existing.quantity +
            finalQuantity
        );
    } else {
      state.cart.push({
        key: makeCartKey(
          product.id,
          option.id
        ),

        productId:
          product.id,

        optionId:
          option.id,

        quantity:
          finalQuantity,

        purchased:
          false
      });
    }

    saveCart();
    renderCart();
    renderProducts();

    return true;
  }

  function removeCartItem(
    key
  ) {
    state.cart =
      state.cart.filter(
        (item) =>
          item.key !== key
      );

    saveCart();
    renderCart();
    renderProducts();
  }

  function updateCartQuantity(
    key,
    quantity
  ) {
    const item =
      state.cart.find(
        (cartItem) =>
          cartItem.key ===
          key
      );

    if (!item) {
      return;
    }

    item.quantity =
      normalizeQuantity(
        quantity
      );

    saveCart();
    renderCart();
  }

  function setPurchased(
    key,
    purchased
  ) {
    const item =
      state.cart.find(
        (cartItem) =>
          cartItem.key ===
          key
      );

    if (!item) {
      return;
    }

    item.purchased =
      Boolean(purchased);

    saveCart();
    renderCart();
    renderProducts();
  }

  function getCartUnitCount() {
    return state.cart.reduce(
      (sum, item) =>
        sum +
        normalizeQuantity(
          item.quantity
        ),
      0
    );
  }

  function getCartLineCount() {
    return state.cart.length;
  }

  function getCartEstimatedTotal() {
    return state.cart.reduce(
      (total, item) => {
        const product =
          getProductById(
            item.productId
          );

        if (!product) {
          return total;
        }

        const quantity =
          normalizeQuantity(
            item.quantity
          );

        const averageJpy =
          (
            getProductMinPrice(
              product
            ) +
            getProductMaxPrice(
              product
            )
          ) / 2;

        return (
          total +
          averageJpy *
            quantity
        );
      },
      0
    );
  }


  // ========================================
  // 상품 목록 출력
  // ========================================

  function renderProducts() {
    if (!els.productList) {
      return;
    }

    const products =
      getFilteredProducts();

    els.productList.innerHTML =
      "";

    if (els.resultCount) {
      els.resultCount.textContent =
        `${products.length}개 상품`;
    }

    if (
      products.length ===
      0
    ) {
      const empty =
        document.createElement(
          "div"
        );

      empty.className =
        "empty-state";

      empty.innerHTML = `
        <strong>
          검색 결과가 없습니다.
        </strong>

        <p>
          상품 번호, 한국어 상품명, 일본어 상품명 또는 필터를 다시 확인해 주세요.
        </p>
      `;

      els.productList.appendChild(
        empty
      );

      return;
    }

    const fragment =
      document.createDocumentFragment();

    products.forEach(
      (product) => {
        fragment.appendChild(
          createProductCard(
            product
          )
        );
      }
    );

    els.productList.appendChild(
      fragment
    );
  }

  function createProductCard(
    product
  ) {
    const card =
      document.createElement(
        "article"
      );

    card.className =
      "product-card";

    card.dataset.productId =
      product.id;

    const defaultOption =
      getDefaultOption(
        product
      );

    const statusLabel =
      STATUS_LABELS[
        product.status
      ] ||
      product.status ||
      "";

    const price =
      formatPriceRange(
        product
      );

    const isDiscontinued =
      product.status ===
      "discontinued";

    const hasOptions =
      Array.isArray(
        product.options
      ) &&
      product.options.length >
        1;

    const ratingHtml =
      buildRatingHtml(
        product
      );

    const optionHtml =
      buildProductOptionHtml(
        product,
        defaultOption
      );

    const detailsHtml =
      buildProductDetailsHtml(
        product
      );

    const medicineHtml =
      buildMedicineHtml(
        product
      );

    const statusNoteHtml =
      product.statusNote
        ? `
          <p class="product-status-note">
            ${escapeHtml(
              product.statusNote
            )}
          </p>
        `
        : "";

    const seriesHtml =
      product.series
        ? `
          <span class="product-series">
            ${escapeHtml(
              product.series
            )}
          </span>
        `
        : "";

    const imageHtml =
      buildProductImageHtml(
        product
      );

    const cartInfo =
      getProductCartSummary(
        product.id
      );

    const cartBadgeHtml =
      cartInfo.lineCount > 0
        ? `
          <span class="product-cart-badge">
            리스트 ${cartInfo.quantity}개
          </span>
        `
        : "";

    card.innerHTML = `
      <div class="product-image-wrap">
        ${imageHtml}
      </div>

      <div class="product-content">
        <div class="product-card-top">

          <div class="product-number-row">

            <span class="product-code">
              ${escapeHtml(
                product.code
              )}
            </span>

            ${seriesHtml}

            <span
              class="product-status product-status-${escapeAttribute(
                product.status ||
                "active"
              )}"
            >
              ${escapeHtml(
                statusLabel
              )}
            </span>

            ${cartBadgeHtml}

          </div>

          <h2 class="product-name">
            ${escapeHtml(
              product.name
            )}
          </h2>

          <p class="product-japanese">
            ${escapeHtml(
              product.japanese ||
              ""
            )}
          </p>

        </div>


        <div class="product-meta">

          <span>
            ${escapeHtml(
              product.category ||
              ""
            )}
          </span>

          <span>
            ${escapeHtml(
              product.store ||
              ""
            )}
          </span>

        </div>


        <p class="product-summary">
          ${escapeHtml(
            product.summary ||
            ""
          )}
        </p>

        ${statusNoteHtml}


        <div class="product-price">

          <div class="product-price-jpy">
            ${escapeHtml(
              price.jpyText
            )}
          </div>

          <div class="product-price-krw">
            ${escapeHtml(
              price.krwText
            )}
          </div>

        </div>


        ${ratingHtml}


        <div class="product-purchase-controls">

          ${
            hasOptions
              ? `
                <label class="product-option-field">

                  <span>
                    옵션
                  </span>

                  <select
                    class="product-option-select"
                    data-product-id="${escapeAttribute(
                      product.id
                    )}"
                  >
                    ${optionHtml}
                  </select>

                </label>
              `
              : `
                <input
                  type="hidden"
                  class="product-option-select"
                  data-product-id="${escapeAttribute(
                    product.id
                  )}"
                  value="${escapeAttribute(
                    defaultOption.id
                  )}"
                >
              `
          }


          <label class="product-quantity-field">

            <span>
              수량
            </span>

            <input
              class="product-quantity-input"
              type="number"
              min="1"
              max="999"
              value="1"
              inputmode="numeric"
              data-product-id="${escapeAttribute(
                product.id
              )}"
            >

          </label>


          <button
            type="button"
            class="product-add-button"
            data-action="add-to-cart"
            data-product-id="${escapeAttribute(
              product.id
            )}"
            ${
              isDiscontinued
                ? "disabled"
                : ""
            }
          >
            ${
              isDiscontinued
                ? "판매 종료"
                : "쇼핑리스트에 추가"
            }
          </button>

        </div>


        ${
          detailsHtml ||
          medicineHtml
            ? `
              <details class="product-details">

                <summary>
                  상세 정보
                </summary>

                <div class="product-details-body">
                  ${detailsHtml}
                  ${medicineHtml}
                </div>

              </details>
            `
            : ""
        }

      </div>
    `;

    return card;
  }


  // ========================================
  // 상품 이미지
  // ========================================

  function buildProductImageHtml(
    product
  ) {
    const image =
      String(
        product.image || ""
      ).trim();

    if (!image) {
      return `
        <div class="product-image-placeholder">
          <span>
            ${escapeHtml(
              product.code
            )}
          </span>
        </div>
      `;
    }

    return `
      <img
        class="product-image"
        src="${escapeAttribute(
          image
        )}"
        alt="${escapeAttribute(
          product.name
        )}"
        loading="lazy"
        data-fallback-code="${escapeAttribute(
          product.code
        )}"
      >
    `;
  }

  function handleProductImageError(
    image
  ) {
    if (
      image.dataset
        .fallbackApplied ===
      "true"
    ) {
      return;
    }

    image.dataset
      .fallbackApplied =
      "true";

    const wrapper =
      image.parentElement;

    if (!wrapper) {
      return;
    }

    const code =
      image.dataset
        .fallbackCode ||
      "";

    image.remove();

    const placeholder =
      document.createElement(
        "div"
      );

    placeholder.className =
      "product-image-placeholder";

    placeholder.textContent =
      code ||
      "이미지 준비 중";

    wrapper.appendChild(
      placeholder
    );
  }

  document.addEventListener(
    "error",
    (event) => {
      const target =
        event.target;

      if (
        target instanceof
          HTMLImageElement &&
        target.classList.contains(
          "product-image"
        )
      ) {
        handleProductImageError(
          target
        );
      }
    },
    true
  );


  // ========================================
  // 상품 옵션 HTML
  // ========================================

  function buildProductOptionHtml(
    product,
    selectedOption
  ) {
    const options =
      Array.isArray(
        product.options
      ) &&
      product.options.length
        ? product.options
        : [
            {
              id: "default",
              name: "기본",
              status:
                "active"
            }
          ];

    return options
      .map(
        (option) => {
          const isSelected =
            String(
              option.id
            ) ===
            String(
              selectedOption?.id
            );

          const optionStatus =
            option.status ||
            "active";

          const disabled =
            optionStatus ===
            "discontinued";

          let label =
            option.name ||
            option.id;

          if (
            optionStatus ===
            "check-stock"
          ) {
            label +=
              " · 재고 확인";
          } else if (
            optionStatus ===
            "limited"
          ) {
            label +=
              " · 기간한정";
          } else if (
            optionStatus ===
            "discontinued"
          ) {
            label +=
              " · 판매 종료";
          }

          return `
            <option
              value="${escapeAttribute(
                option.id
              )}"

              ${
                isSelected
                  ? "selected"
                  : ""
              }

              ${
                disabled
                  ? "disabled"
                  : ""
              }
            >
              ${escapeHtml(
                label
              )}
            </option>
          `;
        }
      )
      .join("");
  }


  // ========================================
  // 평점
  // ========================================

  function buildRatingHtml(
    product
  ) {
    const rating =
      product.rating;

    if (
      !rating ||
      !Number.isFinite(
        Number(
          rating.score
        )
      )
    ) {
      return "";
    }

    const score =
      Number(
        rating.score
      );

    const max =
      Number(
        rating.max
      );

    const reviewCount =
      Number(
        rating.reviewCount
      );

    const scoreText =
      Number.isFinite(max)
        ? `${score} / ${max}`
        : String(score);

    const reviewText =
      Number.isFinite(
        reviewCount
      )
        ? `${formatNumber(
            reviewCount
          )}개 리뷰`
        : "";

    return `
      <div class="product-rating">

        <strong>
          ★ ${escapeHtml(
            scoreText
          )}
        </strong>

        ${
          rating.source
            ? `
              <span>
                ${escapeHtml(
                  rating.source
                )}
              </span>
            `
            : ""
        }

        ${
          reviewText
            ? `
              <span>
                ${escapeHtml(
                  reviewText
                )}
              </span>
            `
            : ""
        }

        ${
          rating.checked
            ? `
              <span class="rating-checked">
                확인 ${escapeHtml(
                  rating.checked
                )}
              </span>
            `
            : ""
        }

      </div>
    `;
  }


  // ========================================
  // 일반 상세정보
  // ========================================

  function buildProductDetailsHtml(
    product
  ) {
    const details =
      product.details;

    if (!details) {
      return "";
    }

    const rows = [
      [
        "특징",
        details.features
      ],
      [
        "주요 성분·소재",
        details.ingredientsOrMaterial
      ],
      [
        "사용법",
        details.usage
      ],
      [
        "추천 대상",
        details.recommendedFor
      ],
      [
        "주의사항",
        details.warnings
      ]
    ].filter(
      ([, value]) =>
        value
    );

    if (
      rows.length ===
      0
    ) {
      return "";
    }

    return `
      <section class="product-detail-section">

        <h3>
          상품 정보
        </h3>

        <dl class="product-detail-list">

          ${rows
            .map(
              ([label, value]) => `
                <div class="product-detail-row">

                  <dt>
                    ${escapeHtml(
                      label
                    )}
                  </dt>

                  <dd>
                    ${escapeHtml(
                      value
                    )}
                  </dd>

                </div>
              `
            )
            .join("")}

        </dl>

      </section>
    `;
  }


  // ========================================
  // 의약품 정보
  // ========================================

  function buildMedicineHtml(
    product
  ) {
    if (
      !product.isMedicine ||
      !product.medical
    ) {
      return "";
    }

    const medical =
      product.medical;

    const rows = [
      [
        "의약품 구분",
        medical.medicineClass
      ],
      [
        "효능·효과",
        medical.efficacy
      ],
      [
        "유효성분",
        medical.activeIngredients
      ],
      [
        "용법·용량",
        medical.usage
      ],
      [
        "연령",
        medical.age
      ],
      [
        "최대 사용량",
        medical.maxUsage
      ],
      [
        "주의사항",
        medical.warnings
      ]
    ].filter(
      ([, value]) =>
        value
    );

    const contactLensHtml =
      medical.contactLens
        ? buildContactLensHtml(
            medical.contactLens
          )
        : "";

    return `
      <section class="product-detail-section medicine-section">

        <h3>
          의약품 정보
        </h3>

        <div class="medicine-warning">
          실제 사용 시 구입한 제품의 최신 포장 및 첨부문서를 우선 확인하세요.
        </div>

        <dl class="product-detail-list">

          ${rows
            .map(
              ([label, value]) => `
                <div class="product-detail-row">

                  <dt>
                    ${escapeHtml(
                      label
                    )}
                  </dt>

                  <dd>
                    ${escapeHtml(
                      value
                    )}
                  </dd>

                </div>
              `
            )
            .join("")}

        </dl>

        ${contactLensHtml}

        ${
          medical.sourceNote
            ? `
              <p class="medicine-source-note">
                ${escapeHtml(
                  medical.sourceNote
                )}
              </p>
            `
            : ""
        }

      </section>
    `;
  }

  function buildContactLensHtml(
    contactLens
  ) {
    const getLabel = (
      value
    ) => {
      if (
        value === true
      ) {
        return "가능";
      }

      if (
        value === false
      ) {
        return "불가";
      }

      return "확인 필요";
    };

    return `
      <div class="contact-lens-info">

        <strong>
          콘택트렌즈
        </strong>

        <div class="contact-lens-grid">

          <span>
            하드:
            ${getLabel(
              contactLens.hard
            )}
          </span>

          <span>
            소프트:
            ${getLabel(
              contactLens.soft
            )}
          </span>

          <span>
            컬러:
            ${getLabel(
              contactLens.color
            )}
          </span>

        </div>

        ${
          contactLens.note
            ? `
              <p>
                ${escapeHtml(
                  contactLens.note
                )}
              </p>
            `
            : ""
        }

      </div>
    `;
  }


  // ========================================
  // 상품 카드 장바구니 표시
  // ========================================

  function getProductCartSummary(
    productId
  ) {
    const items =
      state.cart.filter(
        (item) =>
          item.productId ===
          productId
      );

    return {
      lineCount:
        items.length,

      quantity:
        items.reduce(
          (sum, item) =>
            sum +
            normalizeQuantity(
              item.quantity
            ),
          0
        )
    };
  }


  // ========================================
  // 상품 카드 이벤트
  // ========================================

  function handleProductListClick(
    event
  ) {
    const button =
      event.target.closest(
        '[data-action="add-to-cart"]'
      );

    if (!button) {
      return;
    }

    const productId =
      button.dataset
        .productId;

    const card =
      button.closest(
        ".product-card"
      );

    if (
      !productId ||
      !card
    ) {
      return;
    }

    const optionElement =
      card.querySelector(
        ".product-option-select"
      );

    const quantityElement =
      card.querySelector(
        ".product-quantity-input"
      );

    const product =
      getProductById(
        productId
      );

    if (!product) {
      return;
    }

    const defaultOption =
      getDefaultOption(
        product
      );

    const optionId =
      optionElement?.value ||
      defaultOption.id;

    const quantity =
      normalizeQuantity(
        quantityElement?.value ||
        1
      );

    const added =
      addToCart(
        productId,
        optionId,
        quantity
      );

    if (!added) {
      showTemporaryMessage(
        "이 상품 또는 옵션은 현재 추가할 수 없습니다.",
        "error"
      );

      return;
    }

    showTemporaryMessage(
      `${product.code} ${product.name} × ${quantity} 추가`,
      "success"
    );
  }

  function handleProductListChange(
    event
  ) {
    const target =
      event.target;

    if (
      target.matches(
        ".product-quantity-input"
      )
    ) {
      target.value =
        normalizeQuantity(
          target.value
        );
    }
  }


  // ========================================
  // 공통 안내
  // ========================================

  function renderCommonNotice() {
    if (!els.noticeArea) {
      return;
    }

    const notice =
      window.PRODUCT_COMMON_NOTICE ||
      {};

    const priceRating =
      Array.isArray(
        notice.priceRating
      )
        ? notice.priceRating
        : [];

    const medicine =
      Array.isArray(
        notice.medicine
      )
        ? notice.medicine
        : [];

    els.noticeArea.innerHTML = `
      ${
        priceRating.length
          ? `
            <section class="common-notice-section">

              <h2>
                가격·평점 안내
              </h2>

              <ul>
                ${priceRating
                  .map(
                    (item) => `
                      <li>
                        ${escapeHtml(
                          item
                        )}
                      </li>
                    `
                  )
                  .join("")}
              </ul>

            </section>
          `
          : ""
      }

      ${
        medicine.length
          ? `
            <section class="common-notice-section medicine-common-notice">

              <h2>
                의약품 안내
              </h2>

              <ul>
                ${medicine
                  .map(
                    (item) => `
                      <li>
                        ${escapeHtml(
                          item
                        )}
                      </li>
                    `
                  )
                  .join("")}
              </ul>

            </section>
          `
          : ""
      }
    `;
  }


  // ========================================
  // 환율 표시
  // ========================================

  function renderPriceConfig() {
    if (
      !els.priceConfigInfo
    ) {
      return;
    }

    const rate =
      getExchangeRate();

    const checked =
      PRICE_CONFIG
        .exchangeRateChecked ||
      "-";

    els.priceConfigInfo.textContent =
      `한화 환산 기준: ¥1 = 약 ${rate.toLocaleString(
        "ko-KR",
        {
          maximumFractionDigits:
            2
        }
      )}원 · 환율 기준일 ${checked}`;
  }


  // ========================================
  // 빠른 추가
  // ========================================

  function handleQuickAdd() {
    const rawNumber =
      els.quickAddNumber
        ?.value ||
      "";

    const number =
      normalizeNumberQuery(
        rawNumber
      );

    const quantity =
      normalizeQuantity(
        els.quickAddQuantity
          ?.value ||
        1
      );

    if (
      number === null
    ) {
      showQuickAddMessage(
        "상품 번호를 확인해 주세요. 예: 42, 042, #42, #042",
        "error"
      );

      return;
    }

    const product =
      getProductByNumber(
        number
      );

    if (!product) {
      showQuickAddMessage(
        `#${String(
          number
        ).padStart(
          3,
          "0"
        )} 상품을 찾을 수 없습니다.`,
        "error"
      );

      return;
    }

    if (
      product.status ===
      "discontinued"
    ) {
      showQuickAddMessage(
        `${product.code} ${product.name}은(는) 판매 종료 상품입니다.`,
        "error"
      );

      return;
    }

    const option =
      getDefaultOption(
        product
      );

    const added =
      addToCart(
        product.id,
        option.id,
        quantity
      );

    if (!added) {
      showQuickAddMessage(
        "쇼핑리스트에 추가하지 못했습니다.",
        "error"
      );

      return;
    }

    showQuickAddMessage(
      `${product.code} ${product.name} × ${quantity} 추가 완료`,
      "success"
    );

    if (
      els.quickAddNumber
    ) {
      els.quickAddNumber.value =
        "";

      els.quickAddNumber.focus();
    }

    if (
      els.quickAddQuantity
    ) {
      els.quickAddQuantity.value =
        "1";
    }
  }

  function showQuickAddMessage(
    message,
    type = "info"
  ) {
    if (
      !els.quickAddMessage
    ) {
      return;
    }

    els.quickAddMessage.textContent =
      message;

    els.quickAddMessage.className =
      `quick-add-message ${type}`;
  }

  function showTemporaryMessage(
    message,
    type = "info"
  ) {
    showQuickAddMessage(
      message,
      type
    );

    window.clearTimeout(
      showTemporaryMessage.timer
    );

    showTemporaryMessage.timer =
      window.setTimeout(
        () => {
          if (
            els.quickAddMessage
          ) {
            els.quickAddMessage.textContent =
              "";

            els.quickAddMessage.className =
              "quick-add-message";
          }
        },
        3000
      );
  }


  // ========================================
  // 쇼핑리스트 출력
  // ========================================

  function renderCart() {
    if (!els.cartItems) {
      updateCartSummaryOnly();
      return;
    }

    els.cartItems.innerHTML =
      "";

    if (
      state.cart.length ===
      0
    ) {
      els.cartItems.innerHTML = `
        <div class="cart-empty">

          <strong>
            쇼핑리스트가 비어 있습니다.
          </strong>

          <p>
            상품 카드의 추가 버튼이나 빠른 추가 기능을 사용해 보세요.
          </p>

        </div>
      `;

      updateCartSummaryOnly();
      return;
    }

    const fragment =
      document.createDocumentFragment();

    state.cart.forEach(
      (item) => {
        const cartRow =
          createCartItemRow(
            item
          );

        if (cartRow) {
          fragment.appendChild(
            cartRow
          );
        }
      }
    );

    els.cartItems.appendChild(
      fragment
    );

    updateCartSummaryOnly();
  }


  // ========================================
  // 쇼핑리스트 상품 1개
  // ========================================

  function createCartItemRow(
    item
  ) {
    const product =
      getProductById(
        item.productId
      );

    if (!product) {
      return null;
    }

    const option =
      getOptionById(
        product,
        item.optionId
      ) ||
      getDefaultOption(
        product
      );

    const quantity =
      normalizeQuantity(
        item.quantity
      );

    const minJpy =
      getProductMinPrice(
        product
      ) * quantity;

    const maxJpy =
      getProductMaxPrice(
        product
      ) * quantity;

    const minKrw =
      convertJpyToKrw(
        minJpy
      );

    const maxKrw =
      convertJpyToKrw(
        maxJpy
      );

    const row =
      document.createElement(
        "article"
      );

    row.className =
      `cart-item${
        item.purchased
          ? " is-purchased"
          : ""
      }`;

    row.dataset.cartKey =
      item.key;

    const optionName =
      option?.name ||
      "기본";

    const optionHtml =
      optionName !== "기본"
        ? `
          <div class="cart-item-option">
            옵션:
            ${escapeHtml(
              optionName
            )}
          </div>
        `
        : "";

    const statusLabel =
      STATUS_LABELS[
        product.status
      ] ||
      product.status ||
      "";

    row.innerHTML = `
      <div class="cart-item-main">

        <label class="cart-purchased-label">

          <input
            type="checkbox"
            class="cart-purchased-checkbox"
            data-action="toggle-purchased"
            data-key="${escapeAttribute(
              item.key
            )}"
            ${
              item.purchased
                ? "checked"
                : ""
            }
          >

          <span class="cart-purchased-text">
            구매완료
          </span>

        </label>


        <div class="cart-item-info">

          <div class="cart-item-title-row">

            <span class="cart-item-code">
              ${escapeHtml(
                product.code
              )}
            </span>

            <strong class="cart-item-name">
              ${escapeHtml(
                product.name
              )}
            </strong>

          </div>


          <div class="cart-item-japanese">
            ${escapeHtml(
              product.japanese ||
              ""
            )}
          </div>


          ${optionHtml}


          <div class="cart-item-status">
            ${escapeHtml(
              statusLabel
            )}
          </div>


          <div class="cart-item-price">

            <span>
              ${
                minJpy === maxJpy
                  ? formatJpy(
                      minJpy
                    )
                  : `${formatJpy(
                      minJpy
                    )} ~ ${formatJpy(
                      maxJpy
                    )}`
              }
            </span>

            <span>
              ${
                minKrw === maxKrw
                  ? formatKrw(
                      minKrw
                    )
                  : `약 ${formatNumber(
                      minKrw
                    )} ~ ${formatNumber(
                      maxKrw
                    )}원`
              }
            </span>

          </div>

        </div>
      </div>


      <div class="cart-item-controls">

        <button
          type="button"
          class="cart-qty-button"
          data-action="decrease-quantity"
          data-key="${escapeAttribute(
            item.key
          )}"
          aria-label="수량 감소"
        >
          −
        </button>


        <input
          type="number"
          class="cart-quantity-input"
          data-action="change-quantity"
          data-key="${escapeAttribute(
            item.key
          )}"
          min="1"
          max="999"
          value="${quantity}"
          inputmode="numeric"
        >


        <button
          type="button"
          class="cart-qty-button"
          data-action="increase-quantity"
          data-key="${escapeAttribute(
            item.key
          )}"
          aria-label="수량 증가"
        >
          +
        </button>


        <button
          type="button"
          class="cart-remove-button"
          data-action="remove-cart-item"
          data-key="${escapeAttribute(
            item.key
          )}"
        >
          삭제
        </button>

      </div>
    `;

    return row;
  }


  // ========================================
  // 쇼핑리스트 합계
  // ========================================

  function updateCartSummaryOnly() {
    const unitCount =
      getCartUnitCount();

    const lineCount =
      getCartLineCount();

    const averageTotalJpy =
      getCartEstimatedTotal();

    const averageTotalKrw =
      convertJpyToKrw(
        averageTotalJpy
      );

    if (
      els.cartCount
    ) {
      els.cartCount.textContent =
        `${unitCount}`;
    }

    if (
      els.cartTotal
    ) {
      els.cartTotal.textContent =
        lineCount === 0
          ? "예상 합계 -"
          : `예상 합계 약 ${formatNumber(
              Math.round(
                averageTotalJpy
              )
            )}엔 / ${formatKrw(
              averageTotalKrw
            )}`;
    }

    if (
      els.cartOpenButton
    ) {
      const countElement =
        els.cartOpenButton.querySelector(
          "[data-cart-button-count]"
        );

      if (
        countElement
      ) {
        countElement.textContent =
          String(
            unitCount
          );
      }

      els.cartOpenButton.setAttribute(
        "aria-label",
        `쇼핑리스트 열기, 현재 ${unitCount}개`
      );
    }

    document.body.dataset
      .cartCount =
      String(unitCount);
  }


  // ========================================
  // 쇼핑리스트 버튼
  // ========================================

  function handleCartClick(
    event
  ) {
    const button =
      event.target.closest(
        "[data-action]"
      );

    if (!button) {
      return;
    }

    const action =
      button.dataset.action;

    const key =
      button.dataset.key;

    if (!key) {
      return;
    }

    const item =
      state.cart.find(
        (cartItem) =>
          cartItem.key ===
          key
      );

    if (!item) {
      return;
    }

    if (
      action ===
      "increase-quantity"
    ) {
      updateCartQuantity(
        key,
        item.quantity + 1
      );

      return;
    }

    if (
      action ===
      "decrease-quantity"
    ) {
      if (
        item.quantity <= 1
      ) {
        return;
      }

      updateCartQuantity(
        key,
        item.quantity - 1
      );

      return;
    }

    if (
      action ===
      "remove-cart-item"
    ) {
      removeCartItem(
        key
      );
    }
  }


  // ========================================
  // 쇼핑리스트 입력 변경
  // ========================================

  function handleCartChange(
    event
  ) {
    const target =
      event.target;

    if (
      target.matches(
        ".cart-purchased-checkbox"
      )
    ) {
      const key =
        target.dataset.key;

      if (!key) {
        return;
      }

      setPurchased(
        key,
        target.checked
      );

      return;
    }

    if (
      target.matches(
        ".cart-quantity-input"
      )
    ) {
      const key =
        target.dataset.key;

      if (!key) {
        return;
      }

      const quantity =
        normalizeQuantity(
          target.value
        );

      target.value =
        quantity;

      updateCartQuantity(
        key,
        quantity
      );
    }
  }


  // ========================================
  // 구매완료 삭제
  // ========================================

  function clearPurchasedItems() {
    const purchasedCount =
      state.cart.filter(
        (item) =>
          item.purchased
      ).length;

    if (
      purchasedCount ===
      0
    ) {
      showTemporaryMessage(
        "구매완료된 상품이 없습니다.",
        "info"
      );

      return;
    }

    state.cart =
      state.cart.filter(
        (item) =>
          !item.purchased
      );

    saveCart();
    renderCart();
    renderProducts();

    showTemporaryMessage(
      `구매완료 ${purchasedCount}개 항목을 정리했습니다.`,
      "success"
    );
  }


  // ========================================
  // 전체 비우기
  // ========================================

  function emptyCart() {
    if (
      state.cart.length ===
      0
    ) {
      showTemporaryMessage(
        "쇼핑리스트가 이미 비어 있습니다.",
        "info"
      );

      return;
    }

    const confirmed =
      window.confirm(
        "쇼핑리스트의 모든 상품을 삭제하시겠습니까?"
      );

    if (!confirmed) {
      return;
    }

    state.cart = [];

    saveCart();
    renderCart();
    renderProducts();

    showTemporaryMessage(
      "쇼핑리스트를 비웠습니다.",
      "success"
    );
  }


  // ========================================
  // 쇼핑리스트 열기 / 닫기
  // ========================================

  function setCartOpen(
    open
  ) {
    state.cartOpen =
      Boolean(open);

    if (
      els.cartPanel
    ) {
      els.cartPanel.classList.toggle(
        "is-open",
        state.cartOpen
      );

      els.cartPanel.setAttribute(
        "aria-hidden",
        state.cartOpen
          ? "false"
          : "true"
      );
    }

    if (
      els.cartOpenButton
    ) {
      els.cartOpenButton.setAttribute(
        "aria-expanded",
        state.cartOpen
          ? "true"
          : "false"
      );
    }

    if (
      els.cartBackdrop
    ) {
      els.cartBackdrop.setAttribute(
        "aria-hidden",
        state.cartOpen
          ? "false"
          : "true"
      );
    }

    document.body.classList.toggle(
      "cart-open",
      state.cartOpen
    );
  }


  // ========================================
  // HTML 안전 처리
  // ========================================

  function escapeHtml(value) {
    return String(
      value ?? ""
    )
      .replace(
        /&/g,
        "&amp;"
      )
      .replace(
        /</g,
        "&lt;"
      )
      .replace(
        />/g,
        "&gt;"
      )
      .replace(
        /"/g,
        "&quot;"
      )
      .replace(
        /'/g,
        "&#039;"
      );
  }

  function escapeAttribute(
    value
  ) {
    return escapeHtml(
      value
    );
  }


  // ========================================
  // 치명적 오류 표시
  // ========================================

  function showFatalError(
    message
  ) {
    console.error(
      "[Japan Shopping]",
      message
    );

    const container =
      document.getElementById(
        "productList"
      ) ||
      document.body;

    const box =
      document.createElement(
        "div"
      );

    box.className =
      "fatal-error";

    box.innerHTML = `
      <strong>
        데이터를 불러올 수 없습니다.
      </strong>

      <p>
        ${escapeHtml(
          message
        )}
      </p>
    `;

    container.prepend(
      box
    );
  }
})();