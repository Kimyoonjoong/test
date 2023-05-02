document.addEventListener("DOMContentLoaded", function(){
    //변수선언
    let section = document.querySelector('#main_slider'),
    container = document.querySelector('#slide_container'),
    slide = document.querySelectorAll('.slide'),
    slideLength = document.querySelectorAll('.slide').length,
    slideHeight = 0,
    slideCount = 0,
    slideNext = document.querySelector('#next'),
    slidePrev = document.querySelector('#prev'),
    timer = undefined,
    pager = document.querySelector('#page'),
    pagerHTML = '';


    // 슬라이드 높이 주기
    for(i=0; i<slideLength; i++){
        if(slideHeight<slide[i].offsetHeight){
           slideHeight=slide[i].offsetHeight;
        }
    }
    section.style.height=slideHeight + 'px';

    //슬라이드 가로 배치
    for(x=0; x<slideLength; x++){
        slide[x].style.left = x * 100 + '%';

        pagerHTML += '<button data-idx=' + x + '></button>'
        pager.innerHTML = pagerHTML;
    }
    let pagerBtn = document.querySelectorAll('#page button')
   
    //슬라이드 이동
    function goToSlide(idx){
        container.style.transform = 'translate(' + idx * -100 + '% )';
        slideCount=idx;

        //active 추가
        for(a=0; a<slideLength; a++){
            pagerBtn[a].classList.remove('active');
        }
        pagerBtn[slideCount].classList.add('active');
    }
   goToSlide(0);
    //Next click
     slideNext.addEventListener('click', function(){
        if(slideCount==slideLength-1){
            goToSlide(0);
        }else{
            goToSlide(slideCount+1);
        }
    })
    slidePrev.addEventListener('click',function() {
        if(slideCount == 0){
            goToSlide(slideLength-1)
        } else {
            goToSlide(slideCount-1);
        }
    })

    //auto
    function AutoSlide(){
       timer= setInterval(function(){
        let nextCount = (slideCount+1) % slideLength;
        goToSlide(nextCount)
        },4000)
    }
    AutoSlide();

    //stop
    function StopSlide(){
        clearInterval(timer);
    }

    section.addEventListener('mouseenter', function(){
        StopSlide();
    })

    section.addEventListener('mouseleave', function(){
        AutoSlide();
    })

    for(y=0; y<pagerBtn.length; y++){
        pagerBtn[y].addEventListener('click', function(event){
            pageCounter = event.target.getAttribute('data-idx');
            goToSlide(pageCounter);
        })
    }
})