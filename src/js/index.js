const rgbR = $(".rgb-r");

const rgbG = $(".rgb-g");

const rgbB = $(".rgb-b");

const rgbCumulative = $(".rgb-rgb");

rgbR.children('input').each( (index, element) => {
	$(element).change(event => {
		const rValue = $(event.target).val();
		const gValue = rgbG.children('.rgb-slider-g').val();
		const bValue = rgbB.children('.rgb-slider-b').val();
		rgbR.children('input').each( (index, element) => {
			$(element).val(rValue);
			$(element).css('background-color', `rgb( ${rValue}, 0, 0)`);
			rgbCumulative.css('background-color', `rgb( ${rValue}, ${gValue}, ${bValue})`);
		});
	});
});

rgbG.children('input').each( (index, element) => {
	$(element).change(event => {
		const rValue = rgbR.children('.rgb-slider-r').val();
		const gValue = $(event.target).val();
		const bValue = rgbB.children('.rgb-slider-b').val();
		rgbG.children('input').each( (index, element) => {
			$(element).val(gValue);
			$(element).css('background-color', `rgb( 0, ${gValue}, 0)`);
			rgbCumulative.css('background-color', `rgb( ${rValue}, ${gValue}, ${bValue})`);
		});
	});
});

rgbB.children('input').each( (index, element) => {
	$(element).change(event => {
		const rValue = rgbR.children('.rgb-slider-r').val();
		const gValue = rgbG.children('.rgb-slider-g').val();
		const bValue = $(event.target).val();
		rgbB.children('input').each( (index, element) => {
			$(element).val(bValue);
			$(element).css('background-color', `rgb( 0, 0, ${bValue})`);
			rgbCumulative.css('background-color', `rgb( 0, 0, ${bValue})`);
			rgbCumulative.css('background-color', `rgb( ${rValue}, ${gValue}, ${bValue})`);
		});
	});
});