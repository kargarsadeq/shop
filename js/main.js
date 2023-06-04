let slideIndex = 1 ;
function setSlide(input,index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children] ;
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    item.classList.add('active');
}

setInterval(()=>{
    slideIndex +=1;
    if(slideIndex==4){
        slideIndex=1;
    }
    setSlide(`slide${slideIndex}` , slideIndex)}, 4000)


    function countdown() {
        var secondsSpan = document.getElementById('seconds');
        var minutesSpan = document.getElementById('minutes');
        var hoursSpan = document.getElementById('hours');
      
        var seconds = parseInt(secondsSpan.innerText);
        var minutes = parseInt(minutesSpan.innerText);
        var hours = parseInt(hoursSpan.innerText);
      
        function tick() {
          if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            return;
          }
      
          seconds--;
          if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
              minutes = 59;
              hours--;
              if (hours < 0) {
                hours = 0;
              }
            }
          }
      
          secondsSpan.innerText = padZero(seconds);
          minutesSpan.innerText = padZero(minutes);
          hoursSpan.innerText = padZero(hours);
        }
      
        function padZero(number) {
          return (number < 10 ? '0' : '') + number;
        }
      
        var timer = setInterval(tick, 1000);
      }
      
      countdown();
      
                  

