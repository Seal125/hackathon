$("#search").click(function (){
    $("#exhibit-list").empty();
    var text = $("#input-search").val();
        // to loop whatever is in the exibits
    for (var i = 0; i < data.length; i++) {
        var sts = data[i].search_terms;
        var include = false;
        for (var s = 0; s < sts.length;s++ ){
            if(sts[s].indexOf(text)!== -1){
                include = true; 
            }
        }
        if(include){
            //use this format to append the
            var comp = createComponent(data[i]);
            $("#exhibit-list").append(comp);
        }
    }
});