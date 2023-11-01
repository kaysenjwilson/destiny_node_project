const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
    weaponName: {
        type: String,
        required: true,
    },
    rpm: {
        type: Number,
        required: true,
    },
    weaponType: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    rarity: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("weapons", WeaponSchema)