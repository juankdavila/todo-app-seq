import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routerTodos from "./routes/todos.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

app.use(routerTodos);

app.listen(3000, () => console.log('Listening on port', 3000));
