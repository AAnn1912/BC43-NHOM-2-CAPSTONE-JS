function saveProduct(data) {
  var arrProduct = [];
  for (let index = 0; index < data.length; index++) {
    if (
      index == 9 ||
      index == 10 ||
      index == 11 ||
      index == 12 ||
      index == 14 ||
      index == 15
    ) {
      arrProduct.push(data[index]);
    }
  }
  renderProduct(arrProduct);
}
// render dữ liệu lên giao diện
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

// CALL API lấy dữ liệu Product về
function getProductData() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    ResponseType: JSON,
  });

  // Thành công
  promise.then(function (res) {
    console.log("Kết quả", res.data.content);
    saveProduct(res.data.content);
  });
  // Thất bại
  promise.catch(function (err) {
    console.error("err");
  });
}
getProductData();
