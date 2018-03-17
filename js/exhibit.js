var exhibitDiv = $(".exhibit");

var tempData = data[parseInt(exhibitDiv.attr("data-index"))];
tempData.img = "../" + tempData.img

exhibitDiv.append(createComponent(tempData));