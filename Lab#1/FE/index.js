const baseAPIURL = "http://localhost:3000/api/v1/employee";

function fetchEmployees() {
	fetch(baseAPIURL)
		.then((response) => response.json())
		.then((data) => {
			const tableBody = document.getElementById("dataTable");
			tableBody.innerHTML = "";
			const list = data.data;
			list.forEach((item) => {
				const row = document.createElement("tr");
				const idCell = document.createElement("td");
				idCell.textContent = item.id;
				row.appendChild(idCell);

				const nameCell = document.createElement("td");
				nameCell.textContent = item.name;
				row.appendChild(nameCell);

				const deleteCell = document.createElement("td");
				const deleteButton = document.createElement("button");
				deleteButton.textContent = "Delete";
				deleteButton.classList.add("btn", "btn-danger", "btn-sm");
				deleteCell.appendChild(deleteButton);

				row.appendChild(deleteCell);

				tableBody.appendChild(row);
			});
		})
		.catch((error) => console.error(error));
}

// TODO
// add event listener to submit button
const form = document.getElementById("employeeForm");

form.addEventListener("submit", () => {
	e.preventDefault();
	createEmployee();
});

// TODO
// add event listener to update button

// TODO
// add event listener to delete button

// TODO
function createEmployee() {
	// get data from input field
	// send data to BE
	// call fetchEmployees
	const name = document.getElementById("name");
	const id = document.getElementById("id");

	fetch(baseAPIURL, {
		method: "POST",
		body: { id: id, name: name },
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		})
		.error((error) => {
			console.error("errror: ", error);
		});
}

// TODO
function deleteEmployee() {
	// get id
	// send id to BE
	// call fetchEmployees
}

// TODO
function updateEmployee() {
	// get data from input field
	// send data to BE
	// call fetchEmployees
}

fetchEmployees();
