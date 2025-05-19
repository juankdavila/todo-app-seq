import winston from 'winston';
import pkg from 'winston-seq';

const { Seq } = pkg;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(), // para ver en consola
        new Seq({
            serverUrl: 'http://localhost:5341', // Asegúrate que este es correcto
            onError: (e) => {
                console.error('Error enviando logs a Seq:', e);
            },
        }),
    ],
});

export default logger;