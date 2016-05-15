import { Coordinate } from '../../model/coordinate';


export class WorldHelper {

	static rotationRadius: int;

	static generateVillagesCoords: Coordinate[] (repos) {

		let coordinates: Coordinate[] = new Array(repos.length);

		WorldHelper.rotationRadius = 1;

		let direction = 0;
		let currentX = 0;
		let currentY = 0;

		let stepPadding = 1;
		repos.forEach((item, index) => {
			
			stepPadding += 1;
			let step = Math.round(Math.random() * 10 + stepPadding);

			for (let i = 0; i < step; i++) {
				switch (direction) {
					case 0:
						currentY++;
						if (currentY == WorldHelper.rotationRadius) {
							direction = 1;
						}
						break;
					case 1:
						currentX++;
						if (currentX == WorldHelper.rotationRadius) {
							direction = 2;
						}
						break;
					case 2:
						currentY--;
						if (Math.abs(currentY) == WorldHelper.rotationRadius) {
							direction = 3;
						}
						break;
					case 3:
						currentX--;
						if (Math.abs(currentX) == WorldHelper.rotationRadius) {
							direction = 0;
							WorldHelper.rotationRadius++;
						}
						break;
				}
			}

			coordinates[index] = new Coordinate(currentX, currentY);
		});

		return coordinates;
	}

	static generateLakesCoords: Coordinate[] (coords: Coordinate[]) {

		let coordinates: Coordinate[] = [];

		let rotationRadius = 1;
		let direction = 0;
		let currentX = 0;
		let currentY = 0;

		let diameter = 15 + 2 * Math.floor((WorldHelper.rotationRadius + 7) / 15) * 15;

		let stepPadding = 1;
		for (let i = 0; i < diameter; i++) {

			stepPadding += 4;
			let step = Math.round(Math.random() * 10 + stepPadding);

			for (let i = 0; i < step; i++) {
				switch (direction) {
					case 0:
						currentY++;
						if (currentY == rotationRadius) {
							direction = 1;
						}
						break;
					case 1:
						currentX++;
						if (currentX == rotationRadius) {
							direction = 2;
						}
						break;
					case 2:
						currentY--;
						if (Math.abs(currentY) == rotationRadius) {
							direction = 3;
						}
						break;
					case 3:
						currentX--;
						if (Math.abs(currentX) == rotationRadius) {
							direction = 0;
							rotationRadius += 2;
						}
						break;
				}
			}

			let overlap = false;

			coords.forEach(coord => {
				if ((coord.x == currentX && coord.y == currentY)
					|| (coord.x == currentX && coord.y == (currentY - 1))
					|| (coord.x == (currentX - 1) && coord.y == currentY)
					|| (coord.x == (currentX - 1) && coord.y == (currentY - 1))) {
					overlap = true;
				}
			});

			if (!overlap) {
				coordinates.push(new Coordinate(currentX, currentY));
			}
		}

		return coordinates;
	}

	static generateForestsCoordinates: Coordinate[] (coords: Coordinate[], bigCoords: Coordinate[]) {

		let coordinates: Coordinate[] = [];

		let rotationRadius = 1;
		let direction = 0;
		let currentX = 0;
		let currentY = 0;

		let diameter = 15 + 2 * Math.floor((WorldHelper.rotationRadius + 7) / 15) * 15;

		let stepPadding = 1;
		for (let i = 0; i < diameter; i++) {

			stepPadding += 2;
			let step = Math.round(Math.random() * 10 + stepPadding);

			for (let i = 0; i < step; i++) {
				switch (direction) {
					case 0:
						currentY++;
						if (currentY == rotationRadius) {
							direction = 1;
						}
						break;
					case 1:
						currentX++;
						if (currentX == rotationRadius) {
							direction = 2;
						}
						break;
					case 2:
						currentY--;
						if (Math.abs(currentY) == rotationRadius) {
							direction = 3;
						}
						break;
					case 3:
						currentX--;
						if (Math.abs(currentX) == rotationRadius) {
							direction = 0;
							rotationRadius += 3;
						}
						break;
				}
			}

			let overlap = false;

			coords.forEach(coord => {
				if (coord.x <= currentX && coord.x >= currentX - 2 && coord.y <= currentY && coord.y >= currentY - 1) {
					overlap = true;
				}
			});

			bigCoords.forEach(coord => {
				if (coord.x <= currentX + 2 && coord.x >= currentX - 1 && coord.y <= currentY + 1 && coord.y >= currentY - 1) {
					overlap = true;
				}
			});

			if (!overlap) {
				coordinates.push(new Coordinate(currentX, currentY));
			}
		}

		return coordinates;
	}

