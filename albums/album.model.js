const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    //createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    //transform: function (doc, ret) {
        //delete ret._id;
        //delete ret.hash;
    //}
});

module.exports = mongoose.model('Album', schema);