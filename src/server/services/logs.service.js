import logsRepo from '../repositories/logs.repository';

export const createLogs = (route, body, time) => logsRepo.createLogs(route, body, time);

const logsService = {
  createLogs,
};

export default logsService;
