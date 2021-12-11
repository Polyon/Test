const Mongoose = require('mongoose');

var WealthSchema = new Mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    size:{
        type: String
    },
    isActive:{
        type: Boolean,
        default: 0
    }
}, { timestamps: true });

const WealthModel = new Mongoose.model('Property', WealthSchema);

module.exports = { WealthModel };