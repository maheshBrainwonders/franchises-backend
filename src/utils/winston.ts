import { createLogger, format, transports } from 'winston';
import path from 'path';

const customColors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue'
};

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.colorize({ all: true }),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ timestamp, level, message }) => `\n${timestamp} [${level}]: ${message}`)
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(process.cwd(), 'logs/error.log'), level: 'error', format: format.uncolorize() }),
        new transports.File({ filename: path.join(process.cwd(), 'logs/combined.log'), format: format.uncolorize() })
    ]
});

export default logger;
