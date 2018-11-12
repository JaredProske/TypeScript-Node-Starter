import bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: 'starter', level: 'debug' });

export default logger;
