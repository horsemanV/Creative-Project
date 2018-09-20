$('article').children('section').each( (index, element) => {

	const color = {
		type: $(element).children('label').html().toLowerCase(),
		inputs: $(element).children('input'),
		output: {
			color: $(element).children('figure').children('span'),
			caption: $(element) .children('figure').children('figcaption').children('code'),
		},
		reset: {
			button: $(element).children('button'),
			value: 0,
			stringValue: 'rgb(0,0,0)',
		}
	};

	/* event handlers for changing input */
	color.inputs.change( event => {
		const newColorValue = $(event.target).val();
		color.inputs.val(newColorValue);

		let rgbString = '';
		switch( color.type ) {
			case 'r':
				rgbString = `rgb(${newColorValue}, 0, 0)`;
			break;
			case 'g':
				rgbString = `rgb( 0, ${newColorValue}, 0 )`;
			break;
			case 'b':
				rgbString = `rgb( 0, 0, ${newColorValue})`;
			break;
			default:
				rgbString = `rgb(0,0,0)`;
			break;
		}
			color.output.color.css('background-color', rgbString);
			color.output.caption.html( rgbString );
			updateRgbDisplay();
	});

	/* event listener for reset button clicks */
	color.reset.button.click( event => {
		color.inputs.val( color.reset.value);
		color.output.color.css('background-color', color.reset.stringValue);
		color.output.caption.html( color.reset.stringValue );
		updateRgbDisplay();
	});
});

/* Event listener for reset all button click */
$('.rgb--rgb').children('button').click( event => {
	$('section').children('input').val(0);
	$('section').children('figure').children('span').css('background-color', 'rgb(0,0,0)');
	$('section').children('figure').children('figcaption').children('code').html( 'rgb(0, 0, 0)');
})

/*
	Resets all inputs and their corresponding displays to rbg(0,0,0);
*/
const updateRgbDisplay = () => {
		const rValue = $('.rgb--r').children('.rgb-slider--r').val();
		const gValue = $('.rgb--g').children('.rgb-slider--g').val();
		const bValue = $('.rgb--b').children('.rgb-slider--b').val();
		const newRgbValue = `rgb( ${rValue}, ${gValue}, ${bValue})`;

		$('.rgb--rgb').children('figure').children('span').css('background-color', newRgbValue);
		$('.rgb--rgb').children('figure').children('figcaption').children('code').html( newRgbValue );
}