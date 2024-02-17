const Group = require('../models/group.model')

const createGroup = async (body) => {
    const author = body.users //include the author and everyone they're adding
    const groupName = body.name

    if (!(author && groupName)) {
        throw new Error("Incorect Input")
    }
    
    const newGroup = new Group()
    newGroup.name = groupName
    newGroup.users = [author]

    return await newGroup.save()
}

const addToGroup = async (body) => {
    const users = body.users
    const invite = body.id
    
    if (!(users && invite)) {
        throw new Error("Incorect Input")
    }

    const group = Group.findById(invite)
    group.users = [...group.users, ...users]
    return await group.save()
}