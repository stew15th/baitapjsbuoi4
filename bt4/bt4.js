function tamgiac() {
    var canha = document.getElementById("canha").value * 1;
    var canhb = document.getElementById("canhb").value * 1;
    var canhc = document.getElementById("canhc").value * 1;

    if (
        canha * canha + canhb * canhb == canhc * canhc ||
        canhb * canhb + canhc * canhc == canha * canha ||
        canhc * canhc + canha * canha == canhb * canhb
    ) {
        sum.innerText = "Tam giác vuông";
    } else if (canha == canhb && canhb == canhc && canhc == canha) {
        sum.innerText = "Tam giác đều";
    } else if (canha == canhb || canhb == canhc || canha == canhc) {
        sum.innerText = "Tam giác cân";
    } else alert("mời nhập lại");
}
