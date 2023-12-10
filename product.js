const products = [];
const productIds = [];
//Khởi tạo Object Constructor
function productsConstructor(
  productId,
  productName,
  price,
  image,
  description,
  createdAt
) {
  this.productId = productId;
  this.productName = productName;
  this.price = price;
  this.image = image;
  this.description = description;
  this.createdAt = createdAt;
}

let idChecker;
do {
  //nhập dữ liệu
  let productIdInput = +prompt("Nhập productId");
  let productNameInput = prompt("Nhập tên sản phẩm");
  let priceInput = +prompt("Nhập giá sản phẩm");
  let imageInput = prompt("Nhập link ảnh sản phẩm");
  let descriptionInput = prompt("Nhập mô tả sản phẩm");
  //format ngày nhập
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  const arrangeTime = (year, month, day) => {
    if (month > 0 && month < 10) {
      month = `0${month}`;
    }
    if (day > 0 && day < 10) {
      day = `0${day}`;
    }
    let createdAtInput = `${day}/${month}/${year}`;
    return createdAtInput;
  };
  //kiểm tra xem ID có trùng không
  if (productIds.length == 0) {
    productIds.push(productIdInput);
    idChecker = 1;
    products.push(
      new productsConstructor(
        productIdInput,
        productNameInput,
        priceInput,
        imageInput,
        descriptionInput,
        arrangeTime(year, month, day)
      )
    );
  } else {
    for (let i = 0; i < productIds.length; i++) {
      if (productIds[i] == productIdInput) {
        alert("ID sản phẩm không được trùng, nhập lại");
        idChecker = 0;
      }
    }
    if (idChecker != 0) {
      productIds.push(productIdInput);
      idChecker = 1;
      products.push(
        new productsConstructor(
          productIdInput,
          productNameInput,
          priceInput,
          imageInput,
          descriptionInput,
          arrangeTime(year, month, day)
        )
      );
    }
  }
  //có muốn nhập nữa không để dừng vòng lặp
  let continueChecker = +prompt("1 để tiếp tục nhấp sản phẩm; 0 để dừng nhập");
  if (continueChecker == 1) {
    idChecker = 1;
  } else if (continueChecker == 0) {
    idChecker = 0;
  } else {
    idChecker = 0;
  }
} while (idChecker == 1);
//kết thúc vòng lặp
console.log("Kết thúc nhập sản phẩm");
//hiển thị danh sách sản phẩm
console.log("Danh sách sản phẩm: ");
for (let i = 0; i < products.length; i++) {
  console.log(products[i].productName);
}
//tìm kiếm sản phẩm theo tên
let wantToFindProduct = prompt("Mời nhập tên sản phẩm muốn tìm: ");
for (let i = 0; i < products.length; i++) {
  if (products[i].productName == wantToFindProduct) {
    console.log("Thông tin sản phẩm bạn muốn tìm", products[i]);
  }
}
//sắp xếp sản phẩm theo giá

//lọc ra những sản phẩm giá lớn hơn 100000
console.log("Những sản phẩm giá lớn hơn 100000 là");
