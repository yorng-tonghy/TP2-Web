let video = document.querySelector('video');
navigator.mediaDevices.getUserMedia({video:true})
// play the video with try catch 
.then((stream)=>{
    video.srcObject=stream;

    return video.play();
}).catch((err)=>{
    console.log('navigator.MediaDevices.getUserMedia error',err.message,err.name);

});


let pause1 = document.getElementById("mypauseButton");


    //=== pause the video ===
pause1.addEventListener('click',(stream)=>{
     
        video.pause();
         video.srcObject  = "";
        
})



