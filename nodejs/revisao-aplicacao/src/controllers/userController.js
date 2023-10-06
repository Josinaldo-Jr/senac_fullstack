class userController {

    formLogin(req, res){

        res.sendFile(path.join(__dirname, '../views/index.html'))
    }

    verificarLogin(req, res){

        const {user, senha} = req.body
        console.log(user, senha)

        res.sendFile(path.join(__dirname, '../views/index.html'))
    }
}

module.exports = new userController()