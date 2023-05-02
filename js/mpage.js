let snb = document.querySelectorAll('.m-snb-title');
let snbFont = document.querySelectorAll('.m-snb-title a');
let subSnb= document.querySelectorAll('.m-sub-snb');
let snbClose = document.querySelector('.m-close');
let mNav = document.querySelector('.m-nav');
let mInner = document.querySelector('.m-nav-inner');
let snbOpen = document.querySelector('.m-top-left');
snb.forEach((x,i)=>{
    x.addEventListener('click',()=>{
        if(subSnb[i].offsetHeight == 0){
            subSnb[i].style.height = subSnb[i].scrollHeight + 'px';
            x.style.background = '#fff';
            x.style.border='none';
           snbFont[i].style.color = 'black';
           subSnb[i].style.background = '#fff';
           subSnb[i].style.paddingBottom ='24px';
        } else{
            subSnb[i].style.height = '0px';
             x.style.background = '#7a6e5f';
             x.style.borderBottom ='1px solid #958b7f'
             snbFont[i].style.color = '#fff';
             subSnb[i].style.paddingBottom ='0px';
        }
    })
})
snbOpen.addEventListener('click',()=>{
    mNav.style.left ='0%'
    
})
snbClose.addEventListener('click',()=>{
    mNav.style.left='-100%';
   
   
})






let container = document.querySelector('.slide-container');
let slideInner = document.querySelector('.slides');
let slides = document.querySelectorAll('.slides img');
let next = document.querySelector('#nextBtn');
let prev = document.querySelector('#prevBtn');
let page = document.querySelector('#page');
let pageHtml = '';
let slideCount=0;

for(i=0; i<slides.length; i++){
	slides[i].style.left= i * 100 +'%';  
	pageHtml += '<button></button>'
	page.innerHTML=pageHtml;
  
}
let pageBtn = document.querySelectorAll('#page button'); 
pageBtn[0].classList.add('active');


function nextSlide(){
	slideCount+=1;
	slideInner.style.translate = slideCount * -100 +'%';
	if(slideCount==slides.length){
		slideCount=0;
		slideInner.style.translate = slideCount * -100 +'%';
	}   
	 for(let i=0; i<pageBtn.length; i++){
		pageBtn[i].classList.remove('active');    
	 }
	   pageBtn[slideCount].classList.add('active');
	  
}

function prevSlide(){
	slideCount-=1;
	slideInner.style.translate = slideCount * -100 +'%';
   if(slideCount==-1){
	slideCount=2;
	slideInner.style.translate = slideCount * -100 +'%';
   }

}

next.addEventListener('click',()=>{
   nextSlide();
})

prev.addEventListener('click',()=>{
  prevSlide();
})

for(let i=0; i<pageBtn.length; i++){
	pageBtn[i].addEventListener('click',()=>{
		slideCount=i;
		slideInner.style.translate = i * -100 +'%';
		for(let j=0; j<pageBtn.length; j++){
			pageBtn[j].classList.remove('active');    
		 }
		 pageBtn[i].classList.add('active');
	})    
}
function autoSlide(){
	let timer = setInterval(()=>{
		nextSlide();
	},2000)
	container.addEventListener('mouseover',()=>{
		clearInterval(timer);
	 })
}
autoSlide();
 
 container.addEventListener('mouseout',()=>{
  autoSlide();
 })

 /* let cardContainer = document.querySelector('.card-container');
 let cardInner = document.querySelector('.card-slides');
 let cardHover = document.querySelector('.card-inner')
 let cardSlides = document.querySelectorAll('.card-slides ul');
 let cardChild = document.querySelectorAll('.card-slides ul li');
 let cardCount = 0;
 let cardPager = document.querySelector('#card_page');
 let cardHtml = '';

 for(let i=0; i<(cardChild.length)/2; i++){
     cardHtml += '<button></button>';
     cardPager.innerHTML = cardHtml;
 }
let cardBtn = document.querySelectorAll('#card_page button');
cardBtn[0].classList.add('active');

function cardSlid() {
   if (cardCount == ((cardChild.length)/2) - 1) {
     cardCount = 0;
   } else {
     cardCount++;
   }
   cardSlides.forEach(slide => {
     slide.style.transform = 'translateX(-' + cardCount * 100 + '%)';
   });
   cardBtn.forEach(btn => {
     btn.classList.remove('active');
   });
   cardBtn[cardCount].classList.add('active');
   console.log(cardCount);
 }
 for(let i=0; i<cardBtn.length; i++){
   cardBtn[i].addEventListener('click',()=>{
       cardCount=i;
       for(let j=0; j<cardBtn.length; j++){
           cardBtn[j].classList.remove('active');    
        }
        cardBtn[i].classList.add('active');
        cardSlides[i].style.transform = 'translateX(-' + cardCount * 100 + '%)';
   })    
}
function moveToSlide(index) {
   cardCount = index;
   cardSlides.forEach((slide) => {
     slide.style.transform = `translateX(${(index) * -100}%)`;
   });
   cardBtn.forEach((btn, i) => {
     btn.classList.toggle('active', i === index);
   });
 }
 
 for (let i = 0; i < cardBtn.length; i++) {
   cardBtn[i].addEventListener('click', function() {
     moveToSlide(i);
   });
 }

 function cardAuto(){
    let cardTimer = setInterval(()=>{
         cardSlid()
     },2000)
     cardContainer.addEventListener('mouseover',()=>{
         clearInterval(cardTimer);
     });
   
 }
cardAuto();
cardContainer.addEventListener('mouseout',()=>{
 cardAuto();
}) */

function slideItems() {
  const slide = document.querySelector(".carousel__slide");
  const slideWidth = slide.offsetWidth;

  let position = 0;
  let slideTimer = setInterval(() => {
    slide.style.transform = `translateX(-${position}px)`;
    position += slideWidth;

    if (position >= slideWidth * 3) {
      position = 0;
    }
  }, 3000);
}

slideItems();
