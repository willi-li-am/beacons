const { createUser, getUser, getUsers, sendFriendRequest, acceptFriendRequest, declineFriendRequest } = require("../services/user.service");

const createUserController = (req, res) => {
    createUser(req.body)
    .then((data) => {res.send(data)})
    .catch(err => res.status(500).send(err))
}

const getUserController = (req, res) => {
    getUser(req.params.user)
    .then((data) => res.send(data))
    .catch(err => res.status(500).send(err))
}
const getUsersController = (req, res) => {
    getUsers(req.body)
    .then((data) => res.send(data))
    .catch(err => res.status(500).send(err))
}

const sendFriendRequestController = (req,res) =>{
    sendFriendRequest(req.body)
    .then (() => res.send("success"))
    .catch(err =>res.status(500).send(err))
}
const acceptFriendRequestController = (req,res) =>{
    acceptFriendRequest(req.body)
    .then (() => res.send("success"))
    .catch(err =>res.status(500).send(err))
}
const declineFriendRequestController = (req,res) =>{
    declineFriendRequest(req.body)
    .then (() => res.send("success"))
    .catch(err =>res.status(500).send(err))
}

module.exports = {
    createUserController, getUserController, getUsersController, sendFriendRequestController, acceptFriendRequestController, declineFriendRequestController
}