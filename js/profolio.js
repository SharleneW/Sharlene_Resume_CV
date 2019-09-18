var profolioFun = () => {
  $("#itemList").html("");
  $("#pupUp").html("");
  let htmlView = "",
    popUpView = "";
  for (let loop = 0; loop < profolio.length; loop++) {
    let id = profolio[loop].id;
    let link = profolio[loop].webLink;

    htmlView += `
    <div class="item animated">
      <div class="item_bg"style="background-image: url('./file/${
        profolio[loop].image[0]
      }'); "></div>
        <div class="item_cover">
          <div class="icon">
            <a href="javascript:void(0)" id="p_demo${id}">
              <i class="fas fa-search-plus"></i></a>
            ${
              link !== ""
                ? `<a href="${link}" target="_blank">
                  <i class="fas fa-link"></i>
                </a>`
                : ""
            }
        </div>
      </div>
    </div>`;

    let imgLen = profolio[loop].image.length;
    let popUpImg = "";
    for (let loop_img = 0; loop_img < imgLen; loop_img++) {
      popUpImg += `<img src="./file/${profolio[loop].image[loop_img]}" width="100%" alt="${profolio[loop].image[loop_img]}" />`;
    }
    popUpView += `
    <div class="p_demo" id="demo${id}">
      <div class="p_btn_close"></div>
      <div class="p_demo_group">
        <div class="wrap">
          <div class="container">${popUpImg}</div>
        </div>
      </div>
    </div>`;
  }

  $("#itemList").append(htmlView);
  $("#pupUp").append(popUpView);

  for (let loop = 0; loop < profolio.length; loop++) {
    let id = profolio[loop].id;
    $("#p_demo" + id).on("click", function() {
      $("#demo" + id).css("display", "block");
      $("html").css("overflow-y", "hidden");
    });
  }

  $(".p_btn_close").on("click", function() {
    for (let loop = 0; loop < profolio.length; loop++) {
      let id = profolio[loop].id;
      $("#demo" + id).css("display", "none");
    }
    $("html").css("overflow", "auto");
  });
};

var profolio = [
  {
    id: "1",
    webLink: "https://www.liontravel.com/comm/2trs/6/2015aeshopping/",
    image: ["東北亞購物.jpg"]
  },
  {
    id: "2",
    webLink: "https://www.liontravel.com/comm/2trs/1/us_ca_thanksgiving/",
    image: ["美加促銷2.jpg"]
  },
  {
    id: "3",
    webLink: "https://www.liontravel.com/event/foodfestival/",
    image: ["玩味主義首頁2.jpg", "玩味主義產品2.jpg"]
  },
  {
    id: "4",
    webLink: "",
    image: ["鹿兒島2-1.jpg"]
  },
  {
    id: "5",
    webLink: "https://www.liontravel.com/comm/2trs/5/annualleave/",
    image: ["大陸消年假3.jpg"]
  },
  {
    id: "6",
    webLink:
      "https://www.liontravel.com/comm/2hotsales/chinesenewyear/tour_japan.asp",
    image: ["1104產品首頁01-2.jpg", "1104贈品首頁01-3.jpg"]
  },
  {
    id: "7",
    webLink: "https://www.liontravel.com/comm/2trs/hotsale/38woman/theme.asp",
    image: ["WOMEN去旅行3-1.jpg"]
  },
  {
    id: "8",
    webLink: "https://www.liontravel.com/comm/2trs/4/micro-world/tour02.asp",
    image: [
      "微觀世界首頁0219.jpg",
      "微觀世界行程頁-希臘.jpg",
      "微觀世界行程頁-百人壯遊.jpg"
    ]
  },
  {
    id: "9",
    webLink: "",
    image: ["西班牙.jpg", "葡萄牙.jpg", "摩洛哥.jpg"]
  },
  {
    id: "10",
    webLink: "",
    image: [
      "20161118精彩九州1.jpg",
      "20161118精彩九州2.jpg",
      "20161118精彩九州3.jpg",
      "20161118遇見九州4.jpg"
    ]
  },
  {
    id: "11",
    webLink: "",
    image: ["東北1.jpg", "東北2.jpg", "東北3.jpg", "東北4.jpg"]
  },
  // {
  //   "id": "12",
  //   "webLink": "",
  //   "image": [
  //     "20170209日本鐵道假期2.jpg",
  //     "20170209日本鐵道假期3.jpg",
  //     "20170209日本鐵道假期4.jpg",
  //     "20170209日本鐵道假期5.jpg"
  //   ]
  // },
  {
    id: "13",
    webLink: "",
    image: [
      "20160422大充電旅行.jpg",
      "20161108安妞3-2.jpg",
      "201611208韓國FUN-SKI.jpg",
      "20170104hito.jpg",
      "20170106黑部立山雪牆.jpg",
      "head.jpg",
      "出國夏休-旅費下修-6.jpg",
      "女子旅行-細.jpg",
      "每月一物960-2.jpg"
    ]
  }
];
