$("#search").click(function (){
    var text = $("#input-search").val();
        // to loop whatever is in the exibits
    for (var i = 0; i < data.length; i++) {
        var sts = data[i].search_terms;
        for (var s = 0; s < sts.length;i++ ){}
        //use this format to append the
        var comp = createComponent(data[i]);
        $("#exhibit-list").append(comp);

    }
});