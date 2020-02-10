const Welkom_Pic = "./assets/Welkom_Pic/Hackathon1.jpg";

function currentWelkomPic(){
    return Welkom_Pic;
}

function changePic(){
    var container = document.getElementsByClassName("background-image-container white-text-container");
    //var style = container.getAttributeNode("style");
    //container.setAttribute("style", "background-image: url('./assets/images/Hackathon/Hackathon1.jpg')");
    container.style.backgroundimage = "url('./assets/images/Hackathon/Hackathon1.jpg')";
    return console.log("de foto is veranderd, ook op het scherm");
}
