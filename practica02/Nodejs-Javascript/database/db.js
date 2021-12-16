const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'crudNode',
    port: '5432'
})

pool.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
    }
    console.log('!Conectado a la BD postgresql');
})

module.exports = pool;