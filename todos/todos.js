//import
const fs = require('fs');


let todoList = [];

let guardarDB = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('La DB fue actualizada');
    })

}

const cargarDB = () => {
    try {
        todoList = require('../db/data.json');

    } catch (error) {
        todoList = [];
    }

}

const getListado = () => {
    cargarDB();
    return todoList;
}
const actualizar = (desc, completado = true) => {
    cargarDB();
    let index = todoList.findIndex(todo => (todo.desc).toLowerCase() === desc.toLowerCase());
    if (index >= 0) {
        todoList[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (desc) => {
        cargarDB();
        let index = todoList.findIndex(todo => (todo.desc).toLowerCase() === desc.toLowerCase());
        let borrado = todoList[index];
        if (index >= 0) {
            todoList.splice(index, 1);
            guardarDB();
            return borrado;
        } else {
            return false;
        }
    }
    //crear todo
const crear = (desc) => {
    cargarDB();
    let todo = {
        desc,
        completado: false
    }
    todoList.push(todo);
    guardarDB();
    return todo;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}