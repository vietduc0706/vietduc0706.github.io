/* Cách làm: 

    Chia #calculator-keys ra làm 4 nhóm
    Nhóm số và dấu biểu thị số (các số từ "0" đến "9" và ".", "+/-") 
    Nhóm phép tính ("/", "*", "-", "+", "%")
    Nhóm xóa (bao gồm "CE", "C" và "⌫")
    Nhóm toán tử (chỉ có dấu "=")

    Khi clickButton thuộc nhóm số thì gán vào mảng ghi nhớ các số
    Khi clickButton thuộc nhóm phép tính thì gán vào mảng ghi nhớ các phép tính

    Duyệt mảng ghi nhớ các phép tính để tìm ra các phép tính ưu tiên
    Thực hiện các phép tính ưu tiên và gán kết quả ngược trở lại mảng ghi nhớ các số
    Đồng thời loại bỏ phần tử tương ứng trong mảng ghi nhớ các phép tính

    Cuối cùng tính ra kết quả */

/* Bắt đầu khai báo */

// Tạo biến đếm số lượng phép tính ưu tiên
var soLuongPhepTinhUuTien = 0;

// Tạo mảng ghi nhớ các số
var mangGhiNhoCacSo = new Array ();

// Tạo biến đếm số lượng phần tử trong mangGhiNhoCacSo
var soLuongPhanTuArray1 = 0;

// Tạo mảng ghi nhớ các phép tính
var mangGhiNhoCacPhepTinh = new Array ();

// Tạo biến đếm số lượng phần tử trong mangGhiNhoCacPhepTinh
var soLuongPhanTuArray2 = 0;

/* Bắt đầu viết DOM EVENT */
function clickButton(button) {
    
    var ketQua = document.getElementById ("calculator-screen"); // ketQua = thẻ <input> mang ID #calculator-screen
    
    var ketQuaOld = ketQua.value; // ketQuaOld = "0"
    
    var nutMoi = "";
    
    var giaTri = button.value; // Ấn nút số 5 => giaTri = "5"

    console.log(giaTri); // Test xem innerHTML của từng nút bấm là gì
    if (giaTri == "0" ||
        giaTri == "1" ||
        giaTri == "2" ||
        giaTri == "3" ||
        giaTri == "4" ||
        giaTri == "5" ||
        giaTri == "6" ||
        giaTri == "7" ||
        giaTri == "8" ||
        giaTri == "9" ||
        giaTri == ".") {
            nutMoi += giaTri; // nutMoi = "" + "5" = "5";
            }
    ketQua.value = ketQuaOld + nutMoi; // ketQua.value = "0" + "5" = "05"
    }