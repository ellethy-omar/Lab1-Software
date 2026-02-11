const express = require("express");
const router = express.Router();

const {
	createEmployee,
	deleteEmployee,
	getEmployees,
	updateEmployee,
} = require("../controllers/employee");

router.route("/").get(getEmployees);

router
	.route("/:id")
	.delete(deleteEmployee)
	.put(updateEmployee)
	.post(createEmployee);

module.exports = router;
