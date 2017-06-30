window.onload = () => {
    let inputNum = document.getElementById("inputNum"),
        numberList = document.getElementById("numberList");

    insertNum = direction => {
        //console.log(inputNum.value);
        console.log(inputNum.value.split(/\s|,|，|、/));
        let charList = inputNum.value.split(/\s|,|，|、/),
            tempChild = numberList.firstChild;
        if (charList.length > 0) {
            for (let i = 0; i < charList.length; i++) {
                let tempSpan = document.createElement("span");
                tempSpan.innerHTML = charList[i];
                if (direction === "left") {
                    numberList.insertBefore(tempSpan, tempChild);
                } else if (direction === "right") {
                    numberList.appendChild(tempSpan);
                }
                tempSpan.style.display = "inline-block";
                tempSpan.style.margin = "10px 10px 20px 10px";
                tempSpan.style.backgroundColor = "red";
            }
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

    searchChar = () => {
        console.log(numberList.childNodes);
        let inputSearch = document.getElementById("inputSearch").value,
            re = new RegExp(inputSearch + "+");
        if (numberList.childNodes.length > 0) {
            for (let i = 0; i < numberList.childNodes.length; i++) {
                if (re.test(numberList.childNodes[i].innerText)) {
                    numberList.childNodes[i].style.backgroundColor = "blue";
                }
            }
        }
    }
}