"use strict";
///父类
export  class PraiseButton {
	constructor() {
		this.count = 0;
	}
	praiseClick() {
		
	}	
}


//子类Thumb实现大拇指方式点赞
export  class Thumb extends PraiseButton {
	constructor() {
		super();
		this.praiseClick = function(){
					
		}
	}
}

export  let thumb = new Thumb(); 

let e = document.getElementById("handWrap");
let addNum = document.getElementById("addNum");

e.onclick = function (){	
	thumb.count = Number.parseInt(thumb.count)  + 1;
	addNum.innerText = "+" + thumb.count;	
	var praiseTxt = thumb.praiseClick();
	
}