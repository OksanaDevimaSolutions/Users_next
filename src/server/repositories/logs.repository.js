import Log from '../models/Logs.models';

export const createLogs = async (route, body, time) => {
  const newLog = await Log.create({ route, body, time });

  return newLog.id;
};
const logsRepository = {
  createLogs,
};

export default logsRepository;
