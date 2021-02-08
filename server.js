const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000; 
const mongoose = require("mongoose")
require("dotenv/config");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },{ useUnifiedTopology: true })

const db = mongoose.connection;

//Shows on error.
db.on('error', console.error.bind(console, 'connection error:'));

//Makes sure it's open message
db.once("open", () => {
    console.log("connection success")
});

const participantSchema = new mongoose.Schema({
    username: String,
    prize: String,
});

const Participant = mongoose.model("Participant", participantSchema);

const prizeSchema = new mongoose.Schema({
    number: Number,
    prize: String,
});

const Prize = mongoose.model("Prize", prizeSchema);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/register", async (req, res) => {
    const {username} = req.body;
    const participant = await Participant.findOne({username}).exec();
    if (participant){
        //console.log("particpant exist: ", participant)
        res.status(500);
        res.json({
            message: "RIT ID already exist",
        });
        return;
    }
    const prize = "";
    await Participant.create({username, prize});
    res.json({
        username
    });
});

app.get("/prize", (req, res) => {
    res.send("this is prize");
});

app.listen(port, ()=> {
    console.log("ACS Red Envelope App");
});