
let fieldArr = [
	[false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false, false]
];

let clear_arr = nestedCopy(fieldArr);

function field(item) {
	let cell = document.querySelector('.container');
	while (cell.firstChild) {
		cell.removeChild(cell.firstChild);
	}
	for (let i = 0; i < item.length; i++) {
		cell_column = document.createElement('tr');
		cell.appendChild(cell_column);
		for (let j = 0; j < item[i].length; j++) {
			cell_row = document.createElement('td');
			cell_row.style.backgroundColor = item[i][j] ? '#000000' : '#ffffff';
			cell_column.appendChild(cell_row);

		};
	};
}

field(clear_arr);

let cell_color = document.querySelector('table');
cell_color.addEventListener('click',  cickHandler);

function cickHandler(event) {
	event.target.style.backgroundColor = '#000000';
	let j = event.target.cellIndex,
		i = event.target.parentNode.rowIndex;

	clear_arr[i][j] = !clear_arr[i][j];
	event.target.style.backgroundColor = clear_arr[i][j] ? '#000000' : '#ffffff';
};




document.querySelector('.clear').addEventListener('click', () => {
	field(fieldArr);
});

document.querySelector('.restore').addEventListener('click', () => {
	field(clear_arr);
});

function nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
}