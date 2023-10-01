const { Schema, model } = require("mongoose");

const RolSchema = Schema({
  rol: {
    type: String,
    require: [true, "El rol es obligartorio"],
  },
});

module.exports = model("Rol", RolSchema);
