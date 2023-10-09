const users = [{
    id: 1,
    nome: "Joel",
    idade: 28,
    uf: "RN"
}];

function insertUser(user){
    users.push(user);
}

function selectUsers(id){
    return users.find(c => c.id === id);
}

function selectUser(id){
    return users;
}

function updateUser(id, userData){
    const user = users.find(c => c.id === id);
    if(!user)  return;
    user.nome = userData.nome;
    user.idade = userData.idade;
    user.uf = userData.uf;
}

function deleteUser(id){
    const index = users.find(c => c.id === id);
    users.splice(index, 1);
}

module.exports = {
    selectUser,
    selectUsers,
    insertUser,
    updateUser,
    deleteUser
}