// Cơ chế khai báo biến trong ES6
// var: Tự động hỗ trợ cơ chế hoisting (tự khai báo biến lên đầu file). Ảnh hưởng toàn bộ scope
// let: không hỗ trợ cơ chế hoisting, trong cùng 1 scope không thể khai báo 2 biến trùng tên nhau được. Nếu khai báo biến cùng tên trên 1 scope khác thì let sẽ tự hiểu 2 biến phân biệt
// const: tính chất giống let, tuy nhiên ko thể gán lại giá trị được. Đối với object và array thì không thể gán = object hoặc array khác mà chỉ có thể thay đổi được thuộc tính của object, hoặc phần tử của array
// -> Đối với dự án code = ES6 thì dùng let thay cho var tất cả trường hợp
// var title='cybersoft';
{
  let title = "cybersoft";

  {
    let title = "cyberlearn";
    console.log("title1", title);
  }

  console.log("title2", title);
}

const DOMAIN = "https://svcy.myclass.vn/api";
const SETTINGS = {
  DOMAIN: "https://svcy.myclass.vn/api",
  USER_LOGIN: "cybersoft",
};

SETTINGS.DOMAIN = "ABC";

// var btn = document.querySelector('#btn');
// btn.onclick=function(){
//     alert(btn.innerHTML);
// }

var arrButton = document.querySelectorAll("button");
console.log(arrButton);
for (var i = 0; i < arrButton.length; i++) {
  //Mỗi lần duyệt lấy ra 1 button
  let btn = arrButton[i];
  // Lấy ra nội dung html của button đó
  let content = btn.innerHTML;
  // Cài đặt sự kiện onclick cho button đó
  btn.onclick = function () {
    alert(content);
  };
}

/* ------------- FUNCTION ------------------*/

// Declaration function: hỗ trợ hoisting
function showInfo() {
  console.log("hello cybersoft");
}
showInfo();

// Expression function: không hỗ trợ hoisting
var showInfo1 = function () {
  console.log("hello cybersoft 123");
};
showInfo1();

/* -------------- Arrow function ---------------
 + Không hỗ trợ hoisting
 + Đối với hàm có 1 tham số thì không cần () tham số. Đối hàm có duy nhất 1 lệnh return thi ta không cần {return}


*/

// es5
let hello = function (name) {
  console.log("hello", name);
};

// es6
let helloEs6 = (name) => {
  console.log("hello", name);
};

let getApiDelete = function (id) {
  return "http://svcy.myclass.vn/api/sinhvienapi/xoaSinhVien?maSinhVien=" + id;
};

let getApiDel = (id) =>
  "http://svcy.myclass.vn/api/sinhvienapi/xoaSinhVien?maSinhVien=" + id;

/* Ngữ cảnh (context) của this:
    + Ngữ cảnh mặc định là window
    + Ngữ cảnh object: this là object đó
    + Ngữ cảnh trong function: this là function đó
    + Nếu sử dụng hàm cho phương thức trong es6 thì ta dùng arrow function vì arrow không hỗ trợ this
    => Đối với prototype (kiểu dữ liệu mình tự định nghĩa) hoặc method (phương thức) thì dùng function. Còn lại đối với các hàm xử lý thông thường nên sử dụng arrow function
*/

let myObject = {
  id: 1,
  name: "Nguyen Van A",
  showInfo: function () {
    console.log("id", this.id);
    console.log("name", this.name);
  },
};

myObject.showInfo();

function SinhVien() {
  this.maSinhVien = "";
  this.tenSinhVien = "";
  this.hienThiThongTin = function () {
    console.log("maSinhVien", this.maSinhVien);
    console.log("tenSinhVien", this.tenSinhVien);
  };
}

let sv1 = new SinhVien();
sv1.tenSinhVien = "A";
sv1.maSinhVien = "1";
sv1.hienThiThongTin();

let sv2 = new SinhVien();
sv2.tenSinhVien = "B";
sv2.maSinhVien = "2";
sv2.hienThiThongTin();

let hocVienCyber = {
  maHocvien: 1,
  tenHocvien: "Nguyen Van A",
  hienThiThongTin: function () {
    let hienThi = () => {
      console.log("Ma Hoc Vien", this.maHocvien);
      console.log("Ten Hoc Vien", this.tenHocvien);
    };
    hienThi();
  },
};
hocVienCyber.hienThiThongTin();

/* Bài tập 2: Thay đổi màu sắc 
Cho mảng các màu yêu cầu: 
+ Sử dụng mảng màu để tạo ra các button hiển thị trên div colors
+ Xây dựng xử lý khi click vào button màu nào thi in ra div#home màu đó
*/

let arrColor = [
  "black",
  "red",
  "green",
  "blue",
  "orange",
  "pink",
  "yellow",
  "pink",
];

let renderButton = () => {
  // Cách 1:
  //   for (let i = 0; i < arrColor.length; i++) {
  //     let color = arrColor[i];
  //     let btn = document.createElement("button");
  //     btn.innerHTML = color;
  //     btn.className = "btn text-white ml-2";
  //     btn.style.backgroundColor = color;
  //     btn.onclick = function () {
        //Dom đến div#home -> change style.color
  //       document.querySelector("#home").style.color = color;
  //     };

      // Hiển thị button lên giao diện
  //     document.querySelector("#colors").appendChild(btn);

  //   }

  // renderButton();

  // Cách 2:
  let htmlOutput = "";
  for (let i = 0; i < arrColor.length; i++) {
    let color = arrColor[i];
    htmlOutput += `
        <button onclick = "changeColor('${color}')" class = "btn ml-2 text-white" style="background-color:${color}">${color}</button>
      
      
      `;
  }

  document.querySelector("#colors").innerHTML = htmlOutput;
};

renderButton();

window.changeColor = (color) => {
  document.querySelector("#home").style.color = color;
}

/*  Default parameter: 
+ Tham số mặc định của hàm: Khi gọi hàm ko truyền giá trị thì hàm sẽ tự lấy giá trị mặc định để xử lý

*/

let hienThiThongTin = (hoTen = 'Tung', namSinh = 2000, tuoi = 2022 - namSinh) => { 
    console.log('ho ten', hoTen);
    console.log('tuoi', tuoi);

}

hienThiThongTin();
hienThiThongTin('Dat', 1999);
hienThiThongTin('Dat',1999,25);
