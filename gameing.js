
var howDoWeGame = true;

function doTheGaming() {
    
    
    if (Math.random() > 0.5) {
        $(".images").append(`
            <img src="https://hg1.funnyjunk.com/comments/I+dont+wanna+be+friends+with+someone+with+a+bad+_bc533c928ac80896c98cb8ae25860715.jpg" alt="speve">
        `)
    } else {
        $(".images").replaceWith(`
            <img src="https://pm1.narvii.com/6871/a438e0f4c52706b76eb4b02eaee94c05658ff292r1-988-1009v2_hq.jpg" alt="girby">
        `)
    }

}

function gameHarder() {
    $(".images").append(`
            <p>play hollow knight (2017) by team cherry</p>
            <p>stan ari gibson and william pellen from team cherry</p>
            <p>I got fired</p>
            <img src="https://vignette.wikia.nocookie.net/getting-over-it/images/7/79/SexyHiking.png/revision/latest/scale-to-width-down/220?cb=20180204015030">
        `)
}

function bruhMoment() {
    $(".images").replaceWith(`
    <audio src="http://www.orangefreesounds.com/wp-content/uploads/2018/02/Bruh-sound-effect.mp3?_=1">
`)
}

$(".testdisplay").append("<p>Gameing</p>");
$(".testdisplay").on("click", ".clicktogame", doTheGaming);
$(".testdisplay").on("click", ".bruhmoment", gameHarder);
$(".testdisplay").on("click", ".BRUHOmoment", bruhMoment);