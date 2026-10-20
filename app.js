const products =
    window.PRODUCTS || [];



const productList =
    document.getElementById(
        "productList"
    );

const shoppingList =
    document.getElementById(
        "shoppingList"
    );

const emptyMessage =
    document.getElementById(
        "emptyMessage"
    );

const noProductMessage =
    document.getElementById(
        "noProductMessage"
    );

const selectedCount =
    document.getElementById(
        "selectedCount"
    );

const completedCount =
    document.getElementById(
        "completedCount"
    );

const totalCount =
    document.getElementById(
        "totalCount"
    );

const totalQuantity =
    document.getElementById(
        "totalQuantity"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const categoryFilters =
    document.getElementById(
        "categoryFilters"
    );

const storeFilters =
    document.getElementById(
        "storeFilters"
    );

const productResultCount =
    document.getElementById(
        "productResultCount"
    );



const STORAGE_KEY =
    "japanShoppingSelectedProducts";


let selectedProducts = [];


let searchKeyword = "";

let selectedCategory = "전체";

let selectedStore = "전체 구매처";



const STORE_ORDER = [

    "편의점",

    "돈키호테",

    "드럭스토어",

    "마트·기타",

    "판매 확인"

];



// ==================================================
// 상품 가져오기
// ==================================================

function getProductById(id) {

    return products.find(
        function(product) {

            return product.id === id;

        }
    );

}



// ==================================================
// 선택 여부
// ==================================================

function isSelected(id) {

    return selectedProducts.some(
        function(item) {

            return item.id === id;

        }
    );

}



// ==================================================
// localStorage 불러오기
// ==================================================

function loadSelectedProducts() {

    const savedData =
        localStorage.getItem(
            STORAGE_KEY
        );


    if (!savedData) {

        selectedProducts = [];

        return;

    }


    try {

        const parsed =
            JSON.parse(
                savedData
            );


        if (!Array.isArray(parsed)) {

            selectedProducts = [];

            return;

        }


        selectedProducts =
            parsed
                .filter(
                    function(item) {

                        return getProductById(
                            item.id
                        );

                    }
                )
                .map(
                    function(item) {

                        let quantity =
                            Number(
                                item.quantity
                            );


                        if (
                            !Number.isInteger(quantity)
                            ||
                            quantity < 1
                        ) {

                            quantity = 1;

                        }


                        return {

                            id: item.id,

                            purchased:
                                item.purchased === true,

                            quantity: quantity

                        };

                    }
                );


        saveSelectedProducts();

    }

    catch (error) {

        console.error(
            "저장 데이터 오류:",
            error
        );


        selectedProducts = [];

    }

}



// ==================================================
// 저장
// ==================================================

function saveSelectedProducts() {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(
            selectedProducts
        )

    );

}



// ==================================================
// 카테고리
// ==================================================

function getCategories() {

    const categorySet =
        new Set();


    products.forEach(
        function(product) {

            categorySet.add(
                product.category || "기타"
            );

        }
    );


    return [

        "전체",

        ...categorySet

    ];

}



// ==================================================
// 카테고리 필터
// ==================================================

function renderCategoryFilters() {

    categoryFilters.innerHTML = "";


    getCategories().forEach(
        function(category) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "filter-button";


            button.textContent =
                category;


            if (
                category ===
                selectedCategory
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.addEventListener(
                "click",
                function() {

                    selectedCategory =
                        category;


                    renderCategoryFilters();

                    renderProducts();

                }
            );


            categoryFilters.appendChild(
                button
            );

        }
    );

}



// ==================================================
// 구매처 필터
// ==================================================

function renderStoreFilters() {

    storeFilters.innerHTML = "";


    const storeList = [

        "전체 구매처",

        ...STORE_ORDER

    ];


    storeList.forEach(
        function(store) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "filter-button";


            button.textContent =
                store;


            if (
                store ===
                selectedStore
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.addEventListener(
                "click",
                function() {

                    selectedStore =
                        store;


                    renderStoreFilters();

                    renderProducts();

                }
            );


            storeFilters.appendChild(
                button
            );

        }
    );

}



// ==================================================
// 검색 문자열 만들기
// ==================================================

