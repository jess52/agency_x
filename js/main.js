//JavaScript Document

(function() {
	var allCon = document.querySelectorAll(".icon");
	//console.log(allCon);
	
	var mainHead = document.querySelector(".more h2");
	//console.log(mainHead);
	var mainText = document.querySelector(".more p");
	//console.log(mainText);
	
	var switchClass;
	
	function changeInfo() {
		mainHead.classList.remove(switchClass);
		
		switchClass = this.id;
		console.log(this);
		
		mainHead.classList.add(this.id);
		
		mainHead.firstChild.nodeValue = allContent[this.id].heading;
		mainText.firstChild.nodeValue = allContent[this.id].text;
		
	}
	
	[].forEach.call(allCon, function(icon){
		icon.addEventListener("click",changeInfo,false);
	});
	
	
})();

function jump(page) {
    $('#'+page).show().siblings().hide();
    $('.page .navi').hide();
}

$(function() {
    $('.page .nav').click(function() {
        $(this).next().toggle();
    });

});