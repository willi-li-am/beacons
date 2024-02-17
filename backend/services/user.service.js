const User = require('../models/user.model')

const createUser = async (body)=>{
    const email = body.email
    const name = body.name  
    const password = body.password
    if (!(email && name && password)){
        throw new Error ("Incorrect Input")
    }

    const newUser = new user()
    newUser.email = email
    newUser.name = name
    newUser.password = password
    return await newUser.save()
}

const getUser = async (id)=>{ //parameter should be string of the id??
        const user =  await User.findById(id)
        return user
}

const sendFriendRequest = async (senderId, receiverId)=>{ //parameter should be string of the id??
    if (senderId == receivedId){
        throw new Error("Cannot send a friend request to yourself")
    }
    
    const sender = await User.findById(senderId)
    const receiver = await User.findById(receiverId)
    
    if (!receiver){
        throw new Error("User not found") //idk if u need this
    }

    if (receiver.friendRequestReceived.includes(sender)){
        throw new Error ("Alreday requested")
    }
    if (receiver.friends.includes(senderId)){
        throw new Error ("Alreday friends")
    }

    receiver.friendRequestReceived.push(senderId)
    sender.friendRequestSent.push (receiverId)

    await receiver.save()
    await sender.save()
        //friend request received of the other user
    //update friend request sent array
    //if friend request does not exist, return error
}
const acceptFriendRequest = (senderId, receivedId)=>{ //parameter should be string of the id??
    const sender =
    //update friend request sent array of other person, update friend request received of u
    //add to friend array list
    //pop off the friend requests list
}
const declineFriendRequest = (friendRequestSent, )=>{ //parameter should be string of the id??
    //update friend request received array of me
    //pop off the friend requests list
}

