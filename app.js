const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const sqlite3 = require("sqlite3");
const dbPath = path.join(__dirname, "user.db");

const { request } = require("http");
let db = null;
app.use(express.json());


const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () =>
      console.log(`Server Running At: http://localhost:3000`)
    );
  } catch (error) {
    process.exit(1);
    console.log(`DB ERROR at ${error.message}`);
  }
};

app.get("/hello",async(request,response)=>{
  response.send("Hello")
})

app.get("/about",async(request,response)=>{
  response.send("About")
})
initializeDbAndServer();
