// Tạo function cho nút CT (change theme)
let trangThaiGiaoDien = false;
function changeTheme() {
    if (trangThaiGiaoDien == false) {
        $("link")[0].href = "css/bai20-edit.css";
        trangThaiGiaoDien = true;
        } else {
            $("link")[0].href = "css/bai20.css";
            trangThaiGiaoDien = false;
            } 
    }

// Tạo function cho nút AC (xóa sạch)
function allClear() {
    $("#calculator-screen")[0].value = "";
    $("#sub-screen")[0].value = "";
    }

// Tạo function cho nút AS (gán giá trị)
let trangThaiBien = false;
let bien = "";
function assign() {
    if (trangThaiBien == false) {
        bien = $("#calculator-screen")[0].value;
        trangThaiBien = true;
        $("#calculator-screen")[0].value ="";
        } else {
        let hienThi = $("#calculator-screen")[0].value;
        $("#calculator-screen")[0].value = hienThi + bien;
        trangThaiBien = false;
        }
    $("#sub-screen")[0].value = `var = ${bien}`; 
    }

// Tạo function cho nút DEL
function del() {
    let hienThi = $("#calculator-screen")[0].value;
    $("#calculator-screen")[0].value = hienThi.slice(0,hienThi.length - 1);
    }

// Tạo function cho các nút còn lại
let ketQua = false;
function clickButton(button) {
    if (ketQua == false) {
        let hienThi = $("#calculator-screen")[0].value;
        $("#calculator-screen")[0].value = hienThi + button.value;
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
                $("#calculator-screen")[0].value = "" + button.value;
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
                let hienThi = $("#calculator-screen")[0].value;
                $("#calculator-screen")[0].value = hienThi + button.value;
                return ketQua = false;
                }
        
            }
    }

// Tạo function cho nút equal
function result() {
    let boNhoTam = $("#calculator-screen")[0].value;

    console.log(boNhoTam);

    if ($("#calculator-screen")[0].value.search("²") != -1) {  
        let i = $("#calculator-screen")[0].value.search("²") - 1;
        boNhoTam = $("#calculator-screen")[0].value.replace("²","*").slice(0,i+2) + $("#calculator-screen")[0].value[i] + $("#calculator-screen")[0].value.replace("²","*").slice(i+2);
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

    $("#calculator-screen")[0].value = eval(boNhoTam);
    
    return ketQua = true;
    }

