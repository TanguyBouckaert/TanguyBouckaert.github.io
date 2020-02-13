const Welkom_Pic = "./assets/Welkom_Pic/Hackathon1.jpg";

function currentWelkomPic(){
    return Welkom_Pic;
}

function changePic(){
    var container = document.getElementsByName("01");
    //var style = container.getAttributeNode("style");
    //container.setAttribute("style", "background-image: url('./assets/images/Hackathon/Hackathon1.jpg')");
    container.values.getElementsByName = "url('./assets/images/Hackathon/Hackathon1.jpg')";
    return console.log("de foto is veranderd, ook op het scherm");
}

function init(){
    changePic();
}

window.onload = init();
