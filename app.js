//imports
const { argv } = require("./config/yargs");

const todo = require('./todos/todos');
const colors = require('colors');
let comando = argv._[0];
//handle the commands
switch (comando) {
    case 'crear':
        let todoC = todo.crear(argv.descripcion);
        break;
    case 'listar':
        let todoList = todo.getListado();
        for (const todo of todoList) {
            console.log('=========== Por Hacer ==========='.green);
            console.log(`Descripcion: ${todo.desc}`.bgBlack);
            console.log(`Estado: ${todo.completado}`.bgBlack);

            console.log('================================='.green);
        }
        break;
    case 'borrar':
        let borrado = todo.borrar(argv.descripcion);
        console.log(borrado);

        break;

    case 'actualizar':
        let actualizado = todo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log("comando no reconocido");
}