$(function(){
	var content=$(".content");
	var center=$(".center");
	var start=$(".start");
	var btns=$("span");

	var range = $('input');
	range[0].value = parseFloat(start.width() / content.width()) * 100;
	range[1].value = parseFloat(center.width() / content.width())* 100;

	range.mousedown(function(){
		this.oninput = function(){
			if(this == range[0]){
				if (this.value>= parseFloat(range[1].value)) {
					range[1].value=parseFloat(this.value);
					$(range[1]).next().width(range[1].value+'%');
				}
			}else{
				if (this.value<parseFloat(range[0].value)){
					range[0].value=parseFloat(this.value);

					$(range[0]).next().width(range[0].value+'%');
				}
			}
			$(this).next().width(this.value+'%');
		}
	})	
	console.log('这次没有彩蛋了！')
})