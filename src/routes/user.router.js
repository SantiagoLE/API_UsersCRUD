const { getAll, create, getById, removeById, updateById } = require('../controllers/user.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
		.get(getAll)
        .post(create)

        usersRouter.route("/:id")
        .get(getById)
        .delete(removeById)
        .put(updateById)

module.exports = usersRouter;