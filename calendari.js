const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CalendariSchema = new Schema({
  any: {
    type: Number,
    requiered: true,
  },
  festius: [mongoose.Schema.Types.Mixed],
});

module.exports = mongoose.model("Calendari", CalendariSchema);
