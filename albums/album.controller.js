const express = require('express');
const router = express.Router();

const albumService = require('./album.service');

// routes
//router.post('/authenticate', authenticate);
router.post('/create', create);
router.get('/', getAll);
//router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function create(req, res, next) {
    albumService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    albumService.getAll()
        .then(albums => res.json(albums))
        .catch(err => next(err));
}

function getById(req, res, next) {
    albumService.getById(req.params.id)
        .then(album => album ? res.json(album) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    albumService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    albumService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}