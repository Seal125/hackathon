/* global $ */
/* global SpeechSynthesisUtterance */

function textToSpeech(text) {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

$(".TtS").click(function() {
    var speech = $($(this).parent().parent().find("p")[0]).text();
    return textToSpeech(speech);
});

function handleOnClickMap(e) {
  console.log(e);
}

   // template literal
   function createComponent(obj){
      return `<div class="media list container text-center cardList">
    <div class="media-left media-middle">
      <a href="#">
        <img class="media-object imgCard" src="${obj.img}" />
      </a>
      <button class="TtS">Audio</button>
    </div>
    <div class="media-body text">
      <h4 class="media-heading">${obj.title}</h4>
      <p class="font">${obj.description}</p>
    </div>
  </div>`;
       
   }
   