const users = [
    {"id": 1, "banned": true, "name": "Oleg"},
    {"id": 2, "banned": false, "name": "Ali"}
]


 const getUsers = () => {
    return users
}

 const setUsers = () => {
    users.push({"name":"Lesha", "banned": false,})
}

exports.getUsers = getUsers
exports.setUsers = setUsers