function getSearchText(product) {

    const tags =
        Array.isArray(product.tags)
            ?
            product.tags.join(" ")
            :
            "";


    const details =
        Array.isArray(product.details)
            ?
            product.details
                .map(
                    function(detail) {

                        return (
                            detail.label
                            +
                            " "
                            +
                            detail.value
                        );

                    }
                )
                .join(" ")
            :
            "";


    const rating =
        product.rating
            ?
            `
                ${product.rating.source || ""}
                ${product.rating.score || ""}
                ${product.rating.note || ""}
            `
            :
            "";


    return `

        ${product.name || ""}

        ${product.japanese || ""}

        ${product.category || ""}

        ${product.store || ""}

        ${product.summary || ""}

        ${product.note || ""}

        ${product.medicineClass || ""}

        ${tags}

        ${details}

        ${rating}

    `
    .toLowerCase();

}



// ==================================================
// 필터링
// ==================================================

function getFilteredProducts() {

    return products.filter(
        function(product) {

            const searchText =
                getSearchText(
                    product
                );


            const matchesSearch =
                searchText.includes(
                    searchKeyword
                );


            const matchesCategory =
                selectedCategory ===
                    "전체"
                ||
                product.category ===
                    selectedCategory;


            const matchesStore =
                selectedStore ===
                    "전체 구매처"
                ||
                product.storeGroup ===
                    selectedStore;


            return (

                matchesSearch
                &&
                matchesCategory
                &&
                matchesStore

            );

        }
    );

}



// ==================================================
// 태그
// ==================================================

function createTagsHTML(product) {

    if (
        !Array.isArray(product.tags)
        ||
        product.tags.length === 0
    ) {

        return "";

    }


    return product.tags
        .map(
            function(tag) {

                return `

                    <span
                        class="purpose-tag"
                    >
                        ${tag}
                    </span>

                `;

            }
        )
        .join("");

}



// ==================================================
// 평점
// ==================================================

function createRatingHTML(product) {

    if (!product.rating) {

        return "";

    }


    const count =
        Number(
            product.rating.count || 0
        )
        .toLocaleString(
            "ko-KR"
        );


    const note =
        product.rating.note
            ?
            ` · ${product.rating.note}`
            :
            "";


    return `

        <div class="rating-box">

            <div class="rating-main">

                <span class="rating-star">
                    ★
                </span>

                ${product.rating.score}
                /
                ${product.rating.max}

                <span class="rating-count">
                    리뷰 ${count}건
                </span>

            </div>


            <small class="rating-source">

                ${product.rating.source}
                ·
                ${product.rating.checked} 확인

                ${note}

            </small>

        </div>

    `;

}



// ==================================================
// 상세정보
// ==================================================

function createDetailsHTML(product) {

    const rows =
        Array.isArray(product.details)
            ?
            product.details
            :
            [];


    if (
        rows.length === 0
        &&
        !product.note
        &&
        !product.isMedicine
    ) {

        return "";

    }


    const rowsHTML =
        rows
            .map(
                function(row) {

                    return `

                        <div class="detail-row">

                            <dt>
                                ${row.label}
                            </dt>

                            <dd>
                                ${row.value}
                            </dd>

                        </div>

                    `;

                }
            )
            .join("");


    return `

        <details class="product-details">

            <summary>
                상세 정보 보기
            </summary>


            ${
                rowsHTML
                    ?
                    `
                    <dl class="detail-table">
                        ${rowsHTML}
                    </dl>
                    `
                    :
                    ""
            }


            ${
                product.note
                    ?
                    `
                    <p class="product-note">
                        ${product.note}
                    </p>
                    `
                    :
                    ""
            }


            ${
                product.isMedicine
                    ?
                    `
                    <p class="medicine-notice">

                        💊 의약품 정보는 쇼핑 확인용 요약입니다.

                        실제 사용 전
                        포장·첨부문서의 용법,
                        금기사항 및 성분을
                        반드시 확인하세요.

                    </p>
                    `
                    :
                    ""
            }

        </details>

    `;

}



// ==================================================
// 상품 출력
// ==================================================

