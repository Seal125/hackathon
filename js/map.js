var buttons = $(".navigation");

for(var i = 0; i < buttons.length; i++){
    var button = $(buttons[i])
    
    button.css("position", "absolute");
    button.css("width", button.attr("data-width"));
    button.css("height", button.attr("data-height"));
    button.css("left", button.attr("data-x"));
    button.css("top", button.attr("data-y"));
}