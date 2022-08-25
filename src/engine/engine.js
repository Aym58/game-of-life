import { NUM_OF_CELLS } from '../config';

export const matrix = Array(NUM_OF_CELLS).fill(false);

export const reset = () => {
	for (let i = NUM_OF_CELLS; i >= 0; i -= 1) {
		matrix[i] = false;
	}
};

export const setDataToEngine = (index) => {
	matrix[index] = !matrix[index];
};

export const setPatternToEngine = (indexArr) => {
	indexArr.forEach((element) => {
		matrix[element] = true;
	});
};

const getNeighbours = (x) => {
	let i;
	const neighboursArray = [
		x + 1,
		x - 1,
		x - 49,
		x - 50,
		x - 51,
		x + 49,
		x + 50,
		x + 51,
	];
	for (i = 0; i < 8; i += 1) {
		if (neighboursArray[i] < 0)
			neighboursArray[i] = neighboursArray[i] + NUM_OF_CELLS;
		if (neighboursArray[i] >= NUM_OF_CELLS)
			neighboursArray[i] = neighboursArray[i] - NUM_OF_CELLS;
	}
	return neighboursArray;
};

export const runLife = () => {
	const matrixMirror = [...matrix];
	let n = NUM_OF_CELLS;
	for (let i = 0; i < n; i += 1) {
		const neighbours = getNeighbours(i);
		let nn = neighbours.length;
		let count = 0;
		for (let ii = 0; ii < nn; ii += 1) {
			const neighbourIndex = neighbours[ii];
			if (matrix[neighbourIndex]) count += 1;
		}
		if (matrix[i] && count <= 1) matrixMirror[i] = false;
		if (matrix[i] && count >= 4) matrixMirror[i] = false;
		if (matrix[i] && (count === 2 || count === 3)) matrixMirror[i] = true;
		if (!matrix[i] && count === 3) {
			matrixMirror[i] = true;
		}
	}

	for (let i = NUM_OF_CELLS; i >= 0; i -= 1) {
		matrix[i] = matrixMirror[i];
	}
};