function renderProducts() {

    productList.innerHTML = "";


    const filteredProducts =
        getFilteredProducts();


    productResultCount.textContent =
        `${filteredProducts.length}개`;


    if (
        filteredProducts.length === 0
    ) {

        noProductMessage.style.display =
            "block";


        productList.style.display =
            "none";


        return;

    }


    noProductMessage.style.display =
        "none";


    productList.style.display =
        "grid";


    filteredProducts.forEach(
        function(product) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            if (
                isSelected(product.id)
            ) {

                card.classList.add(
                    "selected"
                );

            }


            card.innerHTML = `

                <div class="product-image-box">

                    <span class="image-fallback">
                        사진 준비중
                    </span>

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-image"
                        loading="lazy"
                    >

                </div>


                <h3 class="product-name">
                    ${product.name}
                </h3>


                <p class="japanese-name">
                    ${product.japanese || ""}
                </p>


                <div class="badge-area">

                    <span class="badge">
                        ${product.category}
                    </span>

                    <span
                        class="badge store-badge"
                    >
                        ${product.store}
                    </span>


                    ${
                        product.medicineClass
                            ?
                            `
                            <span
                                class="badge medicine-badge"
                            >
                                ${product.medicineClass}
                            </span>
                            `
                            :
                            ""
                    }

                </div>


                <div class="tag-area">

                    ${createTagsHTML(product)}

                </div>


                ${createRatingHTML(product)}


                <p class="product-summary">

                    ${product.summary || ""}

                </p>


                ${createDetailsHTML(product)}


                <button
                    type="button"
                    class="select-button"
                >

                    ${
                        isSelected(product.id)
                            ?
                            "✓ 선택됨"
                            :
                            "선택"
                    }

                </button>

            `;


            const image =
                card.querySelector(
                    ".product-image"
                );


            image.addEventListener(
                "error",
                function() {

                    image.style.display =
                        "none";

                }
            );


            const button =
                card.querySelector(
                    ".select-button"
                );


            button.addEventListener(
                "click",
                function() {

                    toggleProduct(
                        product.id
                    );

                }
            );


            productList.appendChild(
                card
            );

        }
    );

}



// ==================================================
// 검색 입력
// ==================================================

searchInput.addEventListener(
    "input",
    function() {

        searchKeyword =
            searchInput.value
                .trim()
                .toLowerCase();


        renderProducts();

    }
);



// ==================================================
// 선택
// ==================================================

function toggleProduct(id) {

    if (
        isSelected(id)
    ) {

        removeProduct(id);

    }

    else {

        addProduct(id);

    }

}



// ==================================================
// 추가
// ==================================================

function addProduct(id) {

    if (
        isSelected(id)
    ) {

        return;

    }


    if (
        !getProductById(id)
    ) {

        return;

    }


    selectedProducts.push({

        id: id,

        purchased: false,

        quantity: 1

    });


    saveSelectedProducts();


    renderProducts();

    renderShoppingList();

}



// ==================================================
// 삭제
// ==================================================

function removeProduct(id) {

    selectedProducts =
        selectedProducts.filter(
            function(item) {

                return (
                    item.id !== id
                );

            }
        );


    saveSelectedProducts();


    renderProducts();

    renderShoppingList();

}



// ==================================================
// 구매 완료
// ==================================================

function togglePurchased(id) {

    const item =
        selectedProducts.find(
            function(item) {

                return (
                    item.id === id
                );

            }
        );


    if (!item) {

        return;

    }


    item.purchased =
        !item.purchased;


    saveSelectedProducts();


    renderShoppingList();

}



// ==================================================
// 수량
// ==================================================

function changeQuantity(
    id,
    amount
) {

    const item =
        selectedProducts.find(
            function(item) {

                return (
                    item.id === id
                );

            }
        );


    if (!item) {

        return;

    }


    item.quantity +=
        amount;


    if (
        item.quantity < 1
    ) {

        item.quantity = 1;

    }


    if (
        item.quantity > 99
    ) {

        item.quantity = 99;

    }


    saveSelectedProducts();


    renderShoppingList();

}



// ==================================================
// 요약
// ==================================================

function updateSummary() {

    const total =
        selectedProducts.length;


    const completed =
        selectedProducts.filter(
            function(item) {

                return (
                    item.purchased
                );

            }
        ).length;


    const quantity =
        selectedProducts.reduce(
            function(sum, item) {

                return (
                    sum
                    +
                    item.quantity
                );

            },
            0
        );


    selectedCount.textContent =
        total;


    completedCount.textContent =
        completed;


    totalCount.textContent =
        total;


    totalQuantity.textContent =
        quantity;

}



// ==================================================
// 구매처별 상품
// ==================================================

function getSelectedProductsByStore(
    storeGroup
) {

    return selectedProducts
        .map(
            function(selectedItem) {

                const product =
                    getProductById(
                        selectedItem.id
                    );


                if (!product) {

                    return null;

                }


                return {

                    product:
                        product,

                    selectedItem:
                        selectedItem

                };

            }
        )
        .filter(
            function(data) {

                return (

                    data
                    &&
                    data.product.storeGroup
                        === storeGroup

                );

            }
        );

}



