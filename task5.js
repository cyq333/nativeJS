window.onload = () => {
    let inputNum = document.getElementById("inputNum"),
        numberList = document.getElementById("numberList");

    insertNum = direction => {
        if (parseFloat(inputNum.value) < 10 || parseFloat(inputNum.value) > 100 || isNaN(inputNum.value)) {
            alert("请输入10-100的数");
        } else {
            let spanLength = numberList.getElementsByTagName("span").length;
            if (spanLength === 60) {
                alert("不能超过60个队列元素！");
            }
            let tempSpan = document.createElement("span");
            //tempSpan.innerHTML = inputNum.value + "&nbsp;";
            if (direction === "left") {
                numberList.insertBefore(tempSpan, numberList.firstChild);
            } else if (direction === "right") {
                numberList.appendChild(tempSpan);
            }
            tempSpan.style.display = "inline-block";
            tempSpan.style.height = inputNum.value + "px";
            tempSpan.style.width = "20px";
            tempSpan.style.backgroundColor = "red";
            tempSpan.style.margin = "10px 10px 20px 10px";
        }
    }

    deleteNum = (node, direction) => {
        if (numberList.childNodes.length <= 0) {
            alert("没有元素可以删除");
        } else {
            if (direction === "left") {
                alert("删除：" + numberList.firstChild.innerText);
                numberList.removeChild(numberList.firstChild);
            } else if (direction === "right") {
                alert("删除：" + numberList.lastChild.innerText);
                numberList.removeChild(snumberList.lastChild);
            } else {
                alert("删除：" + node.innerText);
                numberList.removeChild(node);
            }
        }
    }

    sortList = () => {
        let tempNodes = numberList.getElementsByTagName("span");
        console.log(tempNodes);
        if (tempNodes.length > 1) {
            for (let i = 0; i < tempNodes.length; i++) {
                for (let j = tempNodes.length - 1; j > i; j--) {
                    console.log(parseFloat(tempNodes[j].style.height));
                    if (parseFloat(tempNodes[j].style.height) < parseFloat(tempNodes[j - 1].style.height)) {
                        let temp = tempNodes[j].style.height;
                        tempNodes[j].style.height = tempNodes[j-1].style.height;
                        tempNodes[j-1].style.height = temp;
                    }
                }
            }
        }
        console.log(tempNodes);
    }
}