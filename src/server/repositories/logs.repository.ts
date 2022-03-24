import Log from '../models/Log.models';

export const createLogs = async (route:string, method:string, body:string, time:Date | number) => {
  const newLog = await Log.create({
    route, method, body, time,
  });

  return newLog;
};
const logsRepository = {
  createLogs,
};

export default logsRepository;
