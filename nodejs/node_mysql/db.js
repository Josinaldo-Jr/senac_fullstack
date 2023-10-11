const mysql = require("mysql2/promise");

const client = mysql.createPool(process.env.CONNECTION_STRING);

// cadastra usuário
async function insertUser(user){
    const values = [user.id, user.nome, user.idade, user.uf];
    await client.query("INSERT INTO user (id, nome, idade, uf) VALUES (?,?,?,?)", values);
}

// listar usuários por id
async function selectUsers(id){
    const results = await client.query("SELECT * FROM user WHERE id=?;", [id]);
    return results[0];
}

// listar usuários 
async function selectUser(){
    const results = await client.query("SELECT * FROM user;");
    return results[0];
}

async function updateUser(id, user){
    const values = [user.nome, user.idade, user.uf, id];
    await client.query("UPDATE user SET nome=?, idade=?, uf=?WHERE id=?", values);
}

async function deleteUser(id) {
    const values = [id];
    await client.query("DELETE FROM user WHERE id=?", values);
}

module.exports = {
    selectUser,
    selectUsers,
    insertUser,
    updateUser,
    deleteUser
}