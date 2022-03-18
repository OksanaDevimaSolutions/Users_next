import logsRepo from '../repositories/logs.repository';

export const createLogs = (route, method, body, time) => {
  logsRepo.createLogs(route, method, body, time);
};

const logsService = {
  createLogs,
};

export default logsService;
