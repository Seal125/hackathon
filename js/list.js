    // to loop whatever is in the exibits
    for (var i = 0; i < data.length; i++) {
        //use this format to append the
        var comp = createComponent(data[i]);
        $("#exhibit-list").append(comp);

    }
    