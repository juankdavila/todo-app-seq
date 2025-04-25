import {TODOS} from '../contantes/constantes.js';
import { Router } from "express";

const routerTodos = Router();

routerTodos.get('/todos', async (req, res) => {
    res.status(200).json(TODOS);
});

routerTodos.get('/todos/:id/', async (req, res) => {
    const { id } = req.params;

    const resultadoBusqueda = TODOS.filter( x => x.id == id);

    if(resultadoBusqueda.length > 0)
    {
      res.status(200).json(resultadoBusqueda[0]);
    }else{
        const mensaje = `No se encontro todo con id ${id}`;
        res.status(404).json({
            mensaje: mensaje,
        });
    }

});

export default routerTodos;