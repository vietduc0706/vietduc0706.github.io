/* Tên các id: #fullName, #birthday, #male, #female, #address, #phone, #email, #password, #signUp */

$("form").on("submit", function(){
    let isError = true;
    if ($("#fullName").val() == "") {
        $("#fullName").attr("placeholder", "Trường Họ Tên không được để trống!");
        isError = false;
        }
    if ($("#birthday").val() == "") {
        $("#birthday").attr("placeholder", "Trường Ngày sinh không được để trống!");
        isError = false;
        }
    if ($("#address").val() == "") {
        $("#address").attr("placeholder", "Trường Địa chỉ không được để trống!");
        isError = false;
        }
    if ($("#phone").val() == "") {
        $("#phone").attr("placeholder", "Trường Số điện thoại không được để trống!");
        isError = false;
        }
    if ($("#email").val() == "") {
        $("#email").attr("placeholder", "Trường Email không được để trống!");
        isError = false;
        }
    if ($("#facebook").val() == "") {
        $("#facebook").attr("placeholder", "Trường Facebook không được để trống!");
        isError = false;
        }
    if ($("#password").val()== "") {
        $("#password").attr("placeholder", "Trường Mật khẩu không được để trống!");
        isError = false;
        }
    return isError;
    });

