const LocalStrategy = require("passport-local").Strategy;

const bcrypt = require("bcrypt");

function initialize (passport, getUserByEmail, getUserByName) {

    // Função para autenticar os Usuários
    const autenticarUsuarios = async (email, senha, done) => {

        //Pega o usuário por email
        const usuario = getUserByEmail(email);
        if (usuario == null) {

            return done(null, false, { message: "Não há usuário com esse email" });
        }         
        try {

            if (await bcrypt.compare(senha, usuario.senha)) {
                return done(null, usuario);
            } else {
                return done (null, false, {message: "Senha incorreta"})
            }

        } catch (e) {


            console.log(e);
            return done(e);
        }
    }

    passport.usuario(new LocalStrategy({ usernameField: 'email' }));
    passport.serializeUser((usuario, done) =>  done(null, user.name));
    passport.serializeUser((email, done) => {
        return done (null, getUserByName(name));

     });
  
   
}

module.exports = initialize