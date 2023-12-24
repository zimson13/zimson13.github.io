let container = document.querySelector(".result");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'info.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var content = xhr.responseText;
        content = JSON.parse(content);
        container.innerHTML = "";
        container.innerHTML += "<h2>Obiad dnia </h2>";
        container.innerHTML += "<b>I danie: </b>" + content["obiad-dnia"]["I-danie"] + "<br>";
        container.innerHTML += "<b>II danie: </b> " + content["obiad-dnia"]["II-danie"] + "<br>";
        container.innerHTML += "<b>Napój: </b>" + content["obiad-dnia"]["napoj"] + "<br>";
        container.innerHTML += "<br><hr><br>"
        container.innerHTML += "<h2>Dzisiejsza oferta </h2>";
        container.innerHTML += "<b>Ciasta: </b>" + content["dzisiejsza-oferta"]["ciasta"] + "<br>";
        container.innerHTML += "<b>Desery: </b>" + content["dzisiejsza-oferta"]["desery"] + "<br>";
        if(content["dzisiejsza-oferta"]["przekaski"] != "brak"){
            container.innerHTML += "Przekaski: " + content["dzisiejsza-oferta"]["przekaski"] + "<br>";
        }
    }
};
xhr.send();