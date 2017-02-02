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
		//console.log(this);
		
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
	
	//Instead of giving a variable to each page, I can just simply use jquery, otherwise, 
	//I would've needed to use a for loop to display each page, also, with this layout, I don't think it's applicable to us ajax to switch between pages

});