window.onload = function () {
    getData = () => {
        let liList = document.getElementById("source").getElementsByTagName("li"),
            data = [];
        for (let i = 0; i < liList.length; i++) {
            let cityName = liList[i].innerHTML.split("空气质量：")[0],
                cityNumber = liList[i].children[0].innerHTML;
            data.push([cityName, cityNumber]);
        }
        return data;
    }

    sortAqiData = data => {
        data.sort((x, y) => {
            return x[1] - y[1];
        });
        return data;
    }

    render = data => {
        let resortUl = document.getElementById("resort"),
            numberArray = ["一", "二", "三", "四", "五", "六", "七"];
        for (let i = 0; i < data.length; i++) {
            let tempLi = document.createElement("li");
            tempLi.innerHTML = "第" + numberArray[i] + "名：" + data[i][0] + "空气质量：<b>" + data[i][1] + "</b>";
            resortUl.appendChild(tempLi);
        }
    }

    btnHandle = () => {
        let aqiData = getData();
        aqiData = sortAqiData(aqiData);
        render(aqiData);
        let sortBtn = document.getElementById("sort-btn");
        sortBtn.disabled = "true";
    }
}