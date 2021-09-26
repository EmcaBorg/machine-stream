import {IEnvironment} from '../app/core/base/environment.interface';

export const Environment: IEnvironment = {
  type: 'LOCAL',
  protocol: 'http',
  host: 'localhost',
  port: 8080,
  version: 'v1'
};
