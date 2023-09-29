const database = require('../databases/connection'); // importando o arquivo de conexão
const express = require('express');
const router = express.Router();

const AlunoController = require('../controllers/AlunoController') // importando o controle de aluno

router.post('/novoAluno', AlunoController.novoAluno);
router.post('/listarAluno', AlunoController.listarAluno);
// router.post('/buscarAluno/:matricula', AlunoController.buscarAluno);

module.exports = router; 