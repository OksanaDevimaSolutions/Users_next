import Log from '../models/Logs.models';

export const createLogs = async (route, method, body, time) => {
  const newLog = await Log.create({
    route, method, body, time,
  });

  return newLog.id;
};
const logsRepository = {
  createLogs,
};

export default logsRepository;
