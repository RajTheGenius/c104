Webcam.set({
    height:400,
    width:400,
    img_format:"png",
    png_quality:500
})

Webcam.attach("#webcam");

function takeSnapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img src ='"+data_uri+"'id = 'imgResult'>"
    })
}
    
console.log("ml5 version: ", ml5.version );

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json" , modalLoaded);

function modalLoaded() {
    console.log("Model uploaded Succesfully");
}