import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '5s',
};

export default function () {
  http.get('https://logging-monitoring-cajo52.5sc6y6-3.usa-e2.cloudhub.io/info');
}
