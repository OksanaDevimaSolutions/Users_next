import logsRepo from '../repositories/logs.repository';

export const createLogs = (route:string, method:string, body:string, time:Date | number) => {
  logsRepo.createLogs(route, method, body, time);
};

const logsService = {
  createLogs,
};

export default logsService;
