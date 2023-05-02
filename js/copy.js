let navHover = document.querySelector('.nav-hover');
let sub = document.querySelectorAll('#sub');
let menu = document.querySelectorAll('.top-menu>li');
let after = document.querySelector('.top-menu>li::after')
console.log(after);

for(let i = 0; i <menu.length; i++) {
    menu[i].addEventListener('mouseover', ()=>{
        // navHover.style.height='300px';
        sub[i].style.height='320px';
        sub[i].style.borderTop='1px solid #666'
        sub[i].style.borderBottom='2px solid #666'
    })
   
    menu[i].addEventListener('mouseout', ()=>{
        // navHover.style.height='0px';
        sub[i].style.height='0px';
        sub[i].style.border='none'
    });
}
	//슬라이드 스크립트
	//변수 선언
	let leng = document.querySelectorAll('.slide').length, // 슬라이드 총 갯수
	slide = document.querySelectorAll('.slide'),
	slideHeight=0,
	btn = document.querySelector('.p_btn'), // pager 버튼 단일
	btns = document.querySelectorAll('.p_btn'), // 모든 pager 버튼
	prev = document.querySelector('#prev'), // 이전버튼
	next = document.querySelector('#next'), // 다음버튼
	num = 0, // 슬라이드에 쓰일 변수
	container = document.querySelector('#slide_container'), // 슬라이드를 감싸는 div
	loopInterval,
	timer=undefined,
	pagerHTML = '',
	section = document.querySelector('#main_slider'),
	pager = document.querySelector('#page');
	// pageBtn = document.querySelectorAll('#page button');
	console.log('시작 넘',num);
	//pager 클릭시 슬라이드 이동 함수
	// querySelectorAll은 addEventListener이 안되므로 forEach로 페이저 버튼과 인덱스 값 가져오기
	btns.forEach(function(p_btn, index){ //querySelectorAll로 지정한 .btn을  forEach로 가져와서 모든 .btn에 적용
		p_btn.addEventListener('click',function(){ // 모든 .btn에 클릭이벤트 추가
				container.style.transform = 'translate('+ index * -100 +'%)';
		})
	})
	// 슬라이드 이동시 갯수보다 커질때 처음으로 돌아가는 함수 
   function first(){ // next 초기화 함수 선언
	container.style.transform = 'translate(0%)'; // 슬라이드 첫번째 위치 값
	 num=0; // 첫번째 부터 시작하므로 num 초기화
   }
   // 슬라이드 이동시 갯수보다 작아질때 마지막으로 이동하는 함수
   function last(){
	num = leng-1; // num을 슬라이드 마지막 값으로 선언
	container.style.transform = 'translate('+ num * -100 +'%)'; // 슬라이드 마지막 위치 값
   }
	//슬라이드의 높이 확인하여 부모의 높이로 지정하기
	// for(let h=0; h<leng; h++){
	// 	if(slideHeight<slide[h].offsetHeight){
	// 	slideHeight=slide[h].offsetHeight;
	// 	}
	// }   
	// section.style.height = slideHeight + 'px';
   //슬라이드가 있으면 가로로 배열하기
   for(let a=0; a<leng; a++){
	 slide[a].style.left = a * 100 + '%';
	 pagerHTML += '<button data-idx="' + a +'"></button>';
	 pager.innerHTML = pagerHTML;
   }
   let pageBtn = document.querySelectorAll('#page button');
   
   //다음버튼 클릭시 슬라이드 이동 이벤트
	next.addEventListener('click', function(){
		// if(num == leng){ //num이 슬라이드 최대값이 되면
		//    return first(); // last함수를 호출하여 처음으로 되돌린후 last함수 탈출
		// }
		// container.style.transform = 'translate('+ num * -100 +'vw)';
		// num += 1;
		// console.log('next', num);
		
		if(num == leng-1){
			goToSlide(0)
		} else{
			goToSlide(num + 1);
		}
	})
	function goToSlide(idx){
		container.style.transform = 'translate('+ idx * -100 +'vw)';
		num = idx;
		// pager에 active 제거, 클릭된 요소에만 active 추가
		for(let x=0; x<pageBtn.length; x++){
			pageBtn[x].classList.remove('active');
		}
		pageBtn[idx].classList.add('active');
	}
	goToSlide(0);
	//이전버튼 클릭시 슬라이드 이동 이벤트
	prev.addEventListener('click', function(){
		// if(num == 0){
		// 	return last();
		// }
		// num-=1;
		// container.style.transform = 'translate('+ num * -100 +'vw)';
		// console.log('prev',num)
		if(num == 0){
			goToSlide(leng-1)
		}else{
			goToSlide(num-1)
		}
	})


    // 오토 슬라이드 함수
	//   function nextMove(){
	// 	console.log('Auto', num)
	// 	if(num == leng){
	// 		num=0;
	// 		container.style.transform = 'translate('+ num * -100 +'vw)';
	// 	}
	// 	container.style.transform = 'translate('+ num * -100 +'vw)';
	// 	num++;
	// 	for(let x=0; x<pageBtn.length; x++){
	// 		pageBtn[x].classList.remove('active');
	// 	}
	// 	pageBtn[num-1].classList.add('active');
	//   }
	//   nextMove(num);
	//   function pageMove(){
	// 	pageBtn[num-1].classList.add('active');
	//   }
	//   pageMove();

	// 자동슬라이드
	function AutoSlide(){
			timer = setInterval(function(){
			let nextIdx = (num + 1) % leng; // 카운트에 1을 더하고 슬라이드 길이만큼 나눈 나머지를 goToSlide에 넣어 작동
			goToSlide(nextIdx);
			// cardBtnSlid(nextIdx);
		  },4000)
	}
	AutoSlide();
	// 자동슬라이드 정지 함수
	function StopSlide(){ 
		clearInterval(timer);
	}

	section.addEventListener('mouseenter',function(){
		StopSlide();
	})
	section.addEventListener('mouseleave',function(){
		AutoSlide();
	})
	

	// pager 클릭시 이동 함수
	for(let i=0; i<pageBtn.length; i++){
		pageBtn[i].addEventListener('click',function(event){ // event 클릭한 그 요소 자체의 이벤트(기능)을 의미, 해당 요소의 원래 기능을 event라는 매개변수로 지정하여 함수내에서 컨트롤할수 있게 지정
			pagerNum = event.target.getAttribute('data-idx');
			goToSlide(pagerNum);
			
		})

	}
	

 
    //카드 슬라이드
    let cardContainer = document.querySelectorAll('.card_btn'),
    cardSlide = document.querySelectorAll('.card-menu'),
    cardLength = document.querySelectorAll('.card_btn').length,
	cardPage = document.querySelector('#card_pager'),
	cardHTML = '',
    cardCount=0;
	
	for(let a=0; a<cardLength; a++){
		cardContainer[a].style.translate = a * 100 + 'vw';
		cardHTML += '<button data-idx="' + a +'"></button>';
	 	cardPage.innerHTML = cardHTML;
	  }

      function cardAuto(){
        
        if(cardCount==cardContainer.length){
            cardCount=0;
            cardContainer[cardCount].style.translate =cardCount * 100 + 'vw';
        }
        cardContainer[cardCount].style.translate = cardCount * 100 + 'vw';
        cardCount++;
        console.log(cardCount)
      }
      cardAuto();
    //   function nextMove(){
	// 	console.log('Auto', num)
	// 	if(num == leng){
	// 		num=0;
	// 		container.style.transform = 'translate('+ num * -100 +'vw)';
	// 	}
	// 	container.style.transform = 'translate('+ num * -100 +'vw)';
	// 	num++;
	// 	for(let x=0; x<pageBtn.length; x++){
	// 		pageBtn[x].classList.remove('active');
	// 	}



	// cardBtn = document.querySelectorAll('#card_pager button');

    // function cardBtnSlid(num){

    //     cardContainer.style.transform = 'translate('+ num * -100 + 'vw)';

    //     for(x=0; x<cardLength; x++){
    //         cardBtn[x].classList.remove('active'); 
    //     }
	// 	cardBtn[num].classList.add('active');
    //     if(cardCount == -cardLength){
    //         cardBtnSlid(0);
    //     }
	// }  

	// 	for(let i =0; i<cardLength; i++){
	// 		cardBtn[i].addEventListener('click',()=>{
	// 			cardContainer.style.transform = 'translate('+ i * -100 + 'vw)';
	// 			for(x=0; x<cardLength; x++){
	// 				cardBtn[x].classList.remove('active'); 
	// 			}
	// 			cardBtn[i].classList.add('active');
	// 		})
	// 	}

	//  cardBtnSlid(0);
	
	
	 //마우스 좌표 변수 선언
	 let snsImg = document.querySelector('#sns_slid_img'),
	 snsUl = document.querySelector('#sns_slid_img ul');
 
	 //마우스 좌표 이동 함수
	 snsImg.addEventListener('mousemove',function(e){
		 let MaxWidth = document.documentElement.clientWidth; //마우스 최대 영역의 가로값
		 snsUl.style.left = (-e.pageX / MaxWidth) * (snsUl.offsetWidth - MaxWidth) + 'px';  //(현재 마우스 좌표값 / 마우스 최대 영역의 가로 값) * (요소 최대값 - 마우스 최대 영역의 가로 값)
	 })
	 


	  let Map = document.querySelector('.map');
	  let Create = document.querySelector('.create');
	  let Txt_left = document.querySelector('.scroll_left');
	  let Txt_right = document.querySelector('.scroll_right');
	  window.addEventListener('scroll',function(){
		let value = window.scrollY;
		console.log(value)
		if(value<1300){
			Txt_left.style.animation = 'txt_slide_left_out 2s forwards';
			Txt_right.style.animation = 'txt_slide_right_out 2s forwards';
		}else{
			Txt_left.style.animation = 'txt_slide_left 2s ease-in-out';
			Txt_right.style.animation = 'txt_slide_right 2s ease-in-out';
		}
		if(value<2300){
			Map.style.animation = 'map_out 1s forwards';
			Create.style.animation = 'create_out 1s forwards';
		}else{
			Map.style.animation = 'map_slide 1s ease-in-out';
			Create.style.animation = 'create_slide 1s ease-in-out';
		}	
	  })	  


	  let famly = document.querySelector('.famly>li');
	  let arrow = document.querySelector('.famly>li>img');
	  let subFamly = document.querySelector('.sub-famly');

	famly.addEventListener('click',()=>{
		if(subFamly.style.display == 'none' || subFamly.style.display == ''){
			subFamly.style.display = 'block';
			arrow.style.transform = ' rotate(180deg)'
		}else{
			subFamly.style.display = 'none';
			arrow.style.transform = ' rotate(0deg)'
		}
		
		
	})




