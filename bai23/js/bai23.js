function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    // Đặt hướng sắp xếp mặc định theo chiều tăng dần

    for (var j in document.getElementsByClassName("sortIcons")) {
        document.getElementsByTagName("img")[j].src = "img/bg.png";
        }
    
    dir = "asc";
    // Chạy một vòng lặp cho đến khi biến switching == true (đã sắp xếp xong)
    while (switching) {
        // Bắt đầu bằng việc gán biến switching = false (sắp xếp vẫn chưa xong)
        switching = false;
        rows = table.rows;
        // Chạy một vòng lặp qua tất cả các hàng trong cột (trừ hàng đầu tiên chứa table headers):
        for (i = 1; i < (rows.length - 1); i++) {
            // Bắt đầu bằng việc gán biến shouldSwitch = false (không nên tráo đổi vị trí)
            shouldSwitch = false;
            // Lấy ra 2 ô để so sánh, một ở hàng hiện tại và một ở hàng kế tiếp
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            // Kiểm tra xem 2 ô có cần tráo đổi vị trí hay không, dựa trên chiều sắp xếp (asc hoặc desc)
            if (isNaN(x.innerHTML) == true) {
                if (dir == "asc") {
                    document.getElementsByTagName("img")[n].src = "img/asc.png";
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // Nếu điều kiện đúng tức là cần tráo đổi, gán biến shouldSwitch = true và thoát khỏi vòng lặp for
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    document.getElementsByTagName("img")[n].src = "img/desc.png";
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // Nếu điều kiện đúng tức là cần tráo đổi, gán biến shouldSwitch = true và thoát khỏi vòng lặp for
                        shouldSwitch = true;
                        break;
                    }
                }
            } else {
                if (dir == "asc") {
                    document.getElementsByTagName("img")[n].src = "img/asc.png";
                    if (Number(x.innerHTML) > Number(y.innerHTML)) {
                        // Nếu điều kiện đúng tức là cần tráo đổi, gán biến shouldSwitch = true và thoát khỏi vòng lặp for
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    document.getElementsByTagName("img")[n].src = "img/desc.png";
                    if (Number(x.innerHTML) < Number(y.innerHTML)) {
                        // Nếu điều kiện đúng tức là cần tráo đổi, gán biến shouldSwitch = true và thoát khỏi vòng lặp for
                        shouldSwitch = true;
                        break;
                    }
                }
            }

        }
        if (shouldSwitch) {
            // Nếu shouldSwitch == true thì thực hiện tráo đổi vị trí và gán biến switching = true (đã sắp xếp xong)
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Đồng thời tăng biến đếm switchcount ++
            switchcount++;
        } else {
            // Ngược lại, nếu đã sắp xếp xong và hướng sắp xếp là asc, thì đổi hướng sắp xếp thành desc và chờ function được chạy lần nữa để sắp xếp theo chiều ngược lại
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}