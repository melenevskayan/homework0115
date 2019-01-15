function Elevator(newElevator){
	var e 		       = this;
		e.elevator     = $(newElevator);
		console.log('e.elevator now is: ', e.elevator);
		e.btn          = e.elevator.find('.btn');
		e.messagePlace = e.elevator.find('.message');
		console.log("my message place:", e.messagePlace);
		e.currentFloor = 1;
		
		


	e.movement = function(){
		var targetFloor = $(this).text();
		alert(targetFloor);
		if(targetFloor > e.currentFloor){
			message = 'Elevator is going up to ' + targetFloor + ' floor';
		}
		else if(targetFloor < e.currentFloor){
			message = 'Elevator is going down to ' + targetFloor + ' floor';
		}
		else if(targetFloor == e.currentFloor){
			message = "You're already on the needed floor";
		}
		else if(targetFloor == "Stop"){
			message = "Elevator is stopped";
		}
		e.currentFloor = targetFloor;
		e.messagePlace.text(message);
	}
	e.btn.click(e.movement);
}





