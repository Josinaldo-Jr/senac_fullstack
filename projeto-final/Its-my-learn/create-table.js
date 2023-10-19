import { sql } from './db.js'

// sql`            
//     DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log('tabela apagada')
// })

sql`            
    CREATE TABLE usuarios (
        id TEXT PRIMARY KEY,
        nome TEXT,
        email TEXT,
        senha INTEGER
    );
`.then(() => {
    console.log('tabela criada')
})