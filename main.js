var e = document.getElementById("char");
function getSelection() {
  var value = e.value;
}

function getOption() {
    selectElement =
        document.querySelector('#char');
    output =
        selectElement.options
        [selectElement.selectedIndex].value;
    document.querySelector('.output').textContent = output;
}