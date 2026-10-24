// Japan Shopping - final product master
// Final numbering: #001-#177 (current fixed numbering; future additions start #178)
// Generated/verified: 2026-10-24
// Existing string id values are preserved for surviving products; only number/code changed after removing old #156-#165.
// Price KRW values are intentionally NOT hard-coded per product; app.js should calculate them from PRODUCT_PRICE_CONFIG.

window.PRODUCT_DATA_VERSION = "2026-10-24-final-177";

window.PRODUCT_PRICE_CONFIG = {
  baseCurrency: "JPY",
  displayCurrency: "KRW",
  jpyToKrw: 8.45,
  exchangeRateChecked: "2026-10-23",
  krwRoundTo: 100,
  note: "일본 현지 예상 가격 범위를 기준 환율로 환산한 참고값입니다. 매장, 세일, 면세 및 환율에 따라 실제 금액은 달라질 수 있습니다."
};

window.PRODUCT_STATUS = {
  active: "판매 중",
  limited: "기간한정",
  "check-stock": "재고 확인",
  discontinued: "판매 종료"
};

window.PRODUCTS = [
  {
    "number": 1,
    "code": "#001",
    "id": "alfort",
    "name": "알포트 초콜릿",
    "japanese": "アルフォート",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 350,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "비스킷과 초콜릿을 조합한 블루본의 대표 과자.",
    "series": "알포트",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/alfort.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "비스킷과 초콜릿을 조합한 블루본의 대표 과자.",
      "series": "알포트",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 2,
    "code": "#002",
    "id": "kitkat",
    "name": "킷캣",
    "japanese": "キットカット",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 250,
      "jpyMax": 500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "일본에서 다양한 맛으로 판매되는 웨하스 초콜릿.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/kitkat.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "일본에서 다양한 맛으로 판매되는 웨하스 초콜릿.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 3,
    "code": "#003",
    "id": "kitkat-matcha",
    "name": "킷캣 말차",
    "japanese": "キットカット 抹茶",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "말차 풍미를 더한 킷캣 계열 제품.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/kitkat-matcha.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "말차 풍미를 더한 킷캣 계열 제품.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 4,
    "code": "#004",
    "id": "pocky",
    "name": "포키",
    "japanese": "ポッキー",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 170,
      "jpyMax": 350,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "비스킷 스틱에 초콜릿을 코팅한 글리코 대표 과자.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/pocky.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "비스킷 스틱에 초콜릿을 코팅한 글리코 대표 과자.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 5,
    "code": "#005",
    "id": "jagarico",
    "name": "자가리코 샐러드",
    "japanese": "じゃがりこ サラダ",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 170,
      "jpyMax": 250,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "자가리코의 기본 샐러드 맛.",
    "series": "자가리코",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/jagarico.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "자가리코의 기본 샐러드 맛.",
      "series": "자가리코",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 6,
    "code": "#006",
    "id": "jagabee",
    "name": "자가비 우스시오",
    "japanese": "Jagabee うすしお味",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 300,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "자가비의 기본 담백한 소금맛.",
    "series": "Jagabee",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/jagabee.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "자가비의 기본 담백한 소금맛.",
      "series": "Jagabee",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 7,
    "code": "#007",
    "id": "kororo",
    "name": "코로로",
    "japanese": "コロロ",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 120,
      "jpyMax": 220,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "과즙감과 탄력 있는 식감이 특징인 젤리.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/kororo.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "과즙감과 탄력 있는 식감이 특징인 젤리.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 8,
    "code": "#008",
    "id": "karamucho",
    "name": "카라무초",
    "japanese": "カラムーチョ",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 150,
      "jpyMax": 300,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "매콤한 감자 스낵.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/karamucho.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "매콤한 감자 스낵.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 9,
    "code": "#009",
    "id": "happy-turn",
    "name": "해피턴",
    "japanese": "ハッピーターン",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 350,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "달고 짭짤한 시즈닝이 특징인 쌀과자.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/happy-turn.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "달고 짭짤한 시즈닝이 특징인 쌀과자.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 10,
    "code": "#010",
    "id": "lumonde",
    "name": "루망드",
    "japanese": "ルマンド",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 350,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "얇은 크레페 쿠키에 크림을 코팅한 과자.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/lumonde.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "얇은 크레페 쿠키에 크림을 코팅한 과자.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 11,
    "code": "#011",
    "id": "macadamia-chocolate",
    "name": "마카다미아 초콜릿",
    "japanese": "マカダミアチョコレート",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 250,
      "jpyMax": 500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "마카다미아 너트를 넣은 초콜릿.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/macadamia-chocolate.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "마카다미아 너트를 넣은 초콜릿.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 12,
    "code": "#012",
    "id": "kaki-no-tane",
    "name": "카키노타네",
    "japanese": "柿の種",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 400,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "매콤한 쌀과자와 땅콩 조합의 일본 스낵.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/kaki-no-tane.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "매콤한 쌀과자와 땅콩 조합의 일본 스낵.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 편의점"
    }
  },
  {
    "number": 13,
    "code": "#013",
    "id": "chokotto-pucchin",
    "name": "쵸콧토 푸친푸딩",
    "japanese": "ちょこっとプッチンプリン",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "슈퍼 / 드럭스토어",
    "status": "active",
    "price": {
      "jpyMin": 200,
      "jpyMax": 450,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "한입 크기로 즐기는 푸딩 간식.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/chokotto-pucchin.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "한입 크기로 즐기는 푸딩 간식.",
      "series": "단일/대표 제품",
      "purchaseNote": "슈퍼 / 드럭스토어"
    }
  },
  {
    "number": 14,
    "code": "#014",
    "id": "donki-tempura-snack",
    "name": "돈키호테 텐푸라 스낵",
    "japanese": "ドン・キホーテ 天ぷらスナック",
    "category": "과자·간식",
    "storeGroup": "돈키호테",
    "store": "돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "돈키호테에서 찾기 쉬운 튀김풍 스낵.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/donki-tempura-snack.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "돈키호테에서 찾기 쉬운 튀김풍 스낵.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테"
    }
  },
  {
    "number": 15,
    "code": "#015",
    "id": "mintia-breeze",
    "name": "민티아 브리즈",
    "japanese": "ミンティアブリーズ",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 드럭스토어",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 300,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "큰 정제 타입의 상쾌한 민트 캔디.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/mintia-breeze.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "큰 정제 타입의 상쾌한 민트 캔디.",
      "series": "단일/대표 제품",
      "purchaseNote": "편의점 / 드럭스토어"
    }
  },
  {
    "number": 16,
    "code": "#016",
    "id": "galbo-choco",
    "name": "갈보 초콜릿",
    "japanese": "ガルボ チョコ",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 350,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "바삭한 식감과 초콜릿 풍미를 함께 느끼는 과자.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/galbo-choco.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "바삭한 식감과 초콜릿 풍미를 함께 느끼는 과자.",
      "series": "단일/대표 제품",
      "purchaseNote": "편의점 / 슈퍼"
    }
  },
  {
    "number": 17,
    "code": "#017",
    "id": "chi-tara-pizza-potato",
    "name": "치타라 피자포테이토맛",
    "japanese": "チータラ ピザポテト味",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼",
    "status": "limited",
    "price": {
      "jpyMin": 250,
      "jpyMax": 450,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "치즈 안주형 스낵의 피자포테이토 협업 맛.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/chi-tara-pizza-potato.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "statusNote": "기간한정/매장별 재고 확인 권장",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "치즈 안주형 스낵의 피자포테이토 협업 맛.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼"
    }
  },
  {
    "number": 18,
    "code": "#018",
    "id": "morinaga-bake-creamy-cheese",
    "name": "모리나가 BAKE 크리미치즈",
    "japanese": "森永 BAKE クリーミーチーズ",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "재고 매장 확인",
    "status": "discontinued",
    "price": {
      "jpyMin": 200,
      "jpyMax": 400,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "베이크드 치즈 계열 과자. 현재 판매 종료 확인 상품.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/morinaga-bake-creamy-cheese.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "statusNote": "판매종료 확인. 기존 번호 보존.",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "베이크드 치즈 계열 과자. 현재 판매 종료 확인 상품.",
      "series": "단일/대표 제품",
      "purchaseNote": "재고 매장 확인"
    }
  },
  {
    "number": 19,
    "code": "#019",
    "id": "orihiro-konjac-jelly",
    "name": "오리히로 곤약젤리",
    "japanese": "オリヒロ ぷるんと蒟蒻ゼリー",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "드럭스토어 / 돈키호테 / 슈퍼",
    "status": "active",
    "price": {
      "jpyMin": 250,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "곤약을 사용한 파우치형 젤리.",
    "series": null,
    "options": [
      {
        "id": "grape",
        "name": "포도",
        "status": "active"
      },
      {
        "id": "peach",
        "name": "복숭아",
        "status": "active"
      },
      {
        "id": "assort",
        "name": "믹스/어소트",
        "status": "active"
      }
    ],
    "image": "images/orihiro-konjac-jelly.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "곤약을 사용한 파우치형 젤리.",
      "series": "단일/대표 제품",
      "purchaseNote": "드럭스토어 / 돈키호테 / 슈퍼"
    }
  },
  {
    "number": 20,
    "code": "#020",
    "id": "morinaga-ramune",
    "name": "모리나가 라무네",
    "japanese": "森永 ラムネ",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 드럭스토어",
    "status": "active",
    "price": {
      "jpyMin": 120,
      "jpyMax": 250,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "포도당이 주성분인 라무네 정제 과자.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/morinaga-ramune.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "포도당이 주성분인 라무네 정제 과자.",
      "series": "단일/대표 제품",
      "purchaseNote": "편의점 / 슈퍼 / 드럭스토어"
    }
  },  {
    "number": 21,
    "code": "#021",
    "id": "ryukakusan-candy",
    "name": "용각산 목캔디",
    "japanese": "龍角散ののどすっきり飴",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 드럭스토어 / 슈퍼",
    "status": "active",
    "price": {
      "jpyMin": 200,
      "jpyMax": 400,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "허브 분말을 배합한 목캔디.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/ryukakusan-candy.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "허브 분말을 배합한 목캔디.",
      "series": "단일/대표 제품",
      "purchaseNote": "편의점 / 드럭스토어 / 슈퍼"
    }
  },
  {
    "number": 22,
    "code": "#022",
    "id": "cup-noodle",
    "name": "컵누들 오리지널",
    "japanese": "カップヌードル",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 280,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "닛신의 기본 컵누들.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/cup-noodle.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "닛신의 기본 컵누들.",
      "series": "단일/대표 제품",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 23,
    "code": "#023",
    "id": "cup-noodle-curry",
    "name": "컵누들 카레",
    "japanese": "カップヌードル カレー",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 280,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "진한 카레 국물의 컵누들.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/cup-noodle-curry.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "진한 카레 국물의 컵누들.",
      "series": "단일/대표 제품",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 24,
    "code": "#024",
    "id": "cup-noodle-seafood",
    "name": "컵누들 씨푸드",
    "japanese": "カップヌードル シーフードヌードル",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 280,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "해산물 풍미의 컵누들.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/cup-noodle-seafood.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "해산물 풍미의 컵누들.",
      "series": "단일/대표 제품",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 25,
    "code": "#025",
    "id": "donbei-kitsune",
    "name": "돈베이 키츠네 우동",
    "japanese": "どん兵衛 きつねうどん",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 300,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "유부가 들어간 닛신 컵우동.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/donbei-kitsune.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "유부가 들어간 닛신 컵우동.",
      "series": "단일/대표 제품",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 26,
    "code": "#026",
    "id": "ochazuke",
    "name": "오차즈케 김맛",
    "japanese": "お茶づけ海苔",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "슈퍼 / 돈키호테 / 드럭스토어",
    "status": "active",
    "price": {
      "jpyMin": 200,
      "jpyMax": 400,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "나가타니엔 오차즈케의 기본 김맛.",
    "series": "오차즈케",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/ochazuke.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "나가타니엔 오차즈케의 기본 김맛.",
      "series": "오차즈케",
      "purchaseNote": "슈퍼 / 돈키호테 / 드럭스토어"
    }
  },
  {
    "number": 27,
    "code": "#027",
    "id": "matcha",
    "name": "일본 말차",
    "japanese": "抹茶",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "슈퍼 / 백화점 / 전문점",
    "status": "active",
    "price": {
      "jpyMin": 500,
      "jpyMax": 2000,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "물이나 우유 등에 타서 즐기는 일본 말차.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/matcha.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "물이나 우유 등에 타서 즐기는 일본 말차.",
      "series": "단일/대표 제품",
      "purchaseNote": "슈퍼 / 백화점 / 전문점"
    }
  },
  {
    "number": 28,
    "code": "#028",
    "id": "norikatsuo-furikake",
    "name": "노리카츠오 후리카케",
    "japanese": "のりかつお ふりかけ",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 200,
      "jpyMax": 450,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "김과 가쓰오 풍미의 밥용 후리카케.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/norikatsuo-furikake.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "김과 가쓰오 풍미의 밥용 후리카케.",
      "series": "단일/대표 제품",
      "purchaseNote": "슈퍼 / 돈키호테"
    }
  },
  {
    "number": 29,
    "code": "#029",
    "id": "peyoung-yakisoba",
    "name": "페양구 야키소바",
    "japanese": "ペヤング ソースやきそば",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 300,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "소스 야키소바 컵면.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/peyoung-yakisoba.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "소스 야키소바 컵면.",
      "series": "단일/대표 제품",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 30,
    "code": "#030",
    "id": "mongotanmen-nakamoto",
    "name": "몽고탄멘 나카모토 컵라멘",
    "japanese": "蒙古タンメン中本",
    "category": "식품·음료",
    "storeGroup": "편의점",
    "store": "세븐일레븐 등",
    "status": "active",
    "price": {
      "jpyMin": 250,
      "jpyMax": 400,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "매운 미소 탄멘 계열 컵라멘.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/mongotanmen-nakamoto.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "매운 미소 탄멘 계열 컵라멘.",
      "series": "단일/대표 제품",
      "purchaseNote": "세븐일레븐 등"
    }
  },
  {
    "number": 31,
    "code": "#031",
    "id": "blendy-coffee",
    "name": "블렌디 스틱 커피",
    "japanese": "ブレンディ スティック",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "슈퍼 / 드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 400,
      "jpyMax": 900,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "간편하게 타 마시는 스틱형 커피.",
    "series": null,
    "options": [
      {
        "id": "standard",
        "name": "기본",
        "status": "active"
      },
      {
        "id": "cafe-au-lait",
        "name": "카페오레 계열",
        "status": "active"
      }
    ],
    "image": "images/blendy-coffee.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "간편하게 타 마시는 스틱형 커피.",
      "series": "단일/대표 제품",
      "purchaseNote": "슈퍼 / 드럭스토어 / 돈키호테"
    }
  },
  {
    "number": 32,
    "code": "#032",
    "id": "momoya-rayu",
    "name": "모모야 라유",
    "japanese": "桃屋 辛そうで辛くない少し辛いラー油",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 350,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "마늘 건더기가 들어간 먹는 라유.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/momoya-rayu.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "마늘 건더기가 들어간 먹는 라유.",
      "series": "단일/대표 제품",
      "purchaseNote": "슈퍼 / 돈키호테"
    }
  },
  {
    "number": 33,
    "code": "#033",
    "id": "donki-tkg-sauce",
    "name": "돈키호테 TKG 소스",
    "japanese": "ドン・キホーテ 卵かけご飯用ソース",
    "category": "식품·음료",
    "storeGroup": "돈키호테",
    "store": "돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "달걀간장밥용 조미 소스.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/donki-tkg-sauce.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "달걀간장밥용 조미 소스.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테"
    }
  },
  {
    "number": 34,
    "code": "#034",
    "id": "donki-chokotto-yakiimo",
    "name": "돈키호테 쵸콧토 야키이모",
    "japanese": "ドン・キホーテ ちょこっと焼きいも",
    "category": "과자·간식",
    "storeGroup": "돈키호테",
    "store": "돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "간편하게 먹는 고구마 간식.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/donki-chokotto-yakiimo.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "간편하게 먹는 고구마 간식.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테"
    }
  },
  {
    "number": 35,
    "code": "#035",
    "id": "isdg-malatang",
    "name": "ISDG 마라탕",
    "japanese": "医食同源ドットコム 麻辣湯",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "돈키호테 / 드럭스토어",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 650,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "마라 향신료 풍미의 즉석 식품.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/isdg-malatang.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "마라 향신료 풍미의 즉석 식품.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 드럭스토어"
    }
  },
  {
    "number": 36,
    "code": "#036",
    "id": "ajitsuke-nori",
    "name": "아지츠케 노리",
    "japanese": "味付けのり",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 250,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "간장풍 양념을 더한 조미 김.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/ajitsuke-nori.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "간장풍 양념을 더한 조미 김.",
      "series": "단일/대표 제품",
      "purchaseNote": "슈퍼 / 돈키호테"
    }
  },
  {
    "number": 37,
    "code": "#037",
    "id": "perfect-whip",
    "name": "센카 퍼펙트 휩",
    "japanese": "専科 パーフェクトホイップ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "마츠키요 / 코코카라 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 450,
      "jpyMax": 700,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "풍성한 거품으로 세안하는 센카 대표 클렌징폼.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/perfect-whip.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.2,
      "max": 7,
      "reviewCount": 799,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "풍성하고 탄력 있는 거품의 클렌징폼",
      "ingredientsOrMaterial": "주요 성분: 세리신·가수분해실크 계열 실크에센스, 글리세린 등 보습 성분과 세정 성분. 풍성한 거품으로 세정하는 폼 타입.",
      "usage": "적당량을 물과 함께 충분히 거품 내어 세안 후 헹군다.",
      "recommendedFor": "거품감이 풍부한 데일리 클렌저를 원하는 경우",
      "warnings": "눈에 들어가면 즉시 충분히 씻어낸다."
    }
  },
  {
    "number": 38,
    "code": "#038",
    "id": "suisai-powder-wash",
    "name": "수이사이 뷰티 클리어 파우더워시 N",
    "japanese": "スイサイ ビューティクリア パウダーウォッシュN",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 2200,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "효소 파우더 타입의 세안제.",
    "series": null,
    "options": [
      {
        "id": "15pcs",
        "name": "15개입",
        "status": "active"
      },
      {
        "id": "32pcs",
        "name": "32개입",
        "status": "active"
      }
    ],
    "image": "images/suisai-powder-wash.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.1,
      "max": 7,
      "reviewCount": 5628,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "프로테아제·리파아제 효소를 1회분 캡슐에 담아 각질·피지·모공 오염을 세정하는 파우더 타입 효소 세안제.",
      "ingredientsOrMaterial": "주요 성분: 단백질 분해효소 프로테아제, 피지 분해효소 리파아제, 아미노산계 세정 성분, 에틸글루코사이드·히알루론산Na 등 보습 성분.",
      "usage": "1회 1캡슐을 물과 섞어 거품 내어 세안",
      "recommendedFor": "모공 노폐물·각질 관리가 필요한 피부",
      "warnings": "과도한 사용으로 건조함이 느껴지면 빈도를 줄인다."
    }
  },
  {
    "number": 39,
    "code": "#039",
    "id": "suisai-black",
    "name": "수이사이 뷰티 클리어 블랙 파우더워시",
    "japanese": "スイサイ ビューティクリア ブラック パウダーウォッシュ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 2200,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "피지와 모공 노폐물 관리에 초점을 둔 블랙 파우더워시.",
    "series": null,
    "options": [
      {
        "id": "15pcs",
        "name": "15개입",
        "status": "active"
      },
      {
        "id": "32pcs",
        "name": "32개입",
        "status": "active"
      }
    ],
    "image": "images/suisai-black.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.0,
      "max": 7,
      "reviewCount": 1946,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "효소 세안에 숯·클레이를 더해 피지와 모공 오염 세정에 초점을 둔 블랙 파우더워시.",
      "ingredientsOrMaterial": "주요 성분: 프로테아제·리파아제 효소, 숯, 모로코 용암클레이, 피지 세정 보조 성분.",
      "usage": "손바닥에 1회분을 덜어 물을 조금씩 섞어 충분히 거품 낸 뒤 얼굴을 부드럽게 세안하고 충분히 헹군다.",
      "recommendedFor": "피지·블랙헤드·모공 오염과 거친 피부결이 신경 쓰이는 경우.",
      "warnings": "매일 사용할 수 있는 제품이지만 건조·자극이 느껴지면 사용 빈도를 줄이고, 눈에 들어가면 즉시 씻어낸다."
    }
  },
  {
    "number": 40,
    "code": "#040",
    "id": "suisai-gold",
    "name": "수이사이 뷰티 클리어 골드 파우더워시",
    "japanese": "スイサイ ビューティクリア ゴールド パウダーウォッシュ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1800,
      "jpyMax": 2500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "보습감을 중시한 골드 계열 효소 세안 파우더.",
    "series": null,
    "options": [
      {
        "id": "15pcs",
        "name": "15개입",
        "status": "active"
      },
      {
        "id": "32pcs",
        "name": "32개입",
        "status": "active"
      }
    ],
    "image": "images/suisai-gold.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.1,
      "max": 7,
      "reviewCount": 1719,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "효소 세정에 식물성 오일과 보습 성분을 더해 세안 후 당김을 줄이는 데 초점을 둔 골드 파우더워시.",
      "ingredientsOrMaterial": "주요 성분: 프로테아제·리파아제 효소, 해바라기씨오일·아보카도오일·히알루론산Na 등 보습 성분.",
      "usage": "1회분을 물과 함께 충분히 거품 낸 뒤 얼굴 전체를 문지르지 않도록 세안하고 미온수로 헹군다.",
      "recommendedFor": "각질·모공 세정은 원하지만 세안 후 건조감도 신경 쓰이는 피부.",
      "warnings": "피부 장벽이 예민하거나 자극이 느껴지는 날에는 사용 빈도를 조절하고 눈 주위는 피한다."
    }
  },  {
    "number": 41,
    "code": "#041",
    "id": "suisai-green",
    "name": "수이사이 뷰티 클리어 그린 파우더워시",
    "japanese": "スイサイ ビューティクリア グリーン パウダーウォッシュ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 2200,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "피부 컨디션에 맞춰 선택하는 그린 계열 효소 세안 파우더.",
    "series": null,
    "options": [
      {
        "id": "15pcs",
        "name": "15개입",
        "status": "active"
      },
      {
        "id": "32pcs",
        "name": "32개입",
        "status": "active"
      }
    ],
    "image": "images/suisai-green.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 4.8,
      "max": 7,
      "reviewCount": 262,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "효소 세정과 CICA 계열 정돈 성분을 결합한 그린 타입으로 피지·각질·피부 거칠음 관리에 초점을 둔다.",
      "ingredientsOrMaterial": "주요 성분: 프로테아제·리파아제 효소, CICA 계열 정돈 성분과 각질·피지 세정용 파우더 성분.",
      "usage": "1회분을 충분히 거품 내어 얼굴 전체를 부드럽게 세안하고 미온수로 완전히 헹군다.",
      "recommendedFor": "피지와 묵은 각질이 신경 쓰이면서 피부 컨디션도 함께 관리하고 싶은 경우.",
      "warnings": "상처·염증 부위에는 사용하지 말고 따가움·붉어짐이 지속되면 사용을 중단한다."
    }
  },
  {
    "number": 42,
    "code": "#042",
    "id": "biore-uv",
    "name": "비오레 UV 아쿠아리치",
    "japanese": "ビオレUV アクアリッチ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 1100,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "가벼운 사용감으로 인기 있는 자외선 차단 라인.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/biore-uv.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.2,
      "max": 7,
      "reviewCount": 349,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "가벼운 수분감의 고SPF 자외선 차단 라인",
      "ingredientsOrMaterial": "주요 성분: 자외선차단 성분, 실리카, 글리세린, 아스코빌글루코사이드, 히알루론산Na 등. SPF50+·PA++++.",
      "usage": "스킨케어 마지막 단계에서 얼굴·몸에 충분히 도포한다.",
      "recommendedFor": "끈적임이 적은 데일리 선크림을 찾는 경우.",
      "warnings": "충분한 양을 사용하고 땀·마찰 후 덧바른다."
    }
  },
  {
    "number": 43,
    "code": "#043",
    "id": "dermalaser-vc100",
    "name": "더마레이저 슈퍼 VC100 마스크",
    "japanese": "ダーマレーザー スーパーVC100 マスク",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 900,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "비타민C 계열 성분을 강조한 시트 마스크.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/dermalaser-vc100.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.3,
      "max": 7,
      "reviewCount": 6644,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "비타민C 계열 성분을 강조한 시트 마스크.",
      "ingredientsOrMaterial": "주요 성분: 나이아신아마이드, 비타민C 4종(아스코빅애씨드·APPS·인산아스코빌Mg·테트라헥실데실아스코베이트), 글리시리진산2K, 세라마이드.",
      "usage": "세안 후 피부에 밀착시킨 뒤 권장 시간 동안 사용한다.",
      "recommendedFor": "칙칙함·모공 인상 관리에 관심 있는 경우.",
      "warnings": "피부 이상이 생기면 사용을 중단한다."
    }
  },
  {
    "number": 44,
    "code": "#044",
    "id": "lululun-hydra-ex",
    "name": "루루룬 하이드라 EX 마스크",
    "japanese": "ルルルン ハイドラ EX マスク",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 2500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "보습·탄력 케어를 겨냥한 루루룬 하이드라 라인.",
    "series": null,
    "options": [
      {
        "id": "7sheets",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "28sheets",
        "name": "28매",
        "status": "active"
      }
    ],
    "image": "images/lululun-hydra-ex.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.4,
      "max": 7,
      "reviewCount": 7564,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "보습·탄력감을 겨냥한 데일리 시트 마스크.",
      "ingredientsOrMaterial": "주요 성분: 엑소좀 계열 정돈 성분, 글루타치온, 알부틴, 세라마이드 AP·NP, 콜라겐, 히알루론산 유도체, 식물성 오일.",
      "usage": "세안 후 얼굴에 밀착시켜 사용한다.",
      "recommendedFor": "건조·탄력 고민이 있는 피부.",
      "warnings": "자극·발진이 발생하면 사용을 중단한다."
    }
  },
  {
    "number": 45,
    "code": "#045",
    "id": "cosparade-fukkurinko-mask",
    "name": "코스파레드 후쿠링코 마스크",
    "japanese": "コスパレード ふっくらんこマスク",
    "category": "스킨케어·화장품",
    "storeGroup": "버라이어티",
    "store": "버라이어티숍 / 드럭스토어",
    "status": "active",
    "price": {
      "jpyMin": 500,
      "jpyMax": 1000,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "보습 중심의 시트 마스크.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/cosparade-fukkurinko-mask.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "보습 에센스를 밀착 시트에 담아 건조한 피부에 수분을 공급하는 시트 마스크.",
      "ingredientsOrMaterial": "보습 에센스를 머금은 시트 마스크 타입. 글리세린·BG 등 수분 보유 성분을 중심으로 한 보습 처방이며, 리뉴얼에 따라 세부 전성분이 달라질 수 있음.",
      "usage": "세안 후 화장수로 피부를 정돈한 뒤 얼굴에 밀착시키고 제품 표시의 권장 시간만 사용한다. 제거 후 남은 에센스를 가볍게 흡수시킨다.",
      "recommendedFor": "일시적인 건조함이나 메이크업 전 수분 보충이 필요한 피부.",
      "warnings": "정확한 현행 제품 규격과 전성분은 구매한 패키지를 확인하고, 시트를 붙인 채 잠들거나 재사용하지 않는다."
    }
  },
  {
    "number": 46,
    "code": "#046",
    "id": "pair-acne-cream-w",
    "name": "페어 아크네 크림 W",
    "japanese": "ペアアクネクリームW",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 1100,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "염증성 여드름 치료에 사용하는 OTC 크림.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/pair-acne-cream-w.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 4.1,
      "max": 7,
      "reviewCount": 2623,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "염증을 동반한 여드름·뾰루지 치료",
      "activeIngredients": "이부프로펜피코놀 3.0%, 이소프로필메틸페놀 0.3%",
      "usage": "세안 후 적당량을 환부에 하루 여러 차례 바른다.",
      "age": "소아 사용은 제품 첨부문서 및 보호자 지도 기준을 확인",
      "maxUsage": "정해진 횟수 제한보다는 환부에 필요한 만큼 하루 여러 차례 사용",
      "warnings": "눈 및 눈 주위에는 사용하지 말고, 발진·자극 등이 나타나면 중단 후 상담.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제2류 의약품. 염증을 동반한 여드름·뾰루지 치료용 크림.",
      "ingredientsOrMaterial": "이부프로펜피코놀 3.0%, 이소프로필메틸페놀 0.3%.",
      "usage": "세안 후 적당량을 환부에 하루 여러 차례 바른다. 소아 사용 시 첨부문서와 보호자 지도 기준을 확인한다.",
      "recommendedFor": "염증을 동반한 여드름·뾰루지 치료가 필요한 경우.",
      "warnings": "눈 및 눈 주위에는 사용하지 말고, 발진·자극 등이 나타나면 사용을 중단하고 전문가와 상담한다."
    }
  },
  {
    "number": 47,
    "code": "#047",
    "id": "wafood-sakekasu-pack",
    "name": "와푸드메이드 사케카스 팩",
    "japanese": "ワフードメイド 酒粕パック",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1000,
      "jpyMax": 1500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "사케카스 추출물을 활용한 워시오프 팩.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/wafood-sakekasu-pack.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.0,
      "max": 7,
      "reviewCount": 1684,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "사케카스 추출물 콘셉트의 워시오프 팩.",
      "ingredientsOrMaterial": "주요 성분: 사케카스(주박) 추출물/발효주박 성분, 쌀발효액, 쌀겨 유래 보습 성분, 글루코실세라마이드, 나이아신아마이드·갈락토미세스 배양액 계열.",
      "usage": "세안 후 물기를 가볍게 제거하고 펴 바른 뒤 권장 시간 후 씻어낸다.",
      "recommendedFor": "촉촉하고 맑은 피부 인상을 원하는 경우.",
      "warnings": "눈과 입 주변, 상처·습진 등 이상 부위는 피하고 피부에 붉어짐·가려움·자극이 나타나면 즉시 씻어낸 뒤 사용을 중단한다."
    }
  },
  {
    "number": 48,
    "code": "#048",
    "id": "fino-premium-touch",
    "name": "피노 프리미엄 터치 헤어 마스크",
    "japanese": "フィーノ プレミアムタッチ 濃厚美容液ヘアマスク",
    "category": "헤어·바디",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 1100,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "손상 모발용 집중 트리트먼트.",
    "series": null,
    "options": [
      {
        "id": "230g",
        "name": "230g",
        "status": "active"
      }
    ],
    "image": "images/fino-premium-touch.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.1,
      "max": 7,
      "reviewCount": 21592,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "손상 모발용 농후한 헤어 마스크.",
      "ingredientsOrMaterial": "주요 성분: 소르비톨·트레할로스, 스쿠알란, PCA, 로열젤리추출물, 글루탐산, 가수분해 콘키올린, 실리콘계 컨디셔닝 성분.",
      "usage": "샴푸 후 모발의 물기를 제거하고 적당량을 도포한 뒤 충분히 헹군다.",
      "recommendedFor": "잦은 열기구·염색·건조 등으로 모발이 푸석하고 윤기·부드러움·엉킴 개선이 필요한 경우.",
      "warnings": "두피에 이상이 있거나 사용 중 자극이 발생하면 사용을 중단한다."
    },
    "volume": "230g"
  },
  {
    "number": 49,
    "code": "#049",
    "id": "breath-care",
    "name": "브레스케어",
    "japanese": "ブレスケア",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 350,
      "jpyMax": 700,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "입 냄새 관리를 위한 구강 케어 제품.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/breath-care.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "작은 소프트캡슐을 삼켜 위에서 향 성분이 퍼지도록 설계된 휴대용 구강 에티켓 제품.",
      "ingredientsOrMaterial": "주요 성분: 식물성 오일 베이스의 소프트캡슐과 파슬리오일·멘톨계 향 성분.",
      "usage": "보통 1회 2~3캡슐을 물과 함께 씹지 말고 삼키며, 제품 표시 범위 안에서 섭취량을 조절한다.",
      "recommendedFor": "식사 후 입 냄새나 마늘·술 등 강한 음식 냄새가 신경 쓰이는 경우.",
      "warnings": "질환 치료용 제품이 아니며 과량 섭취하지 않는다. 어린이·삼키기 어려운 사람은 질식에 주의한다."
    }
  },
  {
    "number": 50,
    "code": "#050",
    "id": "gokumofu-toothbrush",
    "name": "고쿠모후 칫솔",
    "japanese": "極もふ 歯ブラシ",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "부드럽고 촘촘한 모를 강조한 칫솔.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/gokumofu-toothbrush.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "매우 촘촘하고 부드러운 모로 잇몸 자극을 줄이면서 치면을 닦는 데 초점을 둔 칫솔.",
      "ingredientsOrMaterial": "고밀도·부드러운 극세모를 강조한 칫솔. 모와 손잡이는 합성수지 소재를 사용하며 제품 규격에 따라 모의 굵기·경도가 다를 수 있음.",
      "usage": "칫솔모를 물에 적신 뒤 치아와 잇몸 경계에 가볍게 대고 작은 폭으로 움직인다. 사용 후 흐르는 물에 세척하고 건조한다.",
      "recommendedFor": "강한 칫솔모가 부담스럽거나 부드러운 양치감을 선호하는 사람.",
      "warnings": "강한 힘으로 문지르면 잇몸 손상과 모 변형이 생길 수 있다. 모가 벌어지거나 위생 상태가 나빠지면 교체한다."
    }
  },
  {
    "number": 51,
    "code": "#051",
    "id": "ebisu-premium-care",
    "name": "에비스 프리미엄 케어 칫솔",
    "japanese": "エビス プレミアムケア ハブラシ",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 슈퍼",
    "status": "active",
    "price": {
      "jpyMin": 250,
      "jpyMax": 500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "넓은 헤드와 다수의 칫솔모가 특징인 칫솔.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/ebisu-premium-care.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "넓은 헤드에 초극세모와 일반모를 조합해 넓은 면적과 치아·잇몸 경계를 함께 닦는 프리미엄 케어 칫솔.",
      "ingredientsOrMaterial": "주요 소재: 포화 폴리에스터계 칫솔모, 폴리프로필렌·열가소성 엘라스토머 계열 손잡이. 넓은 헤드에 초극세모와 플랫모를 조합한 타입.",
      "usage": "치아와 잇몸에 가볍게 대고 작은 움직임으로 닦는다. 사용 후 충분히 세척해 통풍되는 곳에서 건조한다.",
      "recommendedFor": "한 번에 넓게 닦는 헤드와 부드러운 초극세모 사용감을 선호하는 사람.",
      "warnings": "과도한 압력은 잇몸을 자극할 수 있다. 모 끝이 벌어지면 세정력이 떨어지므로 정기적으로 교체한다."
    }
  },
  {
    "number": 52,
    "code": "#052",
    "id": "okuchi-lemon",
    "name": "오쿠치 레몬",
    "japanese": "オクチレモン",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 200,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "휴대용 파우치형 구강 세정액.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/okuchi-lemon.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "11mL 파우치 1회분으로 사용하는 레몬향 구강 세정액. 입안을 헹군 뒤 뱉는 휴대형 제품.",
      "ingredientsOrMaterial": "주요 성분: 물, 글리세린, 알란토인, 초산, 자일리톨, 차잎추출물, 멘톨, 프로폴리스추출물, 키토산, 레몬껍질오일 등.",
      "usage": "파우치 1포를 입에 머금고 약 20초간 충분히 헹군 뒤 반드시 뱉는다.",
      "recommendedFor": "외출·식사 후 양치가 어려운 상황에서 간편하게 입안을 상쾌하게 하고 싶은 경우.",
      "warnings": "절대 삼키지 않는다. 구강 이상·발진·가려움이 생기면 사용을 중단하고 어린이 손이 닿지 않는 곳에 보관한다."
    }
  },
  {
    "number": 53,
    "code": "#053",
    "id": "kyusoku-jikan",
    "name": "휴족시간",
    "japanese": "休足時間",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 500,
      "jpyMax": 900,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "다리·발에 붙이는 쿨링 젤 시트.",
    "series": null,
    "options": [
      {
        "id": "6sheets",
        "name": "6매",
        "status": "active"
      },
      {
        "id": "12sheets",
        "name": "12매",
        "status": "active"
      }
    ],
    "image": "images/kyusoku-jikan.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "수분이 많은 젤과 멘톨의 기화·청량 효과로 종아리·발목·발바닥을 시원하게 하는 일회용 냉각 시트.",
      "ingredientsOrMaterial": "주요 소재/성분: 고함수 젤 시트(PAC-55), 멘톨, 라벤더·세이지·로즈마리·레몬·오렌지 향 성분, 니트 지지체.",
      "usage": "땀과 물기를 닦은 피부에 투명 필름을 벗겨 붙인다. 한 장은 1회만 사용하며 더 강한 냉감을 원하면 냉장 보관할 수 있으나 냉동은 하지 않는다.",
      "recommendedFor": "오래 서 있었거나 운동·하이힐 착용 후 다리를 시원하게 쉬게 하고 싶은 경우.",
      "warnings": "상처·습진·자극 부위에는 붙이지 않는다. 발진·가려움이 생기면 제거하며 동일 시트를 재사용하지 않는다."
    }
  },
  {
    "number": 54,
    "code": "#054",
    "id": "megrhythm",
    "name": "메구리즘 증기 온열 시트",
    "japanese": "めぐりズム 蒸気でホットアイマスク",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 500,
      "jpyMax": 1500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "증기로 눈가를 따뜻하게 해 주는 일회용 아이마스크.",
    "series": null,
    "options": [
      {
        "id": "unscented",
        "name": "무향",
        "status": "active"
      },
      {
        "id": "lavender",
        "name": "라벤더",
        "status": "active"
      },
      {
        "id": "yuzu",
        "name": "유자",
        "status": "active"
      },
      {
        "id": "rose",
        "name": "로즈 계열",
        "status": "active"
      }
    ],
    "image": "images/megrhythm.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "개봉하면 철분이 산화하며 생기는 열로 수분을 증기로 바꾸는 일회용 온열 아이마스크.",
      "ingredientsOrMaterial": "주요 소재: 철분과 수분을 포함한 발열체, 부직포·귀걸이부. 개봉 후 철분 산화열로 약 40℃ 수준의 증기 온열을 만드는 구조.",
      "usage": "개별 포장을 개봉한 즉시 꺼내 귀걸이를 걸고 눈 위에 올려 사용한다. 발열이 끝나면 폐기한다.",
      "recommendedFor": "PC·스마트폰 사용 후 눈가를 따뜻하게 쉬게 하고 싶거나 취침 전 릴랙스 시간을 원하는 경우.",
      "warnings": "열에 민감하거나 눈 주위 피부에 이상이 있는 경우 사용을 피한다. 뜨겁게 느껴지면 즉시 제거하고 일회용 제품을 재사용하지 않는다."
    }
  },
  {
    "number": 55,
    "code": "#055",
    "id": "biore-cooling-mist",
    "name": "비오레 냉각 미스트",
    "japanese": "ビオレ 冷タオル・冷却ミスト系",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 600,
      "jpyMax": 1000,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "더운 날 피부에 사용하는 쿨링 미스트 계열.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/biore-cooling-mist.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "분사 후 수분의 증발과 청량 성분으로 피부 표면에 즉각적인 쿨링감을 주는 휴대용 냉각 미스트.",
      "ingredientsOrMaterial": "주요 특징 성분: 수분·휘발성 베이스와 멘톨계 청량 성분을 이용해 피부 표면의 열감을 낮추는 쿨링 미스트 계열.",
      "usage": "옷으로 가려지지 않은 팔·다리 등 사용 가능 부위에 적당한 거리에서 분사하고 필요 시 고르게 펴 바른다.",
      "recommendedFor": "여름철 야외 활동·통근·운동 후 빠른 쿨링감을 원하는 경우.",
      "warnings": "얼굴·눈·점막과 상처 부위에는 분사하지 말고 흡입하지 않도록 한다. 판매 상태가 변동될 수 있어 재고를 확인한다."
    }
  },
  {
    "number": 56,
    "code": "#056",
    "id": "toilet-shoshugen",
    "name": "화장실 소취원",
    "japanese": "トイレの消臭元",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 슈퍼",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 550,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "화장실용 방향·소취 제품.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/toilet-shoshugen.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "화장실에 두고 사용하는 액상 방향·소취제. 필터 높이를 조절해 향의 강도를 바꿀 수 있다.",
      "ingredientsOrMaterial": "주요 성분: 아미노산계 소취제, 향료, 비이온·음이온 계면활성제. 향 종류에 따라 색소가 포함될 수 있다.",
      "usage": "포장을 제거하고 내부 캡을 열어 소취 필터를 원하는 높이만큼 올린 뒤 외부 캡을 닫아 평평한 곳에 세워 둔다.",
      "recommendedFor": "화장실 냄새를 줄이고 지속적으로 향을 내는 방향제를 원하는 경우.",
      "warnings": "내용물을 마시지 말고 눕히거나 기울여 두지 않는다. 액이 피부·눈·가구에 묻으면 즉시 물로 씻거나 닦아낸다."
    }
  },
  {
    "number": 57,
    "code": "#057",
    "id": "shimatorina",
    "name": "시마토리나",
    "japanese": "シマトリーナ",
    "category": "생활용품",
    "storeGroup": "버라이어티",
    "store": "돈키호테 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 500,
      "jpyMax": 1000,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "의류의 부분 얼룩 제거에 사용하는 휴대형 세정 제품.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/shimatorina.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "음식·화장품 등 얼룩 종류에 따라 다른 세정 처방을 사용하는 휴대용 의류 얼룩 제거제.",
      "ingredientsOrMaterial": "주요 성분/구성: 얼룩 종류별 계면활성제와 용제를 조합한 의류용 얼룩 제거제. 수성 오염용과 카레·케첩·화장품 등 오염용 처방이 구분되는 제품.",
      "usage": "얼룩 종류에 맞는 용액이나 시트를 선택해 오염 부위를 바깥쪽에서 안쪽으로 두드리듯 처리한다. 물세탁이 어려운 섬유는 눈에 띄지 않는 곳에서 먼저 테스트한다.",
      "recommendedFor": "외출 중 커피·소스·케첩·화장품 등 갑작스러운 의류 얼룩을 부분 세정하려는 경우.",
      "warnings": "실크·염색 의류 등은 변색 가능성이 있으므로 사전 테스트한다. 눈에 들어가지 않게 하고 피부가 민감하면 장갑을 사용한다."
    }
  },
  {
    "number": 58,
    "code": "#058",
    "id": "laundrin-fabric-mist",
    "name": "런드린 패브릭 미스트",
    "japanese": "ランドリン ファブリックミスト",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 450,
      "jpyMax": 700,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "섬유 향기·탈취용 미스트.",
    "series": null,
    "options": [
      {
        "id": "classic-floral",
        "name": "클래식 플로럴",
        "status": "active"
      },
      {
        "id": "romantic-flower",
        "name": "로맨틱 플라워",
        "status": "active"
      },
      {
        "id": "other",
        "name": "기타 현행 향",
        "status": "active"
      }
    ],
    "image": "images/laundrin-fabric-mist.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "세탁하기 어려운 커튼·소파·침구·의류 등에 향을 더하고 생활 냄새를 줄이는 패브릭 미스트.",
      "ingredientsOrMaterial": "주요 성분: 식물추출물, 에탄올, 항균제, 향료. 섬유 탈취와 향 부여를 위한 패브릭 미스트.",
      "usage": "노즐을 분사 상태로 돌리고 대상에서 약 20~30cm 떨어져 표면이 살짝 촉촉해질 정도로 고르게 분사한 뒤 완전히 말린다.",
      "recommendedFor": "의류·침구·소파 등에 향을 더하거나 담배·땀·음식 냄새가 신경 쓰이는 경우.",
      "warnings": "피부·얼굴에 직접 분사하지 않는다. 가죽·화목·바닥·도장면과 변색 우려 소재에는 사용하지 말고 좁은 공간은 환기한다."
    }
  },
  {
    "number": 59,
    "code": "#059",
    "id": "nepia-hana-celeb-pocket",
    "name": "네피아 하나셀럽 포켓티슈",
    "japanese": "ネピア 鼻セレブ ポケットティシュ",
    "category": "생활용품",
    "storeGroup": "종합",
    "store": "드럭스토어 / 편의점 / 슈퍼",
    "status": "active",
    "price": {
      "jpyMin": 150,
      "jpyMax": 350,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "부드러운 촉감을 강조한 휴대용 티슈.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/nepia-hana-celeb-pocket.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "코 주변처럼 반복적으로 닦는 부위의 마찰 부담을 줄이도록 보습 가공한 부드러운 휴대용 티슈.",
      "ingredientsOrMaterial": "주요 소재: 펄프 티슈에 네피아의 트리플 보습 성분과 식물성 스쿠알란을 적용한 보습 티슈.",
      "usage": "일반 티슈처럼 코·얼굴 주변의 물기나 분비물을 부드럽게 닦는 용도로 사용한다.",
      "recommendedFor": "감기·비염·꽃가루 시즌처럼 코를 자주 풀어 피부 마찰이 신경 쓰이는 사람.",
      "warnings": "물에 녹는 제품이 아니므로 변기에 버리지 않는다. 식품용이 아니며 어린이가 입에 넣지 않도록 한다."
    }
  },
  {
    "number": 60,
    "code": "#060",
    "id": "nodo-nuru-kashitsu-mask",
    "name": "노도누루 가습 마스크",
    "japanese": "のどぬ～る ぬれマスク",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 700,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "마스크 내부의 수분 필터로 목 건조를 줄이는 제품.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/nodo-nuru-kashitsu-mask.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "마스크 내부 포켓에 습윤 필터를 넣어 호흡 시 목 주변의 습도를 유지하도록 돕는 일회용 가습 마스크.",
      "ingredientsOrMaterial": "주요 소재: 폴리프로필렌 마스크 본체, 폴리에스터·폴리우레탄 귀걸이, 펄프·레이온·폴리에틸렌 습윤 필터. 필터에 보존 성분을 사용한다.",
      "usage": "사용 직전에 습윤 필터를 개봉해 마스크 안쪽 포켓에 넣고 코부터 턱까지 밀착해 착용한다. 마스크와 필터는 1회 사용 후 폐기한다.",
      "recommendedFor": "건조한 실내·수면 중 목의 건조감이 신경 쓰이는 경우.",
      "warnings": "영유아·호흡기 이상이 있는 사람, 스스로 마스크를 벗기 어려운 사람은 사용하지 않는다. 숨쉬기 불편하거나 피부 자극이 생기면 즉시 제거한다."
    }
  },  {
    "number": 61,
    "code": "#061",
    "id": "megane-cleaner-fukifuki",
    "name": "안경 클리너 후키후키",
    "japanese": "メガネクリーナふきふき",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 650,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "개별 포장된 안경 렌즈 클리너.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/megane-cleaner-fukifuki.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "알코올을 함침한 개별포장 웨트 시트로 안경 렌즈의 지문·피지 오염을 닦고 빠르게 건조시키는 클리너.",
      "ingredientsOrMaterial": "주요 성분/소재: 이소프로필알코올을 함침한 엠보싱 부직포 일회용 웨트 시트.",
      "usage": "시트를 꺼내 마르기 전에 렌즈 전체를 가볍게 닦는다. 모래·철가루가 묻은 경우 먼저 물로 씻어낸 뒤 사용한다.",
      "recommendedFor": "안경·선글라스·시계 유리·휴대폰 유리면의 지문과 기름때를 간편하게 제거하려는 경우.",
      "warnings": "김서림 방지 코팅 렌즈, 손상된 렌즈, 액정 화면, 보석·대모 프레임에는 사용하지 않는다. 화기 근처에서 사용하지 않는다."
    }
  },
  {
    "number": 62,
    "code": "#062",
    "id": "heel-moisture-stick",
    "name": "뒤꿈치 보습 스틱",
    "japanese": "かかと保湿スティック",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 600,
      "jpyMax": 1200,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "갈라지기 쉬운 뒤꿈치에 바르는 스틱형 보습제.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/heel-moisture-stick.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "오일성 보습 성분을 고체 스틱으로 굳혀 손에 묻히지 않고 거칠어진 뒤꿈치·팔꿈치·무릎에 바르는 보습제.",
      "ingredientsOrMaterial": "주요 성분: 바셀린, 피마자유, 스쿠알란, 올리브과실유, 세레신, 밀랍, 쌀겨유, 토코페롤아세테이트 등.",
      "usage": "깨끗하고 마른 피부에 스틱을 약 3mm만 올려 얇고 고르게 바른다. 목욕 후 매일 사용하고 뒤꿈치에는 바른 뒤 양말을 신어도 좋다.",
      "recommendedFor": "건조하고 딱딱해진 뒤꿈치·팔꿈치·무릎의 보습 관리가 필요한 경우.",
      "warnings": "상처·습진 부위에는 사용하지 않는다. 너무 많이 빼거나 강하게 누르면 스틱이 부러질 수 있고, 자극이 생기면 중단한다."
    }
  },
  {
    "number": 63,
    "code": "#063",
    "id": "greenbell-g1114",
    "name": "그린벨 G-1114 발톱깎이",
    "japanese": "グリーンベル G-1114",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 생활잡화점",
    "status": "active",
    "price": {
      "jpyMin": 1000,
      "jpyMax": 1800,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "그린벨의 발톱 관리용 네일클리퍼.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/greenbell-g1114.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "고경도 열처리와 이중 날 세공을 적용한 스테인리스 L사이즈 손·발톱깎이. 레버 뒤쪽에 미세 줄이 포함된다.",
      "ingredientsOrMaterial": "주요 소재: 칼날은 스테인리스 칼붙이강, 레버는 아연합금, 줄은 특수 가공 스테인리스. 전장 약 92mm.",
      "usage": "손톱·발톱 끝을 한 번에 너무 깊게 자르지 말고 조금씩 절단한 뒤 필요하면 내장 줄로 모서리를 정리한다.",
      "recommendedFor": "일반 손톱뿐 아니라 비교적 단단한 발톱까지 한 도구로 관리하려는 경우.",
      "warnings": "피부까지 깊게 자르지 않도록 주의하고 어린이 손이 닿지 않는 곳에 보관한다. 사용 후 수분을 닦아 녹을 방지한다."
    }
  },
  {
    "number": 64,
    "code": "#064",
    "id": "ohta-isan",
    "name": "오타이산 S",
    "japanese": "太田胃散S",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 850,
      "jpyMax": 2100,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "위 불편감·과식·소화불량 등에 사용하는 분말 위장약.",
    "series": null,
    "options": [
      {
        "id": "80g",
        "name": "80g",
        "status": "active"
      },
      {
        "id": "150g",
        "name": "150g",
        "status": "active"
      },
      {
        "id": "pack18",
        "name": "분포 18포",
        "status": "active"
      },
      {
        "id": "pack34",
        "name": "분포 34포",
        "status": "active"
      },
      {
        "id": "pack50",
        "name": "분포 50포",
        "status": "active"
      }
    ],
    "image": "images/ohta-isan.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "과음, 속쓰림, 위부불쾌감, 더부룩함, 과식, 위통, 소화불량, 식욕부진, 위산과다, 구역·구토 등",
      "activeIngredients": "계피, 회향, 육두구, 정향, 진피, 겐티아나, 니가키말, 탄산수소나트륨, 침강탄산칼슘, 합성 히드로탈사이트, 비오디아스타제",
      "usage": "15세 이상 1회 1.3g, 8~14세 1회 0.65g을 식후 또는 식간에 1일 3회.",
      "age": "8세 이상. 8세 미만 복용 금지.",
      "maxUsage": "1일 3회",
      "warnings": "투석 중인 사람은 알루미늄 함유 위장약 사용에 주의. 치료 중이거나 기저질환이 있으면 의사·약사와 상담.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제2류 의약품. 과음, 속쓰림, 위부불쾌감, 더부룩함, 과식, 위통, 소화불량, 식욕부진, 위산과다, 구역·구토 등",
      "ingredientsOrMaterial": "계피, 회향, 육두구, 정향, 진피, 겐티아나, 니가키말, 탄산수소나트륨, 침강탄산칼슘, 합성 히드로탈사이트, 비오디아스타제",
      "usage": "15세 이상 1회 1.3g, 8~14세 1회 0.65g을 식후 또는 식간에 1일 3회. 연령: 8세 이상. 8세 미만 복용 금지. 최대/권장 횟수: 1일 3회",
      "recommendedFor": "과음, 속쓰림, 위부불쾌감, 더부룩함, 과식, 위통, 소화불량, 식욕부진, 위산과다, 구역·구토 등",
      "warnings": "투석 중인 사람은 알루미늄 함유 위장약 사용에 주의. 치료 중이거나 기저질환이 있으면 의사·약사와 상담."
    },
    "volume": "80g / 150g / 분포 18·34·50포"
  },
  {
    "number": 65,
    "code": "#065",
    "id": "salonpas",
    "name": "샤론파스",
    "japanese": "サロンパス",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 650,
      "jpyMax": 1800,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "근육통·어깨결림 등에 붙이는 진통소염 플라스터.",
    "series": null,
    "options": [
      {
        "id": "40",
        "name": "40매",
        "status": "active"
      },
      {
        "id": "80",
        "name": "80매",
        "status": "active"
      },
      {
        "id": "120",
        "name": "120매",
        "status": "active"
      }
    ],
    "image": "images/salonpas.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "어깨결림, 요통, 근육통·근육피로, 타박상, 염좌, 관절통, 동상",
      "activeIngredients": "살리실산메틸 10.0g, l-멘톨 3.0g, 비타민E 아세트산에스터 2.0g / 고체 100g",
      "usage": "1일 수회 환부에 부착.",
      "age": "연령 관련 세부 제한은 포장·첨부문서 우선 확인",
      "maxUsage": "1일 수회",
      "warnings": "눈 주위·점막·습진·피부염·상처에는 사용하지 않는다. 5~6일 사용해도 개선되지 않으면 상담.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제3류 의약품. 어깨결림, 요통, 근육통·근육피로, 타박상, 염좌, 관절통, 동상",
      "ingredientsOrMaterial": "살리실산메틸 10.0g, l-멘톨 3.0g, 비타민E 아세트산에스터 2.0g / 고체 100g",
      "usage": "1일 수회 환부에 부착. 연령: 연령 관련 세부 제한은 포장·첨부문서 우선 확인 최대/권장 횟수: 1일 수회",
      "recommendedFor": "어깨결림, 요통, 근육통·근육피로, 타박상, 염좌, 관절통, 동상",
      "warnings": "눈 주위·점막·습진·피부염·상처에는 사용하지 않는다. 5~6일 사용해도 개선되지 않으면 상담."
    },
    "volume": "40 / 80 / 120매"
  },
  {
    "number": 66,
    "code": "#066",
    "id": "aneron-niscap",
    "name": "아네론 니스캡",
    "japanese": "アネロン「ニスキャップ」",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1000,
      "jpyMax": 1850,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "멀미에 따른 구역·어지럼·두통 예방 및 완화용 내복약.",
    "series": null,
    "options": [
      {
        "id": "4",
        "name": "4캡슐",
        "status": "active"
      },
      {
        "id": "6",
        "name": "6캡슐",
        "status": "active"
      },
      {
        "id": "10",
        "name": "10캡슐",
        "status": "active"
      }
    ],
    "image": "images/aneron-niscap.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "지정 제2류 의약품",
      "efficacy": "멀미에 따른 구역·어지럼·두통의 예방 및 완화",
      "activeIngredients": "페니라민말레산염 30mg, 에틸아미노벤조에이트 50mg, 스코폴라민브롬화수소산염수화물 0.2mg, 무수카페인 20mg, 피리독신염산염 5mg / 1캡슐",
      "usage": "15세 이상 1회 1캡슐, 1일 1회. 예방 목적이면 승차·승선 약 30분 전.",
      "age": "15세 이상",
      "maxUsage": "1일 1캡슐",
      "warnings": "졸음이 올 수 있다. 다른 멀미약, 감기약, 해열진통제, 진정제, 진해거담제, 알레르기 내복약 등과 병용하지 않는다.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "지정 제2류 의약품. 멀미에 따른 구역·어지럼·두통의 예방 및 완화",
      "ingredientsOrMaterial": "페니라민말레산염 30mg, 에틸아미노벤조에이트 50mg, 스코폴라민브롬화수소산염수화물 0.2mg, 무수카페인 20mg, 피리독신염산염 5mg / 1캡슐",
      "usage": "15세 이상 1회 1캡슐, 1일 1회. 예방 목적이면 승차·승선 약 30분 전. 연령: 15세 이상 최대/권장 횟수: 1일 1캡슐",
      "recommendedFor": "멀미에 따른 구역·어지럼·두통의 예방 및 완화",
      "warnings": "졸음이 올 수 있다. 다른 멀미약, 감기약, 해열진통제, 진정제, 진해거담제, 알레르기 내복약 등과 병용하지 않는다."
    },
    "volume": "4 / 6 / 10캡슐"
  },
  {
    "number": 67,
    "code": "#067",
    "id": "alinamin-ex-plus",
    "name": "아리나민 EX 플러스",
    "japanese": "アリナミンEXプラス",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 2200,
      "jpyMax": 8800,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "눈의 피로·어깨결림·요통 등에 사용하는 비타민 B군 중심 의약품.",
    "series": null,
    "options": [
      {
        "id": "60",
        "name": "60정",
        "status": "active"
      },
      {
        "id": "120",
        "name": "120정",
        "status": "active"
      },
      {
        "id": "180",
        "name": "180정",
        "status": "active"
      },
      {
        "id": "270",
        "name": "270정",
        "status": "active"
      }
    ],
    "image": "images/alinamin-ex-plus.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "눈의 피로, 어깨결림·요통 등 근육·관절통, 신경통, 손발 저림 완화 및 비타민 B1·B6·B12 보급",
      "activeIngredients": "푸르설티아민, 비타민B6, 비타민B12, 비타민E 유도체, 판토텐산칼슘, 감마오리자놀",
      "usage": "15세 이상 1회 2~3정을 1일 1회 식후 즉시 씹지 않고 복용.",
      "age": "15세 이상",
      "maxUsage": "1일 3정",
      "warnings": "약 1개월 복용해도 증상이 개선되지 않으면 중단하고 의사·약사와 상담.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제3류 의약품. 눈의 피로, 어깨결림·요통 등 근육·관절통, 신경통, 손발 저림 완화 및 비타민 B1·B6·B12 보급",
      "ingredientsOrMaterial": "푸르설티아민, 비타민B6, 비타민B12, 비타민E 유도체, 판토텐산칼슘, 감마오리자놀",
      "usage": "15세 이상 1회 2~3정을 1일 1회 식후 즉시 씹지 않고 복용. 연령: 15세 이상 최대/권장 횟수: 1일 3정",
      "recommendedFor": "눈의 피로, 어깨결림·요통 등 근육·관절통, 신경통, 손발 저림 완화 및 비타민 B1·B6·B12 보급",
      "warnings": "약 1개월 복용해도 증상이 개선되지 않으면 중단하고 의사·약사와 상담."
    },
    "volume": "60 / 120 / 180 / 270정"
  },
  {
    "number": 68,
    "code": "#068",
    "id": "wakansen-bofu-360",
    "name": "신 로토 방풍통성산정 T",
    "japanese": "新・ロート防風通聖散錠T",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 2000,
      "jpyMax": 4200,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "복부 피하지방이 많고 변비 경향이 있는 사람을 위한 방풍통성산 제제.",
    "series": null,
    "options": [
      {
        "id": "112",
        "name": "112정",
        "status": "active"
      },
      {
        "id": "224",
        "name": "224정",
        "status": "active"
      }
    ],
    "image": "images/wakansen-bofu-360.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "체력이 충실하고 복부 피하지방이 많으며 변비 경향이 있는 사람의 비만증, 관련 두근거림·어깨결림·홍조·부종·변비",
      "activeIngredients": "방풍통성산 엑스 3,333mg(성인 1일량 8정 기준)",
      "usage": "15세 이상 1회 4정, 1일 2회 식전 또는 식간.",
      "age": "15세 이상",
      "maxUsage": "1일 8정",
      "warnings": "다른 하제와 병용하지 않는다. 임신·수유, 고혈압·심장병·신장병·갑상선기능장애 등이 있으면 사전 상담.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제2류 의약품. 체력이 충실하고 복부 피하지방이 많으며 변비 경향이 있는 사람의 비만증, 관련 두근거림·어깨결림·홍조·부종·변비",
      "ingredientsOrMaterial": "방풍통성산 엑스 3,333mg(성인 1일량 8정 기준)",
      "usage": "15세 이상 1회 4정, 1일 2회 식전 또는 식간. 연령: 15세 이상 최대/권장 횟수: 1일 8정",
      "recommendedFor": "체력이 충실하고 복부 피하지방이 많으며 변비 경향이 있는 사람의 비만증, 관련 두근거림·어깨결림·홍조·부종·변비",
      "warnings": "다른 하제와 병용하지 않는다. 임신·수유, 고혈압·심장병·신장병·갑상선기능장애 등이 있으면 사전 상담."
    },
    "volume": "112 / 224정"
  },
  {
    "number": 69,
    "code": "#069",
    "id": "inochi-no-haha-a",
    "name": "이노치노하하 A",
    "japanese": "命の母A",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 780,
      "jpyMax": 5700,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "갱년기 증상·생리 관련 불편 등에 사용하는 여성 보건약.",
    "series": null,
    "options": [
      {
        "id": "84",
        "name": "84정",
        "status": "active"
      },
      {
        "id": "252",
        "name": "252정",
        "status": "active"
      },
      {
        "id": "420",
        "name": "420정",
        "status": "active"
      },
      {
        "id": "840",
        "name": "840정",
        "status": "active"
      }
    ],
    "image": "images/inochi-no-haha-a.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "갱년기 장애·갱년기 신경증, 생리불순·생리통, 냉증, 어깨결림, 어지럼, 이명, 두근거림, 빈혈, 변비 등",
      "activeIngredients": "당귀·작약·천궁·복령·계피·대황 등 13종 생약, 비타민B군·비타민E·타우린 등",
      "usage": "15세 이상 1회 4정, 1일 3회 매 식후.",
      "age": "15세 이상",
      "maxUsage": "1일 12정",
      "warnings": "수유 중에는 복용하지 않거나 복용 시 수유를 피한다. 임신 가능성이 있거나 임신 중이면 사전 상담.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제2류 의약품. 갱년기 장애·갱년기 신경증, 생리불순·생리통, 냉증, 어깨결림, 어지럼, 이명, 두근거림, 빈혈, 변비 등",
      "ingredientsOrMaterial": "당귀·작약·천궁·복령·계피·대황 등 13종 생약, 비타민B군·비타민E·타우린 등",
      "usage": "15세 이상 1회 4정, 1일 3회 매 식후. 연령: 15세 이상 최대/권장 횟수: 1일 12정",
      "recommendedFor": "갱년기 장애·갱년기 신경증, 생리불순·생리통, 냉증, 어깨결림, 어지럼, 이명, 두근거림, 빈혈, 변비 등",
      "warnings": "수유 중에는 복용하지 않거나 복용 시 수유를 피한다. 임신 가능성이 있거나 임신 중이면 사전 상담."
    },
    "volume": "84 / 252 / 420 / 840정"
  },
  {
    "number": 70,
    "code": "#070",
    "id": "loxonin-ex-tape",
    "name": "로키소닌 EX 테이프",
    "japanese": "ロキソニンEXテープ",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1300,
      "jpyMax": 3000,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "요통·관절통·근육통 등에 붙이는 록소프로펜 외용제.",
    "series": null,
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "14",
        "name": "14매",
        "status": "active"
      },
      {
        "id": "21",
        "name": "21매",
        "status": "active"
      }
    ],
    "image": "images/loxonin-ex-tape.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "요통, 어깨통증, 관절통, 근육통, 건초염, 테니스엘보, 타박상, 염좌",
      "activeIngredients": "록소프로펜나트륨수화물 8.10g, 토코페롤아세트산에스터 2.3g, l-멘톨 3.5g / 고체 100g",
      "usage": "15세 이상 환부에 1일 1회 부착.",
      "age": "15세 이상",
      "maxUsage": "전신 합계 1일 최대 4매. 연속 2주 이상 사용하지 않는다.",
      "warnings": "진통제·감기약으로 천식을 일으킨 적이 있는 사람은 사용 금지. 눈·점막·상처에 사용하지 않는다.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제2류 의약품. 요통, 어깨통증, 관절통, 근육통, 건초염, 테니스엘보, 타박상, 염좌",
      "ingredientsOrMaterial": "록소프로펜나트륨수화물 8.10g, 토코페롤아세트산에스터 2.3g, l-멘톨 3.5g / 고체 100g",
      "usage": "15세 이상 환부에 1일 1회 부착. 연령: 15세 이상 최대/권장 횟수: 전신 합계 1일 최대 4매. 연속 2주 이상 사용하지 않는다.",
      "recommendedFor": "요통, 어깨통증, 관절통, 근육통, 건초염, 테니스엘보, 타박상, 염좌",
      "warnings": "진통제·감기약으로 천식을 일으킨 적이 있는 사람은 사용 금지. 눈·점막·상처에 사용하지 않는다."
    },
    "volume": "7 / 14 / 21매"
  },  {
    "number": 71,
    "code": "#071",
    "id": "ryukakusan-direct",
    "name": "용각산 다이렉트 스틱",
    "japanese": "龍角散ダイレクト スティック",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 900,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "기침·가래·목 불편에 물 없이 복용하는 미세과립 제제.",
    "series": null,
    "options": [
      {
        "id": "mint",
        "name": "민트",
        "status": "active"
      },
      {
        "id": "peach",
        "name": "피치",
        "status": "active"
      }
    ],
    "image": "images/ryukakusan-direct.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "가래, 기침, 목 염증에 따른 쉰 목소리·목 거침·불쾌감",
      "activeIngredients": "길경말, 세네가말, 감초말, 행인, 인삼말, 아선약말",
      "usage": "물 없이 복용. 15세 이상 1회 1포, 11~14세 2/3포, 7~10세 1/2포, 3~6세 1/3포.",
      "age": "3세 이상",
      "maxUsage": "1일 최대 6회, 각 복용 사이 2시간 이상",
      "warnings": "3세 미만은 복용하지 않는다. 증상이 지속되면 사용을 중단하고 상담.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제3류 의약품. 가래, 기침, 목 염증에 따른 쉰 목소리·목 거침·불쾌감",
      "ingredientsOrMaterial": "길경말, 세네가말, 감초말, 행인, 인삼말, 아선약말",
      "usage": "물 없이 복용. 15세 이상 1회 1포, 11~14세 2/3포, 7~10세 1/2포, 3~6세 1/3포. 연령: 3세 이상 최대/권장 횟수: 1일 최대 6회, 각 복용 사이 2시간 이상",
      "recommendedFor": "가래, 기침, 목 염증에 따른 쉰 목소리·목 거침·불쾌감",
      "warnings": "3세 미만은 복용하지 않는다. 증상이 지속되면 사용을 중단하고 상담."
    },
    "volume": "16포"
  },
  {
    "number": 72,
    "code": "#072",
    "id": "rohto-digieye",
    "name": "로토 데지아이a",
    "japanese": "ロート デジアイa",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 1000,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "디지털 기기 사용으로 인한 눈 피로 등에 사용하는 점안액.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/rohto-digieye.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "눈의 피로, 충혈, 가려움, 안염, 흐림, 하드렌즈 착용 시 불쾌감 등",
      "activeIngredients": "네오스티그민메틸황산염, 아줄렌설폰산나트륨, 클로르페니라민말레산염, 비타민B12, 타우린, 콘드로이틴황산에스터나트륨",
      "usage": "1회 1~2방울, 1일 5~6회.",
      "age": "제품 페이지에 특정 최소 연령 수치가 별도 명시되지 않음. 소아 사용 시 첨부문서 우선.",
      "maxUsage": "1일 5~6회",
      "warnings": "심한 눈 통증·녹내장 등은 사용 전 상담.",
      "contactLens": {
        "hard": true,
        "soft": false,
        "color": false,
        "note": "하드렌즈 착용 중 사용 가능. 소프트·컬러렌즈 착용 중 사용하지 않음."
      },
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제3류 의약품. 눈의 피로, 충혈, 가려움, 안염, 흐림, 하드렌즈 착용 시 불쾌감 등",
      "ingredientsOrMaterial": "네오스티그민메틸황산염, 아줄렌설폰산나트륨, 클로르페니라민말레산염, 비타민B12, 타우린, 콘드로이틴황산에스터나트륨",
      "usage": "1회 1~2방울, 1일 5~6회. 연령: 제품 페이지에 특정 최소 연령 수치가 별도 명시되지 않음. 소아 사용 시 첨부문서 우선. 최대/권장 횟수: 1일 5~6회",
      "recommendedFor": "눈의 피로, 충혈, 가려움, 안염, 흐림, 하드렌즈 착용 시 불쾌감 등",
      "warnings": "심한 눈 통증·녹내장 등은 사용 전 상담. 렌즈 사용: 하드렌즈 가능, 소프트렌즈 불가, 컬러렌즈 불가. 하드렌즈 착용 중 사용 가능. 소프트·컬러렌즈 착용 중 사용하지 않음."
    },
    "volume": "12mL"
  },
  {
    "number": 73,
    "code": "#073",
    "id": "v-rohto-premium",
    "name": "V로토 프리미엄",
    "japanese": "Vロートプレミアム",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1650,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "여러 원인의 눈 피로·충혈 등에 사용하는 점안액.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/v-rohto-premium.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "눈의 피로, 결막충혈, 흐림, 가려움, 안염, 하드렌즈 착용 시 불쾌감 등",
      "activeIngredients": "테트라히드로졸린염산염, 네오스티그민메틸황산염, 알란토인, 글리시리진산이칼륨, 황산아연수화물, 클로르페니라민말레산염, 비타민B6, 판테놀, 비타민E, L-아스파라긴산칼륨, 타우린, 콘드로이틴",
      "usage": "1회 1~2방울, 1일 5~6회.",
      "age": "소아 사용 시 보호자 지도 및 첨부문서 확인",
      "maxUsage": "1일 5~6회",
      "warnings": "심한 눈 통증·녹내장 등은 사용 전 상담. 5~6일 사용해도 개선되지 않으면 상담.",
      "contactLens": {
        "hard": true,
        "soft": false,
        "color": false,
        "note": "O2 하드렌즈 포함 하드렌즈는 착용 중 가능. 소프트렌즈 착용 중 사용하지 않음."
      },
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제2류 의약품. 눈의 피로, 결막충혈, 흐림, 가려움, 안염, 하드렌즈 착용 시 불쾌감 등",
      "ingredientsOrMaterial": "테트라히드로졸린염산염, 네오스티그민메틸황산염, 알란토인, 글리시리진산이칼륨, 황산아연수화물, 클로르페니라민말레산염, 비타민B6, 판테놀, 비타민E, L-아스파라긴산칼륨, 타우린, 콘드로이틴",
      "usage": "1회 1~2방울, 1일 5~6회. 연령: 소아 사용 시 보호자 지도 및 첨부문서 확인 최대/권장 횟수: 1일 5~6회",
      "recommendedFor": "눈의 피로, 결막충혈, 흐림, 가려움, 안염, 하드렌즈 착용 시 불쾌감 등",
      "warnings": "심한 눈 통증·녹내장 등은 사용 전 상담. 5~6일 사용해도 개선되지 않으면 상담. 렌즈 사용: 하드렌즈 가능, 소프트렌즈 불가, 컬러렌즈 불가. O2 하드렌즈 포함 하드렌즈는 착용 중 가능. 소프트렌즈 착용 중 사용하지 않음."
    },
    "volume": "15mL"
  },
  {
    "number": 74,
    "code": "#074",
    "id": "sante-fx-v-plus",
    "name": "산테 FX V 플러스",
    "japanese": "サンテFX Vプラス",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 800,
      "jpyMax": 1000,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "강한 청량감의 눈 피로·충혈용 점안액.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/sante-fx-v-plus.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "눈 피로, 충혈, 가려움, 안염, 흐림, 안검염 등",
      "activeIngredients": "비타민B6, 타우린, L-아스파라긴산칼륨, 네오스티그민메틸황산염, 테트라히드로졸린염산염, 클로르페니라민말레산염, ε-아미노카프로산",
      "usage": "1회 2~3방울, 1일 5~6회.",
      "age": "소아 사용 시 보호자 지도 및 첨부문서 확인",
      "maxUsage": "1일 5~6회",
      "warnings": "강한 청량감. 심한 눈 통증·녹내장 등은 사용 전 상담.",
      "contactLens": {
        "hard": true,
        "soft": false,
        "color": false,
        "note": "하드렌즈 착용 중 가능. 소프트·컬러렌즈 착용 중 사용하지 않음."
      },
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제2류 의약품. 눈 피로, 충혈, 가려움, 안염, 흐림, 안검염 등",
      "ingredientsOrMaterial": "비타민B6, 타우린, L-아스파라긴산칼륨, 네오스티그민메틸황산염, 테트라히드로졸린염산염, 클로르페니라민말레산염, ε-아미노카프로산",
      "usage": "1회 2~3방울, 1일 5~6회. 연령: 소아 사용 시 보호자 지도 및 첨부문서 확인 최대/권장 횟수: 1일 5~6회",
      "recommendedFor": "눈 피로, 충혈, 가려움, 안염, 흐림, 안검염 등",
      "warnings": "강한 청량감. 심한 눈 통증·녹내장 등은 사용 전 상담. 렌즈 사용: 하드렌즈 가능, 소프트렌즈 불가, 컬러렌즈 불가. 하드렌즈 착용 중 가능. 소프트·컬러렌즈 착용 중 사용하지 않음."
    },
    "volume": "12mL"
  },
  {
    "number": 75,
    "code": "#075",
    "id": "smile40-premium-one-coolmax",
    "name": "스마일40 프리미엄 THE ONE 쿨MAX",
    "japanese": "スマイル40 プレミアム THE ONE クールMAX",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1900,
      "jpyMax": 2000,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "12종 유효성분을 배합한 강한 청량감의 점안액.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/smile40-premium-one-coolmax.jpg",
    "imageStatus": "existing",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "눈의 피로·충혈·가려움·흐림 등",
      "activeIngredients": "비타민A, 천연형 비타민E, 비타민B6, 콘드로이틴, 타우린, L-아스파라긴산칼륨, 네오스티그민, 클로르페니라민, 테트라히드로졸린, ε-아미노카프로산, 베르베린, 글리시리진산이칼륨",
      "usage": "1회 1~3방울, 1일 3~6회.",
      "age": "소아 사용 시 보호자 지도 및 첨부문서 확인",
      "maxUsage": "1일 3~6회",
      "warnings": "과도한 점안은 눈부심이나 충혈을 유발할 수 있음.",
      "contactLens": {
        "hard": true,
        "soft": false,
        "color": false,
        "note": "하드렌즈 관련 불쾌감 효능 포함. 소프트·컬러렌즈 착용 중 사용하지 않음."
      },
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제2류 의약품. 눈의 피로·충혈·가려움·흐림 등",
      "ingredientsOrMaterial": "비타민A, 천연형 비타민E, 비타민B6, 콘드로이틴, 타우린, L-아스파라긴산칼륨, 네오스티그민, 클로르페니라민, 테트라히드로졸린, ε-아미노카프로산, 베르베린, 글리시리진산이칼륨",
      "usage": "1회 1~3방울, 1일 3~6회. 연령: 소아 사용 시 보호자 지도 및 첨부문서 확인 최대/권장 횟수: 1일 3~6회",
      "recommendedFor": "눈의 피로·충혈·가려움·흐림 등",
      "warnings": "과도한 점안은 눈부심이나 충혈을 유발할 수 있음. 렌즈 사용: 하드렌즈 가능, 소프트렌즈 불가, 컬러렌즈 불가. 하드렌즈 관련 불쾌감 효능 포함. 소프트·컬러렌즈 착용 중 사용하지 않음."
    },
    "volume": "15mL"
  },
  {
    "number": 76,
    "code": "#076",
    "id": "melano-cc-deep-clear",
    "name": "메라노CC 딥클리어 효소세안",
    "japanese": "メラノCC ディープクリア酵素洗顔",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 650,
      "jpyMax": 850,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "효소와 비타민C 계열 성분을 활용한 튜브형 세안제.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/melano-cc-deep-clear.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 4.8,
      "max": 7,
      "reviewCount": 5338,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "130g 튜브형 효소 세안제. 효소와 비타민C 계열 세정 콘셉트.",
      "ingredientsOrMaterial": "주요 성분: 단백질 분해효소 프로테아제, 비타민C(아스코빅애씨드), 카올린 클레이, 세정 성분. 시트러스 계열 향.",
      "usage": "적당량을 물과 함께 거품 내어 얼굴을 부드럽게 세안 후 헹군다.",
      "recommendedFor": "모공 오염·각질·피지 관리가 신경 쓰이는 피부",
      "warnings": "눈에 들어가면 즉시 씻어내고 자극이 지속되면 사용 중단."
    },
    "volume": "130g"
  },
  {
    "number": 77,
    "code": "#077",
    "id": "nameraka-eye-fukkura-nc",
    "name": "사나 나메라카혼포 눈가 후쿠라 크림 NC",
    "japanese": "なめらか本舗 目元ふっくらクリーム NC",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 850,
      "jpyMax": 1100,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "눈가 보습과 탄력감을 위한 아이크림.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/nameraka-eye-fukkura-nc.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "눈가 보습과 탄력감을 겨냥한 아이크림",
      "ingredientsOrMaterial": "주요 성분: 두유발효액·대두 유래 보습 성분, 비타민E 유도체, 보습·탄력 케어 성분을 배합한 아이크림.",
      "usage": "스킨케어 마지막 단계에서 눈가에 소량 사용",
      "recommendedFor": "건조하고 칙칙해 보이는 눈가",
      "warnings": "눈 안에 들어가지 않도록 주의."
    }
  },
  {
    "number": 78,
    "code": "#078",
    "id": "nameraka-wrinkle-eye-n",
    "name": "사나 나메라카혼포 링클 아이크림 N",
    "japanese": "なめらか本舗 リンクルアイクリーム N",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 850,
      "jpyMax": 1100,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "건조로 인한 눈가 잔주름 관리에 초점을 둔 아이크림.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/nameraka-wrinkle-eye-n.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "건조로 인한 눈가 잔주름 관리용",
      "ingredientsOrMaterial": "주요 성분: 두유발효액, 레티놀, 레티닐팔미테이트, 비타민E 유도체 등 보습·탄력 케어 성분.",
      "usage": "아침·저녁 스킨케어 마지막에 눈가에 사용",
      "recommendedFor": "눈가 건조와 탄력 저하, 잔주름이 신경 쓰여 보습과 탄력 케어를 함께 원하는 경우.",
      "warnings": "눈에 직접 들어가지 않게 사용하고 붉어짐·가려움·따가움 등 피부 자극이 나타나면 사용을 중단한다."
    }
  },
  {
    "number": 79,
    "code": "#079",
    "id": "nameraka-medicated-wrinkle-eye-white",
    "name": "사나 나메라카혼포 약용 링클 아이크림 화이트",
    "japanese": "なめらか本舗 薬用リンクルアイクリーム ホワイト",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1000,
      "jpyMax": 1300,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "미백과 눈가 주름 케어를 겨냥한 약용 아이크림.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/nameraka-medicated-wrinkle-eye-white.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "미백·주름 개선을 겨냥한 약용 아이크림",
      "ingredientsOrMaterial": "주요 유효성분: 나이아신아마이드 계열의 주름개선·미백 기능성 성분과 두유발효액 등 보습 성분을 배합한 의약부외품.",
      "usage": "스킨케어 마지막에 눈가 등 고민 부위에 사용",
      "recommendedFor": "눈가 주름과 기미·주근깨 예방을 함께 관리하려는 경우",
      "warnings": "눈에 직접 들어가지 않게 사용하며, 붉어짐·가려움·따가움 등 피부 이상이 나타나면 사용을 중단한다."
    }
  },
  {
    "number": 80,
    "code": "#080",
    "id": "moton-hair-body-mist",
    "name": "MOTON 헤어&바디 미스트",
    "japanese": "MOTON ヘア＆ボディミスト",
    "category": "헤어·바디",
    "storeGroup": "버라이어티",
    "store": "로프트 / 플라자 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1700,
      "jpyMax": 2200,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "머리카락과 몸에 향을 더하는 미스트.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/moton-hair-body-mist.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "헤어와 바디에 사용하는 향기 미스트",
      "ingredientsOrMaterial": "주요 성분: 아르간오일, 모링가오일, 호호바오일, 가수분해 쌀·대두 단백질, 복수 히알루론산과 식물추출물. 헤어와 바디 겸용 향기 미스트.",
      "usage": "피부 또는 머리카락에 적당량 분사",
      "recommendedFor": "외출 중 향을 가볍게 덧입히고 싶은 경우",
      "warnings": "눈·점막에 직접 분사하지 않는다."
    }
  },  {
    "number": 81,
    "code": "#081",
    "id": "orbis-essence-in-hair-milk",
    "name": "오르비스 에센스 인 헤어 밀크",
    "japanese": "オルビス エッセンスインヘアミルク",
    "category": "헤어·바디",
    "storeGroup": "드럭스토어",
    "store": "오르비스 / 드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1200,
      "jpyMax": 1500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "세정 후 씻어내지 않고 사용하는 헤어 밀크.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/orbis-essence-in-hair-milk.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "타월 드라이 후 사용하는 씻어내지 않는 헤어 밀크로, 건조하고 손상된 모발에 수분과 부드러움을 보충하고 드라이 열로부터의 케어를 돕는다.",
      "ingredientsOrMaterial": "주요 성분: 아미노산계 보습·보수 성분, 가수분해 실크 유도체, 실리콘계 컨디셔닝 성분 등을 배합한 씻어내지 않는 헤어밀크.",
      "usage": "타월드라이한 모발 또는 마른 모발 끝 중심으로 도포",
      "recommendedFor": "건조·손상·엉킴이 신경 쓰이는 모발",
      "warnings": "두피 자극이 있으면 사용 중단."
    }
  },
  {
    "number": 82,
    "code": "#082",
    "id": "jemile-fran-melty-butter-balm",
    "name": "밀본 제밀프랑 멜티버터 밤",
    "japanese": "ジェミールフラン メルティバター バーム",
    "category": "헤어·바디",
    "storeGroup": "전문점",
    "store": "미용실 / 헤어 전문점 / 온라인",
    "status": "active",
    "price": {
      "jpyMin": 2000,
      "jpyMax": 2600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "열을 이용한 스타일 유지와 윤기 표현을 돕는 헤어 밤.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/jemile-fran-melty-butter-balm.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "체온·열에 반응해 모발 형태 유지와 윤기를 돕는 헤어 밤",
      "ingredientsOrMaterial": "주요 성분: 디메치콘, 미네랄오일, 모링가버터 유도체, 밀랍, 시어버터, 해바라기왁스, 호호바오일, 케라틴계 보수 성분.",
      "usage": "소량을 손바닥에 녹여 모발 끝과 표면에 바른다.",
      "recommendedFor": "스타일링과 윤기 표현을 동시에 원하는 경우",
      "warnings": "과량 사용 시 무거워질 수 있음."
    }
  },
  {
    "number": 83,
    "code": "#083",
    "id": "medi-qutto-full-leg",
    "name": "메디큐토 풀레그",
    "japanese": "寝ながらメディキュット フルレッグ",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 2000,
      "jpyMax": 3500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "취침 중 다리 전체를 단계 압박하는 스타킹형 제품.",
    "series": null,
    "options": [
      {
        "id": "m",
        "name": "M",
        "status": "active"
      },
      {
        "id": "l",
        "name": "L",
        "status": "active"
      }
    ],
    "image": "images/medi-qutto-full-leg.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "취침용 단계압박 풀레그 타입",
      "ingredientsOrMaterial": "주요 소재: 나일론·폴리에스터·폴리우레탄·큐프라 등을 사용한 단계압박형 수면용 스타킹. 발목에서 허벅지 방향으로 압박을 설계.",
      "usage": "주름이 생기지 않도록 발끝부터 천천히 착용",
      "recommendedFor": "취침 중 다리 압박 케어를 원하는 경우",
      "warnings": "혈액순환 장애·피부 이상이 있거나 통증·저림이 생기면 즉시 벗고 상담."
    }
  },
  {
    "number": 84,
    "code": "#084",
    "id": "center-in-compact-half",
    "name": "소피 센터인 컴팩트 1/2",
    "japanese": "ソフィ センターイン コンパクト1/2",
    "category": "생활용품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 슈퍼 / 편의점",
    "status": "active",
    "price": {
      "jpyMin": 300,
      "jpyMax": 600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "포장 부피를 줄인 생리대 라인.",
    "series": null,
    "options": [
      {
        "id": "215",
        "name": "21.5cm",
        "status": "active"
      },
      {
        "id": "245",
        "name": "24.5cm",
        "status": "active"
      },
      {
        "id": "305",
        "name": "30.5cm",
        "status": "active"
      }
    ],
    "image": "images/center-in-compact-half.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "포장을 약 절반 크기로 줄인 생리대 라인",
      "ingredientsOrMaterial": "주요 소재: 흡수체, 부직포, 방수 시트, 접착재 등을 조합한 초슬림 생리대. 제품별 길이·날개 유무는 옵션에 따라 다름.",
      "usage": "개별 포장 제품을 속옷에 부착",
      "recommendedFor": "파우치에 넣기 쉬운 얇고 작은 패키지와 개별 포장을 선호해 외출·여행 시 휴대성을 중시하는 경우.",
      "warnings": "피부 이상이 생기면 사용 중단."
    }
  },
  {
    "number": 85,
    "code": "#085",
    "id": "love-liner-liquid-r5",
    "name": "러브라이너 리퀴드 아이라이너 R5",
    "japanese": "ラブ・ライナー リキッドアイライナーR5",
    "category": "스킨케어·화장품",
    "storeGroup": "버라이어티",
    "store": "로프트 / 플라자 / 드럭스토어",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1800,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "붓펜 타입의 리퀴드 아이라이너.",
    "series": null,
    "options": [
      {
        "id": "black",
        "name": "블랙",
        "status": "active"
      },
      {
        "id": "dark-brown",
        "name": "다크 브라운",
        "status": "active"
      },
      {
        "id": "milk-brown",
        "name": "밀크 브라운",
        "status": "active"
      },
      {
        "id": "mocha-greige",
        "name": "모카 그레이지",
        "status": "active"
      },
      {
        "id": "rose-brown",
        "name": "로즈 브라운",
        "status": "active"
      }
    ],
    "image": "images/love-liner-liquid-r5.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.5,
      "max": 7,
      "reviewCount": 2173,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "펜슬처럼 안정적으로 잡히는 리퀴드 아이라이너",
      "ingredientsOrMaterial": "주요 성분: 아크릴계 피막 형성 성분, BG, 판테놀, 글리세린, 센브리추출물, 사과세포배양추출물, 히알루론산, 장미계 보습 성분 등.",
      "usage": "속눈썹 라인을 따라 원하는 두께로 그린다.",
      "recommendedFor": "정교한 아이라인을 원하는 경우",
      "warnings": "눈 안에 들어가지 않도록 주의."
    }
  },
  {
    "number": 86,
    "code": "#086",
    "id": "canmake-marshmallow-finish-powder",
    "name": "캔메이크 마시멜로 피니쉬 파우더",
    "japanese": "キャンメイク マシュマロフィニッシュパウダー",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1100,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "보송한 마무리를 위한 페이스 파우더.",
    "series": null,
    "options": [
      {
        "id": "mo",
        "name": "MO",
        "status": "active"
      },
      {
        "id": "ml",
        "name": "ML",
        "status": "active"
      },
      {
        "id": "mb",
        "name": "MB",
        "status": "active"
      },
      {
        "id": "mi",
        "name": "MI",
        "status": "active"
      }
    ],
    "image": "images/canmake-marshmallow-finish-powder.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "보송한 마시멜로 피부 표현용 페이스 파우더",
      "ingredientsOrMaterial": "주요 성분: 마이카, 실리카, 산화아연, 스쿠알란, 올리브·동백·포도씨·호호바오일, 히알루론산, 알부틴, 콜라겐 등. SPF50·PA+++ 계열.",
      "usage": "베이스 메이크업 마지막에 퍼프로 얇게 도포",
      "recommendedFor": "모공·번들거림을 보송하게 정돈하고 싶은 경우",
      "warnings": "색상은 피부톤에 맞춰 선택."
    }
  },
  {
    "number": 87,
    "code": "#087",
    "id": "club-suppin-powder-c",
    "name": "클럽 슷핀 파우더 C",
    "japanese": "クラブ すっぴんパウダーC",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1900,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "세안 없이도 사용할 수 있도록 설계된 스킨케어 파우더.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/club-suppin-powder-c.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "스킨케어 성격을 더한 페이스 파우더",
      "ingredientsOrMaterial": "주요 성분: 라우로일라이신(아미노산계 파우더), 히알루론산, 유산균 유래 성분, 콜라겐 등 보습 성분을 포함한 스킨케어 파우더.",
      "usage": "스킨케어 후 또는 메이크업 마무리에 사용",
      "recommendedFor": "가벼운 톤 정돈과 보송함을 원하는 경우",
      "warnings": "흡입하지 않도록 주의하고 눈에 들어가면 즉시 씻어낸다. 사용 중 붉어짐·가려움·자극 등 피부 이상이 나타나면 중단한다."
    }
  },
  {
    "number": 88,
    "code": "#088",
    "id": "taisho-mouth-ulcer-patch-quick",
    "name": "다이쇼 구내염 패치 퀵케어",
    "japanese": "口内炎パッチ大正クイックケア",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 800,
      "jpyMax": 1100,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "아프타성 구내염 부위에 붙이는 패치형 치료제.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/taisho-mouth-ulcer-patch-quick.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "지정 제2류 의약품",
      "efficacy": "아프타성 구내염",
      "activeIngredients": "트리암시놀론 아세토니드",
      "usage": "성인 및 5세 이상 소아: 환부 1곳당 1회 1매, 1일 1~2회 환부 점막에 부착.",
      "age": "5세 이상",
      "maxUsage": "환부 1곳당 1회 1매, 1일 1~2회",
      "warnings": "5세 미만은 기도 막힘 위험 때문에 사용하지 않는다. 패치는 억지로 떼지 않고 자연스럽게 떨어지도록 한다.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "지정 제2류 의약품. 아프타성 구내염",
      "ingredientsOrMaterial": "유효성분: 트리암시놀론 아세토니드. 구내염 부위에 부착해 환부를 보호하면서 항염 작용을 하는 패치형 제제.",
      "usage": "성인 및 5세 이상 소아: 환부 1곳당 1회 1매, 1일 1~2회 환부 점막에 부착. 연령: 5세 이상 최대/권장 횟수: 환부 1곳당 1회 1매, 1일 1~2회",
      "recommendedFor": "입안에 생긴 아프타성 구내염의 염증·통증 부위를 국소적으로 보호하고 치료하려는 경우.",
      "warnings": "5세 미만은 기도 막힘 위험 때문에 사용하지 않는다. 패치는 억지로 떼지 않고 자연스럽게 떨어지도록 한다."
    },
    "volume": "패치형"
  },
  {
    "number": 89,
    "code": "#089",
    "id": "v-rohto-active-premium",
    "name": "V로토 액티브 프리미엄",
    "japanese": "Vロートアクティブプレミアム",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1300,
      "jpyMax": 1700,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "나이에 따른 눈 피로와 흐림 등에 사용하는 프리미엄 점안액.",
    "series": "V로토 프리미엄",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/v-rohto-active-premium.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "나이·건조 등으로 인한 눈 피로, 흐림, 충혈 등",
      "activeIngredients": "레티놀팔미테이트(비타민A) 50,000단위/100mL, 테트라히드로졸린염산염 0.01%, 네오스티그민메틸황산염 0.005%, 클로르페니라민말레산염 0.03%, 비타민B6 0.01%, d-α-토코페롤아세트산에스터(천연형 비타민E) 0.045%, L-아스파라긴산칼륨 0.5%, 타우린 1%, 콘드로이틴황산에스터나트륨 0.1%",
      "usage": "1회 1~3방울, 1일 5~6회 점안.",
      "age": "소아 사용 시 보호자 지도 및 첨부문서 확인",
      "maxUsage": "1일 5~6회",
      "warnings": "심한 눈 통증이 있거나 녹내장 진단을 받은 경우 사용 전 의사·약사·등록판매자와 상담. 5~6일 사용해도 증상이 개선되지 않으면 사용을 중단하고 상담.",
      "contactLens": {
        "hard": true,
        "soft": false,
        "color": false,
        "note": "하드렌즈 착용 중 가능. 소프트렌즈 착용 중 사용하지 않음."
      },
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제2류 의약품. 나이·건조 등으로 인한 눈 피로, 흐림, 충혈 등",
      "ingredientsOrMaterial": "레티놀팔미테이트(비타민A) 50,000단위/100mL, 테트라히드로졸린염산염 0.01%, 네오스티그민메틸황산염 0.005%, 클로르페니라민말레산염 0.03%, 비타민B6 0.01%, d-α-토코페롤아세트산에스터(천연형 비타민E) 0.045%, L-아스파라긴산칼륨 0.5%, 타우린 1%, 콘드로이틴황산에스터나트륨 0.1%",
      "usage": "1회 1~3방울, 1일 5~6회 점안. 연령: 소아 사용 시 보호자 지도 및 첨부문서 확인 최대/권장 횟수: 1일 5~6회",
      "recommendedFor": "나이·건조 등으로 인한 눈 피로, 흐림, 충혈 등",
      "warnings": "심한 눈 통증이 있거나 녹내장 진단을 받은 경우 사용 전 의사·약사·등록판매자와 상담. 5~6일 사용해도 증상이 개선되지 않으면 사용을 중단하고 상담. 렌즈 사용: 하드렌즈 가능, 소프트렌즈 불가, 컬러렌즈 불가. 하드렌즈 착용 중 가능. 소프트렌즈 착용 중 사용하지 않음."
    }
  },
  {
    "number": 90,
    "code": "#090",
    "id": "v-rohto-contact-premium",
    "name": "V로토 콘택트 프리미엄",
    "japanese": "Vロートコンタクトプレミアム",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1300,
      "jpyMax": 1700,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "콘택트렌즈 사용 중 눈 피로·건조감 등에 쓰는 점안액.",
    "series": "V로토 프리미엄",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/v-rohto-contact-premium.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "눈의 피로·흐림·가려움, 렌즈 착용 중 불쾌감 등",
      "activeIngredients": "비타민A, 네오스티그민메틸황산염, 클로르페니라민말레산염, 천연형 비타민E, 타우린, 콘드로이틴",
      "usage": "1회 1~3방울, 1일 5~6회.",
      "age": "소아 사용 시 보호자 지도 및 첨부문서 확인",
      "maxUsage": "1일 5~6회",
      "warnings": "심한 눈 통증·녹내장 등은 사용 전 상담.",
      "contactLens": {
        "hard": true,
        "soft": true,
        "color": false,
        "note": "컬러렌즈를 제외한 하드·소프트 콘택트렌즈 착용 중 사용 가능."
      },
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제3류 의약품. 눈의 피로·흐림·가려움, 렌즈 착용 중 불쾌감 등",
      "ingredientsOrMaterial": "비타민A, 네오스티그민메틸황산염, 클로르페니라민말레산염, 천연형 비타민E, 타우린, 콘드로이틴",
      "usage": "1회 1~3방울, 1일 5~6회. 연령: 소아 사용 시 보호자 지도 및 첨부문서 확인 최대/권장 횟수: 1일 5~6회",
      "recommendedFor": "눈의 피로·흐림·가려움, 렌즈 착용 중 불쾌감 등",
      "warnings": "심한 눈 통증·녹내장 등은 사용 전 상담. 렌즈 사용: 하드렌즈 가능, 소프트렌즈 가능, 컬러렌즈 불가. 컬러렌즈를 제외한 하드·소프트 콘택트렌즈 착용 중 사용 가능."
    },
    "volume": "15mL"
  },  {
    "number": 91,
    "code": "#091",
    "id": "v-rohto-dryguard-premium",
    "name": "V로토 드라이가드 프리미엄",
    "japanese": "Vロートドライガードプレミアム",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1200,
      "jpyMax": 1600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "눈 건조감과 렌즈 착용 중 불편감에 초점을 둔 점안액.",
    "series": "V로토 프리미엄",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/v-rohto-dryguard-premium.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "눈의 피로, 눈물 보조(눈 건조), 렌즈 착용 중 불쾌감, 흐림",
      "activeIngredients": "콘드로이틴황산에스터나트륨 1% 등",
      "usage": "1회 1~2방울, 1일 3~4회.",
      "age": "소아 사용 시 보호자 지도 및 첨부문서 확인",
      "maxUsage": "1일 3~4회",
      "warnings": "심한 눈 통증·녹내장 등은 사용 전 상담.",
      "contactLens": {
        "hard": true,
        "soft": true,
        "color": false,
        "note": "하드·소프트렌즈 착용 중 사용 가능. 컬러렌즈는 첨부문서 확인."
      },
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제3류 의약품. 눈의 피로, 눈물 보조(눈 건조), 렌즈 착용 중 불쾌감, 흐림",
      "ingredientsOrMaterial": "콘드로이틴황산에스터나트륨 1% 등",
      "usage": "1회 1~2방울, 1일 3~4회. 연령: 소아 사용 시 보호자 지도 및 첨부문서 확인 최대/권장 횟수: 1일 3~4회",
      "recommendedFor": "눈의 피로, 눈물 보조(눈 건조), 렌즈 착용 중 불쾌감, 흐림",
      "warnings": "심한 눈 통증·녹내장 등은 사용 전 상담. 렌즈 사용: 하드렌즈 가능, 소프트렌즈 가능, 컬러렌즈 불가. 하드·소프트렌즈 착용 중 사용 가능. 컬러렌즈는 첨부문서 확인."
    },
    "volume": "15mL"
  },
  {
    "number": 92,
    "code": "#092",
    "id": "v-rohto-premium-eye-tablets",
    "name": "V로토 프리미엄 아이 내복정",
    "japanese": "Vロートプレミアム アイ内服錠",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1800,
      "jpyMax": 2600,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "눈의 피로 관련 증상 완화를 위한 내복형 비타민 제제.",
    "series": "V로토 프리미엄",
    "options": [
      {
        "id": "21",
        "name": "21정",
        "status": "active"
      },
      {
        "id": "80",
        "name": "80정",
        "status": "active"
      }
    ],
    "image": "images/v-rohto-premium-eye-tablets.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "신경통, 근육통·관절통, 손발 저림, 만성적인 눈 피로 및 눈의 깊은 통증 등",
      "activeIngredients": "비타민B12 1500μg, 푸르설티아민염산염 109.16mg, 비타민B6 100mg, 감마오리자놀, 비타민E 유도체, 니코틴산아미드, 판토텐산칼슘 / 3정",
      "usage": "15세 이상 1회 2~3정, 1일 1회 식후 즉시 물 또는 따뜻한 물로 씹지 않고 복용.",
      "age": "15세 이상",
      "maxUsage": "1일 3정",
      "warnings": "15세 미만 복용 금지. 약 1개월 사용해도 증상이 개선되지 않으면 상담.",
      "sourceNote": "일본 제조사 공식 제품정보/첨부문서를 우선 기준으로 정리. 실제 사용 시 제품 포장·첨부문서 우선."
    },
    "details": {
      "features": "제3류 의약품. 신경통, 근육통·관절통, 손발 저림, 만성적인 눈 피로 및 눈의 깊은 통증 등",
      "ingredientsOrMaterial": "비타민B12 1500μg, 푸르설티아민염산염 109.16mg, 비타민B6 100mg, 감마오리자놀, 비타민E 유도체, 니코틴산아미드, 판토텐산칼슘 / 3정",
      "usage": "15세 이상 1회 2~3정, 1일 1회 식후 즉시 물 또는 따뜻한 물로 씹지 않고 복용. 연령: 15세 이상 최대/권장 횟수: 1일 3정",
      "recommendedFor": "신경통, 근육통·관절통, 손발 저림, 만성적인 눈 피로 및 눈의 깊은 통증 등",
      "warnings": "15세 미만 복용 금지. 약 1개월 사용해도 증상이 개선되지 않으면 상담."
    },
    "volume": "21 / 80정"
  },
  {
    "number": 93,
    "code": "#093",
    "id": "menari",
    "name": "메나리",
    "japanese": "めなり",
    "category": "영양제",
    "storeGroup": "온라인",
    "store": "일본 온라인 / 일부 판매점",
    "status": "active",
    "price": {
      "jpyMin": 4500,
      "jpyMax": 6500,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "눈 건강 관련 성분을 배합한 건강보조식품.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/menari.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "빌베리·루테인·제아잔틴을 중심으로 카시스·아스타잔틴·비타민과 미네랄을 함께 배합한 아이케어 건강보조식품.",
      "ingredientsOrMaterial": "주요 성분: 빌베리추출물 170mg(1일 2캡슐 기준), 루테인·제아잔틴 합계 14.4mg, 카시스추출물, 아스타잔틴, β-카로틴, 비타민 B군·C·E, 아연·구리 등.",
      "usage": "1일 2캡슐을 기준으로 2회에 나누어 물 또는 미지근한 물과 함께 섭취한다.",
      "recommendedFor": "스마트폰·PC 등 화면을 오래 보며 눈 관련 영양 성분을 보충하고 싶은 성인.",
      "warnings": "건강보조식품으로 질환 치료제가 아니다. 권장량을 지키고 임신·수유 중이거나 약을 복용 중이면 전문가와 상담한다."
    }
  },
  {
    "number": 94,
    "code": "#094",
    "id": "momopuri-cleansing-wash",
    "name": "모모푸리 촉촉 클렌징 세안",
    "japanese": "ももぷり 潤いクレンジング洗顔",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 950,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "복숭아 계열 보습 성분을 강조한 세안제.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/momopuri-cleansing-wash.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "모모푸리의 복숭아·유산균 보습 콘셉트를 적용해 메이크업 잔여물과 피지를 씻어내면서 세안 후 건조감을 줄이는 클렌징 세안제.",
      "ingredientsOrMaterial": "주요 성분: 복숭아세라마이드(복숭아 유래 성분), 유산균 계열 보습 성분과 세정 성분. 메이크업·피지와 노폐물 세정용.",
      "usage": "손에 적당량을 덜어 물과 함께 충분히 거품을 낸 뒤 얼굴 전체를 부드럽게 마사지하고 미온수로 헹군다.",
      "recommendedFor": "세정과 동시에 촉촉한 사용감을 원하는 건성·수분 부족 피부.",
      "warnings": "눈에 들어가면 즉시 씻어내고, 붉어짐·가려움·자극이 나타나면 사용을 중단한다."
    }
  },
  {
    "number": 95,
    "code": "#095",
    "id": "momopuri-barrier-lotion",
    "name": "모모푸리 촉촉 배리어 화장수",
    "japanese": "ももぷり 潤いバリア化粧水",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1150,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "피부 보습 장벽 케어를 위한 화장수.",
    "series": null,
    "options": [
      {
        "id": "m",
        "name": "M(촉촉)",
        "status": "active"
      },
      {
        "id": "r",
        "name": "R(리치)",
        "status": "active"
      }
    ],
    "image": "images/momopuri-barrier-lotion.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "세라마이드와 복숭아·유산균 유래 보습 성분을 중심으로 피부의 수분 장벽과 결을 정돈하는 화장수.",
      "ingredientsOrMaterial": "주요 성분: 세라마이드 AP·NG·NP, 비타민C 유도체, 레티닐팔미테이트, 히알루론산Na, 복숭아즙·복숭아잎추출물, 유산균 계열 보습 성분.",
      "usage": "세안 후 손 또는 화장솜에 적당량을 덜어 얼굴 전체에 부드럽게 흡수시킨다.",
      "recommendedFor": "세안 후 당김이 있거나 촉촉한 장벽 케어를 원하는 피부.",
      "warnings": "상처·습진 부위에는 사용하지 말고, 자극이 생기면 사용을 중단한다."
    }
  },
  {
    "number": 96,
    "code": "#096",
    "id": "momopuri-barrier-milk",
    "name": "모모푸리 촉촉 배리어 유액",
    "japanese": "ももぷり 潤いバリア乳液",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1150,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "화장수 다음 단계에 사용하는 보습 유액.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/momopuri-barrier-milk.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "모모푸리 화장수 다음 단계에 사용하는 유액으로 수분과 유분을 보충해 피부 표면의 수분 증발을 줄이는 데 초점을 둔다.",
      "ingredientsOrMaterial": "주요 성분: 복숭아 유래 보습 성분, 유산균 계열 성분, 세라마이드류와 보습 오일/에몰리언트 성분을 조합한 유액.",
      "usage": "화장수 후 적당량을 덜어 얼굴 전체에 고르게 펴 바르고 건조한 부위는 한 번 더 얇게 덧바른다.",
      "recommendedFor": "가벼운 유액으로 장벽 보습을 이어가고 싶은 건성·복합성 피부.",
      "warnings": "피부 이상이 있는 부위는 피하고 사용 중 자극이나 붉어짐이 지속되면 중단한다."
    }
  },
  {
    "number": 97,
    "code": "#097",
    "id": "momopuri-barrier-cream",
    "name": "모모푸리 촉촉 배리어 크림",
    "japanese": "ももぷり 潤いバリアクリーム",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1000,
      "jpyMax": 1350,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "수분을 유지하도록 돕는 보습 크림.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/momopuri-barrier-cream.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "세라마이드와 복숭아·유산균 유래 성분을 기반으로 유분막을 형성해 수분을 오래 유지하는 모모푸리 보습 크림.",
      "ingredientsOrMaterial": "주요 성분: 복숭아 유래 보습 성분, 유산균 계열 성분, 세라마이드류와 유분막 형성 성분을 조합한 보습 크림.",
      "usage": "스킨케어 마지막 단계에서 진주알 정도를 얼굴 전체에 펴 바르고 건조한 부위는 소량 추가한다.",
      "recommendedFor": "유액만으로 보습이 부족하거나 밤에 보다 밀도 높은 보습을 원하는 피부.",
      "warnings": "과량 사용 시 끈적임이 느껴질 수 있다. 피부 트러블·자극이 발생하면 중단한다."
    }
  },
  {
    "number": 98,
    "code": "#098",
    "id": "momopuri-serum-mask-n",
    "name": "모모푸리 촉촉 배리어 세럼 마스크 N",
    "japanese": "ももぷり 潤いバリアセラムマスク N",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 650,
      "jpyMax": 900,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "보습 중심의 모모푸리 시트 마스크.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/momopuri-serum-mask-n.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "나이아신아마이드·세라마이드·비타민C 유도체 등과 복숭아·유산균 보습 성분을 담은 데일리 보습 시트 마스크.",
      "ingredientsOrMaterial": "주요 성분: 나이아신아마이드, 세라마이드 AP·NG·NP, 비타민C 유도체, 레티닐팔미테이트, 복숭아 유래 성분, 유산균 계열 성분.",
      "usage": "세안 후 얼굴에 밀착해 약 3~5분 사용하고, 특히 건조할 때도 약 10분 이내로 마무리한다. 제거 후 남은 에센스를 흡수시킨다.",
      "recommendedFor": "빠르게 수분과 피부결을 보충하고 싶은 피부, 데일리 마스크 사용을 선호하는 경우.",
      "warnings": "시트를 붙인 채 잠들지 말고 한 장을 재사용하지 않는다. 피부 자극이 생기면 사용을 중단한다."
    }
  },
  {
    "number": 99,
    "code": "#099",
    "id": "momopuri-serum-mask-rc",
    "name": "모모푸리 촉촉 배리어 세럼 마스크 RC",
    "japanese": "ももぷり 潤いバリアセラムマスク RC",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 650,
      "jpyMax": 900,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "피부 컨디션에 맞춰 사용하는 모모푸리 시트 마스크.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/momopuri-serum-mask-rc.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "레티놀·레티닐 유도체와 세라마이드, 복숭아·유산균 보습 성분을 조합해 탄력·보습을 겨냥한 RC 타입 시트 마스크.",
      "ingredientsOrMaterial": "주요 성분: 레티놀, 레티닐팔미테이트·레티닐리놀레이트, 세라마이드류, 복숭아 유래 성분, 유산균 계열 보습 성분.",
      "usage": "세안 후 얼굴에 밀착해 약 3~5분, 건조가 심한 경우에도 약 10분 이내 사용한 뒤 남은 에센스를 흡수시킨다.",
      "recommendedFor": "보습과 함께 탄력·피부결 관리 성분을 원하는 피부.",
      "warnings": "레티놀 계열에 민감한 피부는 사용 빈도를 낮춰 시작한다. 장시간 부착·재사용을 피하고 낮에는 자외선 차단제를 사용한다."
    }
  },
  {
    "number": 100,
    "code": "#100",
    "id": "lululun-precious-green",
    "name": "루루룬 프레셔스 GREEN",
    "japanese": "ルルルンプレシャス GREEN",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 550,
      "jpyMax": 2200,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "성인 피부의 균형 잡힌 보습을 겨냥한 프레셔스 라인.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "32",
        "name": "32매",
        "status": "active"
      }
    ],
    "image": "images/lululun-precious-green.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "성인 피부의 유수분 균형·장벽·탄력을 함께 관리하도록 설계된 프레셔스 GREEN 데일리 시트 마스크.",
      "ingredientsOrMaterial": "주요 성분: 보습 지질 복합체(L-22 계열), 비피다 발효용해물, 세라마이드 NP·NG·AP, 감초산2K, 식물·발효 추출물.",
      "usage": "세안 후 화장수 대신 또는 화장수 다음 단계에 얼굴에 밀착하고 권장 시간 사용 후 남은 에센스를 흡수시킨다.",
      "recommendedFor": "건조·탄력 저하·장벽 컨디션을 균형 있게 관리하고 싶은 성인 피부.",
      "warnings": "한 장을 재사용하거나 마스크를 붙인 채 잠들지 않는다. 피부 이상이 있으면 즉시 사용을 중단한다."
    }
  },  {
    "number": 101,
    "code": "#101",
    "id": "lululun-precious-red",
    "name": "루루룬 프레셔스 RED",
    "japanese": "ルルルンプレシャス RED",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 638,
      "jpyMax": 2090,
      "checked": "2026-10-24",
      "note": "7매·32매 공식 판매가 기준. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "건조하기 쉬운 성인 피부의 집중 보습을 겨냥한 프레셔스 라인.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "32",
        "name": "32매",
        "status": "active"
      }
    ],
    "image": "images/lululun-precious-red.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "수분이 부족해 건조하기 쉬운 성인 피부를 위한 3단계 보습 콘셉트의 데일리 시트 마스크.",
      "ingredientsOrMaterial": "주요 성분: 스이젠지노리 다당체, 가수분해 콜라겐, 가수분해 히알루론산Na, 비피다배양용해물, 로젤열매추출물, 동백씨오일 및 피부 지질 균형을 고려한 L-22 보습 성분.",
      "usage": "세안 후 화장수 대신 또는 화장수 단계에서 얼굴에 밀착해 사용한다. 제거 후 남은 에센스를 가볍게 흡수시키고 필요하면 유액·크림으로 마무리한다.",
      "recommendedFor": "피부 당김과 건조함이 심하고 촉촉함을 오래 유지하고 싶은 성인 피부.",
      "warnings": "상처·습진 부위에는 사용하지 않는다. 한 번 사용한 마스크는 재사용하지 않으며 붉어짐·가려움·자극이 나타나면 중단한다."
    }
  },
  {
    "number": 102,
    "code": "#102",
    "id": "lululun-precious-white",
    "name": "루루룬 프레셔스 WHITE",
    "japanese": "ルルルンプレシャス WHITE",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 638,
      "jpyMax": 2090,
      "checked": "2026-10-24",
      "note": "7매·32매 공식 판매가 기준. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "건조로 인한 칙칙함과 피부결 정돈에 초점을 둔 프레셔스 라인.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "32",
        "name": "32매",
        "status": "active"
      }
    ],
    "image": "images/lululun-precious-white.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "오래된 각질과 건조로 칙칙해 보이는 피부를 촉촉하고 매끄럽게 정돈해 광채 있는 피부 인상을 만드는 데 초점을 둔 마스크.",
      "ingredientsOrMaterial": "주요 성분: 라벤더꽃추출물, 율무씨추출물, 유산균/두유발효액, 지용성 비타민C 유도체, 황금해조추출물 및 L-22 보습 성분.",
      "usage": "세안 후 얼굴 전체에 밀착해 사용하고 제거 후 남은 에센스를 피부에 흡수시킨다. 이후 유액이나 크림으로 마무리한다.",
      "recommendedFor": "건조로 칙칙해 보이는 피부, 피부결·광채·수분감을 함께 관리하고 싶은 경우.",
      "warnings": "눈에 에센스가 들어가지 않도록 하고 피부에 이상이 생기면 중단한다. 한 번 꺼낸 시트는 용기에 다시 넣지 않는다."
    }
  },
  {
    "number": 103,
    "code": "#103",
    "id": "lululun-hydra-az",
    "name": "루루룬 하이드라 AZ",
    "japanese": "ルルルン ハイドラ AZ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 880,
      "jpyMax": 2640,
      "checked": "2026-10-24",
      "note": "7매·28매 공식 판매가 기준."
    },
    "summary": "피지·거칠음·피부 컨디션 관리에 초점을 둔 하이드라 마스크.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "28",
        "name": "28매",
        "status": "active"
      }
    ],
    "image": "images/lululun-hydra-az.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "피지로 인한 번들거림, 거친 피부결, 모공이 눈에 띄는 피부를 촉촉하게 정돈하는 하이드라 라인.",
      "ingredientsOrMaterial": "주요 성분: 아젤라익산 유도체인 아젤로일디글리신K, 나이아신아마이드, 만델산, 가수분해 히알루론산Na, 비피다배양액, 라피노스.",
      "usage": "세안 후 얼굴에 시트를 밀착하고 사용 후에는 시트로 피부를 가볍게 닦아낸 뒤 남은 에센스를 두드려 흡수시킨다.",
      "recommendedFor": "피지 번들거림·거친 피부결·건조로 인한 모공 고민이 함께 있는 경우.",
      "warnings": "산 성분이 포함되어 있어 민감한 피부는 사용 전 좁은 부위에 테스트한다. 자극이 생기면 사용 빈도를 줄이거나 중단한다."
    }
  },
  {
    "number": 104,
    "code": "#104",
    "id": "lululun-hydra-v",
    "name": "루루룬 하이드라 V",
    "japanese": "ルルルン ハイドラ V",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 880,
      "jpyMax": 2640,
      "checked": "2026-10-24",
      "note": "7매·28매 공식 판매가 기준."
    },
    "summary": "비타민과 레티놀 계열 성분을 활용한 광채·탄력 관리용 마스크.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "28",
        "name": "28매",
        "status": "active"
      }
    ],
    "image": "images/lululun-hydra-v.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "비타민C 계열과 레티놀 계열 성분을 조합해 피부결·모공·탄력·광채를 관리하는 하이드라 마스크.",
      "ingredientsOrMaterial": "주요 성분: 아스코빌글루코사이드 등 비타민C 유도체, 레티닐팔미테이트, 바쿠치올, 나이아신아마이드, 판테놀, 병풀추출물, 비타민E 유도체.",
      "usage": "세안 후 얼굴에 밀착해 사용하고 제거 후 남은 에센스를 흡수시킨다.",
      "recommendedFor": "건조로 모공이 눈에 띄거나 탄력·윤기·피부결 관리가 필요한 경우.",
      "warnings": "레티놀 계열 성분에 민감한 피부는 사용 빈도를 낮춰 시작한다. 낮에는 자외선 차단제를 함께 사용하는 것이 좋다."
    }
  },
  {
    "number": 105,
    "code": "#105",
    "id": "lululun-hydra-pd",
    "name": "루루룬 하이드라 PD",
    "japanese": "ルルルン ハイドラ PD",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 990,
      "jpyMax": 2750,
      "checked": "2026-10-24",
      "note": "7매·28매 공식 판매가 기준."
    },
    "summary": "PDRN 계열 성분을 활용한 탄력·광채 케어 마스크.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "28",
        "name": "28매",
        "status": "active"
      }
    ],
    "image": "images/lululun-hydra-pd.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "탄력 부족과 건조로 생기가 떨어져 보이는 피부에 수분·탄력·광채를 공급하는 고보습 마스크.",
      "ingredientsOrMaterial": "주요 성분: DNA-Na 기반 PDRN 계열 성분, 인삼뿌리추출물, 나이아신아마이드, 지용성 비타민C 유도체, 판테놀, 히알루론산 유도체, 수용성 콜라겐.",
      "usage": "세안 후 얼굴에 시트를 밀착하고 권장 시간 사용한 뒤 남은 에센스를 흡수시킨다.",
      "recommendedFor": "피부의 탄력·볼륨감·광채가 부족하고 고보습 마스크를 원하는 경우.",
      "warnings": "피부에 붉어짐·가려움·자극이 생기면 사용을 중단한다. 일회용 시트를 재사용하지 않는다."
    }
  },
  {
    "number": 106,
    "code": "#106",
    "id": "lululun-hydra-cx",
    "name": "루루룬 하이드라 CX",
    "japanese": "ルルルン ハイドラ CX",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "일부 드럭스토어 / 지정 판매점",
    "status": "active",
    "price": {
      "jpyMin": 880,
      "jpyMax": 2640,
      "checked": "2026-10-24",
      "note": "7매·28매 기준. 매장 한정 취급이 있을 수 있음."
    },
    "summary": "CICA 계열 성분으로 민감해진 피부 컨디션을 정돈하는 하이드라 마스크.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "28",
        "name": "28매",
        "status": "active"
      }
    ],
    "image": "images/lululun-hydra-cx.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "건조·피부 거칠음·외부 자극으로 컨디션이 흔들린 피부를 촉촉하게 정돈하는 CICA 계열 마스크.",
      "ingredientsOrMaterial": "주요 성분: 병풀잎추출물·병풀추출물, 마데카소사이드, 아시아티코사이드, 어성초추출물, 판테놀, 비타민C 유도체, 세라마이드 NP·AP·EOP.",
      "usage": "세안 후 시트를 얼굴 전체에 밀착해 사용하고 제거 후 남은 에센스를 흡수시킨다.",
      "recommendedFor": "건조·거칠음·피부 컨디션 저하가 반복되거나 장벽 케어가 필요한 피부.",
      "warnings": "피부에 상처나 염증이 있는 경우 사용하지 않는다. 자극이 지속되면 즉시 중단한다."
    }
  },
  {
    "number": 107,
    "code": "#107",
    "id": "lululun-hydra-5ala",
    "name": "루루룬 하이드라 5ALA",
    "japanese": "ルルルン ハイドラ 5ALA",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 880,
      "jpyMax": 2640,
      "checked": "2026-10-24",
      "note": "7매·28매 공식 판매가 기준."
    },
    "summary": "5-ALA 계열 성분으로 탄력·보습 관리에 초점을 둔 하이드라 마스크.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "28",
        "name": "28매",
        "status": "active"
      }
    ],
    "image": "images/lululun-hydra-5ala.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "건조로 인한 잔주름과 탄력 저하가 신경 쓰이는 피부에 보습·윤기·탄력감을 부여하는 마스크.",
      "ingredientsOrMaterial": "주요 성분: 아미노레불린산인산염(5-ALA 계열), 구리트리펩타이드-1, 아세틸헥사펩타이드-8, 펩타이드류, 판테놀, 해바라기씨오일·메도우폼씨오일·아르간오일.",
      "usage": "세안 후 얼굴에 밀착해 사용하고 제거 후 남은 에센스를 흡수시킨다.",
      "recommendedFor": "탄력 저하·건조·피부 처짐 인상이 신경 쓰이고 촉촉하고 탄탄한 피부 표현을 원하는 경우.",
      "warnings": "피부에 이상이 있을 때는 사용하지 않으며 붉어짐·가려움·자극이 나타나면 사용을 중단한다."
    }
  },
  {
    "number": 108,
    "code": "#108",
    "id": "lululun-hydra-id",
    "name": "루루룬 하이드라 ID",
    "japanese": "ルルルン ハイドラ ID",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 880,
      "jpyMax": 2640,
      "checked": "2026-10-24",
      "note": "7매·28매 기준."
    },
    "summary": "광채·모공·피부결 정돈에 초점을 둔 하이드라 마스크.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "28",
        "name": "28매",
        "status": "active"
      }
    ],
    "image": "images/lululun-hydra-id.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "칙칙한 피부 인상과 탄력 저하, 모공이 눈에 띄는 피부를 밝고 매끄럽게 정돈하는 데 초점을 둔 마스크.",
      "ingredientsOrMaterial": "주요 성분: 하이드록시데실유비퀴논, 글루타치온, 알부틴, 나이아신아마이드, 감초산2K, 알란토인, 비타민C.",
      "usage": "세안 후 얼굴에 밀착해 사용하고 제거 후 남은 에센스를 충분히 흡수시킨다.",
      "recommendedFor": "건조로 칙칙해 보이거나 모공·피부결·광채를 한 번에 관리하고 싶은 경우.",
      "warnings": "피부에 자극이 발생하면 사용을 중단하고 눈에 들어가면 즉시 물로 씻어낸다."
    }
  },
  {
    "number": 109,
    "code": "#109",
    "id": "lululun-over45-camellia",
    "name": "루루룬 OVER45 카멜리아 핑크",
    "japanese": "ルルルンOVER45 カメリアピンク",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 605,
      "jpyMax": 2090,
      "checked": "2026-10-24",
      "note": "7매·32매 공식 판매가 기준."
    },
    "summary": "성인 피부의 건조·탄력 저하를 겨냥한 OVER45 보습 라인.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "32",
        "name": "32매",
        "status": "active"
      }
    ],
    "image": "images/lululun-over45-camellia.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "45세 전후 성인 피부의 건조·탄력 부족·건조 잔주름에 보습과 탄력감을 제공하는 모이스트 타입.",
      "ingredientsOrMaterial": "주요 성분: 이리스뿌리추출물, 로도덴드론페루기네움추출물, 황기잎추출물, 대추열매추출물, 히알루론산Na 등.",
      "usage": "세안 후 얼굴에 밀착해 데일리 화장수 마스크처럼 사용하고 제거 후 남은 에센스를 흡수시킨다.",
      "recommendedFor": "건조하고 탄력이 떨어져 보이거나 피부를 보다 촉촉하고 탄탄하게 관리하고 싶은 성인 피부.",
      "warnings": "민감한 피부는 사전 테스트 후 사용하며 피부 이상이 생기면 중단한다."
    }
  },
  {
    "number": 110,
    "code": "#110",
    "id": "lululun-over45-iris",
    "name": "루루룬 OVER45 아이리스 블루",
    "japanese": "ルルルンOVER45 アイリスブルー",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 605,
      "jpyMax": 2090,
      "checked": "2026-10-24",
      "note": "7매·32매 공식 판매가 기준."
    },
    "summary": "성인 피부의 칙칙함·피부결·탄력 관리에 초점을 둔 OVER45 라인.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "32",
        "name": "32매",
        "status": "active"
      }
    ],
    "image": "images/lululun-over45-iris.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "오래된 각질과 건조로 칙칙해 보이는 성인 피부를 매끄럽고 윤기 있게 정돈하는 클리어 타입.",
      "ingredientsOrMaterial": "주요 성분: 이리스뿌리추출물, 아케비추출물, 팔미토일테트라펩타이드-10, 해조 유래 성분, 토코페롤 등.",
      "usage": "세안 후 얼굴에 밀착해 사용하고 제거 후 시트로 가볍게 닦아낸 뒤 남은 에센스를 흡수시킨다.",
      "recommendedFor": "성인 피부의 칙칙함·건조 잔주름·탄력 저하·피부결이 신경 쓰이는 경우.",
      "warnings": "피부에 상처·염증이 있는 경우 사용하지 않는다. 자극이 지속되면 사용을 중단한다."
    }
  },  {
    "number": 111,
    "code": "#111",
    "id": "lululun-pure-everys",
    "name": "루루룬 퓨어 에브리즈",
    "japanese": "ルルルンピュア エブリーズ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 440,
      "jpyMax": 1760,
      "checked": "2026-10-24",
      "note": "7매·32매 공식 판매가 기준."
    },
    "summary": "매일 사용하기 쉬운 루루룬 기본 보습 마스크.",
    "series": "루루룬",
    "options": [
      {
        "id": "7",
        "name": "7매",
        "status": "active"
      },
      {
        "id": "32",
        "name": "32매",
        "status": "active"
      }
    ],
    "image": "images/lululun-pure-everys.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "처음 시트 마스크를 사용하거나 매일 부담 없이 수분 관리를 하고 싶은 사람을 위한 기본 데일리 마스크.",
      "ingredientsOrMaterial": "주요 성분: PCA-Na, 폴리글루탐산, 크랜베리열매추출물, 빌베리잎추출물, 미역추출물, 병풀·황금·감초·녹차·로즈마리·캐모마일 추출물, 감초산2K.",
      "usage": "세안 후 얼굴에 밀착해 사용하고 제거한 뒤 시트로 피부를 가볍게 닦아내고 남은 에센스를 흡수시킨다.",
      "recommendedFor": "특정 기능성보다 기본적인 수분·피부결 관리와 매일 사용할 마스크를 원하는 경우.",
      "warnings": "한 번 사용한 시트는 재사용하지 않는다. 피부 이상이 발생하면 사용을 중단한다."
    }
  },
  {
    "number": 112,
    "code": "#112",
    "id": "melano-cc-premium-essence",
    "name": "메라노CC 약용 기미 집중대책 프리미엄 미용액",
    "japanese": "メラノCC 薬用しみ集中対策 プレミアム美容液",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1400,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "공식 판매가 1,628엔 기준의 일본 현지 예상 범위."
    },
    "summary": "활성형 비타민C를 중심으로 기미·주근깨와 여드름 예방을 겨냥한 약용 미용액.",
    "series": "메라노CC",
    "options": [
      {
        "id": "default",
        "name": "20mL",
        "status": "active"
      }
    ],
    "image": "images/melano-cc-premium-essence.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "활성형 비타민C를 유효성분으로 사용해 멜라닌 생성을 억제하고 기미·주근깨를 예방하며 여드름 예방도 함께 겨냥한 의약부외품 미용액.",
      "ingredientsOrMaterial": "주요 유효성분: 아스코르빈산(활성형 비타민C), 피리독신염산염, 이소프로필메틸페놀, 알란토인. 보습 성분으로 아스코빌글루코사이드, 3-O-에틸아스코르빈산, 비타민C 테트라이소팔미테이트 등 비타민C 유도체 배합.",
      "usage": "세안 후 화장수 등으로 피부를 정돈한 다음 1회 약 4~5방울을 고민 부위 또는 얼굴 전체에 펴 바른다.",
      "recommendedFor": "기미·주근깨 예방과 함께 여드름·피지·피부 거칠음까지 관리하고 싶은 경우.",
      "warnings": "상처·습진 부위에는 사용하지 않는다. 사용 중 약간 따끔거릴 수 있으나 지속되거나 붉어짐·부기·가려움이 나타나면 사용을 중단한다."
    },
    "volume": "20mL"
  },
  {
    "number": 113,
    "code": "#113",
    "id": "keana-nadeshiko-rice-mask",
    "name": "케아나 나데시코 오코메노 마스크",
    "japanese": "毛穴撫子 お米のマスク",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 650,
      "jpyMax": 800,
      "checked": "2026-10-24",
      "note": "10매 공식 판매가 715엔 기준."
    },
    "summary": "일본산 쌀 유래 보습 성분을 활용한 고보습 시트 마스크.",
    "series": "케아나 나데시코",
    "options": [
      {
        "id": "default",
        "name": "10매",
        "status": "active"
      }
    ],
    "image": "images/keana-nadeshiko-rice-mask.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "100% 일본산 쌀 유래 성분을 사용한 라이쌀 세럼으로 건조한 피부를 촉촉하고 탄력 있게 정돈하는 두꺼운 시트 마스크.",
      "ingredientsOrMaterial": "주요 성분: 쌀발효액, 가수분해쌀겨추출물, 쌀겨스핑고당지질(쌀 세라마이드), 쌀겨오일, 글리세린 등.",
      "usage": "세안 후 눈과 입 위치를 맞춰 얼굴에 밀착시키고 약 5분 사용한다. 제거 후 남은 에센스를 피부에 흡수시키며 별도 세안은 필요 없다.",
      "recommendedFor": "건조로 피부결과 모공이 눈에 띄고 촉촉하고 탱탱한 피부 표현을 원하는 경우.",
      "warnings": "한 장을 재사용하지 않고 피부 자극이 생기면 사용을 중단한다. 개봉 후에는 고온다습·직사광선을 피해 보관한다."
    }
  },
  {
    "number": 114,
    "code": "#114",
    "id": "uha-instant-vitamin-d",
    "name": "UHA 순간 서플리 고농도 비타민D",
    "japanese": "UHA瞬間サプリ 高濃度ビタミンD",
    "category": "영양제",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 슈퍼",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1300,
      "checked": "2026-10-24",
      "note": "일본 현지 예상 범위."
    },
    "summary": "하루 2정으로 비타민D 37.5μg을 섭취하는 씹어먹는 보충제.",
    "series": "UHA 순간 서플리",
    "options": [
      {
        "id": "default",
        "name": "30일분",
        "status": "active"
      }
    ],
    "image": "images/uha-instant-vitamin-d.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "물 없이 씹어 먹을 수 있는 머스캣 맛 비타민D 보충제. 1일 기준량 2정에 비타민D 37.5μg(1,500IU)을 함유한다.",
      "ingredientsOrMaterial": "주요 원료: 에리스리톨, 비타민D, 산미료, 스테아린산Ca, 향료, HPC, 스테비아 등.",
      "usage": "하루 2정을 기준으로 씹어서 섭취한다.",
      "recommendedFor": "실내 생활이 많아 햇빛을 접할 기회가 적거나 식사에서 비타민D 섭취가 부족한 성인.",
      "warnings": "하루 섭취 권장량을 초과하지 않는다. 영유아·소아는 섭취하지 않으며 약 복용·통원·임신·수유 중인 경우 의사와 상담한다."
    }
  },
  {
    "number": 115,
    "code": "#115",
    "id": "oshima-tsubaki",
    "name": "오오시마 츠바키",
    "japanese": "大島椿",
    "category": "헤어·바디",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍 / 슈퍼",
    "status": "active",
    "price": {
      "jpyMin": 1430,
      "jpyMax": 1980,
      "checked": "2026-10-24",
      "note": "40mL·60mL 공식 판매가 기준."
    },
    "summary": "동백씨 오일 100%로 만든 무향 멀티 오일.",
    "series": "오오시마 츠바키",
    "options": [
      {
        "id": "40ml",
        "name": "40mL",
        "status": "active"
      },
      {
        "id": "60ml",
        "name": "60mL",
        "status": "active"
      }
    ],
    "image": "images/oshima-tsubaki.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 4.8,
      "max": 7,
      "reviewCount": 27883,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "천연 동백씨 오일 100%의 무향·무착색 멀티 오일로 모발 윤기, 건조함, 정전기 및 열 손상 관리에 사용할 수 있다.",
      "ingredientsOrMaterial": "전성분: 동백씨오일 100%. 향료·색소를 첨가하지 않은 단일 오일 제품.",
      "usage": "모발 끝에 1~몇 방울을 소량 바르는 아웃바스 트리트먼트, 두피 오일팩, 샴푸 전 헤어팩 또는 건조한 피부 보습용으로 사용한다.",
      "recommendedFor": "푸석하고 건조한 모발, 윤기·정돈이 필요한 모발 또는 단순한 성분의 멀티 오일을 원하는 경우.",
      "warnings": "소량부터 사용해 과도한 유분감을 피한다. 산화되거나 냄새·색에 이상이 생긴 제품은 사용하지 않는다."
    },
    "volume": "40mL / 60mL"
  },
  {
    "number": 116,
    "code": "#116",
    "id": "minon-amino-moist-mask",
    "name": "미논 아미노 모이스트 촉촉 마스크",
    "japanese": "ミノン アミノモイスト ぷるぷるしっとり肌マスク",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1200,
      "jpyMax": 1400,
      "checked": "2026-10-24",
      "note": "22mL×4매 공식몰 판매가 1,320엔 기준."
    },
    "summary": "민감·건조 피부의 집중 보습을 위한 젤 에센스 시트 마스크.",
    "series": "미논 아미노 모이스트",
    "options": [
      {
        "id": "default",
        "name": "4매",
        "status": "active"
      }
    ],
    "image": "images/minon-amino-moist-mask.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.6,
      "max": 7,
      "reviewCount": 279,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "민감·건조 피부를 위해 섬유 자극을 줄인 부드러운 시트와 농후한 젤 에센스를 사용한 집중 보습 마스크. 건조로 인한 잔주름을 눈에 띄지 않게 하는 효능평가시험을 완료했다.",
      "ingredientsOrMaterial": "주요 성분: 발린, 트레오닌, 세린, 류신, 프롤린, 히스티딘, 글리신, 알라닌, 아르기닌 등 아미노산과 유사 세라마이드 계열 보습 성분, 감초산2K 등.",
      "usage": "화장수 후 얼굴에 마스크를 밀착시키고 약 10~15분 사용한다. 제거 후 남은 젤 에센스를 손바닥으로 흡수시킨다.",
      "recommendedFor": "민감성·건성 피부, 건조 잔주름과 피부 당김이 신경 쓰이거나 집중 보습이 필요한 경우.",
      "warnings": "15분 이상 장시간 사용할 필요가 없다. 피부 이상이 생기면 사용을 중단하고 한 번 사용한 시트는 재사용하지 않는다."
    },
    "volume": "22mL × 4매"
  },
  {
    "number": 117,
    "code": "#117",
    "id": "iris-cl1-neo",
    "name": "아이리스 CL-I 네오",
    "japanese": "アイリスCL-I ネオ",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 500,
      "jpyMax": 800,
      "checked": "2026-10-24",
      "note": "일본 현지 예상 범위."
    },
    "summary": "콘택트렌즈 착용 중 사용할 수 있는 방부제 무첨가 1회용 점안액.",
    "series": "아이리스",
    "options": [
      {
        "id": "18",
        "name": "18개입",
        "status": "active"
      },
      {
        "id": "30",
        "name": "30개입",
        "status": "active"
      }
    ],
    "image": "images/iris-cl1-neo.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "눈의 피로, 눈물 보조(건조), 하드·소프트 콘택트렌즈 착용 중 불쾌감, 눈의 흐림",
      "activeIngredients": "타우린 1.0%, 염화나트륨 0.56%, 염화칼륨 0.113%",
      "usage": "1회 2~3방울, 1일 3~6회 점안.",
      "age": "소아 사용 시 보호자의 지도·감독 아래 사용",
      "maxUsage": "1일 3~6회",
      "warnings": "방부제 무첨가 1회용 용기이므로 개봉한 제품의 남은 약액은 보관하지 말고 버린다.",
      "contactLens": {
        "hard": true,
        "soft": true,
        "color": null,
        "note": "하드·소프트·일회용 렌즈 착용 중 사용 가능. 컬러렌즈는 구입 제품의 최신 첨부문서 확인."
      },
      "sourceNote": "일본 제조사 공식 첨부문서 기준. 실제 사용 시 구입한 제품의 최신 첨부문서를 우선한다."
    },
    "details": {
      "features": "방부제를 넣지 않은 1회용 타입으로 렌즈 착용 중 눈의 건조감·피로·불쾌감을 완화하는 눈물형 점안제.",
      "ingredientsOrMaterial": "유효성분: 타우린 1.0%, 염화나트륨 0.56%, 염화칼륨 0.113%. 첨가물로 탄산수소나트륨과 pH 조절제를 사용한다.",
      "usage": "1회 2~3방울씩 하루 3~6회 점안한다. 개봉 후 남은 약액은 버린다.",
      "recommendedFor": "콘택트렌즈 착용 중 눈이 건조하거나 피로하고 불편한 경우.",
      "warnings": "심한 눈 통증이 있거나 녹내장 진단을 받은 사람은 사용 전 상담한다. 약 2주 사용해도 개선되지 않으면 사용을 중단하고 상담한다."
    },
    "volume": "18 / 30개입"
  },
  {
    "number": 118,
    "code": "#118",
    "id": "rohto-meme-moisture-tear-serum",
    "name": "로토 meme 모이스처 티어 세럼",
    "japanese": "ロートメメ モイスチャーティアセラム",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "공식몰 / 드럭스토어",
    "status": "active",
    "price": {
      "jpyMin": 1300,
      "jpyMax": 1600,
      "checked": "2026-10-24",
      "note": "공식 희망소매가 1,430엔 기준."
    },
    "summary": "고점도 제형으로 눈의 건조함을 완화하는 콘택트렌즈 대응 점안액.",
    "series": "로토 meme",
    "options": [
      {
        "id": "default",
        "name": "12mL",
        "status": "active"
      }
    ],
    "image": "images/rohto-meme-moisture-tear-serum.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "눈물 보조(눈 건조), 눈의 피로·흐림, 소프트·하드 콘택트렌즈 착용 중 불쾌감",
      "activeIngredients": "콘드로이틴황산에스터나트륨 0.5%, 히드록시에틸셀룰로오스 0.6%, 염화칼륨 0.02%, 염화나트륨 0.4%",
      "usage": "1회 1~2방울, 1일 3~4회 점안.",
      "age": "소아 사용 시 보호자의 지도·감독 아래 사용",
      "maxUsage": "1일 3~4회",
      "warnings": "심한 눈 통증 또는 녹내장 진단이 있는 경우 사용 전 상담한다.",
      "contactLens": {
        "hard": true,
        "soft": true,
        "color": true,
        "note": "맨눈뿐 아니라 일반 콘택트렌즈와 컬러콘택트렌즈 착용 중에도 사용 가능."
      },
      "sourceNote": "로토제약 공식 현행 제품정보 기준."
    },
    "details": {
      "features": "점도가 높은 제형이 눈물막처럼 눈 표면의 수분을 유지하도록 설계된 보습 중심 점안액.",
      "ingredientsOrMaterial": "유효성분: 콘드로이틴황산에스터나트륨 0.5%, 히드록시에틸셀룰로오스 0.6%, 염화칼륨 0.02%, 염화나트륨 0.4%. 히알루론산Na도 첨가물로 포함.",
      "usage": "1회 1~2방울씩 하루 3~4회 점안한다.",
      "recommendedFor": "눈의 건조감이 강하거나 콘택트·컬러렌즈 착용 중 눈이 뻑뻑하고 불편한 경우.",
      "warnings": "점안 후 일시적인 흐림이 나타날 수 있으므로 시야가 회복된 후 운전한다. 2주 정도 사용해도 개선되지 않으면 상담한다."
    },
    "volume": "12mL"
  },
  {
    "number": 119,
    "code": "#119",
    "id": "dhc-blueberry",
    "name": "DHC 블루베리 엑기스",
    "japanese": "DHC ブルーベリーエキス",
    "category": "영양제",
    "storeGroup": "드럭스토어",
    "store": "DHC / 드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1100,
      "jpyMax": 1300,
      "checked": "2026-10-24",
      "note": "30일분 공식 판매가 1,242엔 기준."
    },
    "summary": "빌베리 안토시아닌과 루테인·비타민B군 등을 배합한 건강보조식품.",
    "series": "DHC",
    "options": [
      {
        "id": "default",
        "name": "30일분",
        "status": "active"
      }
    ],
    "image": "images/dhc-blueberry.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "북유럽산 빌베리 추출물과 루테인·카로티노이드·비타민B군을 조합한 기본형 블루베리 보충제.",
      "ingredientsOrMaterial": "1일 2정 기준: 빌베리추출물 170mg(안토시아닌 36%), 들깨씨오일 156mg, 루테인 0.6mg, 총 카로티노이드 2mg, 비타민B1·B2·B6·B12 함유.",
      "usage": "하루 2정을 기준으로 물 또는 미지근한 물과 함께 섭취한다.",
      "recommendedFor": "PC·스마트폰·독서·운전 등으로 화면이나 가까운 곳을 오래 보는 생활을 하는 성인.",
      "warnings": "건강식품으로 눈 질환 치료제가 아니다. 대두·젤라틴 알레르기가 있는 경우 원재료를 확인하고, 약 복용·통원·임신 중에는 의사와 상담한다."
    },
    "volume": "60정 / 30일분"
  },
  {
    "number": 120,
    "code": "#120",
    "id": "by365-powdery-uv-cream",
    "name": "by365 파우더리 UV 크림",
    "japanese": "by365 パウダリーUVクリーム",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1000,
      "jpyMax": 1200,
      "checked": "2026-10-24",
      "note": "현행 공식 판매가 1,089엔 기준."
    },
    "summary": "SPF50+·PA++++의 보송한 파우더리 사용감을 강조한 얼굴·몸용 자외선 차단 크림.",
    "series": "by365",
    "options": [
      {
        "id": "default",
        "name": "60g",
        "status": "active"
      }
    ],
    "image": "images/by365-powdery-uv-cream.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "바를 때는 수분감 있는 크림이지만 펴 바른 뒤 파우더처럼 보송하게 마무리되는 얼굴·몸 겸용 자외선 차단제. SPF50+·PA++++, UV 내수성★★.",
      "ingredientsOrMaterial": "자외선 차단 성분과 아크릴레이트계 파우더리 베이스를 사용하며 현행 제품은 산화아연·글리세린·알코올·파라벤·광물유 무첨가 처방.",
      "usage": "외출 전 얼굴과 몸에 충분한 양을 고르게 펴 바르고 땀을 많이 흘리거나 수건으로 닦은 뒤에는 다시 바른다.",
      "recommendedFor": "끈적이는 선크림이 싫고 보송한 마무리와 강한 자외선 차단력을 원하는 경우.",
      "warnings": "충분한 양을 사용하지 않으면 표시된 자외선 차단 효과를 얻기 어렵다. 피부에 이상이 생기면 사용을 중단한다."
    },
    "volume": "60g"
  },  {
    "number": 121,
    "code": "#121",
    "id": "by365-powdery-uv-toneup",
    "name": "by365 파우더리 UV 크림 톤업",
    "japanese": "by365 パウダリーUVクリーム トーンアップ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1000,
      "jpyMax": 1200,
      "checked": "2026-10-24",
      "note": "공식 판매가 1,089엔 기준. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "보송한 사용감과 자연스러운 톤업 효과를 더한 얼굴·몸용 자외선 차단 크림.",
    "series": "by365",
    "options": [
      {
        "id": "default",
        "name": "60g",
        "status": "active"
      }
    ],
    "image": "images/by365-powdery-uv-toneup.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "수분감 있는 크림이 피부에 펴 바르면 보송하게 마무리되고, 화이트 톤으로 피부를 자연스럽게 밝아 보이게 하는 SPF50+·PA++++ 자외선 차단제.",
      "ingredientsOrMaterial": "주요 특징 성분: CICA로 알려진 병풀추출물과 어성초추출물 등 보습 성분. 산화아연·글리세린·알코올·파라벤·광물유 무첨가, 무향료.",
      "usage": "스킨케어 마지막 단계에서 얼굴에 적당량을 고르게 펴 바른다. 목·팔·다리 등 몸에도 사용할 수 있으며 땀이나 마찰 후에는 다시 바른다.",
      "recommendedFor": "강한 자외선 차단력과 함께 끈적임이 적고 자연스러운 톤업 효과가 있는 데일리 선크림을 원하는 경우.",
      "warnings": "충분한 양을 사용하지 않으면 표시된 자외선 차단 효과가 떨어질 수 있다. 강하게 문지르거나 과량 도포하면 밀림이 생길 수 있다."
    },
    "volume": "60g"
  },
  {
    "number": 122,
    "code": "#122",
    "id": "by365-powdery-uv-gel",
    "name": "by365 파우더리 UV 젤",
    "japanese": "by365 パウダリーUVジェル",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1000,
      "jpyMax": 1200,
      "checked": "2026-10-24",
      "note": "공식 판매가 1,089엔 기준."
    },
    "summary": "빠르게 펴 발리고 보송하게 마무리되는 젤 타입 자외선 차단제.",
    "series": "by365",
    "options": [
      {
        "id": "default",
        "name": "70g",
        "status": "active"
      }
    ],
    "image": "images/by365-powdery-uv-gel.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "넓은 부위에도 빠르게 펴 바르기 쉬운 젤 제형으로, 바른 뒤에는 끈적임이 적고 보송하게 마무리되는 얼굴·몸용 UV 제품.",
      "ingredientsOrMaterial": "자외선 차단 성분과 파우더리 마무리를 위한 베이스 성분을 사용하며 산화아연·글리세린·파라벤·광물유 무첨가, 무향료.",
      "usage": "외출 전 얼굴과 몸에 충분한 양을 고르게 바른다. 팔·다리 등 넓은 부위에는 젤을 여러 지점에 나누어 올린 뒤 펴 바른다.",
      "recommendedFor": "크림보다 가볍고 빠르게 펴 발리는 선제품을 선호하거나 몸에 넓게 사용하려는 경우.",
      "warnings": "땀을 많이 흘리거나 수건으로 닦은 후에는 다시 바른다. 피부 이상이 나타나면 사용을 중단한다."
    },
    "volume": "70g"
  },
  {
    "number": 123,
    "code": "#123",
    "id": "kansosan-moisture-primer",
    "name": "칸소상 보습력 스킨케어 베이스",
    "japanese": "乾燥さん 保湿力スキンケア下地",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "2026년 10월 공식 판매가 1,540엔 기준."
    },
    "summary": "건조한 피부의 보습 지속력을 중시한 스킨케어형 메이크업 베이스.",
    "series": "乾燥さん",
    "options": [
      {
        "id": "default",
        "name": "30g",
        "status": "active"
      }
    ],
    "image": "images/kansosan-moisture-primer.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "낮 동안 피부가 갈라지거나 들뜨는 건조함을 줄이고 크림을 바른 직후처럼 촉촉한 피부 상태를 유지하도록 설계된 고보습 메이크업 베이스.",
      "ingredientsOrMaterial": "주요 보습 성분: 바셀린, 나이아신아마이드, 이소류신·류신·페닐알라닌·트레오닌·발린·히스티딘HCl 등 아미노산, 세라마이드 계열 성분.",
      "usage": "아침 스킨케어 마지막 단계에서 적당량을 얼굴 전체에 얇고 고르게 펴 바른 뒤 파운데이션을 사용한다.",
      "recommendedFor": "메이크업 후 피부 당김·각질 부각·건조로 인한 화장 들뜸이 신경 쓰이는 피부.",
      "warnings": "피부에 맞지 않거나 붉어짐·가려움·자극이 생기면 사용을 중단한다."
    },
    "volume": "30g"
  },
  {
    "number": 124,
    "code": "#124",
    "id": "kansosan-water-primer",
    "name": "칸소상 수분력 스킨케어 베이스",
    "japanese": "乾燥さん 水分力スキンケア下地",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "2026년 10월 공식 판매가 1,540엔 기준."
    },
    "summary": "속건조에 수분감을 보충하면서 피지·모공도 함께 관리하는 스킨케어 베이스.",
    "series": "乾燥さん",
    "options": [
      {
        "id": "default",
        "name": "30g",
        "status": "active"
      }
    ],
    "image": "images/kansosan-water-primer.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "피부 속은 건조하지만 표면에는 피지가 올라오는 이른바 속건조 피부를 겨냥해 수분감을 유지하면서 번들거림과 모공 인상을 정돈하는 베이스.",
      "ingredientsOrMaterial": "수분 유지 성분과 피부 컨디셔닝 성분을 중심으로 한 촉촉한 베이스 처방. 외부의 꽃가루·먼지·PM2.5·자외선 등으로부터 피부를 보호하는 콘셉트.",
      "usage": "아침 스킨케어 마지막 단계에서 얼굴 전체에 얇게 펴 바른 후 메이크업한다.",
      "recommendedFor": "피부 속은 당기지만 T존은 번들거리거나, 촉촉함과 가벼운 사용감을 함께 원하는 피부.",
      "warnings": "피부 이상이 나타나면 사용을 중단하고 눈에 들어간 경우 즉시 충분히 씻어낸다."
    },
    "volume": "30g"
  },
  {
    "number": 125,
    "code": "#125",
    "id": "kansosan-cica-green",
    "name": "칸소상 보습력 스킨케어 베이스 시카그린",
    "japanese": "乾燥さん 保湿力スキンケア下地 シカグリーン",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "2026년 10월 공식 판매가 1,540엔 기준."
    },
    "summary": "보습과 피부 붉은기 컬러 보정을 함께 겨냥한 그린 베이스.",
    "series": "乾燥さん",
    "options": [
      {
        "id": "default",
        "name": "30g",
        "status": "active"
      }
    ],
    "image": "images/kansosan-cica-green.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "그린 컬러가 피부의 붉은기를 시각적으로 보정하면서 건조함과 피부 거칠음을 관리하는 보습 메이크업 베이스.",
      "ingredientsOrMaterial": "주요 성분: 나이아신아마이드, 병풀추출물(CICA) 등 보습·피부 컨디셔닝 성분. 그린 컬러 피그먼트로 붉은기를 보정한다.",
      "usage": "스킨케어 후 얼굴 전체 또는 붉은기가 신경 쓰이는 부위에 얇게 펴 바른다.",
      "recommendedFor": "건조하면서 볼·코 주변의 붉은기가 신경 쓰이거나 베이스 단계에서 컬러 보정을 원하는 경우.",
      "warnings": "너무 많은 양을 사용하면 피부색이 과도하게 밝거나 녹색으로 보일 수 있으므로 소량부터 조절한다."
    },
    "volume": "30g"
  },
  {
    "number": 126,
    "code": "#126",
    "id": "kansosan-cover",
    "name": "칸소상 보습력 스킨케어 베이스 커버 타입",
    "japanese": "乾燥さん 保湿力スキンケア下地 カバータイプ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "2026년 10월 공식 판매가 1,540엔 기준."
    },
    "summary": "보습력을 유지하면서 피부색 불균형과 모공을 자연스럽게 보정하는 베이스.",
    "series": "乾燥さん",
    "options": [
      {
        "id": "default",
        "name": "30g",
        "status": "active"
      }
    ],
    "image": "images/kansosan-cover.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "칸소상 특유의 보습 베이스 기능에 피부색 얼룩·모공·가벼운 결점을 보정하는 메이크업 효과를 더한 커버 타입.",
      "ingredientsOrMaterial": "바셀린·나이아신아마이드·아미노산·세라마이드 계열 보습 성분과 베이지 컬러 피그먼트를 조합한 스킨케어 베이스.",
      "usage": "스킨케어 후 적당량을 얼굴 중심에서 바깥쪽으로 얇게 펴 바르고 커버가 필요한 부분은 소량 덧바른다.",
      "recommendedFor": "건조함 때문에 파운데이션이 들뜨면서 동시에 피부색 불균형·모공을 자연스럽게 커버하고 싶은 경우.",
      "warnings": "많이 바르면 두꺼워 보이거나 메이크업이 밀릴 수 있으므로 소량씩 조절한다."
    },
    "volume": "30g"
  },
  {
    "number": 127,
    "code": "#127",
    "id": "kansosan-nonchemical",
    "name": "칸소상 보습력 스킨케어 베이스 논케미",
    "japanese": "乾燥さん 保湿力スキンケア下地 ノンケミ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "2026년 10월 공식 판매가 1,540엔 기준."
    },
    "summary": "자외선 흡수제를 사용하지 않은 고보습 스킨케어 베이스.",
    "series": "乾燥さん",
    "options": [
      {
        "id": "default",
        "name": "30g",
        "status": "active"
      }
    ],
    "image": "images/kansosan-nonchemical.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "자외선 흡수제를 사용하지 않는 논케미컬 처방으로 자외선 차단과 고보습 베이스 기능을 함께 제공하는 제품.",
      "ingredientsOrMaterial": "무기계 자외선 차단 성분을 사용하는 자외선 흡수제 무첨가 처방. 보습 성분으로 바셀린·나이아신아마이드·아미노산·세라마이드 계열 성분을 배합.",
      "usage": "아침 스킨케어 마지막 단계에서 충분한 양을 얼굴 전체에 고르게 펴 바른다.",
      "recommendedFor": "자외선 흡수제가 없는 베이스를 선호하면서 건조함도 강하게 느끼는 피부.",
      "warnings": "무기 자외선 차단 성분 특성상 피부색이나 도포량에 따라 약간의 백탁이 느껴질 수 있다."
    },
    "volume": "30g"
  },
  {
    "number": 128,
    "code": "#128",
    "id": "one-by-kose-pore-clear-oil",
    "name": "ONE BY KOSE 포어 클리어 오일",
    "japanese": "ONE BY KOSÉ ポアクリア オイル",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 백화점 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1900,
      "jpyMax": 2100,
      "checked": "2026-10-24",
      "note": "180mL 공식 판매가 1,980엔 기준."
    },
    "summary": "메이크업과 함께 모공 속 굳은 각전을 녹여 제거하는 클렌징 오일.",
    "series": "ONE BY KOSÉ",
    "options": [
      {
        "id": "180ml",
        "name": "180mL",
        "status": "active"
      },
      {
        "id": "refill160ml",
        "name": "리필 160mL",
        "status": "active"
      }
    ],
    "image": "images/one-by-kose-pore-clear-oil.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "코세의 각전 클리어 기술을 사용해 모공에 굳어 있는 피지·각질 덩어리를 부드럽게 풀어 메이크업과 함께 제거하는 고기능 클렌징 오일.",
      "ingredientsOrMaterial": "미세한 오일 세정 성분이 모공 깊숙한 각전에 침투하도록 설계된 오일 베이스. 워터프루프 메이크업에도 대응한다.",
      "usage": "1일 1회, 펌프 2~3회분을 손에 덜어 메이크업과 모공 고민 부위에 충분히馴染ませ고 물 또는 미온수로 씻어낸다. 젖은 손에서도 사용할 수 있다.",
      "recommendedFor": "코·이마의 각전, 블랙헤드, 거친 모공과 메이크업을 한 번에 클렌징하고 싶은 경우.",
      "warnings": "눈에 들어가면 즉시 물로 씻어낸다. 모공을 강하게 문지르거나 장시간 마사지하지 않는다."
    },
    "volume": "180mL / 리필 160mL"
  },
  {
    "number": 129,
    "code": "#129",
    "id": "one-by-kose-serum-veil-deep-repair",
    "name": "ONE BY KOSE 세럼 베일 딥 리페어",
    "japanese": "ONE BY KOSÉ セラムヴェール ディープリペア",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 백화점 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 5800,
      "jpyMax": 6100,
      "checked": "2026-10-24",
      "note": "60mL 공식 판매가 5,940엔 기준."
    },
    "summary": "피부 자체의 수분 유지 기능 개선을 겨냥한 약용 도입 미용액.",
    "series": "ONE BY KOSÉ",
    "options": [
      {
        "id": "default",
        "name": "60mL",
        "status": "active"
      }
    ],
    "image": "images/one-by-kose-serum-veil-deep-repair.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "세안 직후 사용하는 약용 도입 미용액으로 피부의 수분 유지 기능 자체를 개선해 건조·거칠음·탄력 저하와 건조로 인한 모공 인상을 관리한다.",
      "ingredientsOrMaterial": "유효성분 라이쌀파워 No.11을 배합한 의약부외품. 피부가 스스로 세라마이드를 생성하도록 돕고 수분 유지 기능을 개선하는 것이 특징.",
      "usage": "아침·저녁 세안 직후, 화장수보다 먼저 적당량을 얼굴 전체에 부드럽게 펴 바른다.",
      "recommendedFor": "화장수·크림을 충분히 사용해도 피부 속 당김이 지속되거나 장기적인 보습 장벽 관리가 필요한 경우.",
      "warnings": "피부 이상이 생기면 사용을 중단한다. 의약부외품이지만 질환 치료 목적의 의약품은 아니다."
    },
    "volume": "60mL"
  },
  {
    "number": 130,
    "code": "#130",
    "id": "one-by-kose-melano-shot-p",
    "name": "ONE BY KOSE 멜라노샷 P",
    "japanese": "ONE BY KOSÉ メラノショット P",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 백화점 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 6100,
      "jpyMax": 6500,
      "checked": "2026-10-24",
      "note": "40mL 공식 판매가 6,270엔 기준."
    },
    "summary": "코지산을 유효성분으로 사용해 기미·주근깨 예방을 겨냥한 약용 미백 미용액.",
    "series": "ONE BY KOSÉ",
    "options": [
      {
        "id": "default",
        "name": "40mL",
        "status": "active"
      }
    ],
    "image": "images/one-by-kose-melano-shot-p.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "멜라닌을 만드는 멜라노사이트에 접근해 멜라닌의 흑색화를 억제하고 미래의 기미·주근깨를 예방하는 약용 미백 미용액.",
      "ingredientsOrMaterial": "미백 유효성분: 코지산. 그 외 진피추출물, 산쇼추출물, 유키노시타추출물, 비타민E 및 보습 성분 등을 배합.",
      "usage": "아침·저녁 화장수로 피부를 정돈한 후 적당량을 얼굴 전체 또는 기미가 신경 쓰이는 부위에 펴 바른다.",
      "recommendedFor": "기미·주근깨를 예방하고 건조로 칙칙해 보이는 피부의 투명감과 윤기를 관리하고 싶은 경우.",
      "warnings": "미백은 멜라닌 생성을 억제해 기미·주근깨를 예방한다는 의미이며 이미 생긴 기미를 제거하는 의약품이 아니다."
    },
    "volume": "40mL"
  },  {
    "number": 131,
    "code": "#131",
    "id": "one-by-kose-serum-shield",
    "name": "ONE BY KOSE 세럼 실드",
    "japanese": "ONE BY KOSÉ セラム シールド",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 백화점 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 5800,
      "jpyMax": 6100,
      "checked": "2026-10-24",
      "note": "40g 공식 판매가 5,940엔 기준."
    },
    "summary": "피부 수분 유지 기능과 주름을 동시에 개선하는 약용 고보습 밤.",
    "series": "ONE BY KOSÉ",
    "options": [
      {
        "id": "default",
        "name": "40g",
        "status": "active"
      }
    ],
    "image": "images/one-by-kose-serum-shield.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "밤 제형이 피부 위에서 촉촉하게 녹아 밀착막을 형성하고, 피부의 수분 유지 기능 개선과 주름 개선을 동시에 겨냥하는 약용 고보습 제품.",
      "ingredientsOrMaterial": "유효성분 라이쌀파워 No.11+를 배합한 의약부외품. 수분 유지 기능 개선과 주름 개선 두 효능을 가진 성분을 중심으로 설계.",
      "usage": "아침·저녁 유액 대신 또는 스킨케어 마지막 단계에 적당량을 얼굴 전체에 펴 바른다. 건조한 부분에는 덧바른다.",
      "recommendedFor": "심한 건조함과 함께 눈가·입가 주름이나 탄력 저하가 신경 쓰이는 피부.",
      "warnings": "과량을 사용하면 메이크업 전에 무겁게 느껴질 수 있다. 피부 이상이 생기면 사용을 중단한다."
    },
    "volume": "40g"
  },
  {
    "number": 132,
    "code": "#132",
    "id": "one-by-kose-pore-scrub-wash",
    "name": "ONE BY KOSE 포어 클리어 스크럽 워시",
    "japanese": "ONE BY KOSÉ ポアクリア スクラブ ウォッシュ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 백화점 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1900,
      "jpyMax": 2100,
      "checked": "2026-10-24",
      "note": "130g 공식 판매가 1,980엔 기준."
    },
    "summary": "두 종류 스크럽과 숯·클레이로 각전과 모공 노폐물을 세정하는 세안제.",
    "series": "ONE BY KOSÉ",
    "options": [
      {
        "id": "default",
        "name": "130g",
        "status": "active"
      }
    ],
    "image": "images/one-by-kose-pore-scrub-wash.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "자연 유래 마이크로 스크럽과 보습 스크럽으로 모공 주변의 각질과 각전을 제거하고 숯·클레이가 피지와 오염을 흡착하는 데일리 세안제.",
      "ingredientsOrMaterial": "주요 성분: 실리카 마이크로 스크럽, 글루코만난 기반 보습 스크럽, 숯, 타나쿠라클레이, 카올린, 벤토나이트.",
      "usage": "약 2cm 정도를 손에 덜어 물과 함께 충분히 거품 내고 얼굴 전체를 부드럽게 세안한다. 모공 고민 부위는 거품으로 가볍게 마사지한 뒤 헹군다.",
      "recommendedFor": "블랙헤드·각전·거친 모공과 오래된 각질이 신경 쓰이면서 세안 후 당김은 피하고 싶은 경우.",
      "warnings": "스크럽 알갱이로 피부를 직접 강하게 문지르지 않는다. 피부에 상처나 염증이 있으면 사용하지 않는다."
    },
    "volume": "130g"
  },
  {
    "number": 133,
    "code": "#133",
    "id": "one-by-kose-the-wrinkless-w",
    "name": "ONE BY KOSE 더 링클레스 W",
    "japanese": "ONE BY KOSÉ ザ リンクレス W",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 백화점 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 6200,
      "jpyMax": 6600,
      "checked": "2026-10-24",
      "note": "18g 공식 판매가 6,380엔 기준."
    },
    "summary": "수분 유지 기능과 주름 개선을 겨냥한 약용 크림형 미용액.",
    "series": "ONE BY KOSÉ",
    "options": [
      {
        "id": "default",
        "name": "18g",
        "status": "active"
      }
    ],
    "image": "images/one-by-kose-the-wrinkless-w.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "눈가·미간·입가 등 표정 변화로 생기기 쉬운 주름에 밀착해 표피·기저막·진피를 포함한 주름 개선과 수분 유지 기능 개선을 겨냥한 약용 미용액.",
      "ingredientsOrMaterial": "유효성분 라이쌀파워 No.11+를 배합한 의약부외품. 피부 수분 유지 기능과 주름 개선을 함께 겨냥한다.",
      "usage": "아침·저녁 스킨케어 마지막에 진주알 정도를 눈가·입가·미간 등 주름이 신경 쓰이는 부분에 부드럽게 펴 바른다.",
      "recommendedFor": "눈가·입가·미간의 깊어지는 주름과 동시에 건조함을 관리하고 싶은 경우.",
      "warnings": "눈 안에 들어가지 않도록 사용한다. 피부에 붉어짐·부기·가려움이 나타나면 중단한다."
    },
    "volume": "18g"
  },
  {
    "number": 134,
    "code": "#134",
    "id": "meltykiss-premium-chocolate-2026",
    "name": "멜티키스 프리미엄 쇼콜라",
    "japanese": "メルティーキッス プレミアムショコラ",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "limited",
    "price": {
      "jpyMin": 300,
      "jpyMax": 450,
      "checked": "2026-10-23",
      "note": "겨울 시즌 상품. 매장·재고에 따라 가격이 달라질 수 있음."
    },
    "summary": "부드럽게 녹는 식감과 진한 카카오 풍미의 겨울 시즌 멜티키스.",
    "series": "멜티키스",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/meltykiss-premium-chocolate-2026.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-23",
    "statusNote": "2026 겨울 시즌 한정",
    "isMedicine": false,
    "details": {
      "volume": "시즌별 포장 규격 확인",
      "tasteOrFeature": "입안에서 부드럽게 녹는 초콜릿과 진한 카카오 맛이 특징인 기본 멜티키스.",
      "series": "멜티키스",
      "purchaseNote": "겨울 시즌 중심으로 편의점 / 슈퍼 / 돈키호테에서 판매"
    }
  },
  {
    "number": 135,
    "code": "#135",
    "id": "meltykiss-koichigo-2026",
    "name": "멜티키스 후르티 진한 딸기",
    "japanese": "メルティーキッス フルーティー濃いちご",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "limited",
    "price": {
      "jpyMin": 300,
      "jpyMax": 450,
      "checked": "2026-10-23",
      "note": "겨울 시즌 상품. 매장·재고에 따라 가격이 달라질 수 있음."
    },
    "summary": "진한 딸기 풍미를 강조한 겨울 시즌 멜티키스.",
    "series": "멜티키스",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/meltykiss-koichigo-2026.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-23",
    "statusNote": "2026 겨울 시즌 한정",
    "isMedicine": false,
    "details": {
      "volume": "시즌별 포장 규격 확인",
      "tasteOrFeature": "부드럽게 녹는 초콜릿에 새콤달콤하고 진한 딸기 풍미를 더한 시즌 제품.",
      "series": "멜티키스",
      "purchaseNote": "겨울 시즌 중심으로 편의점 / 슈퍼 / 돈키호테에서 판매"
    }
  },
  {
    "number": 136,
    "code": "#136",
    "id": "meltykiss-caramel-2026",
    "name": "멜티키스 깊은 맛 캐러멜",
    "japanese": "メルティーキッス コク深キャラメル",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "limited",
    "price": {
      "jpyMin": 300,
      "jpyMax": 450,
      "checked": "2026-10-23",
      "note": "겨울 시즌 상품. 매장·재고에 따라 가격이 달라질 수 있음."
    },
    "summary": "진하고 깊은 캐러멜 풍미를 더한 겨울 시즌 멜티키스.",
    "series": "멜티키스",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/meltykiss-caramel-2026.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-23",
    "statusNote": "2026 겨울 시즌 한정",
    "isMedicine": false,
    "details": {
      "volume": "시즌별 포장 규격 확인",
      "tasteOrFeature": "밀키하고 깊은 캐러멜 풍미와 부드러운 멜티키스 특유의 식감을 조합한 제품.",
      "series": "멜티키스",
      "purchaseNote": "겨울 시즌 중심으로 편의점 / 슈퍼 / 돈키호테에서 판매"
    }
  },
  {
    "number": 137,
    "code": "#137",
    "id": "dhc-medicated-lip",
    "name": "DHC 약용 립크림",
    "japanese": "DHC 薬用リップクリーム",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "DHC / 드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 900,
      "checked": "2026-10-24",
      "note": "일본 공식 판매가 및 매장 판매가 기준 예상 범위."
    },
    "summary": "올리브 버진 오일 등을 사용해 건조한 입술을 보호하는 약용 립크림.",
    "series": "DHC",
    "options": [
      {
        "id": "15g",
        "name": "1개",
        "status": "active"
      }
    ],
    "image": "images/dhc-medicated-lip.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "입술 표면에 얇은 보호막을 형성해 수분 증발을 막고 건조·갈라짐을 예방하는 DHC의 대표 약용 립케어 제품.",
      "ingredientsOrMaterial": "주요 성분: 올리브 버진 오일, 알로에 추출물, 감초 유도체, 비타민E 등 보습·보호 성분.",
      "usage": "입술에 힘을 주지 않고 한두 번 가볍게 바른다. 건조함이 느껴질 때 수시로 사용할 수 있다.",
      "recommendedFor": "건조하고 갈라지기 쉬운 입술, 립메이크업 전 보습이 필요한 경우.",
      "warnings": "입술에 상처·부기·습진 등이 있으면 사용을 피한다. 사용 중 이상이 생기면 중단한다."
    }
  },
  {
    "number": 138,
    "code": "#138",
    "id": "heroine-make-mascara-remover",
    "name": "히로인메이크 스피디 마스카라 리무버",
    "japanese": "ヒロインメイク スピーディーマスカラリムーバー",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1000,
      "checked": "2026-10-24",
      "note": "6.6mL 공식 희망소매가 924엔 기준."
    },
    "summary": "워터프루프 마스카라를 문지르지 않고 빠르게 녹여내는 전용 리무버.",
    "series": "히로인메이크",
    "options": [
      {
        "id": "default",
        "name": "6.6mL",
        "status": "active"
      }
    ],
    "image": "images/heroine-make-mascara-remover.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "강력한 워터프루프 마스카라에도 빠르게馴染み, 속눈썹과 눈꺼풀을 강하게 문지르지 않고 메이크업을 녹여 제거하는 빗 타입 리무버.",
      "ingredientsOrMaterial": "오일 베이스의 메이크업 용해 성분과 속눈썹 보호를 위한 에몰리언트·컨디셔닝 성분을 조합한 마스카라 전용 리무버.",
      "usage": "클렌징 전에 마스카라를 바르듯 속눈썹 뿌리부터 끝까지 빗으로 충분히 도포한다. 잠시馴染ませ은 뒤 화장솜으로 닦거나 일반 클렌저와 함께 씻어낸다.",
      "recommendedFor": "워터프루프·필름 타입 등 잘 지워지지 않는 마스카라를 강한 마찰 없이 제거하고 싶은 경우.",
      "warnings": "눈 안에 들어가지 않도록 주의하고 들어간 경우 즉시 물로 충분히 씻는다. 사용 후 빗을 티슈로 깨끗하게 닦고 용기에 넣는다."
    },
    "volume": "6.6mL"
  },
  {
    "number": 139,
    "code": "#139",
    "id": "rosy-rosa-multi-foundation-puff-3p",
    "name": "로지로사 멀티 파운데이션 퍼프 3P",
    "japanese": "ロージーローザ マルチファンデパフ 3P",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1000,
      "checked": "2026-10-24",
      "note": "2026년 8월 출시, 3개입 공식 가격 946엔 기준."
    },
    "summary": "파우더·쿠션·리퀴드 등 모든 타입의 파운데이션에 사용하는 다용도 퍼프 3개 세트.",
    "series": "로지로사",
    "options": [
      {
        "id": "default",
        "name": "3개입",
        "status": "active"
      }
    ],
    "image": "images/rosy-rosa-multi-foundation-puff-3p.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "도톰하고 푹신한 퍼프에 뾰족한 모서리와 아치형 곡선을 추가해 볼·이마처럼 넓은 부위부터 코 옆·눈 밑처럼 좁은 부위까지 사용할 수 있는 메이크업 퍼프.",
      "ingredientsOrMaterial": "부드럽고 탄력 있는 메이크업 스펀지 소재로 구성된 3개입 세트이며 휴대·보관용 전용 케이스가 포함된다.",
      "usage": "파운데이션이나 파우더를 소량 묻혀 피부를 두드리듯 밀착시킨다. 뾰족한 부분은 코 옆·눈가 등 세밀한 부위에 사용한다.",
      "recommendedFor": "쿠션·리퀴드·크림·스틱·파우더 등 여러 베이스 제품을 하나의 퍼프로 사용하고 싶은 경우.",
      "warnings": "오염된 퍼프를 계속 사용하면 피부 트러블의 원인이 될 수 있으므로 중성세제로 주기적으로 세척하고 완전히 건조한다."
    },
    "volume": "3개입"
  },
  {
    "number": 140,
    "code": "#140",
    "id": "emaked",
    "name": "에마키드",
    "japanese": "EMAKED エマーキット",
    "category": "스킨케어·화장품",
    "storeGroup": "버라이어티",
    "store": "돈키호테 / 마츠키요 / 로프트 / 플라자 / 공식 판매점",
    "status": "active",
    "price": {
      "jpyMin": 6000,
      "jpyMax": 6700,
      "checked": "2026-10-24",
      "note": "2mL 공식 판매가 6,600엔 기준."
    },
    "summary": "취침 전 속눈썹 뿌리 주변에 사용하는 속눈썹 미용액.",
    "series": "EMAKED",
    "options": [
      {
        "id": "default",
        "name": "2mL",
        "status": "active"
      }
    ],
    "image": "images/emaked.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "하루 한 번 취침 전 속눈썹 라인에 얇게 바르는 속눈썹 미용액으로, 속눈썹을 촉촉하게 유지하고 탄력·윤기 있는 상태로 관리한다.",
      "ingredientsOrMaterial": "주요 성분: 히알루론산Na, 판테놀, 팔미토일펜타펩타이드-4, 헥사펩타이드-2, 차잎추출물, 인삼뿌리추출물, 은행잎추출물, 포도씨추출물, 실크아미노산, 비오틴 등.",
      "usage": "하루 1회 밤 세안 후 피부가 완전히 마른 상태에서 눈꺼풀의 속눈썹 뿌리 라인을 따라 한 번만 얇게 바른다.",
      "recommendedFor": "속눈썹이 건조하거나 힘없이 느껴져 매일 속눈썹 컨디셔닝 케어를 하고 싶은 경우.",
      "warnings": "많이 바른다고 효과가 빨라지는 제품이 아니므로 하루 1회 소량만 사용한다. 눈 안이나 점막에 직접 바르지 말고 충혈·가려움·색소침착 등 이상이 나타나면 즉시 중단한다."
    },
    "volume": "2mL"
  },  {
    "number": 141,
    "code": "#141",
    "id": "ebios",
    "name": "에비오스정",
    "japanese": "エビオス錠",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 600,
      "jpyMax": 1800,
      "checked": "2026-10-24",
      "note": "300정 605엔, 600정 957엔, 900정 1,430엔, 1200정 1,760엔 공식 가격 기준."
    },
    "summary": "건조효모를 주성분으로 한 위장·영양 보급 지정의약부외품.",
    "series": null,
    "options": [
      {
        "id": "300p",
        "name": "300정 파우치",
        "status": "active"
      },
      {
        "id": "600b",
        "name": "600정 병",
        "status": "active"
      },
      {
        "id": "900p",
        "name": "900정 파우치",
        "status": "active"
      },
      {
        "id": "1200b",
        "name": "1200정 병",
        "status": "active"
      },
      {
        "id": "2000b",
        "name": "2000정 병",
        "status": "check-stock"
      }
    ],
    "image": "images/ebios.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "statusNote": "2000정 제품은 2026-09-30부터 공식 판매 휴지. 나머지 규격은 판매 지속.",
    "isMedicine": true,
    "medical": {
      "medicineClass": "지정의약부외품",
      "efficacy": "위 무거움, 소화불량, 위부·복부 팽만감, 과식·과음, 속쓰림, 메스꺼움·구토, 위약, 식욕부진 및 영양 보급",
      "activeIngredients": "건조효모 7,125mg / 성인 1일량 30정",
      "usage": "1일 3회 식후 복용. 15세 이상 1회 10정, 11~14세 8정, 7~10세 5정, 5~6세 3정.",
      "age": "5세 이상",
      "maxUsage": "연령별 1회량을 1일 3회",
      "warnings": "5세 미만은 복용하지 않는다. 치료 중인 사람은 복용 전 의사·약사·등록판매자와 상담한다. 약 1개월 복용해도 증상이 개선되지 않으면 중단하고 상담한다.",
      "sourceNote": "아사히그룹식품 공식 제품정보 기준. 실제 복용 시 최신 제품 포장·첨부문서를 우선한다."
    },
    "details": {
      "features": "맥주 효모에서 유래한 건조효모를 사용한 지정의약부외품으로 위장 기능을 돕고 비타민·미네랄·아미노산 등 영양 보급을 목적으로 한다.",
      "ingredientsOrMaterial": "성인 1일량 30정에 건조효모 7,125mg 함유.",
      "usage": "15세 이상은 1회 10정, 11~14세 8정, 7~10세 5정, 5~6세 3정을 하루 3회 식후 복용한다.",
      "recommendedFor": "위 무거움·소화불량·복부팽만·과식·과음·속쓰림·식욕부진이 있거나 일상적인 영양 보급이 필요한 경우.",
      "warnings": "5세 미만 복용 금지. 치료 중인 사람은 사전 상담하고 약 1개월 복용해도 개선이 없으면 사용을 중단한다."
    },
    "volume": "300 / 600 / 900 / 1200정"
  },
  {
    "number": 142,
    "code": "#142",
    "id": "imuse-immune-care",
    "name": "기린 iMUSE 면역케어 서플리먼트",
    "japanese": "キリン iMUSE 免疫ケアサプリメント",
    "category": "영양제",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 슈퍼 / 온라인",
    "status": "active",
    "price": {
      "jpyMin": 3500,
      "jpyMax": 4500,
      "checked": "2026-10-24",
      "note": "일본 현지 예상 범위. 판매 규격·매장에 따라 달라질 수 있음."
    },
    "summary": "플라즈마 유산균을 활용한 면역 기능성 표시식품.",
    "series": "iMUSE",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/imuse-immune-care.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "플라즈마 유산균을 이용해 건강한 사람의 면역 기능 유지에 도움을 줄 수 있다는 기능성을 표시한 기능성표시식품.",
      "ingredientsOrMaterial": "주요 기능성 성분: 플라즈마 유산균(L. lactis strain Plasma). 1일 섭취 기준량에 플라즈마 유산균 1,000억 개를 함유.",
      "usage": "기본 면역케어 서플리먼트는 1일 4정을 기준으로 물 또는 미지근한 물과 함께 섭취한다. 섭취 시간은 특별히 정해져 있지 않다.",
      "recommendedFor": "일상적으로 건강 관리를 하면서 면역 기능 유지 관련 기능성표시식품을 섭취하고 싶은 성인.",
      "warnings": "의약품이 아니며 질병을 치료·예방하는 제품이 아니다. 표시된 1일 섭취량을 지키고 치료 중이거나 약을 복용하고 있는 경우 전문가와 상담한다."
    }
  },
  {
    "number": 143,
    "code": "#143",
    "id": "ululis-premium-black-serum-shampoo",
    "name": "우루리스 Premium 블랙 세럼 샴푸",
    "japanese": "ululis Premium ウォーターコンクブラックセラム シャンプー",
    "category": "헤어·바디",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "340mL 공식 판매가 1,650엔 기준."
    },
    "summary": "토스테아 복합 세정 성분을 이용해 손상 모발을 보수하면서 세정하는 프리미엄 샴푸.",
    "series": "ululis",
    "options": [
      {
        "id": "default",
        "name": "340mL",
        "status": "active"
      }
    ],
    "image": "images/ululis-premium-black-serum-shampoo.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "손상된 모발을 보수하면서 세정하도록 설계된 우루리스 프리미엄 블랙 세럼 샴푸. 블랙 플뢰르 향.",
      "ingredientsOrMaterial": "주요 성분: 토스테아 성분인 아미노에틸티오숙신산디암모늄, 아미노산계 세정 성분 코코일글루타민산TEA, 수용성 콜라겐, DNA-Na, 유산균/꿀/쌀 발효액, 쿼터늄-33, 나이아신아마이드, 글루타치온 등.",
      "usage": "두피와 모발을 미온수로 충분히 적신 후 적당량을 거품 내어 두피를 마사지하듯 세정하고 충분히 헹군다.",
      "recommendedFor": "염색·열기구 등으로 손상되고 건조해 윤기와 매끄러움이 부족한 모발.",
      "warnings": "눈에 들어가면 즉시 씻어낸다. 두피에 상처·습진이 있거나 붉어짐·가려움·자극이 생기면 사용을 중단한다."
    },
    "volume": "340mL"
  },
  {
    "number": 144,
    "code": "#144",
    "id": "ululis-aqua-moist-shampoo",
    "name": "우루리스 AQUA 모이스트 샴푸",
    "japanese": "ululis AQUA ウォーターコンク モイスト シャンプー",
    "category": "헤어·바디",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "340mL 공식 판매가 1,595엔 기준."
    },
    "summary": "히알루론산 복합 세정 성분으로 건조한 모발에 수분감을 주는 모이스트 샴푸.",
    "series": "ululis",
    "options": [
      {
        "id": "default",
        "name": "340mL",
        "status": "active"
      }
    ],
    "image": "images/ululis-aqua-moist-shampoo.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "건조하고 푸석한 모발 내부의 수분 유지에 초점을 둔 AQUA 모이스트 샴푸. 아쿠아 가든 향.",
      "ingredientsOrMaterial": "주요 성분: 히알루론산Na와 코코일글루타민산TEA로 구성된 히알루론산 복합 세정 성분. 글루콘산구리, 올리고펩타이드-41, 카르복시메틸히알루론산Na, 수용성 콜라겐, 세라마이드 AP·NP, 가수분해 케라틴 등 보습·보수 성분.",
      "usage": "두피와 모발을 미온수로 충분히 적신 뒤 적당량을 거품 내어 세정하고 충분히 헹군다.",
      "recommendedFor": "모발이 건조하고 퍼지며 수분감과 부드러움이 부족한 경우.",
      "warnings": "눈에 들어가면 즉시 씻어내고 두피에 이상이 있거나 자극이 생기면 사용을 중단한다."
    },
    "volume": "340mL"
  },
  {
    "number": 145,
    "code": "#145",
    "id": "ululis-vitac-ex-shampoo",
    "name": "우루리스 VITA.C EX 샴푸",
    "japanese": "ululis VITA.C ウォーターコンク EX シャンプー",
    "category": "헤어·바디",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "340mL 공식 판매가 1,595엔 기준."
    },
    "summary": "비타민C 유도체와 효소 세정 성분을 이용한 손상 모발용 샴푸.",
    "series": "ululis",
    "options": [
      {
        "id": "default",
        "name": "340mL",
        "status": "active"
      }
    ],
    "image": "images/ululis-vitac-ex-shampoo.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "손상이 특히 신경 쓰이는 모발을 위한 VITA.C 라인의 샴푸. 얼그레이 오렌지티 향.",
      "ingredientsOrMaterial": "주요 성분: 팔미트산아스코르빌인산3Na 비타민C 유도체, 프로테아제 효소, 아미노산계 세정 성분 코코일글루타민산TEA.",
      "usage": "모발과 두피를 충분히 적신 후 적당량을 거품 내어 세정하고 미온수로 충분히 헹군다.",
      "recommendedFor": "염색·열기구·마찰 등으로 모발의 손상과 거친 촉감이 특히 신경 쓰이는 경우.",
      "warnings": "눈에 들어가면 즉시 충분히 씻어낸다. 두피에 이상이 있거나 사용 중 자극이 발생하면 중단한다."
    },
    "volume": "340mL"
  },
  {
    "number": 146,
    "code": "#146",
    "id": "ululis-pinkme-control-shampoo",
    "name": "우루리스 PINKme 컨트롤 샴푸",
    "japanese": "ululis PINKme ウォーターコンク コントロール シャンプー",
    "category": "헤어·바디",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "340mL 공식 판매가 1,595엔 기준."
    },
    "summary": "모발의 수분 균형을 정돈해 부스스함·웨이브·곱슬을 관리하는 컨트롤 샴푸.",
    "series": "ululis",
    "options": [
      {
        "id": "default",
        "name": "340mL",
        "status": "active"
      }
    ],
    "image": "images/ululis-pinkme-control-shampoo.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "인너드라이 모발의 내부 수분을 보충하고 외부 수분의 영향을 조절해 부스스함과 웨이브·곱슬을 관리하는 샴푸. 샤봉 로제 향.",
      "ingredientsOrMaterial": "주요 성분: 가수분해 로열젤리추출물, 글루코실세라마이드, 토코페릴인산Na, 수용성 케라틴, 이소스테아로일가수분해콜라겐, 센티폴리아장미꽃수, 가수분해꿀단백질 등.",
      "usage": "두피와 모발을 미온수로 충분히 적신 후 거품을 내어 부드럽게 세정하고 충분히 헹군다.",
      "recommendedFor": "습도 변화에 따라 부스스해지거나 웨이브·곱슬·가는 모발의 정돈이 어려운 경우.",
      "warnings": "두피나 피부에 이상이 있으면 사용하지 않는다. 사용 중 붉어짐·가려움이 나타나면 중단한다."
    },
    "volume": "340mL"
  },
  {
    "number": 147,
    "code": "#147",
    "id": "ululis-kirameki-shiny-shampoo",
    "name": "우루리스 kirameki 샤이니 샴푸",
    "japanese": "ululis kirameki ウォーターコンク シャイニー シャンプー",
    "category": "헤어·바디",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "340mL 공식 판매가 1,595엔 기준."
    },
    "summary": "산성 아미노산계 세정 성분으로 큐티클과 윤기 있는 머릿결을 관리하는 샴푸.",
    "series": "ululis",
    "options": [
      {
        "id": "default",
        "name": "340mL",
        "status": "active"
      }
    ],
    "image": "images/ululis-kirameki-shiny-shampoo.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "거칠고 윤기가 부족한 모발의 큐티클을 정돈하면서 부드럽게 씻는 kirameki 라인. 샤봉 부케 향.",
      "ingredientsOrMaterial": "주요 세정 성분: 산성 아미노산계 코코일글루타민산TEA. 수분·윤기 보수 성분을 함께 배합해 모발 표면을 매끄럽게 정돈한다.",
      "usage": "모발과 두피를 충분히 적시고 적당량을 거품 내어 세정한 후 잔여물이 남지 않도록 충분히 헹군다.",
      "recommendedFor": "모발이 거칠고 뻣뻣하거나 빛 반사와 윤기가 부족해 보이는 경우.",
      "warnings": "눈에 들어가면 즉시 씻어내며 두피에 상처·습진 또는 자극이 있는 경우 사용하지 않는다."
    },
    "volume": "340mL"
  },
  {
    "number": 148,
    "code": "#148",
    "id": "chondroitin-zs",
    "name": "콘드로이친 ZS정",
    "japanese": "コンドロイチンZS錠",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 4500,
      "jpyMax": 9000,
      "checked": "2026-10-24",
      "note": "일본 현지 예상 범위. 규격과 판매점에 따라 달라질 수 있음."
    },
    "summary": "관절통·신경통·요통 등에 사용하는 콘드로이틴 의약품.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/chondroitin-zs.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "관절통, 신경통, 요통, 오십견, 신경성 난청, 음향외상성 난청 및 피로회복",
      "activeIngredients": "콘드로이틴황산에스터나트륨 1,560mg / 1일량 6정",
      "usage": "성인 1회 2정, 1일 3회 복용. 식전·식후 어느 때든 복용 가능.",
      "age": "소아 복용 금지",
      "maxUsage": "1일 6정",
      "warnings": "정해진 용법·용량을 준수하고 충분한 물 또는 미지근한 물과 함께 복용한다.",
      "sourceNote": "제리아신약 공식 첨부문서 기준. 실제 복용 시 최신 포장·첨부문서를 우선한다."
    },
    "details": {
      "features": "콘드로이틴황산에스터나트륨을 단일 유효성분으로 사용하는 제3류 의약품.",
      "ingredientsOrMaterial": "성인 1일량 6정에 콘드로이틴황산에스터나트륨 1,560mg 함유.",
      "usage": "성인은 1회 2정을 하루 3회 충분한 물 또는 미지근한 물과 함께 복용한다. 식전·식후 관계없이 복용 가능하다.",
      "recommendedFor": "관절통·신경통·요통·오십견 또는 피로회복 목적으로 해당 효능의 OTC 의약품을 찾는 성인.",
      "warnings": "소아는 복용하지 않는다. 정해진 용량을 초과하지 않으며 증상이 지속될 경우 전문가와 상담한다."
    },
    "volume": "정제"
  },
  {
    "number": 149,
    "code": "#149",
    "id": "nodo-nuru-spray",
    "name": "노도누루 스프레이",
    "japanese": "のどぬ～るスプレー",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1300,
      "jpyMax": 1900,
      "checked": "2026-10-24",
      "note": "15mL / 25mL 규격과 매장에 따라 달라질 수 있음."
    },
    "summary": "목의 환부를 살균·소독하는 요오드계 스프레이형 의약품.",
    "series": "노도누루",
    "options": [
      {
        "id": "15ml",
        "name": "15mL",
        "status": "active"
      },
      {
        "id": "25ml",
        "name": "25mL",
        "status": "active"
      }
    ],
    "image": "images/nodo-nuru-spray.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "목의 살균·소독",
      "activeIngredients": "요오드 0.5g / 100mL",
      "usage": "1일 수회 적당량을 목의 환부에 분사한다. 분사할 때는 약액을 흡입하지 않도록 가볍게 숨을 내쉬면서 사용한다.",
      "age": "2세 미만 사용 금지. 소아는 보호자의 지도·감독 아래 사용.",
      "maxUsage": "1일 수회. 장기간 연속 사용하지 않는다.",
      "warnings": "요오드 알레르기, 갑상선 질환, 2세 미만, 임신 중 또는 임신 가능성이 있는 경우, 수유 중에는 사용하지 않는다. 약 5~6일 사용해도 개선되지 않으면 중단하고 상담한다.",
      "sourceNote": "고바야시제약 공식 현행 제품정보 기준. 실제 사용 시 제품 첨부문서 우선."
    },
    "details": {
      "features": "노즐을 이용해 목의 환부에 직접 분사하여 살균·소독하는 요오드계 제3류 의약품.",
      "ingredientsOrMaterial": "유효성분: 요오드 0.5g/100mL.",
      "usage": "하루 여러 차례 필요한 때에 목의 환부에 분사한다. 약액이 기도로 들어가지 않도록 가볍게 숨을 내쉬면서 분사한다.",
      "recommendedFor": "목의 환부에 직접적인 살균·소독이 필요한 경우.",
      "warnings": "요오드 알레르기·갑상선 질환·2세 미만·임신·수유 등 금기사항을 반드시 확인한다. 장기간 연용하지 않는다."
    },
    "volume": "15mL / 25mL"
  },
  {
    "number": 150,
    "code": "#150",
    "id": "ichiran-cup-ramen",
    "name": "이치란 돈코츠 컵라멘",
    "japanese": "一蘭 とんこつ（カップ）",
    "category": "식품·음료",
    "storeGroup": "종합",
    "store": "돈키호테 / 슈퍼 / 이치란",
    "status": "active",
    "price": {
      "jpyMin": 500,
      "jpyMax": 700,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위. 매장·세일 여부에 따라 달라질 수 있음."
    },
    "summary": "이치란의 돈코츠 라멘 맛을 재현한 컵라멘.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/ichiran-cup-ramen.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "이치란 특유의 돈코츠 국물과 매운 비밀 소스의 풍미를 컵라멘 형태로 재현한 제품.",
      "series": "단일/대표 제품",
      "purchaseNote": "돈키호테 / 슈퍼 / 이치란"
    }
  },  {
    "number": 151,
    "code": "#151",
    "id": "alfort-rich-milk",
    "name": "알포트 미니초콜릿 리치밀크",
    "japanese": "アルフォートミニチョコレート リッチミルク",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 150,
      "jpyMax": 250,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위."
    },
    "summary": "진한 밀크 초콜릿 풍미의 알포트.",
    "series": "알포트",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/alfort-rich-milk.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "진한 밀크 초콜릿과 고소한 비스킷을 조합한 알포트.",
      "series": "알포트",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 152,
    "code": "#152",
    "id": "alfort-vanilla-white",
    "name": "알포트 미니초콜릿 바닐라화이트",
    "japanese": "アルフォートミニチョコレート バニラホワイト",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 150,
      "jpyMax": 250,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위."
    },
    "summary": "화이트·바닐라 계열 풍미의 알포트.",
    "series": "알포트",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/alfort-vanilla-white.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "바닐라 풍미의 화이트 초콜릿과 비스킷을 조합한 알포트.",
      "series": "알포트",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 153,
    "code": "#153",
    "id": "alfort-strawberry",
    "name": "알포트 미니초콜릿 스트로베리",
    "japanese": "アルフォートミニチョコレート ストロベリー",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 150,
      "jpyMax": 250,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위."
    },
    "summary": "딸기 초콜릿 풍미의 알포트.",
    "series": "알포트",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/alfort-strawberry.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "새콤달콤한 딸기 초콜릿과 고소한 비스킷을 조합한 알포트.",
      "series": "알포트",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 154,
    "code": "#154",
    "id": "alfort-chocolat-sable",
    "name": "알포트 미니초콜릿 쇼콜라사블레",
    "japanese": "アルフォートミニチョコレート ショコラサブレ",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 150,
      "jpyMax": 250,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위."
    },
    "summary": "쇼콜라 사블레와 초콜릿을 조합한 알포트.",
    "series": "알포트",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/alfort-chocolat-sable.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "카카오 풍미의 쇼콜라 사블레와 초콜릿을 조합해 일반 알포트보다 진한 초콜릿감을 강조한 제품.",
      "series": "알포트",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 155,
    "code": "#155",
    "id": "alfort-rich-matcha",
    "name": "알포트 미니초콜릿 진한 말차",
    "japanese": "アルフォートミニチョコレート 濃抹茶",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 160,
      "jpyMax": 280,
      "checked": "2026-10-23",
      "note": "일본 현지 예상 범위."
    },
    "summary": "진한 말차 풍미의 알포트.",
    "series": "알포트",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/alfort-rich-matcha.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-23",
    "isMedicine": false,
    "details": {
      "volume": "포장/매장별 판매 규격 확인",
      "tasteOrFeature": "진한 말차의 쌉싸름한 풍미와 비스킷을 조합한 알포트.",
      "series": "알포트",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
  {
    "number": 156,
    "code": "#156",
    "id": "muhi-er",
    "name": "무히 ER",
    "japanese": "ムヒER",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1320,
      "checked": "2026-10-24",
      "note": "공식 판매가 1,320엔 기준."
    },
    "summary": "귀 주변 등 반복되는 피부 가려움에 바르는 액상 외용제.",
    "series": null,
    "options": [
      {
        "id": "default",
        "name": "15mL",
        "status": "active"
      }
    ],
    "image": "images/muhi-er.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "지정 제2류 의약품",
      "efficacy": "가려움, 피부염, 습진, 피부 자극, 땀띠, 두드러기, 벌레물림",
      "activeIngredients": "프레드니솔론발레레이트아세테이트(PVA) 0.15g/100g, l-멘톨 1.0g/100g",
      "usage": "1일 수회 적당량을 환부에 바른다. 귀 주변에는 깨끗한 면봉 등에 약액을 묻혀 피부에 바른다.",
      "age": "15세 미만 소아에게 사용할 경우 보호자의 지도·감독 아래 사용.",
      "maxUsage": "1일 수회",
      "warnings": "외용으로만 사용한다. 눈·점막, 수두·무좀·화농 부위에는 사용하지 않는다. 얼굴에 광범위하게 사용하거나 장기간 연용하지 않는다. 사용한 면봉을 약액에 다시 넣지 않는다.",
      "sourceNote": "이케다모한도 공식 제품정보 기준. 실제 사용 시 최신 포장·첨부문서를 우선한다."
    },
    "details": {
      "features": "항염증 성분 PVA로 반복되는 가려움의 원인이 되는 염증을 억제하는 액상 외용제.",
      "ingredientsOrMaterial": "유효성분: 프레드니솔론발레레이트아세테이트(PVA) 0.15g/100g, l-멘톨 1.0g/100g.",
      "usage": "1일 수회 필요한 부위에 적당량을 바른다. 귀 주변은 청결한 면봉으로 피부에 도포한다.",
      "recommendedFor": "귀 주변 등 피부에 반복되는 가려움·습진·피부염·벌레물림이 있는 경우.",
      "warnings": "귀 안쪽 깊숙한 곳에 넣는 제품이 아니다. 눈과 점막에 닿지 않게 하고 장기간·광범위 사용을 피한다."
    },
    "volume": "15mL"
  },
  {
    "number": 157,
    "code": "#157",
    "id": "curel-foam-wash",
    "name": "큐렐 윤침보습 거품 세안제",
    "japanese": "キュレル 潤浸保湿 泡洗顔料",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1300,
      "jpyMax": 1800,
      "checked": "2026-10-24",
      "note": "일본 현지 예상 범위."
    },
    "summary": "피부의 세라마이드를 지키면서 세정하도록 설계된 건조성 민감 피부용 약용 거품 세안제.",
    "series": "큐렐",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/curel-foam-wash.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "펌프에서 바로 미세한 거품이 나와 피부 마찰을 줄이고, 건조성 민감 피부의 중요한 세라마이드를 과도하게 씻어내지 않도록 세정하는 약용 세안제.",
      "ingredientsOrMaterial": "주요 유효성분: 알란토인. 글리세린 등 보습 성분과 피부의 세라마이드 기능을 고려한 민감피부용 세정 처방. 무향료.",
      "usage": "얼굴을 적신 후 펌프 약 2회분의 거품을 얼굴 전체에 부드럽게 펴고 문지르지 않도록 세안한 후 물 또는 미온수로 충분히 헹군다.",
      "recommendedFor": "세안 후 피부 당김과 거칠음이 반복되거나 세정 시 마찰을 줄이고 싶은 건조성 민감 피부.",
      "warnings": "눈에 들어가면 즉시 충분히 씻어낸다. 피부에 상처·습진이 있거나 붉어짐·가려움이 발생하면 사용을 중단한다."
    }
  },
  {
    "number": 158,
    "code": "#158",
    "id": "curel-lotion",
    "name": "큐렐 윤침보습 화장수",
    "japanese": "キュレル 潤浸保湿 化粧水",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1700,
      "jpyMax": 2200,
      "checked": "2026-10-24",
      "note": "I / II / III 타입에 따른 일본 현지 예상 범위."
    },
    "summary": "건조성 민감 피부에 수분을 공급하는 약용 보습 화장수.",
    "series": "큐렐",
    "options": [
      {
        "id": "I",
        "name": "I 산뜻",
        "status": "active"
      },
      {
        "id": "II",
        "name": "II 보통",
        "status": "active"
      },
      {
        "id": "III",
        "name": "III 매우 촉촉",
        "status": "active"
      }
    ],
    "image": "images/curel-lotion.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "건조와 피부 거칠음이 반복되는 피부에 수분을 공급하고 세라마이드의 작용을 보완하도록 설계된 약용 화장수.",
      "ingredientsOrMaterial": "주요 유효성분: 알란토인. 유칼립투스추출물과 보습 성분을 배합하고 무향료로 설계.",
      "usage": "세안 후 펌프 약 3~4회분을 손에 덜어 얼굴 전체에 부드럽게 흡수시킨다.",
      "recommendedFor": "건조성 민감 피부. 가벼운 사용감은 I, 중간 보습감은 II, 높은 촉촉함은 III를 선택할 수 있다.",
      "warnings": "피부 이상이 있는 부위에는 사용하지 않는다. 자극·붉어짐·가려움이 지속되면 사용을 중단한다."
    }
  },
  {
    "number": 159,
    "code": "#159",
    "id": "curel-emulsion",
    "name": "큐렐 윤침보습 유액",
    "japanese": "キュレル 潤浸保湿 乳液",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1700,
      "jpyMax": 2200,
      "checked": "2026-10-24",
      "note": "일본 현지 예상 범위."
    },
    "summary": "세라마이드의 작용을 보완해 건조성 민감 피부를 촉촉하게 유지하는 약용 유액.",
    "series": "큐렐",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/curel-emulsion.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "화장수로 공급한 수분을 유지하면서 피부의 세라마이드 기능을 보완해 부드럽고 촉촉한 피부를 유지하는 약용 유액.",
      "ingredientsOrMaterial": "주요 유효성분: 알란토인. 세라마이드 기능을 보완하는 보습 성분과 유칼립투스추출물, 에몰리언트 성분을 배합.",
      "usage": "화장수 후 펌프 약 3~4회분을 얼굴 전체에 부드럽게 펴 바른다.",
      "recommendedFor": "건조·거칠음이 반복되지만 무거운 크림보다는 부드러운 유액 제형을 선호하는 민감 피부.",
      "warnings": "피부에 이상이 있거나 사용 중 붉어짐·가려움·자극이 생기면 사용을 중단한다."
    }
  },
  {
    "number": 160,
    "code": "#160",
    "id": "curel-face-cream",
    "name": "큐렐 윤침보습 페이스 크림",
    "japanese": "キュレル 潤浸保湿 フェイスクリーム",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 2500,
      "jpyMax": 3200,
      "checked": "2026-10-24",
      "note": "일본 현지 예상 범위."
    },
    "summary": "건조성 민감 피부의 세라마이드 기능을 보완하고 수분 손실을 줄이는 고보습 약용 크림.",
    "series": "큐렐",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/curel-face-cream.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "rating": {
      "score": 5.5,
      "max": 7,
      "reviewCount": 13111,
      "source": "@cosme Japan",
      "checked": "2026-10-23"
    },
    "isMedicine": false,
    "details": {
      "features": "가벼우면서도 높은 보습력을 제공해 반복되는 건조·거칠음을 관리하고 피부의 세라마이드 기능을 보완하는 약용 페이스 크림.",
      "ingredientsOrMaterial": "주요 유효성분: 알란토인. 세라마이드 기능을 보완하는 보습 성분과 유칼립투스추출물 등을 배합. 무향료.",
      "usage": "화장수 다음 단계에서 직경 약 2cm 정도를 얼굴 전체에 부드럽게 펴 바른다. 유액 후 특히 건조한 부위에 덧바를 수도 있다.",
      "recommendedFor": "건조와 피부 거칠음이 반복되고 스킨케어 마지막 단계에서 보습막을 강화하고 싶은 민감 피부.",
      "warnings": "피부 이상이 있는 부위에는 사용하지 않으며 사용 중 붉어짐·부기·가려움·자극이 나타나면 중단한다."
    }
  },  {
    "number": 161,
    "code": "#161",
    "id": "curel-deep-moisture-spray",
    "name": "큐렐 딥 모이스처 스프레이",
    "japanese": "キュレル ディープモイスチャースプレー",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 990,
      "jpyMax": 2750,
      "checked": "2026-10-24",
      "note": "60g 990엔 / 150g 1,980엔 / 250g 2,750엔 기준."
    },
    "summary": "얼굴과 몸에 사용할 수 있는 건조성 민감 피부용 약용 보습 스프레이.",
    "series": "큐렐",
    "options": [
      {
        "id": "60g",
        "name": "60g",
        "status": "active"
      },
      {
        "id": "150g",
        "name": "150g",
        "status": "active"
      },
      {
        "id": "250g",
        "name": "250g",
        "status": "active"
      }
    ],
    "image": "images/curel-deep-moisture-spray.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "미세화한 세라마이드 기능 성분이 각질층까지 전달되도록 설계된 약용 보습 스프레이. 얼굴뿐 아니라 등·허리 등 손이 닿기 어려운 몸 부위에도 사용할 수 있으며 메이크업 위에도 사용 가능하다.",
      "ingredientsOrMaterial": "유효성분 알란토인. 주요 보습 성분으로 글리세린, DPG, 세라마이드 기능 성분인 헥사데실록시PG히드록시에틸헥사데카나미드, 유칼립투스추출물, 콜레스테롤 등을 배합.",
      "usage": "피부에서 약 20cm 떨어진 위치에서 원을 그리듯 분사한 뒤 손바닥으로 부드럽게 흡수시킨다. 용기를 거꾸로 한 상태에서도 사용할 수 있다.",
      "recommendedFor": "얼굴·몸의 건조함이 반복되는 건조성 민감 피부, 목욕 후 빠른 전신 보습이나 외출 중 수분 보충이 필요한 경우.",
      "warnings": "상처·습진·부기 등 피부 이상 부위에는 사용하지 않는다. 눈에 들어가지 않도록 하고 자극이 지속되면 사용을 중단한다."
    },
    "volume": "60g / 150g / 250g"
  },
  {
    "number": 162,
    "code": "#162",
    "id": "curel-moist-repair-mask",
    "name": "큐렐 윤침보습 모이스트 리페어 시트 마스크",
    "japanese": "キュレル 潤浸保湿 モイストリペアシートマスク",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1500,
      "jpyMax": 1700,
      "checked": "2026-10-24",
      "note": "4매 공식 판매가 약 1,650엔 기준."
    },
    "summary": "건조성 민감 피부에 집중적으로 수분을 공급하고 피부 거칠음을 예방하는 약용 시트 마스크.",
    "series": "큐렐",
    "options": [
      {
        "id": "default",
        "name": "4매",
        "status": "active"
      }
    ],
    "image": "images/curel-moist-repair-mask.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "부드러운 시트가 민감한 피부에 밀착해 세라마이드 기능을 보완하고 농후한 보습액을 공급한다. 눈가·콧방울 옆 등 빈 공간에 붙일 수 있는 분리형 보조 시트도 포함한다.",
      "ingredientsOrMaterial": "유효성분 글리시리진산2K. 글리세린, 베타인, 세라마이드 기능 성분, 유칼립투스추출물 등 보습 성분을 배합한 의약부외품.",
      "usage": "화장수 후 얼굴에 밀착해 10~15분 사용한 뒤 제거하고 남은 액을 손바닥으로 흡수시킨다. 이후 유액이나 크림을 사용한다.",
      "recommendedFor": "특히 건조함이 심한 날, 피부 거칠음 예방과 집중적인 보습이 필요한 건조성 민감 피부.",
      "warnings": "시트를 붙인 채 잠들지 않는다. 개봉한 시트는 즉시 사용하고 한 번 사용한 시트는 재사용하지 않는다."
    },
    "volume": "27mL × 4매"
  },
  {
    "number": 163,
    "code": "#163",
    "id": "calamee-no-sebum-lotion",
    "name": "카라미 카라민 노세범 로션",
    "japanese": "カラミー カラミンノーセバムローション",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1100,
      "checked": "2026-10-24",
      "note": "180mL 공식 판매가 990엔 기준."
    },
    "summary": "카라민 파우더로 과잉 피지를 흡착해 번들거림을 관리하는 로션.",
    "series": "Calamee",
    "options": [
      {
        "id": "default",
        "name": "180mL",
        "status": "active"
      }
    ],
    "image": "images/calamee-no-sebum-lotion.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "카라민 흡착 파우더가 과잉 피지를 흡착해 번들거림을 줄이고 메이크업이 무너지기 어려운 보송한 피부로 정돈하는 흔들어 쓰는 로션.",
      "ingredientsOrMaterial": "주요 성분: 카라민, 어성초추출물, 병풀잎추출물, 알로에베라잎추출물, 님잎추출물, 복숭아잎추출물, 글리시리진산2K 등 6종 보습 성분. 무향료·오일프리·파라벤프리·에탄올프리.",
      "usage": "사용 전 충분히 흔든다. 세안 후 손바닥 또는 화장솜에 적당량을 덜어 피부를 누르듯 부드럽게 흡수시킨다.",
      "recommendedFor": "T존 번들거림, 과도한 피지, 모공이 눈에 띄거나 메이크업 전 피부를 보송하게 정돈하고 싶은 경우.",
      "warnings": "카라민 분말 때문에 피부에 흰 가루가 많이 보이면 가볍게 닦아내듯 흡수시킨다. 피부 자극이 발생하면 사용을 중단한다."
    },
    "volume": "180mL"
  },
  {
    "number": 164,
    "code": "#164",
    "id": "calamee-no-sebum-gel",
    "name": "카라미 카라민 노세범 젤",
    "japanese": "カラミー カラミンノーセバムジェル",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 1200,
      "jpyMax": 1400,
      "checked": "2026-10-24",
      "note": "70g 공식 판매가 1,320엔 기준."
    },
    "summary": "카라민 파우더로 번들거림을 줄이고 보송하게 마무리하는 젤.",
    "series": "Calamee",
    "options": [
      {
        "id": "default",
        "name": "70g",
        "status": "active"
      }
    ],
    "image": "images/calamee-no-sebum-gel.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "카라민이 과잉 피지를 흡착하고 끈적임이 적은 젤이 피부를 촉촉하고 보송하게 정돈한다. 메이크업 무너짐의 원인이 되는 번들거림 관리에 초점을 둔다.",
      "ingredientsOrMaterial": "주요 성분: 카라민, 실리카, 이노시톨, 병풀잎추출물, 어성초추출물, 복숭아잎추출물, 알로에베라잎추출물, 님잎추출물, 글리시리진산2K 등.",
      "usage": "화장수 등으로 피부를 정돈한 뒤 적당량을 손바닥에 덜어 얼굴 전체에 부드럽게 펴 바른다. 아침과 저녁 모두 사용할 수 있다.",
      "recommendedFor": "유분감 있는 크림이 부담스럽고 번들거림·피지·거친 피부결을 보송하게 관리하고 싶은 경우.",
      "warnings": "상처·습진 부위에는 사용하지 않는다. 눈에 들어가면 즉시 씻어내고 피부 이상이 나타나면 사용을 중단한다."
    },
    "volume": "70g"
  },
  {
    "number": 165,
    "code": "#165",
    "id": "calamee-makeup-keep-pack",
    "name": "카라미 메이크 킵 스퀘어 팩",
    "japanese": "カラミー メイクキープスクエアパック",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1100,
      "checked": "2026-10-24",
      "note": "50매 공식 판매가 990엔 기준."
    },
    "summary": "아침 메이크업 전 피지와 수분 균형을 정돈하는 사각 부분 시트 팩.",
    "series": "Calamee",
    "options": [
      {
        "id": "default",
        "name": "50매",
        "status": "active"
      }
    ],
    "image": "images/calamee-makeup-keep-pack.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "카라민 파우더가 과도한 피지를 흡착하면서 보습 성분을 공급해 아침 메이크업이 쉽게 무너지지 않는 보송한 피부로 정돈하는 부분용 시트팩.",
      "ingredientsOrMaterial": "주요 성분: 카라민, 어성초추출물, 병풀잎추출물, 알로에베라잎추출물, 님잎추출물, 복숭아잎추출물, 글리시리진산2K 등.",
      "usage": "1매씩 꺼내 이마·볼 등 원하는 부위에 붙이고 약 1~5분 후 제거한다. 남은 액은 손으로 충분히 흡수시킨다.",
      "recommendedFor": "아침 메이크업 전에 T존·볼의 피지와 번들거림을 관리하고 메이크업 지속력을 높이고 싶은 경우.",
      "warnings": "콘택트렌즈를 착용하고 있다면 먼저 렌즈를 제거한 뒤 사용한다. 개봉 후에는 지퍼 부분이 위로 향하도록 보관한다."
    },
    "volume": "50매"
  },
  {
    "number": 166,
    "code": "#166",
    "id": "rohto-lycee-b",
    "name": "로토 리세 b",
    "japanese": "ロートリセb",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 850,
      "checked": "2026-10-24",
      "note": "8mL 공식 판매가 770엔 기준."
    },
    "summary": "충혈·눈의 피로·가려움 등을 관리하는 핑크색 점안액.",
    "series": "로토 리세",
    "options": [
      {
        "id": "default",
        "name": "8mL",
        "status": "active"
      }
    ],
    "image": "images/rohto-lycee-b.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제2류 의약품",
      "efficacy": "결막충혈, 눈 가려움, 눈의 피로, 안병 예방, 하드렌즈 착용 중 불쾌감, 자외선 등에 의한 안염, 눈꺼풀 염증, 눈의 흐림",
      "activeIngredients": "테트라히드로졸린염산염 0.05%, 황산아연수화물 0.1%, 비타민B12 0.006%, 클로르페니라민말레산염 0.01%, 콘드로이틴황산에스터나트륨 0.5%, L-아스파라긴산칼륨 1%",
      "usage": "1회 1~3방울, 1일 5~6회 점안.",
      "age": "소아 사용 시 보호자의 지도·감독 아래 사용",
      "maxUsage": "1일 5~6회",
      "warnings": "심한 눈 통증 또는 녹내장 진단이 있는 경우 사용 전 상담. 약 5~6일 사용해도 개선되지 않으면 중단하고 상담.",
      "contactLens": {
        "hard": true,
        "soft": false,
        "color": false,
        "note": "하드렌즈 착용 중 불쾌감에 사용할 수 있으나 소프트·컬러렌즈 착용 중에는 사용하지 않는다."
      },
      "sourceNote": "로토제약 공식 현행 제품정보 기준. 실제 사용 시 최신 첨부문서를 우선."
    },
    "details": {
      "features": "제2류 의약품. 충혈 제거 성분과 비타민B12 등을 배합해 충혈·피로·가려움 등 여러 눈 증상에 대응한다.",
      "ingredientsOrMaterial": "테트라히드로졸린염산염 0.05%, 황산아연수화물 0.1%, 비타민B12 0.006%, 클로르페니라민말레산염 0.01%, 콘드로이틴황산에스터Na 0.5%, L-아스파라긴산K 1%.",
      "usage": "1회 1~3방울씩 하루 5~6회 점안한다.",
      "recommendedFor": "충혈, 눈의 피로, 가려움, 눈의 흐림 등이 신경 쓰이는 경우.",
      "warnings": "소프트렌즈·컬러렌즈 착용 중에는 사용하지 않는다. 심한 통증이나 녹내장이 있으면 사전 상담한다."
    },
    "volume": "8mL"
  },
  {
    "number": 167,
    "code": "#167",
    "id": "rohto-lycee-contact-w",
    "name": "로토 리세 콘택트 w",
    "japanese": "ロートリセコンタクトw",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 700,
      "jpyMax": 850,
      "checked": "2026-10-24",
      "note": "8mL 공식 판매가 770엔 기준."
    },
    "summary": "컬러렌즈를 포함한 모든 콘택트렌즈 착용 중 사용할 수 있는 점안·렌즈 장착 보조액.",
    "series": "로토 리세",
    "options": [
      {
        "id": "default",
        "name": "8mL",
        "status": "active"
      }
    ],
    "image": "images/rohto-lycee-contact-w.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "콘택트렌즈 착용 중 불쾌감, 눈 건조, 눈의 피로, 흐림 및 콘택트렌즈 장착 보조",
      "activeIngredients": "염화칼륨 0.08%, 탄산수소나트륨 0.05%, 염화나트륨 0.44%, 히프로멜로스 0.02%, 포도당 0.02%, 콘드로이틴황산에스터나트륨 0.5%",
      "usage": "점안 시 1회 1~3방울, 1일 5~6회. 렌즈 장착액으로 사용할 때는 렌즈 양면에 1~2방울씩 떨어뜨린 후 장착.",
      "age": "소아 사용 시 보호자의 지도·감독 아래 사용",
      "maxUsage": "점안은 1일 5~6회",
      "warnings": "심한 눈 통증 또는 녹내장 진단이 있는 경우 사용 전 상담. 약 2주 사용해도 개선되지 않으면 상담.",
      "contactLens": {
        "hard": true,
        "soft": true,
        "color": true,
        "note": "컬러콘택트렌즈를 포함한 모든 콘택트렌즈 착용 중 사용 가능."
      },
      "sourceNote": "로토제약 공식 현행 제품정보 기준."
    },
    "details": {
      "features": "제3류 의약품. 각막 보호 성분과 렌즈 보습 성분을 배합하고 점안액과 콘택트렌즈 장착액 두 용도로 사용할 수 있다.",
      "ingredientsOrMaterial": "염화칼륨 0.08%, 탄산수소나트륨 0.05%, 염화나트륨 0.44%, 히프로멜로스 0.02%, 포도당 0.02%, 콘드로이틴황산에스터Na 0.5%.",
      "usage": "점안 시 1회 1~3방울씩 하루 5~6회. 렌즈 장착 시 렌즈 양면을 1~2방울로 적신 뒤 착용한다.",
      "recommendedFor": "콘택트렌즈 착용 중 건조함·불쾌감·피로가 있거나 렌즈를 보다 부드럽게 장착하고 싶은 경우.",
      "warnings": "컬러렌즈까지 착용 중 사용 가능하지만 콘택트렌즈는 안과 처방과 정기 검사를 받아 사용하는 것이 권장된다."
    },
    "volume": "8mL"
  },
    {
    "number": 168,
    "code": "#168",
    "id": "rohto-lycee-glow",
    "name": "로토 리세 글로우",
    "japanese": "ロートリセグロウ",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "마츠키요 / 코코카라 계열",
    "status": "check-stock",
    "price": {
      "jpyMin": 650,
      "jpyMax": 800,
      "checked": "2026-10-24",
      "note": "마츠키요 온라인에서 767엔(세금 포함) 판매를 확인. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "소프트·하드 콘택트렌즈 착용 중에도 사용할 수 있는 보습·광채 콘셉트의 점안액. 컬러 콘택트렌즈 착용 중에는 사용할 수 없음.",
    "series": "로토 리세",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/rohto-lycee-glow.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "statusNote": "마츠모토키요시·코코카라파인 그룹 한정 판매. 2026-10-24 기준 온라인 판매 확인.",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "눈의 피로, 소프트 또는 하드 콘택트렌즈 착용 중 불쾌감, 눈의 흐림, 눈의 가려움, 자외선 등 광선에 의한 안염, 안병 예방",
      "activeIngredients": "비타민B12 0.02%, 비타민B6 0.1%, 네오스티그민메틸황산염 0.005%, 클로르페니라민말레산염 0.03%, 콘드로이틴황산에스터나트륨 0.5%",
      "usage": "1회 1~3방울, 1일 5~6회 점안.",
      "age": "소아에게 사용할 경우 보호자의 지도·감독 아래 사용.",
      "maxUsage": "1일 5~6회",
      "warnings": "의사의 치료를 받고 있는 사람, 약 등에 의해 알레르기 증상을 일으킨 적이 있는 사람, 심한 눈 통증이 있는 사람, 녹내장 진단을 받은 사람은 사용 전 의사·약사·등록판매자와 상담한다. 사용 후 피부의 발진·발적·가려움 또는 눈의 충혈·가려움·부기·따가운 통증이 나타나면 즉시 사용을 중단하고 상담한다. 눈의 흐림이 개선되지 않거나 5~6일 사용해도 증상이 좋아지지 않으면 사용을 중단하고 상담한다. 컬러 콘택트렌즈 착용 중에는 사용하지 않는다.",
      "contactLens": {
        "hard": true,
        "soft": true,
        "color": false,
        "note": "소프트·하드 콘택트렌즈 착용 중 사용할 수 있으며 렌즈를 착용하지 않은 상태에서도 사용 가능. 컬러 콘택트렌즈 착용 중에는 사용하지 않는다."
      },
      "sourceNote": "로토제약 현행 공식 제품정보 및 첨부문서를 기준으로 정리. 실제 사용 시 구입한 제품의 포장과 최신 첨부문서를 우선 확인."
    },
    "details": {
      "features": "제3류 의약품. 비타민B12와 비타민B6를 함유하고 있으며 눈의 피로와 소프트·하드 콘택트렌즈 착용 중 불쾌감, 눈의 가려움 등을 완화하는 점안액.",
      "ingredientsOrMaterial": "비타민B12 0.02%, 비타민B6 0.1%, 네오스티그민메틸황산염 0.005%, 클로르페니라민말레산염 0.03%, 콘드로이틴황산에스터나트륨 0.5%. 첨가제로 붕산, 붕사, l-멘톨, d-캄퍼, 참기름, 게라니올, 포비돈, 히알루론산Na 등을 함유.",
      "usage": "1회 1~3방울씩 1일 5~6회 점안한다. 용기 끝이 눈·눈꺼풀·속눈썹에 닿지 않도록 하고 점안용으로만 사용한다.",
      "recommendedFor": "눈의 피로·가려움·흐림이 신경 쓰이거나 소프트·하드 콘택트렌즈 착용 중 눈의 불쾌감을 완화하고 싶은 경우.",
      "warnings": "컬러 콘택트렌즈 착용 중에는 사용하지 않는다. 심한 눈 통증이 있거나 녹내장 진단을 받은 경우 사용 전 상담한다. 사용 후 발진·발적·가려움, 눈의 충혈·가려움·부기·따가운 통증 등이 나타나면 즉시 중단하고 상담한다. 눈의 흐림이 개선되지 않거나 5~6일 사용해도 증상이 좋아지지 않으면 사용을 중단하고 상담한다."
    },
    "volume": "8mL"
  },
    {
    "number": 169,
    "code": "#169",
    "id": "rohto-lycee-eyewash",
    "name": "로토 리세 세안약",
    "japanese": "ロートリセ洗眼薬",
    "category": "의약품·건강",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 850,
      "jpyMax": 1210,
      "checked": "2026-10-24",
      "note": "로토제약 공식 희망소매가격은 1,210엔이며, 2026-10-24 기준 마츠키요·코코카라 온라인 판매가는 877엔. 매장·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "콘택트렌즈를 제거한 뒤 눈의 먼지와 이물질을 씻어내는 제3류 의약품 세안약.",
    "series": "로토 리세",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/rohto-lycee-eyewash.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": true,
    "medical": {
      "medicineClass": "제3류 의약품",
      "efficacy": "눈 세정, 안병 예방",
      "activeIngredients": "비타민B12 0.001%, 비타민B6 0.01%, d-α-토코페롤아세트산에스터(천연형 비타민E) 0.0025%, 황산아연수화물 0.01%, 클로르페니라민말레산염 0.003%, 콘드로이틴황산에스터나트륨 0.01%, L-아스파라긴산칼륨 0.1%",
      "usage": "부속 아이컵에 약액 5mL를 넣어 눈을 세정하며 1일 3~6회 사용.",
      "age": "소아에게 사용할 경우 보호자의 지도·감독 아래 사용.",
      "maxUsage": "1일 3~6회",
      "warnings": "콘택트렌즈를 반드시 제거한 뒤 사용한다. 다시 콘택트렌즈를 착용할 경우 세안 후 약 10~15분 정도 지난 뒤 착용한다. 의사의 치료를 받고 있는 사람, 약 등에 의해 알레르기 증상을 일으킨 적이 있는 사람, 심한 눈 통증이 있는 사람, 안구건조증 진단을 받은 사람은 사용 전 의사·약사·등록판매자와 상담한다. 사용 후 피부의 발진·발적·가려움 또는 눈의 충혈·가려움·부기 등이 나타나거나 그 밖의 눈 이상이 느껴지면 즉시 사용을 중단하고 상담한다. 장기간 연속 사용하지 않는다.",
      "contactLens": {
        "hard": false,
        "soft": false,
        "color": false,
        "note": "모든 콘택트렌즈를 제거한 상태에서 사용하는 세안약. 다시 렌즈를 착용할 경우 세안 후 약 10~15분 정도 간격을 둔다."
      },
      "sourceNote": "로토제약 현행 공식 제품정보 및 첨부문서를 기준으로 정리. 실제 사용 시 구입한 제품의 포장과 최신 첨부문서를 우선 확인."
    },
    "details": {
      "features": "제3류 의약품. 콘택트렌즈를 제거한 뒤나 아이메이크업을 지운 뒤 눈의 먼지와 이물질을 씻어내며 눈 세정과 안병 예방에 사용하는 세안약.",
      "ingredientsOrMaterial": "비타민B12 0.001%, 비타민B6 0.01%, d-α-토코페롤아세트산에스터 0.0025%, 황산아연수화물 0.01%, 클로르페니라민말레산염 0.003%, 콘드로이틴황산에스터나트륨 0.01%, L-아스파라긴산칼륨 0.1%. 첨가제로 히알루론산Na, 붕산, 붕사, d-보르네올, 게라니올, 베르가못유 등을 함유.",
      "usage": "부속 아이컵에 약액 5mL를 넣고 눈에 밀착시켜 세정한다. 1일 3~6회 사용하며 아이컵은 사용 전후 물로 충분히 세척한다.",
      "recommendedFor": "콘택트렌즈를 제거한 후 또는 아이메이크업을 지운 뒤 눈에 들어간 먼지·이물감을 씻어내고 눈을 청결하게 관리하려는 경우.",
      "warnings": "콘택트렌즈를 착용한 상태에서는 사용하지 않는다. 다시 렌즈를 착용하려면 세안 후 약 10~15분 정도 간격을 둔다. 심한 눈 통증이 있거나 안구건조증 진단을 받은 경우 사용 전 상담한다. 피부의 발진·발적·가려움 또는 눈의 충혈·가려움·부기 등 이상이 나타나면 사용을 중단하고 상담한다. 장기간 연속 사용하지 않는다."
    },
    "volume": "450mL"
  },  {
    "number": 170,
    "code": "#170",
    "id": "takenoko-no-sato",
    "name": "타케노코노사토",
    "japanese": "たけのこの里",
    "category": "과자·간식",
    "storeGroup": "종합",
    "store": "편의점 / 슈퍼 / 돈키호테",
    "status": "active",
    "price": {
      "jpyMin": 180,
      "jpyMax": 300,
      "checked": "2026-10-24",
      "note": "일본 현지 예상 범위. 매장·세일에 따라 달라질 수 있음."
    },
    "summary": "죽순 모양의 바삭한 쿠키와 초콜릿을 조합한 메이지의 대표 과자.",
    "series": "키노코노야마·타케노코노사토",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/takenoko-no-sato.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "volume": "포장 규격은 판매 시점 기준 확인",
      "tasteOrFeature": "쿠키 부분의 바삭한 식감과 밀크 초콜릿의 달콤함을 함께 즐기는 메이지의 장기 판매 제품.",
      "series": "키노코노야마·타케노코노사토",
      "purchaseNote": "편의점 / 슈퍼 / 돈키호테"
    }
  },
    {
    "number": 171,
    "code": "#171",
    "id": "elixir-total-v-firming-ca",
    "name": "엘릭시르 토털 V 퍼밍 크림 ca",
    "japanese": "エリクシール トータルV ファーミングクリーム ca",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 화장품 전문점",
    "status": "active",
    "price": {
      "jpyMin": 11000,
      "jpyMax": 12000,
      "checked": "2026-10-24",
      "note": "2026-10-24 기준 시세이도 공식 참고소매가격은 50g 본품 11,220엔. 판매처·포인트·세일·면세 여부에 따라 달라질 수 있음."
    },
    "summary": "피부를 탄탄하게 정돈하고 보습과 탄력을 부여하는 엘릭시르의 고기능 페이스 크림.",
    "series": "엘릭시르",
    "options": [
      {
        "id": "default",
        "name": "기본",
        "status": "active"
      }
    ],
    "image": "images/elixir-total-v-firming-cream-ca.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "피부에 밀착되는 막을 형성하는 엘릭시르의 탄력 케어 기술을 적용해 피부를 탄탄하게 정돈하고 수분과 탄력을 부여하는 고기능 크림. 2026년 9월 21일 출시된 ca 버전이며 내용량은 50g.",
      "ingredientsOrMaterial": "주요 성분으로 글리세린, BG, 베타인, 미네랄오일, 디메치콘 등의 보습·에몰리언트 성분과 감초뿌리추출물, 로즈힙열매추출물, 아이리스뿌리추출물, 라즈베리추출물, 하이드록시프롤린, 작약뿌리추출물, 로즈마리추출물, 수용성 콜라겐 등을 함유.",
      "usage": "밤 스킨케어 마지막 단계에서 진주알 약 1개 정도를 기준으로 얼굴 전체에 펴 바른다. 피부를 위쪽으로 끌어올리듯 얼굴과 페이스라인에 부드럽게 마사지해 흡수시킨다.",
      "recommendedFor": "피부의 탄력 저하와 건조함이 신경 쓰이고 얼굴 전체의 탄탄한 인상과 보습 케어를 원하는 경우.",
      "warnings": "눈에 들어가지 않도록 주의하고 피부에 붉어짐·부기·가려움·자극 등의 이상이 나타나면 사용을 중단한다. 사용 후 뚜껑을 확실히 닫고 스패출러에 남은 크림을 깨끗이 닦아 보관한다. 직사광선이 닿거나 고온다습한 장소에 보관하지 않는다."
    },
    "volume": "50g"
  },
  {
    "number": 172,
    "code": "#172",
    "id": "elixir-day-care-revolution-toneup",
    "name": "엘릭시르 데이케어 레볼루션 톤업",
    "japanese": "エリクシール デーケアレボリューション トーンアップ",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "시세이도 / 드럭스토어 / 백화점",
    "status": "active",
    "price": {
      "jpyMin": 3300,
      "jpyMax": 3500,
      "checked": "2026-10-24",
      "note": "35g 공식 판매가 3,410엔 기준."
    },
    "summary": "유액·자외선차단·메이크업 베이스·톤업 기능을 한 제품에 담은 아침용 UV 유액.",
    "series": "엘릭시르",
    "options": [
      {
        "id": "baby-pink",
        "name": "베이비 핑크",
        "status": "active"
      },
      {
        "id": "pure-beige",
        "name": "퓨어 베이지",
        "status": "active"
      }
    ],
    "image": "images/elixir-day-care-revolution-toneup.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "아침 화장수 다음 한 제품으로 유액·UV 차단·톤업·메이크업 베이스 기능을 수행하는 SPF50+·PA++++ 제품.",
      "ingredientsOrMaterial": "자외선 차단 성분과 산화아연, 글리세린, 이노시톨, 아세틸히알루론산Na, 비타민C 유도체, 수용성 콜라겐 등 보습·피부 컨디셔닝 성분을 배합.",
      "usage": "아침 화장수 후 진주알 약 2개분을 얼굴 전체에 고르게 펴 바른다. 별도의 유액 없이 메이크업 베이스 단계까지 사용할 수 있다.",
      "recommendedFor": "아침 스킨케어 단계를 줄이면서 높은 자외선 차단과 자연스러운 피부 톤 보정을 원하는 경우.",
      "warnings": "SPF 표시 효과를 얻기 위해 충분한 양을 고르게 바른다. 눈에 들어가면 즉시 씻어낸다."
    },
    "volume": "35g"
  },
  {
    "number": 173,
    "code": "#173",
    "id": "elixir-brightening-lotion-ca",
    "name": "엘릭시르 브라이트닝 로션 ca",
    "japanese": "エリクシール ブライトニング ローション ca",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "시세이도 / 드럭스토어 / 백화점",
    "status": "active",
    "price": {
      "jpyMin": 3600,
      "jpyMax": 3800,
      "checked": "2026-10-24",
      "note": "170mL 공식 판매가 3,740엔 기준."
    },
    "summary": "두 가지 미백 유효성분과 탄력 보습 성분을 배합한 약용 브라이트닝 화장수.",
    "series": "엘릭시르",
    "options": [
      {
        "id": "fresh",
        "name": "산뜻한 타입",
        "status": "active"
      },
      {
        "id": "moist",
        "name": "촉촉한 타입",
        "status": "active"
      }
    ],
    "image": "images/elixir-brightening-lotion-ca.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "멜라닌 생성을 억제해 기미·주근깨를 예방하면서 수분과 탄력을 공급해 맑고 윤기 있는 피부 인상을 관리하는 약용 화장수.",
      "ingredientsOrMaterial": "미백 유효성분 4MSK(4-메톡시살리실산칼륨염)와 트라넥삼산을 배합. 작약추출물, 장미추출물, 수용성 콜라겐, 비타민C 유도체 등 보습·탄력 관리 성분 포함.",
      "usage": "아침과 저녁 세안 후 500엔 동전 크기 정도를 손바닥에 덜어 얼굴 중심에서 바깥쪽으로 부드럽게 흡수시킨다.",
      "recommendedFor": "기미·주근깨 예방과 동시에 건조·탄력 저하·칙칙한 피부 인상을 관리하고 싶은 경우.",
      "warnings": "미백은 멜라닌 생성을 억제해 기미·주근깨를 예방하는 의미다. 피부 이상이 나타나면 사용을 중단한다."
    },
    "volume": "170mL"
  },
  {
    "number": 174,
    "code": "#174",
    "id": "elixir-retino-power-wrinkle-cream",
    "name": "엘릭시르 레티노파워 링클 크림 ba",
    "japanese": "エリクシール レチノパワー リンクルクリーム ba",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "시세이도 / 드럭스토어 / 백화점",
    "status": "active",
    "price": {
      "jpyMin": 6600,
      "jpyMax": 8800,
      "checked": "2026-10-24",
      "note": "S 15g 6,600엔 / L 22g 8,800엔 / L 리필 8,470엔."
    },
    "summary": "순수 레티놀을 유효성분으로 사용하는 약용 주름 개선 부분 크림.",
    "series": "엘릭시르",
    "options": [
      {
        "id": "s15",
        "name": "S 15g",
        "status": "active"
      },
      {
        "id": "l22",
        "name": "L 22g",
        "status": "active"
      },
      {
        "id": "refill22",
        "name": "L 리필 22g",
        "status": "active"
      }
    ],
    "image": "images/elixir-retino-power-wrinkle-cream.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "순수 레티놀을 주름 개선 유효성분으로 배합해 눈가·입가뿐 아니라 이마·미간·목 등 주름 고민 부위에 사용하는 의약부외품.",
      "ingredientsOrMaterial": "주름 개선 유효성분 순수 레티놀을 중심으로 피부 수분과 탄력 관리 성분을 배합.",
      "usage": "아침과 저녁 스킨케어 마지막 단계에서 주름이 신경 쓰이는 부위에 소량을 부드럽게 펴 바른다.",
      "recommendedFor": "눈가·입가·이마·미간·목 등 주름 개선을 목적으로 순수 레티놀 의약부외품을 사용하려는 경우.",
      "warnings": "레티놀을 처음 사용하거나 민감한 피부는 소량·낮은 빈도로 시작해 피부를 적응시킨다. 아침 사용 시에는 자외선 차단제를 함께 사용한다. 과거 레티놀 제품으로 트러블이 있었던 경우 사용을 피한다."
    },
    "volume": "15g / 22g"
  },
  {
    "number": 175,
    "code": "#175",
    "id": "elixir-lift-moist-lotion-ba",
    "name": "엘릭시르 리프트모이스트 로션 마스크급 고보습 ca",
    "japanese": "エリクシール リフトモイスト ローション マスク級高保湿 ca",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "시세이도 / 드럭스토어 / 백화점",
    "status": "active",
    "price": {
      "jpyMin": 3500,
      "jpyMax": 3700,
      "checked": "2026-10-24",
      "note": "170mL 공식 판매가 3,630엔 기준."
    },
    "summary": "2026년 10월 리뉴얼된 고보습 약용 화장수로 수분을 공급하고 오래 유지하도록 설계된 제품.",
    "series": "엘릭시르",
    "options": [
      {
        "id": "170ml",
        "name": "본품 170mL",
        "status": "active"
      },
      {
        "id": "refill150ml",
        "name": "리필 150mL",
        "status": "active"
      }
    ],
    "image": "images/elixir-lift-moist-lotion-ba.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "2026년 10월 21일 출시된 현행 리프트모이스트 화장수. 고보습 록 처방으로 마스크처럼 수분을 공급하고 피부에 머물도록 해 탄력 있고 촉촉한 피부를 관리한다.",
      "ingredientsOrMaterial": "유효성분 트라넥삼산. 작약추출물, 장미추출물, L-옥시프롤린, 수용성 콜라겐, 바셀린 등 보습·탄력 관리 성분을 배합한 의약부외품.",
      "usage": "아침과 저녁 세안 후 적당량을 손바닥에 덜어 얼굴 전체에 흡수시킨다. 보다 높은 보습감을 원하면 손바닥으로 얼굴 전체를 약 6초간 감싸듯 눌러준다.",
      "recommendedFor": "나이에 따른 건조·탄력 저하를 관리하면서 마스크팩을 사용한 듯한 높은 보습감을 화장수 단계에서 원하는 경우.",
      "warnings": "피부에 붉어짐·가려움·자극이 발생하면 사용을 중단한다. 직사광선과 고온 장소를 피해 보관한다."
    },
    "volume": "170mL / 리필 150mL"
  },
  {
    "number": 176,
    "code": "#176",
    "id": "elixir-the-serum",
    "name": "엘릭시르 더 세럼 aa",
    "japanese": "エリクシール ザ セラム aa",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "시세이도 / 드럭스토어 / 백화점",
    "status": "active",
    "price": {
      "jpyMin": 8360,
      "jpyMax": 8910,
      "checked": "2026-10-24",
      "note": "50mL 본품 8,910엔 / 리필 8,360엔 기준."
    },
    "summary": "미백·탄력·보습·건조 잔주름 등 여러 성인 피부 고민에 접근하는 약용 미용액.",
    "series": "엘릭시르",
    "options": [
      {
        "id": "50ml",
        "name": "본품 50mL",
        "status": "active"
      },
      {
        "id": "refill50ml",
        "name": "리필 50mL",
        "status": "active"
      }
    ],
    "image": "images/elixir-the-serum.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "시세이도의 고기능 에이징케어 기술을 이용해 미백, 탄력, 보습, 모공 인상, 건조 잔주름 등 여러 성인 피부 고민을 동시에 관리하는 약용 미용액.",
      "ingredientsOrMaterial": "미백 유효성분 m-트라넥삼산과 독자 보습·탄력 성분을 배합. 코어키시마이드 계열 보습 성분을 빠르게 방출하도록 설계된 기술을 적용.",
      "usage": "아침·저녁 화장수 다음 단계에서 펌프 적당량을 얼굴 전체에 부드럽게 펴 바른다.",
      "recommendedFor": "한 가지 피부 고민보다 탄력·칙칙함·건조·모공·잔주름 등 복합적인 에이징 고민을 한 번에 관리하고 싶은 경우.",
      "warnings": "피부 이상이 있는 경우 사용하지 않는다. 미백은 멜라닌 생성을 억제해 기미·주근깨를 예방한다는 의미다."
    },
    "volume": "50mL"
  },
  {
    "number": 177,
    "code": "#177",
    "id": "kose-makeup-keep-mist-ex-plus",
    "name": "코세 메이크 킵 미스트 EX +",
    "japanese": "コーセー メイク キープ ミスト EX +",
    "category": "스킨케어·화장품",
    "storeGroup": "드럭스토어",
    "store": "드럭스토어 / 돈키호테 / 버라이어티숍",
    "status": "active",
    "price": {
      "jpyMin": 900,
      "jpyMax": 1500,
      "checked": "2026-10-24",
      "note": "35mL 946엔 / 80mL 1,430엔 기준."
    },
    "summary": "메이크업 위에 분사해 땀·물·피지·마찰에 의한 화장 무너짐을 줄이는 픽싱 미스트.",
    "series": "메이크 킵",
    "options": [
      {
        "id": "35ml",
        "name": "35mL",
        "status": "active"
      },
      {
        "id": "80ml",
        "name": "80mL",
        "status": "active"
      }
    ],
    "image": "images/kose-makeup-keep-mist-ex-plus.jpg",
    "imageStatus": "needed",
    "researchChecked": "2026-10-24",
    "isMedicine": false,
    "details": {
      "features": "메이크업 마무리에 미세한 미스트를 분사해 유연한 코팅막을 만들고 땀·물·피지·표정 변화·마찰에 의한 메이크업 무너짐을 줄이는 2층형 픽싱 미스트.",
      "ingredientsOrMaterial": "주요 성분: 슈퍼 메이크 코트 성분인 디메치콘/비닐트리메틸실록시실리케이트 크로스폴리머, 트리메틸실록시실리케이트, 피지 무너짐 방지 성분과 병풀추출물, 가수분해 히알루론산, 가수분해 콜라겐, 스쿠알란 등 보습 성분.",
      "usage": "2층 타입이므로 사용 전 용기를 10회 이상 충분히 흔든다. 메이크업 후 얼굴에서 약 15cm 떨어져 눈과 입을 감고 얼굴 전체에 약 5~6회 고르게 분사한 뒤 손대지 않고 그대로 건조한다.",
      "recommendedFor": "여름철·장시간 외출·마스크 착용 등으로 베이스와 포인트 메이크업이 쉽게 무너지는 경우.",
      "warnings": "눈과 입을 감고 직접 흡입하지 않도록 분사한다. 사용 후에는 만지지 않고 완전히 건조시키며 제거할 때는 클렌징 제품을 사용한다."
    },
    "volume": "35mL / 80mL"
  }
];

window.PRODUCT_COMMON_NOTICE = {
  priceRating: [
    "가격은 일본 현지 예상 범위이며 매장·세일·면세 여부에 따라 달라질 수 있습니다.",
    "한화 표시는 PRODUCT_PRICE_CONFIG의 기준 환율을 이용한 참고값이며 보기 좋게 반올림합니다.",
    "평점은 일본 현지 사이트 기준입니다. @cosme는 7점 만점 등 출처별 만점과 계산 방식이 다릅니다.",
    "서로 다른 사이트의 평점을 숫자만으로 직접 비교하지 마세요.",
    "리뷰 수와 평점은 확인일 이후 변경될 수 있습니다."
  ],
  medicine: [
    "의약품 정보는 일본 제조사 공식 제품정보와 첨부문서를 우선해 정리했습니다.",
    "실제 사용 시에는 구입한 제품의 포장 및 최신 첨부문서를 가장 우선해 확인하세요."
  ]
};