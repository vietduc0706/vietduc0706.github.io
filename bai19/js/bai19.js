let boCauHoi = [{
            Q: "Quần đảo Trường Sa thuộc chủ quyền của quốc gia nào?",
            A: "Việt Nam",
            B: "Thái Lan",
            C: "Indonesia",
            D: "Lào",
            cauTraLoiDung: "A"
          }, {
            Q: "Quần đảo Hoàng Sa thuộc chủ quyền của quốc gia nào?",
            A: "Campuchia",
            B: "Malaysia",
            C: "Philippines",
            D: "Việt Nam",
            cauTraLoiDung: "D"
          }, {
            Q: "Trên bản đồ thế giới, lãnh thổ Việt Nam hình gì?",
            A: "Hình tam giác",
            B: "Hình tròn",
            C: "Hình chữ S",
            D: "Hình chữ X",
            cauTraLoiDung: "C"
          }, {
            Q: "Người nào được in trên tiền giấy Việt Nam?",
            A: "Võ Nguyên Giáp",
            B: "Hồ Chí Minh",
            C: "Đỗ Mười",
            D: "Nguyễn Bá Thanh",
            cauTraLoiDung: "B"
          }, {
            Q: "Đâu là thủ đô của nước Việt Nam?",
            A: "TP. Hồ Chí Minh",
            B: "Đà Nẵng",
            C: "Hà Nội",
            D: "Sài Gòn",
            cauTraLoiDung: "C"
          }];

var cauHoiHienTai = 0;  // Biến theo dõi số thứ tự câu hỏi hiện tại
var cauTraLoi = ["","","","",""]; // Mảng chứa lựa chọn của người dùng
var cauTraLoiDung = ["A", "D", "C", "B", "C"]; // Mảng chứa câu trả lời đúng
var ketQua = 0; // Biến đếm kiểm tra số lượng câu hỏi người chơi trả lời đúng

function beginOrReset() {
    cauHoiHienTai = 0;
    document.getElementById("questionsContainer").innerText = boCauHoi[cauHoiHienTai].Q;
    document.getElementById("A").innerText = boCauHoi[cauHoiHienTai].A;
    document.getElementById("B").innerText = boCauHoi[cauHoiHienTai].B;
    document.getElementById("C").innerText = boCauHoi[cauHoiHienTai].C;
    document.getElementById("D").innerText = boCauHoi[cauHoiHienTai].D;
    console.log (cauHoiHienTai);
    }

function next() {
    switch (document.getElementById("next").innerHTML) {
        case "<p>Xem kết quả</p>":
            for (var i = 0; i < 5; i++) {
                if (cauTraLoi[i] == cauTraLoiDung[i]) {
                    ketQua = ketQua + 1;
                    };
                }
            window.location.href = "html/congratulation.html";
            if (ketQua == 5) {
                document.getElementById("congratulation").innerHTML = "<h1> Chúc mừng, bạn đã trả lời đúng. </h1>";
                }
            break;
        case "<p>Tiếp tục</p>" :
            cauHoiHienTai = cauHoiHienTai + 1;
            document.getElementById("questionsContainer").innerText = boCauHoi[cauHoiHienTai].Q;
            document.getElementById("A").innerText = boCauHoi[cauHoiHienTai].A;
            document.getElementById("B").innerText = boCauHoi[cauHoiHienTai].B;
            document.getElementById("C").innerText = boCauHoi[cauHoiHienTai].C;
            document.getElementById("D").innerText = boCauHoi[cauHoiHienTai].D;
            console.log (cauHoiHienTai);
            if (cauHoiHienTai == 4) {
                document.getElementById("next").innerHTML = "<p>Xem kết quả</p>"
                }
        }
    }

function back() {
    cauHoiHienTai = cauHoiHienTai - 1;
    document.getElementById("questionsContainer").innerText = boCauHoi[cauHoiHienTai].Q;
    document.getElementById("A").innerText = boCauHoi[cauHoiHienTai].A;
    document.getElementById("B").innerText = boCauHoi[cauHoiHienTai].B;
    document.getElementById("C").innerText = boCauHoi[cauHoiHienTai].C;
    document.getElementById("D").innerText = boCauHoi[cauHoiHienTai].D;
    console.log (cauHoiHienTai);
    if (cauHoiHienTai != 4) {
        document.getElementById("next").innerHTML = "<p>Tiếp tục</p>"
        }
    }

function clickButton(button) {
    cauTraLoi[cauHoiHienTai] = button.value;
    console.log (cauTraLoi);
    }