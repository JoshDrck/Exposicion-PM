
const conexion = require('../database/db');

exports.save  = async (req, res)=>{
    const { user , rol } = req.body;
    console.log(user);

    const response = await conexion.query('INSERT INTO users (usuario, rol) VALUES ($1, $2)', [user, rol]);
    console.log(response);
    res.redirect('/');
}

exports.update = async (req, res)=>{
    const id = req.body.id;
    const usuario = req.body.user;
    const rol = req.body.rol;

    const response = await conexion.query('UPDATE users SET usuario = $1, rol= $2  WHERE id= $3', [usuario, rol, id]);
    console.log(response);
    res.redirect('/');
}

