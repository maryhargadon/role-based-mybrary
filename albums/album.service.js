const config = require('config.json');

//const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

const Album = db.Album;

module.exports = {
    
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Album.find();
}

async function getById(id) {
    return await Album.findById(id);
}

async function create(albumParam) {
    
    const album = new Album(albumParam);

    // save user
    await album.save();
}

async function update(id, albumParam) {
    const album = await Album.findById(id);

    // copy userParam properties to user
    Object.assign(album, albumParam);

    await album.save();
}

async function _delete(id) {
    await Album.findByIdAndRemove(id);
}