(function(){
    "use strict";
    var hydro = document.querySelector("#hydro");
    var coffee = document.querySelector('#coffee');
    var kanken = document.querySelector('#kanken');
    var mydiv = document.getElementById("#text")

    hydro.addEventListener('click', function(){
        mydiv.style.display = 'block';
        mydiv.innerHTML="<p>I always carry my 40oz hydroflask wherever I go! I used to never be thirsty but having a cute hydroflask really prompts me to drink as much water as I can. My personal goal is to finish two in one day. Although it's large, I think having water at all times has impacted my health in a positive way.</p>";
    });
}());