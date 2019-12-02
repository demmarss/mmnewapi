const mongoose = require('mongoose');

const solahTimeSchema = new mongoose.Schema({
  Fajir: {
        type: String,
    },
    Zuhur: {
        type: String,
    },
    Asir: {
        type: String,
    },
    Magrib: {
        type: String,
    },
    Ishai: {
        type: String
    },
    CreateDate: {
        type: String
    }
});
const SolahTime = mongoose.model('SolahTime', solahTimeSchema);

exports.SolahTime = SolahTime;