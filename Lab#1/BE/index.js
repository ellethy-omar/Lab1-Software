require("colors");
const express = require("express");
const app = express();
const cors = require("cors");

// Body parser
app.use(express.json());
app.use(cors());

const employeeRoutes = require("./routes/employee");
app.use((req, res, next) => {
	console.log("Hit!");
	console.log("path:", req.path);
	console.log("body:", req.body);
	console.log("params:", req.params);
	next();
});

// Mount routers
app.use("/api/v1/employee", employeeRoutes);

const PORT = 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.bgBlue));
