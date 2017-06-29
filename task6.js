window.onload = () => {
    let inputNum = document.getElementById("inputNum"),
        numberList = document.getElementById("numberList");

    insertNum = direction => {
        console.log(inputNum.value);
        let tempSpan = document.createElement("span");
        tempSpan.innerHTML = inputNum.value + "&nbsp;";
        if (direction === "left") {
            numberList.insertBefore(tempSpan, numberList.firstChild);
        } else if (direction === "right") {
            numberList.appendChild(tempSpan);
        }
    }

    deleteNum = (node, direction) => {
        if (numberList.childNodes.length <= 0) {
            alert("没有元素可以删除")
        } else {
            if (direction === "left") {
                alert("删除：" + numberList.firstChild.innerText);
                numberList.removeChild(numberList.firstChild);
            } else if (direction === "right") {
                alert("删除：" + numberList.lastChild.innerText);
                numberList.removeChild(numberList.lastChild);
            } else {
                alert("删除：" + node.innerText);
                numberList.removeChild(node);
            }
        }
    }
}