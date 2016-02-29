// Write your Pizza Builder JavaScript in this file.

var total = 10;
$('.pep').hide();
$('.mushroom').hide();
$('.green-pepper').hide();
$('.sauce-white').hide();
$('.crust-gluten-free').hide();
$('.pep-cost').hide();
$('.mush-cost').hide();
$('.green-pep-cost').hide();
$('.sauce-cost').hide();
$('.crust-cost').hide();
$('.price strong').text("$"+total);

adjust_price = function (cost,ingredient) {
	if ($(ingredient).hasClass('active')) {
		total -= cost;
	} else {
		total += cost;
	}
}


$('.btn-pepperonni').on('click',function () {$('.pep').toggle(); 
		$('.btn-pepperonni').toggleClass('active'); 
		$('.pep-cost').toggle(); 
		adjust_price(1,'.btn_pepperonni');
		$('.price strong').text("$"+total);
	});

$('.btn-mushrooms').on('click',function () {$('.mushroom').toggle(); $('.btn-mushrooms').toggleClass('active'); $('.mush-cost').toggle() });

$('.btn-green-peppers').on('click',function () {$('.green-pepper').toggle(); $('.btn-green-peppers').toggleClass('active'); $('.green-pep-cost').toggle() });

$('.btn-sauce').on('click',function () {$('.sauce').toggle(); $('.btn-sauce').toggleClass('active'); $('.sauce-cost').toggle() });

$('.btn-crust').on('click',function () {$('.crust-gluten-free').toggle(); $('.btn-crust').toggleClass('active'); $('.crust-cost').toggle() });


