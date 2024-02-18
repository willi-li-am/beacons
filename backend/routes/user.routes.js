const {createUserController, getUserController, getUsersController, sendFriendRequestController, acceptFriendRequestController, declineFriendRequestController} = require ('../controllers/user.controller')

const router = require ('express').Router()

router.post('/',createUserController)

router.get('/:user', getUserController)
router.post('/users', getUsersController)

router.post('/friend/send', sendFriendRequestController)

router.post('/friend/accept', acceptFriendRequestController)

router.post('/friend/decline', declineFriendRequestController)

module.exports = router