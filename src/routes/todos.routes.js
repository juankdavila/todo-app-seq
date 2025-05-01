import { Router } from "express";
import {completeTodo, createTodo, getTodoById, getTodos} from "../controllers/todo.controller.js";

const routerTodos = Router();

routerTodos.get('/todos', getTodos);
routerTodos.get('/todos/:id/', getTodoById);
routerTodos.post('/todos', createTodo);
routerTodos.post('/todos/complete/:id', completeTodo);

export default routerTodos;