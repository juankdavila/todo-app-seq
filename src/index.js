import express from 'express';
import routerTodos from "./routes/todos.routes.js";
import morgan from 'morgan';
import cors from 'cors';
import logger from './logger.js';
logger.info('🚀 Servidor iniciando - esto debería aparecer en Seq');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// 👉 Middleware para loguear cada petición
app.use((req, res, next) => {
    logger.info({
        message: 'Nueva petición HTTP',
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        body: req.body,
    });
    next();
});

app.use(routerTodos);

app.listen(3000, () => {
    logger.info('Servidor escuchando en puerto 3000');
});