	static generateTreesCoordinates: Coordinate[] (smallCoords: Coordinate[], coords: Coordinate[], bigCoords: Coordinate[]) {

		let coordinates: Coordinate[] = [];

		let rotationRadius = 1;
		let direction = 0;
		let currentX = 0;
		let currentY = 0;

		let diameter = 15 + 2 * Math.floor((WorldHelper.rotationRadius + 7) / 15) * 15;

		let stepPadding = 1;
		for (let i = 0; i < diameter * 5; i++) {

			stepPadding += 1;
			let step = Math.round(Math.random() * 5);

			for (let i = 0; i < step; i++) {
				switch (direction) {
					case 0:
						currentY++;
						if (currentY == rotationRadius) {
							direction = 1;
						}
						break;
					case 1:
						currentX++;
						if (currentX == rotationRadius) {
							direction = 2;
						}
						break;
					case 2:
						currentY--;
						if (Math.abs(currentY) == rotationRadius) {
							direction = 3;
						}
						break;
					case 3:
						currentX--;
						if (Math.abs(currentX) == rotationRadius) {
							direction = 0;
							rotationRadius += 3;
						}
						break;
				}
			}

			let overlap = false;

			smallCoords.forEach(coord => {
				if (coord.x == currentX && coord.y == currentY) {
					overlap = true;
				}
			});

			coords.forEach(coord => {
				if (coord.x <= currentX + 1 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
					overlap = true;
				}
			});

			bigCoords.forEach(coord => {
				if (coord.x <= currentX + 2 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
					overlap = true;
				}
			});

			if (!overlap) {
				coordinates.push(new Coordinate(currentX, currentY));
			}
		}

		return coordinates;
	}

	static generateStonesCoordinates: Coordinate[] (smallCoords: Coordinate[], coords: Coordinate[], bigCoords: Coordinate[], smallCoords1: Coordinate[]) {

		let coordinates: Coordinate[] = [];

		let rotationRadius = 1;
		let direction = 0;
		let currentX = 0;
		let currentY = 0;

		let diameter = 15 + 2 * Math.floor((WorldHelper.rotationRadius + 7) / 15) * 15;

		let stepPadding = 1;
		for (let i = 0; i < diameter * 5; i++) {

			stepPadding += 1;
			let step = Math.round(Math.random() * 5);

			for (let i = 0; i < step; i++) {
				switch (direction) {
					case 0:
						currentY++;
						if (currentY == rotationRadius) {
							direction = 1;
						}
						break;
					case 1:
						currentX++;
						if (currentX == rotationRadius) {
							direction = 2;
						}
						break;
					case 2:
						currentY--;
						if (Math.abs(currentY) == rotationRadius) {
							direction = 3;
						}
						break;
					case 3:
						currentX--;
						if (Math.abs(currentX) == rotationRadius) {
							direction = 0;
							rotationRadius += 3;
						}
						break;
				}
			}

			let overlap = false;

			smallCoords.forEach(coord => {
				if (coord.x == currentX && coord.y == currentY) {
					overlap = true;
				}
			});

			smallCoords1.forEach(coord => {
				if (coord.x == currentX && coord.y == currentY) {
					overlap = true;
				}
			});

			coords.forEach(coord => {
				if (coord.x <= currentX + 1 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
					overlap = true;
				}
			});

			bigCoords.forEach(coord => {
				if (coord.x <= currentX + 2 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
					overlap = true;
				}
			});

			if (!overlap) {
				coordinates.push(new Coordinate(currentX, currentY));
			}
		}

		return coordinates;
	}
}