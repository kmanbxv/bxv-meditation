// put mp3s in array
var meditations = ["pond","snow","clouds","earth","gratitude","healing","heart","house","ocean","sleep","stargate"];

function play(file){
    document.getElementById("player").src = meditations[file]+".m4a"; // play appropriate mp3
    document.getElementById("playing").innerHTML = "Current relaxation soundtrack: <i>"+meditations[file]+"</i>.";
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// pull up a random mp3
function playRandomFile(){
    var player = document.getElementById("player");

    // select random mp3
    var random = getRandomIntInclusive(0, meditations.length-1);

    // change src of player to chosen mp3, make player visible
    //document.getElementById("player-holder").style="display: block;";



    //document.write(meditations[];); // debug
    player.src=meditations[random]+".m4a";
    document.getElementById("playing").innerHTML = "Current relaxation soundtrack: <i>"+meditations[random]+"</i>.";

}