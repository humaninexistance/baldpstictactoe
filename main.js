var e = document.getElementById("char");
function getSelection() {
  var value = e.value;
}

function getSelection() {
    selectElement =
        document.querySelector('#char');
    output =
        selectElement.options
        [selectElement.selectedIndex].value;
    document.querySelector('.selection').textContent = output;
}