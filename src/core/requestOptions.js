// import { version } from '../package.json';
const version = 'test';
import { getConfig } from './config';

const DEFAULT_USER_AGENT_HEADERS = {
  'User-Agent': `HubSpot CLI/${version}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const getRequestOptions = (options = {}, requestOptions = {}) => {
  const { env } = options;
  const { httpTimeout, httpUseLocalhost } = getConfig();
  console.log('r2', requestOptions);
  return {
    headers: {
      ...DEFAULT_USER_AGENT_HEADERS,
    },
    ...requestOptions,
  };
};

export { getRequestOptions, DEFAULT_USER_AGENT_HEADERS };
