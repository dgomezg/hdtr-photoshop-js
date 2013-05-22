var drawGuides = function(document, direction, number) {
	var distance = 0;
	if (direction == Direction.HORIZONTAL) {
		distance = document.height / number;
	} else {
		distance = document.width / number;
	}

	for (var i = 0; i < number + 1; i++) {
		var position;
		position = i * distance;
		document.guides.add(direction, new UnitValue(position, position));
	}
}
