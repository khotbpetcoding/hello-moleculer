import type { ServiceSchema } from 'moleculer';
import moleculerWeb from 'moleculer-web';

const CALCULATOR_SERVICE = '1.0.0.calculator';
const serviceSchema: ServiceSchema<any> = {
  name: 'routes',
  version: '1.0.0',
  mixins: [moleculerWeb],
  settings: {
    routes: [
      {
        path: '/calculator',
        aliases: {
          'GET /add': '1.0.0.calculator.add',
          'GET /subtract': `${CALCULATOR_SERVICE}.subtract`,
          'GET /multiply': `${CALCULATOR_SERVICE}.multiply`,
          'GET /divide': `${CALCULATOR_SERVICE}.divide`,
        },
        mappingPolicy: 'restrict',
      },
    ],
  },
};

export = serviceSchema;
