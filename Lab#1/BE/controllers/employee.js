let employee = [{ id: "1", name: "Mohamed Sayed" }];

exports.getEmployees = async (req, res, next) => {
	res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
	const employeeId = req.params.id;
	console.log(req.params);
	console.log("employeeId: ", employeeId);

	if (!employeeId) {
		return res.status(400).json({ error: "id is required" });
	}

	const singleEmployee = employee.find((e) => e.id === employeeId);

	if (!singleEmployee) {
		return res.status(404).json({ error: "Not Found" });
	}

	employee = employee.filter((e) => e.id !== employeeId);

	res.status(200).json({ data: singleEmployee });
};

// TODO
exports.createEmployee = async (req, res, next) => {
	const { name } = req.body;
	const employeeId = req.params.id;
	// console.log(req.param, req.params);

	console.log("name: ", name, " id: ", employeeId);

	if (!name || !employeeId) {
		return res.status(400).json({ error: "Invalid Parameters" });
	}

	const singleEmployee = employee.find((e) => e.id === employeeId);

	if (singleEmployee) {
		return res.status(400).json({ error: "Employee with the same id exists" });
	}

	employee.push({ id: employeeId, name: name });

	res.status(201).json({ message: "Created successfully" });
};

// TODO
exports.updateEmployee = async (req, res, next) => {
	const { name } = req.body;
	const employeeId = req.params.id;

	console.log("name:", name, " id:", employeeId);

	if (!name || !employeeId) {
		return res.status(400).json({ error: "Invalid Parameters" });
	}

	let found = false;
	employee.forEach((e, i) => {
		if (e.id === employeeId) {
			e.name = name;
			found = true;
			return res.json({ message: "Updated successfully" });
		}
	});

	if (found) {
		return;
	}

	res.status(404).json({ error: "Not Found" });
};
