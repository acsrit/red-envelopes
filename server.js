const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000; 
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://pikachungg:Fufupapachon23@cluster0.y72ni.mongodb.net/ACS", { useNewUrlParser: true },{ useUnifiedTopology: true })

const participantSchema = new mongoose.Schema({
    username: String,
    prize: String,
});

const Participant = mongoose.model("Participant", participantSchema);

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

app.listen(port, ()=> {
    console.log("ACS Red Envelope App");
});