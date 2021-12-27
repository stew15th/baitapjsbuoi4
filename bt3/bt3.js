function tinh() {
    var soa = document.getElementById("soa").value * 1;
    var sob = document.getElementById("sob").value * 1;
    var soc = document.getElementById("soc").value * 1;
    var sochan = 0;
    var sole = 0;
    if (soa % 2 == 0) {
        sochan = sochan + 1;
    } else {
        sole = sole + 1;
    }
    if (sob % 2 == 0) {
        sochan = sochan + 1;
    } else {
        sole = sole + 1;
    }
    if (soc % 2 == 0) {
        sochan = sochan + 1;
    } else {
        sole = sole + 1;
    }

    sum.innerText = "Có " + sochan + " số chẵn " + ", có " + sole + " số lẻ";
}
