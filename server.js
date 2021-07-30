const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Calendari = require("./calendari");
const postFestivos = require("./Post");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.log(e));

app.get("/:id", async (req, res) => {
  try {
    let calendari = await Calendari.find({ any: req.params.id });
    if (!calendari || calendari.length < 1) {
      let newPost = await postFestivos(req.params.id);
      calendari = await Calendari.find({ any: req.params.id });
    }
    res.status(200).json(calendari);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/", async (req, res) => {
  const newCalendari = new Calendari(req.body);
  try {
    const calendari = await newCalendari.save();
    if (!calendari) throw Error("Something went wrong");
    res.status(200).json(calendari);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const calendari = await Calendari.findOneAndReplace({any: req.params.id}, req.body);
    if (!calendari) throw Error("Something went wrong...");
    res.status(200).json(calendari);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
