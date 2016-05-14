import { Coordinate } from '../../model/coordinate';


export class WorldHelper {

	static rotationRadius: int;

	static generateVillagesCoords: Coordinate[] (repos) {

		let coordinates: Coordinate[] = new Array(repos.length);

		WorldHelper.rotationRadius = 1;

		let direction = 0;
		let currentX = 0;
		let currentY = 0;

		repos.forEach((item, index) => {
			
			let step = Math.round(Math.random() * 10 + 3);

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
}