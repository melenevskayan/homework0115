function InputGroup(sSelector){
	var i             = this;
	i.inputGroup      = $(sSelector);
	console.log(i.inputGroup);
	i.btnMinus        = i.inputGroup.find('.button-minus');
	i.number          = i.inputGroup.find('.quantity-field');
	i.btnPlus         = i.inputGroup.find('.button-plus');
	i.messagePlace    = i.inputGroup.find('.message');
	i.currentNumber   = i.number.val();
	console.log("my current number is:", i.currentNumber);


	i.reduceGuestNumber = function(){
		i.currentNumber > 1? (i.currentNumber --, 
		i.number.val(i.currentNumber)) : 
		alert("Minimum one guest is required");
		/*if(i.currentNumber > 1){
			i.currentNumber --;
			i.number.val(i.currentNumber);
			console.log("i.number is now:", i.number.val());	
		}
		else{
			alert("Minimum one guest is required");
		}*/
	}

	i.increaseGuestNumber = function(){
		i.currentNumber ++;
		i.number.val(i.currentNumber);
		console.log("i.number is now:", i.number.val());
	}

	i.number.on('input',function(){ 
    i.currentNumber = $(this).val()
});

	/*$('#someInput').on('input', function() { 
    $(this).val() // get the current value of the input field. 
});*/ 
	

	i.btnMinus.click(i.reduceGuestNumber);
	i.btnPlus.click(i.increaseGuestNumber);
}


