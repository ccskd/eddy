function push(k) {
    document.getElementById(`${k}`).className = "push";
}

function spin(k) {
    document.getElementById(`${k}`).className = "spin";
}

function reset() {
    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById("1").className = "";
    document.getElementById("2").className = "" 
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    document.getElementById("7").className = "";
    document.getElementById("8").className = "";
}

function changeImg(image) {
    document.getElementById("1").src = image;
    document.getElementById("2").src = image;
    document.getElementById("3").src = image;
    document.getElementById("4").src = image;
    document.getElementById("5").src = image;
    document.getElementById("6").src = image;
    document.getElementById("7").src = image;
    document.getElementById("8").src = image;
}
