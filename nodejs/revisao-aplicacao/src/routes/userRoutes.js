const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))


router.get('/login', userController.formLogin)
router.post('/verificarLogin', userController.verificarLogin)


router.get('/teste', (req, res) =>{
    res.json({msg:" Olá, sou um json!", aluno: "Joel"});
})


module.exports = router; 