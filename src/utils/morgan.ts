import morgan from "morgan";
import logger from "./winston";


// Custom Morgan format to log API calls
const morganMiddleware = morgan(
    ":method :url :status :response-time ms - :res[content-length]",
    {
        stream: {
            write: (message) => logger.info(message.trim()), // Send logs to Winston
        },
    }
);

export default morganMiddleware;
    