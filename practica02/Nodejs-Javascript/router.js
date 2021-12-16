const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res)=>{
    
   conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{resultado:results.rows});
        }
    }); 
})

//crear registros 
router.get('/create', (req, res)=>{
    res.render('create');
})

//editar registros
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    const response = conexion.query('SELECT * FROM users WHERE id = $1',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            const user = results.rows;
            res.render('edit',{user:user[0]});
        }
    }); 
})

//eliminar registros 
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = $1',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    }); 
})

const crud = require('./controllers/crud');
const { route } = require('express/lib/application');

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;