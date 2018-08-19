//opciones fijas


const descripcion = {
    alias: 'd',
    demand: true,
    desc: "Descripcion de la tarea"
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crea un nuevo todo', {
        descripcion

    })
    .command('actualizar', 'Actualiza tarea', {
        descripcion,
        completado


    })
    .command('borrar', 'Borrar tarea', {
        descripcion
    })
    .help()
    .argv

//comandos
//crear -d
//listar -d
//actualizar -d -c
module.exports = {
    argv
}