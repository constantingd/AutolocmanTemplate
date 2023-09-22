$(document).ready(function () {
	$("#yandex-reviews").on("load", function() {
		let iframeHead = $("iframe#yandex-reviews").contents();
		iframeHead.find(".badge__form").hide();
		iframeHead.find(".mini-badge__rating-info").hide();
		iframeHead.find(".badge__comments").css({"overflow": "hidden","display":"flex"});
		iframeHead.find(".comment").css({"min-width": "47%"});
		iframeHead.find(".badge").css({"min-width": "100%","display":"flex","justify-content":"center"});
	});
});