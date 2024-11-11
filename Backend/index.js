require('dotenv').config()
const express = require("express")
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 4000

// CORS Options
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from frontend running on this domain
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to Database
const dataBaseConnect = require("./Config/DataBaseConnect");
dataBaseConnect.DBConnect();

const StudentDataGet = require("./Routes/StudentGetDataRoute")

app.use("/api/v1/studGetData", StudentDataGet)

// Root Route 
app.get('/', (req, res) => {
  res.send(`Hello from the backend!`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});