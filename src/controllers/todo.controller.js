import {dbClient}  from "../db.js";
import {TODOS} from '../contantes/constantes.js';

export const getTodos = async (req, res) => {

    const {rows} = await dbClient.query(
        "SELECT * FROM todos"
    );

    res.status(200).json(rows);
};

export const getTodoById = async (req, res) => {
    const {id} = req.params;
    const {rows} = await dbClient.query("SELECT * FROM todos WHERE id = $1", [id]);

    if(rows.length > 0)
        res.status(200).json(rows[0]);
    else
        res.status(404).json({error: "Todo no existe"});
};

export const getTodoByIdSample = (req, res) => {
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
};

export const createTodo = async (req, res) => {
    try
    {
        const { name, description } = req.body;
        const complete = 0;

        const {rows} = await dbClient.query(
            "INSERT INTO todos (name, description, complete) VALUES ($1, $2, $3) RETURNING *",
            [name, description, complete]
        );

        res.status(201).json(rows[0]);
    }catch (error)
    {
        res.status(500).json({
            mensaje: error.message
        });
    }
};

export const completeTodo = async (req, res) => {
    const { id } = req.params;
    const { rows } = await dbClient.query(
        "UPDATE todos SET complete = '1' WHERE id = $1 RETURNING *",
        [id]);

    if(rows.length > 0)
        res.status(200).json(rows[0]);
    else
        res.status(404).json({
            mensaje : "Todo no existe"
        });
};

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const { rows } = await dbClient.query(
        "DELETE FROM todos WHERE id = $1 RETURNING *",
        [id]);

    if(rows.length > 0)
        res.status(200).json(rows[0]);
    else
        res.status(404).json({
            mensaje : "Todo no existe"
        });
};