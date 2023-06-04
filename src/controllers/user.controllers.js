const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const getAllUsers = await User.findAll()
    return res.json(getAllUsers)
});

const create = catchError(async (req,res) => {
    const user = req.body
    const createUser = await User.create(user)
    return res.status(201).json(createUser)
})

const getById = catchError(async (req, res) => {
const {id} = req.params
const oneUser = await User.findByPk(id)
if(!oneUser) return res.status(404).json({masagge : "user not found"})
return res.json(oneUser)
})

const removeById = catchError(async (req,res) => {
const {id} = req.params
const removeUser = await User.destroy({where: {id}})
if(!removeUser) return res.status(404).json({mesagge: "user not found"})
return res.sendStatus(204)
})

const updateById = catchError(async (req,res) => {
    const {id} = req.params
    const userBody = req.body
    const userUpdate = await User.update(userBody, {where: {id}, returning:true}) 
    if(userUpdate[0] == 0) return res.status(404).json({ message: "user not found" })
    return res.json(userUpdate[1][0])
    })

module.exports = {
    getAll,
    create,
    getById,
    removeById,
    updateById
}