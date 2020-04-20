//Requires
var express = require('express');
var mongoose = require('mongoose');


//inicializar avr

var app = express();

//Conexion Base de Datos

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB',
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos Online');

    })


//Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
            ok: true,
            mensaje: 'Peticion realizada correctamente'
        })
        //200 todo Ok
        //404 recurso no encontrado
        //403 prohibido
})



// Escuchar peticiones


app.listen(3000, () => {
    console.log('Express en el 3000');

})