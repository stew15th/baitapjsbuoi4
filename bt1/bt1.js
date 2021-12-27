var max;
var min;
var mid;
function sapxep() {
    var soa = document.getElementById("soa").value*1;
    var sob = document.getElementById("sob").value*1;
    var soc = document.getElementById("soc").value*1;
    
    if (soa>sob) {
        max=soa;
        min=sob;
    }
    else {
        max=sob;
        min=soa;
    }
    mid=soc;

    if (min>soc) {
        mid = min;
        min = soc; 
    }

    if(max<soc) {
        mid = max;
        max = soc;
    }
    sum.innerText = "Dãy số được sắp xếp là: " + min+", "+mid+", "+max;
}
