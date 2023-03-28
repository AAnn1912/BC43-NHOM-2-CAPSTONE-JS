window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("id");
  console.log("params", myParam);

  // Call API load lên giao diện
  function getAPIDetail() {
    var promise = axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
      method: "GET",
      ResponseType: "JSON",
    });

    // Thành công
    promise.then(function (res) {
      console.log("Kết quả", res.data.content);
      var product = res.data.content;
      renderAPIDetail(product);
      renderProduct(product.relatedProducts);
    });
    // Thất bại
    promise.catch(function (err) {
      console.error(err);
    });
  }
  getAPIDetail();
};
function renderAPIDetail(dataEntry) {
  var arrSize = dataEntry.size;
  var stringSize = "";
  for (var index = 0; index < arrSize.length; index++) {
    var prodsize = arrSize[index];
    stringSize += `
            <button class="sizes">${prodsize}</button>
        `;
  }
  console.log(stringSize);
  var prodDetailString = `
            <div class="container ">
                <div class="content_left">
                    <img src="${dataEntry.image}" alt="..." />
                </div>
                <div class="content_right">
                    <div class="info">
                        <h3>${dataEntry.name}</h3>
                        <p>${dataEntry.description}</p>
                    </div>
                    <div class="size_products">
                        <span>Available size</span>
                        <br />
                        ${stringSize}
                    </div>
                    <div class="cost">
                        <span>${dataEntry.price}$</span>
                    </div>
                    <div class="push_cart">
                        <button class="except"><span>-</span></button>
                        <span class="num">1</span>
                        <button class="add"><span>+</span></button> <br />
                        <button class="add_cart"><span>Add to cart</span></button>
                    </div>
                </div>
            </div>
        `;
  document.getElementById("products_detail").innerHTML = prodDetailString;
}
function renderProduct(dataEntry) {
  var htmlString = "";
  for (var index = 0; index < dataEntry.length; index++) {
    var prod = dataEntry[index];
    htmlString += `
        <div class="products-item">
            <div class="card">
                <div class="item-image">
                    <img src="${prod.image}" alt="...">
                </div>
                <div class="products-body">
                    <div class="info">
                        <h1 class="name">${prod.name}</h1>
                        <span>${prod.shortDescription}</span>
                    </div>
                    <div class="products-btn">
                        <button class="btn-products"><a href="./detail.html?id=${prod.id}">Buy now</a></button>
                        <p class="price">${prod.price}$</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    document.querySelector(".list-item").innerHTML = htmlString;
  }
}
