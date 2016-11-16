jQuery(document).ready(function ($) {
    //giỏ hàng

var cartWrapper = $('.cd-cart-container');
	//product id - you don't need a counter in your real project but you can use your real product id
	var productId = 0;

	if( cartWrapper.length > 0 ) {
		//store jQuery objects
		var cartBody = cartWrapper.find('.body')
		var cartList = cartBody.find('ul').eq(0);
		var cartTotal = cartWrapper.find('.checkout').find('span');
		var cartTrigger = cartWrapper.children('.cd-cart-trigger');
		var cartCount = cartTrigger.children('.count')
		var addToCartBtn = $('.cd-add-to-cart');
		var undo = cartWrapper.find('.undo');
		var undoTimeoutId;

		//add product to cart
		addToCartBtn.on('click', function(event){
			event.preventDefault();
			addToCart($(this));
		});

		//open/close cart
		cartTrigger.on('click', function(event){
			event.preventDefault();
			toggleCart();
		});

		//close cart when clicking on the .cd-cart-container::before (bg layer)
		cartWrapper.on('click', function(event){
			if( $(event.target).is($(this)) ) toggleCart(true);
		});

		//delete an item from the cart
		cartList.on('click', '.delete-item', function(event){
			event.preventDefault();
			removeProduct($(event.target).parents('.product'));
		});

		//update item quantity
		cartList.on('change', 'select', function(event){
			quickUpdateCart();
		});

		//reinsert item deleted from the cart
		undo.on('click', 'a', function(event){
			clearInterval(undoTimeoutId);
			event.preventDefault();
			cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				$(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
				quickUpdateCart();
			});
			undo.removeClass('visible');
		});
	}

	function toggleCart(bool) {
		var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;
		
		if( cartIsOpen ) {
			cartWrapper.removeClass('cart-open');
			//reset undo
			clearInterval(undoTimeoutId);
			undo.removeClass('visible');
			cartList.find('.deleted').remove();

			setTimeout(function(){
				cartBody.scrollTop(0);
				//check if cart empty to hide it
				if( Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
			}, 500);
		} else {
			cartWrapper.addClass('cart-open');
		}
	}

	function addToCart(trigger) {
		var cartIsEmpty = cartWrapper.hasClass('empty');
		//update cart product list
		addProduct();
		//update number of items 
		updateCartCount(cartIsEmpty);
		//update total price
		updateCartTotal(trigger.data('price'), true);
		//show cart
		cartWrapper.removeClass('empty');
	}

	function addProduct() {
		//this is just a product placeholder
		//you should insert an item with the selected product info
		//replace productId, productName, price and url with your real product info
		productId = productId + 1;
		var productAdded = $('<li class="product"><div class="product-image">'
            + '<a href="#0"><img src="/img/h1.jpg" alt="placeholder"></a></div>'
            + '<div class="product-details"><h3><a href="#0">Sản phẩm demo</a>'
            + '</h3><span class="price">6000</span><div class="actions">'
            + '<a href="#0" class="delete-item">Xóa</a><div class="quantity">'
            + '<label for="cd-product-' + productId + '">SL</label>'
            + '<span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
		cartList.prepend(productAdded);
	}

	function removeProduct(product) {
		clearInterval(undoTimeoutId);
		cartList.find('.deleted').remove();
		
		var topPosition = product.offset().top - cartBody.children('ul').offset().top ,
			productQuantity = Number(product.find('.quantity').find('select').val()),
			productTotPrice = Number(product.find('.price').text().replace('$', '')) * productQuantity;
		
		product.css('top', topPosition+'px').addClass('deleted');

		//update items count + total price
		updateCartTotal(productTotPrice, false);
		updateCartCount(true, -productQuantity);
		undo.addClass('visible');

		//wait 8sec before completely remove the item
		undoTimeoutId = setTimeout(function(){
			undo.removeClass('visible');
			cartList.find('.deleted').remove();
		}, 8000);
	}

	function quickUpdateCart() {
		var quantity = 0;
		var price = 0;
		
		cartList.children('li:not(.deleted)').each(function(){
			var singleQuantity = Number($(this).find('select').val());
			quantity = quantity + singleQuantity;
			price = price + singleQuantity*Number($(this).find('.price').text().replace('$', ''));
		});

		cartTotal.text(price.toFixed(2));
		cartCount.find('li').eq(0).text(quantity);
		cartCount.find('li').eq(1).text(quantity+1);
	}

	function updateCartCount(emptyCart, quantity) {
		if( typeof quantity === 'undefined' ) {
			var actual = Number(cartCount.find('li').eq(0).text()) + 1;
			var next = actual + 1;
			
			if( emptyCart ) {
				cartCount.find('li').eq(0).text(actual);
				cartCount.find('li').eq(1).text(next);
			} else {
				cartCount.addClass('update-count');

				setTimeout(function() {
					cartCount.find('li').eq(0).text(actual);
				}, 150);

				setTimeout(function() {
					cartCount.removeClass('update-count');
				}, 200);

				setTimeout(function() {
					cartCount.find('li').eq(1).text(next);
				}, 230);
			}
		} else {
			var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
			var next = actual + 1;
			
			cartCount.find('li').eq(0).text(actual);
			cartCount.find('li').eq(1).text(next);
		}
	}

	function updateCartTotal(price, bool) {
		bool ? cartTotal.text( (Number(cartTotal.text()) + Number(price)).toFixed(2) )  : cartTotal.text( (Number(cartTotal.text()) - Number(price)).toFixed(2) );
	}

    //slide hình
	var jssor_1_SlideshowTransitions = [
             { $Duration: 1200, x: 0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, x: -0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, x: 0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, y: 0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, y: -0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, y: -0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, y: 0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, x: 0.3, $Cols: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, x: 0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, y: 0.3, $Rows: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, y: 0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, y: -0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, x: 0.3, $Rows: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, x: -0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, $Delay: 20, $Clip: 3, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, $Delay: 20, $Clip: 12, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
             { $Duration: 1200, $Delay: 20, $Clip: 12, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
	];

	var jssor_1_options = {
	    $AutoPlay: true,
	    $SlideshowOptions: {
	        $Class: $JssorSlideshowRunner$,
	        $Transitions: jssor_1_SlideshowTransitions,
	        $TransitionsOrder: 1
	    },
	    $ArrowNavigatorOptions: {
	        $Class: $JssorArrowNavigator$
	    },
	    $ThumbnailNavigatorOptions: {
	        $Class: $JssorThumbnailNavigator$,
	        $Cols: 10,
	        $SpacingX: 8,
	        $SpacingY: 8,
	        $Align: 360
	    }
	};

	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
	function ScaleSlider() {
	    var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
	    if (refSize) {
	        refSize = Math.min(refSize, 800);
	        jssor_1_slider.$ScaleWidth(refSize);
	    }
	    else {
	        window.setTimeout(ScaleSlider, 30);
	    }
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);

	$("#news-slider").owlCarousel({
	    items: 5,
	    itemsDesktop: [1199, 3],
	    itemsDesktopSmall: [1000, 2],
	    itemsMobile: [650, 1],
	    pagination: false,
	    autoPlay: true
	});

});
