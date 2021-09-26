import {IEnvironment} from '../app/core/base/environment.interface';

export const Environment: IEnvironment = {
  type: 'DEV',
  protocol: 'https',
  host: 'machinestream.herokuapp.com',
  port: 443,
  version: 'v1'
};
