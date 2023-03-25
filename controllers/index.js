

function saveProduct(data){
    var arrProduct = [];
    console.log(data.length);
    for (let index = 0; index < data.length; index++){
        if( (index = 2) || (index = 5) || (index = 9) || (index = 11) || (index = 14) || (index = 17) ) {
            arrProduct.push(data[index]);
        }
    } 
    console.log('Kết quả', arrProduct); 
}
// // render dữ liệu lên giao diện
// function renderProduct(dataEntry) {
//     var htmlString = '';
//     for (var index = 0; index < dataEntry.length; index++) {
//         var prod = dataEntry[index];
//         var idProd = `'#prod${index + 1}'`;
//         htmlString += `
//             <div class="item-image">
//                 <img src="${prod.image}" alt="...">
//             </div>
//             <div class="products-body">
//                 <div class="info">
//                     <h1 class="name">${prod.name}</h1>
//                     <span>${prod.shortDescription}</span>
//                 </div>
//                 <div class="products-btn">
//                     <button class="btn-products">Buy now</button>
//                     <p class="price">${prod.price}$</p>
//                 </div>
//             </div>
//         `
//         document.querySelector(idProd).innerHTML = htmlString;
//     }
// };

// CALL API lấy dữ liệu Product về
function getProductDetail() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: JSON,
    });

    // Thành công
    promise.then(function (res) {
        console.log('Kết quả', res.data.content);
        saveProduct(res.data.content);
    })
    // Thất bại
    promise.catch(function (err) {
        console.error('err');
    })
}
// window.addEventListener('load', function () {
    getProductDetail();
// })