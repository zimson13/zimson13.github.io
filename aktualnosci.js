let container = document.querySelector(".container");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'info.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var content = xhr.responseText;
        console.log(content);
        content = JSON.parse(content);
        console.log(content);
        container.innerHTML = "";
        container.innerHTML += "I danie: " + content["1"] + "<br>";
        container.innerHTML += "II danie: " + content["2"] + "<br>";
        container.innerHTML += "Napój: " + content["napoj"] + "<br>";
    }
};
xhr.send();