let container = document.querySelector(".container");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'info.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var content = xhr.responseText;
        content = JSON.parse(content);
        container.innerHTML = "";
        container.innerHTML += "<h2>Obiad dnia </h2>";
        container.innerHTML += "I danie: " + content["obiad-dnia"]["I-danie"] + "<br>";
        container.innerHTML += "II danie: " + content["obiad-dnia"]["II-danie"] + "<br>";
        container.innerHTML += "Napój: " + content["obiad-dnia"]["napoj"] + "<br>";
        container.innerHTML += "<h2>Dzisiejsza oferta </h2>";
        container.innerHTML += "Ciasta: " + content["dzisiejsza-oferta"]["ciasta"] + "<br>";
        container.innerHTML += "Desery: " + content["dzisiejsza-oferta"]["desery"] + "<br>";
        if(content["dzisiejsza-oferta"]["przekaski"] != "brak"){
            container.innerHTML += "Przekaski: " + content["dzisiejsza-oferta"]["przekaski"] + "<br>";
        }
    }
};
xhr.send();