// ==================================================
// 쇼핑리스트 상품
// ==================================================

function createShoppingItem(
    product,
    selectedItem
) {

    const item =
        document.createElement(
            "div"
        );


    item.className =
        "shopping-item";


    if (
        selectedItem.purchased
    ) {

        item.classList.add(
            "completed"
        );

    }


    item.innerHTML = `

        <input
            type="checkbox"
            class="purchase-checkbox"
            ${
                selectedItem.purchased
                    ?
                    "checked"
                    :
                    ""
            }
        >


        <div class="shopping-item-image-box">

            <span class="image-fallback">
                사진 준비중
            </span>

            <img
                src="${product.image}"
                alt="${product.name}"
                class="shopping-item-image"
                loading="lazy"
            >

        </div>


        <div class="shopping-item-info">

            <h3 class="shopping-item-name">
                ${product.name}
            </h3>


            <p class="shopping-item-japanese">
                ${product.japanese || ""}
            </p>


            <div class="badge-area">

                <span class="badge">
                    ${product.category}
                </span>

                <span class="badge store-badge">
                    ${product.store}
                </span>

                ${
                    product.medicineClass
                        ?
                        `
                        <span
                            class="badge medicine-badge"
                        >
                            ${product.medicineClass}
                        </span>
                        `
                        :
                        ""
                }

            </div>


            <div class="tag-area">

                ${createTagsHTML(product)}

            </div>


            <p class="shopping-description">

                ${product.summary || ""}

            </p>


            ${
                product.details
                    ?
                    createDetailsHTML(product)
                    :
                    ""
            }

        </div>


        <div class="shopping-item-actions">

            <div class="quantity-control">

                <button
                    type="button"
                    class="quantity-button decrease-button"
                >
                    −
                </button>


                <span class="quantity-value">

                    ${selectedItem.quantity}

                </span>


                <button
                    type="button"
                    class="quantity-button increase-button"
                >
                    +
                </button>

            </div>


            <button
                type="button"
                class="remove-button"
            >
                삭제
            </button>

        </div>

    `;


    const image =
        item.querySelector(
            ".shopping-item-image"
        );


    image.addEventListener(
        "error",
        function() {

            image.style.display =
                "none";

        }
    );


    item.querySelector(
        ".purchase-checkbox"
    )
    .addEventListener(
        "change",
        function() {

            togglePurchased(
                product.id
            );

        }
    );


    item.querySelector(
        ".decrease-button"
    )
    .addEventListener(
        "click",
        function() {

            changeQuantity(
                product.id,
                -1
            );

        }
    );


    item.querySelector(
        ".increase-button"
    )
    .addEventListener(
        "click",
        function() {

            changeQuantity(
                product.id,
                1
            );

        }
    );


    item.querySelector(
        ".remove-button"
    )
    .addEventListener(
        "click",
        function() {

            removeProduct(
                product.id
            );

        }
    );


    return item;

}



// ==================================================
// 쇼핑리스트 렌더링
// ==================================================

function renderShoppingList() {

    shoppingList.innerHTML = "";


    updateSummary();


    if (
        selectedProducts.length === 0
    ) {

        emptyMessage.style.display =
            "block";


        return;

    }


    emptyMessage.style.display =
        "none";


    STORE_ORDER.forEach(
        function(storeGroup) {

            const storeItems =
                getSelectedProductsByStore(
                    storeGroup
                );


            if (
                storeItems.length === 0
            ) {

                return;

            }


            const group =
                document.createElement(
                    "section"
                );


            group.className =
                "shopping-group";


            const title =
                document.createElement(
                    "h3"
                );


            title.className =
                "shopping-group-title";


            title.textContent =
                `${storeGroup} · ${storeItems.length}종`;


            group.appendChild(
                title
            );


            storeItems.forEach(
                function(data) {

                    group.appendChild(

                        createShoppingItem(

                            data.product,

                            data.selectedItem

                        )

                    );

                }
            );


            shoppingList.appendChild(
                group
            );

        }
    );

}



// ==================================================
// 시작
// ==================================================

loadSelectedProducts();

renderCategoryFilters();

renderStoreFilters();

renderProducts();

renderShoppingList();