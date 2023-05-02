
let cardInner = document.querySelector('.card-inner');
let cardBox = document.querySelector('.card-inner ul');
let cardList = document.querySelector('.card-inner ul li');
let cardLength = document.querySelectorAll('.card-inner ul li').length;
let cardCount = 0;
let cardStyle = window.getComputedStyle(cardBox);
let cardGap = Number(cardStyle.getPropertyValue('gap').replace('px',''));
const cardWidth = Number((cardList.offsetWidth+cardGap));


function cardSlide(){
    cardCount++;
    if(window.matchMedia('(min-width:768px)').matches){
        if(cardCount>cardLength-4){
            cardCount=0;
            cardBox.style.transform = 'translateX(-'+(cardCount*cardWidth)+'px)';    
        } else{
            cardBox.style.transform = 'translateX(-'+(cardCount*cardWidth)+'px)'; 
        }
   
    } else{
        cardBox.style.transform = 'translateX(0px)'; 
    }
       
}

setInterval(()=>{
    cardSlide();
},3000)
window.matchMedia("(min-width: 768px)").addEventListener('change',cardSlide);

