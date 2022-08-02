$(function(){

	$("#toggle-btn").click(function(){
		$("#main-header nav").toggleClass("on");
	});

	// AOS 초기화
	AOS.init();

	// 모달창
	$(".youtube").click(function(){
		$(".modal").addClass("on");
	});

	$(".btn-close").click(function(){
		$(".modal").removeClass("on");
	});

}); // $