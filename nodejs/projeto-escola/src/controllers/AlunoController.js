const database = require('../databases/connection'); // importa as variaveis de conexão

class AlunoController {

    novoAluno(request, response){

        const {matricula, nome, turma, email, genero} = request.body;
        console.log(matricula, nome, turma, email, genero);

        database.insert({matricula, nome, turma, email, genero}).table('aluno').then(data =>{
            console.log(data);
            response.json({message: 'Aluno criado com sucesso!'})
        }).catch(error => {
            console.log(error);
        })
    }

    listarAluno(request) {
    const search = request.query.search;

    const alunos =  database.list(search);

    return alunos;
    }
}

module.exports = new AlunoController();