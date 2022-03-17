import logsService from '../services/logs.service';

const loggerMiddleware = (req, res, next) => {
  const route = req.url;
  const time = Date.now();
  const { method } = req;
  const body = method === 'GET' || method === 'DELETE' || route === '/api/login' || route === '/api/register' ? '' : JSON.stringify(req.body);

  logsService.createLogs(route, method, body, time);

  next();
};

export default loggerMiddleware;
