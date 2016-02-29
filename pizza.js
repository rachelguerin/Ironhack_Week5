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

function adjust_price(cost,ingredient) {
		if ($(ingredient).hasClass('active')){
			total -= cost;
		} else {
			total += cost;
		};
}


$('.btn-pepperonni').on('click',function () { 
		$('.pep').toggle(); 
		$('.btn-pepperonni').toggleClass('active'); 
		$('.pep-cost').toggle(); 		
		adjust_price(1,'.btn-pepperonni');
		$('.price strong').text("$"+total);

	});



$('.btn-mushrooms').on('click',function () {
		$('.mushroom').toggle(); 
		$('.btn-mushrooms').toggleClass('active'); 
		$('.mush-cost').toggle(); 
		adjust_price(1,'.btn-mushrooms');
		$('.price strong').text("$"+total);
	});

$('.btn-green-peppers').on('click',function () {
		$('.green-pepper').toggle(); 
		$('.btn-green-peppers').toggleClass('active'); 
		$('.green-pep-cost').toggle();
		adjust_price(1,'.btn-green-peppers');
		$('.price strong').text("$"+total);

	});

$('.btn-sauce').on('click',function () {
		$('.sauce').toggle(); 
		$('.btn-sauce').toggleClass('active'); 
		$('.sauce-cost').toggle();
		adjust_price(3,'.btn-sauce');
		$('.price strong').text("$"+total); 
	});

$('.btn-crust').on('click',function () {
		$('.crust-gluten-free').toggle(); 
		$('.btn-crust').toggleClass('active'); 
		$('.crust-cost').toggle();
		adjust_price(5,'.btn-crust');
		$('.price strong').text("$"+total); 
	});


