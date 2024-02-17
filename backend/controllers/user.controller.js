const { createUser, getUser, sendFriendRequest, acceptFriendRequest, declineFriendRequest } = require("../services/group.service");

const createUserController = (req, res) => {
    createUser(req.body)
    .then((data) => {res.send(data)})
    .catch(err => res.status(500).send(err))
}

const getUserController = (req, res) => {
    getUser(req.params.id)
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
    createUserController, getUserController, sendFriendRequestController, acceptFriendRequestController, declineFriendRequestController
}