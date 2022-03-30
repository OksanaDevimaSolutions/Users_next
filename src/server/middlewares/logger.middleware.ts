import logsService from "../services/logs.service";

const loggerMiddleware = (req, res, next) => {
  const route = req.url;
  const time = Date.now();
  const { method } = req;
  const listOfRoutes = ["/api/login", "/api/register"];
  const body =
    method === "GET" || method === "DELETE" || listOfRoutes.includes(route)
      ? ""
      : JSON.stringify(req.body);

  logsService.createLogs(route, method, body, time);

  next();
};

export default loggerMiddleware;
