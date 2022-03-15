import logsService from '../services/logs.service';

const loggerMiddleware = (req, res, next) => {
  const route = req.url;
  const body = JSON.stringify(req.body);
  const time = Date.now();
  const { method } = req;

  logsService.createLogs(route, method, body, time);

  next();
};

export default loggerMiddleware;
