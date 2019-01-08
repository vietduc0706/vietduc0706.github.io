// Tạo function cho nút AC (xóa sạch)
function allClear() {
    document.getElementById("calculator-screen").value = "";
    document.getElementById("sub-screen").value = "";
    }

// Tạo function cho nút AS (gán giá trị)
let trangThaiBien = false;
let bien = "";
function assign() {
    if (trangThaiBien == false) {
        bien = document.getElementById("calculator-screen").value;
        trangThaiBien = true;
        document.getElementById("calculator-screen").value ="";
        } else {
        let hienThi = document.getElementById("calculator-screen").value;
        document.getElementById("calculator-screen").value = hienThi + bien;
        trangThaiBien = false;
        }
    document.getElementById("sub-screen").value = `var = ${bien}`; 
    }

// Tạo function cho nút DEL
function del() {
    let hienThi = document.getElementById("calculator-screen").value;
    document.getElementById("calculator-screen").value = hienThi.slice(0,hienThi.length - 1);
    }

// Tạo function cho các nút còn lại
let ketQua = false;
function clickButton(button) {
    if (ketQua == false) {
        let hienThi = document.getElementById("calculator-screen").value;
        document.getElementById("calculator-screen").value = hienThi + button.value;
        } else {
            if (ketQua == true && (button.value == "1" ||
                                   button.value == "2" ||
                                   button.value == "3" ||
                                   button.value == "4" ||
                                   button.value == "5" ||
                                   button.value == "6" ||
                                   button.value == "7" ||
                                   button.value == "8" ||
                                   button.value == "9")) {
                document.getElementById("calculator-screen").value = "" + button.value;
                return ketQua = false;
                }
            if (ketQua == true && (button.value != "1" &&
                                   button.value != "2" &&
                                   button.value != "3" &&
                                   button.value != "4" &&
                                   button.value != "5" &&
                                   button.value != "6" &&
                                   button.value != "7" &&
                                   button.value != "8" &&
                                   button.value != "9")) {
                let hienThi = document.getElementById("calculator-screen").value;
                document.getElementById("calculator-screen").value = hienThi + button.value;
                return ketQua = false;
                }
        
            }
    }

// Tạo function cho nút equal
function result() {
    let boNhoTam = document.getElementById("calculator-screen").value;

    console.log(boNhoTam);

    if (document.getElementById("calculator-screen").value.search("²") != -1) {  
        let i = document.getElementById("calculator-screen").value.search("²") - 1;
        boNhoTam = document.getElementById("calculator-screen").value.replace("²","*").slice(0,i+2) + document.getElementById("calculator-screen").value[i] + document.getElementById("calculator-screen").value.replace("²","*").slice(i+2);
        }

    console.log(boNhoTam);

    if (boNhoTam.search("%") != -1) {  
        boNhoTam = boNhoTam.replace("%","/100");
        }

    console.log(boNhoTam);

    if (boNhoTam.search("!") != -1) {
        let j = boNhoTam.search("!") - 1;
        console.log(`j = ${j}`);
        let giaiThua = 1;
            for (var k = 1; k <= boNhoTam[j]; k = k + 1) {
                giaiThua = giaiThua * k;
                }
        console.log(`giaiThua = ${giaiThua}`);
        boNhoTam = boNhoTam.slice(0,j) + giaiThua;
        }
    console.log(boNhoTam);

    document.getElementById("calculator-screen").value = eval(boNhoTam);
    
    return ketQua = true;
    }