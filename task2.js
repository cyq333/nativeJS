window.onload = function () {
    let aqiData = [
        ["北京", 90],
        ["上海", 50],
        ["福州", 10],
        ["广州", 50],
        ["成都", 90],
        ["西安", 100]
    ],
        aqiCN = ["一", "二", "三", "四", "五", "六"];
    console.log(aqiData);
    let aqiArray = [];
    for (let i = 0; i < aqiData.length; i++) {
        if (aqiData[i][1] > 60) {
            aqiArray.push(aqiData[i])
        }
    }
    aqiArray.sort((x, y) => {
        return x[1] - y[1];
    });

    let aqiUl = document.getElementById("aqi-list");
    for (let i = 0; i < aqiArray.length; i++) {
        let tempLi = document.createElement("li");
        tempLi.innerHTML = "第" + aqiCN[i] + "名" + ":" + aqiArray[i][0] + "," + aqiArray[i][1];
        aqiUl.appendChild(tempLi);
    }
}
