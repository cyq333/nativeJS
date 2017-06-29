window.onload = function () {
    let btn = document.getElementById("button"),
        inputBlock = document.getElementById("aqi-input"),
        showInput = document.getElementById("aqi-display");
    clickHandle = () => {
        console.log(inputBlock)
        showInput.innerHTML = inputBlock.value;
    }
}

