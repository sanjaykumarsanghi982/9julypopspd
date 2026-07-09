

 $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'media/beep.mp3');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);
   

    $('#mycanvas').click(function() {
       audioElement.play();

   });

});

 $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'media/voice.mp3');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);


    $('#mycanvas').click(function() {
       audioElement.play();

   });
});

