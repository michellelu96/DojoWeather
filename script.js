function closeCookie() {
    var toDelete = document.getElementById("cookie");
    toDelete.remove();
}

function navigate(el) {
    alert("Loading weather report of "  + el.innerText);
}