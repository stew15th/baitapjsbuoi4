function hello() {
    var nguoidung = document.getElementById("nguoidung").value;
    if (
        nguoidung == "bố" ||
        nguoidung == "BỐ" ||
        nguoidung == "bố" ||
        nguoidung == "B"
    ) {
        sum.innerText = "Chào bố, chúc bố 1 ngày tốt lành";
    } else if (
        nguoidung == "mẹ" ||
        nguoidung == "MẸ" ||
        nguoidung == "mẹ" ||
        nguoidung == "M"
    ) {
        sum.innerText = "Chào mẹ, chúc mẹ 1 ngày tốt lành";
    } else if (
        nguoidung == "Anh trai" ||
        nguoidung == "ANH TRAI" ||
        nguoidung == "anh trai" ||
        nguoidung == "A"
    ) {
        sum.innerText = "Chào anh trai, chúc anh 1 ngày tốt lành";
    } else if (
        nguoidung == "E" ||
        nguoidung == "em" ||
        nguoidung == "EM" ||
        nguoidung == "Em"
    ) {
        sum.innerText = "Chào em, chúc em 1 ngày tốt lành";
    } else {
        alert("mời nhập lại");
    }
}
