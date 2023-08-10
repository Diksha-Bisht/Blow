var CheckBox = document.getElementById("check");
function modal() {
    if (CheckBox.checked === true) {
        document.getElementById("fa").style.color = "white";
        document.getElementById("drawer_box").style.display = "none";
    }
    else {
        document.getElementById("fa").style.color = "black";
        document.getElementById("drawer_box").style.display = "block";
    }
}