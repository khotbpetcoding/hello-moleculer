import type { Context, ServiceSchema } from 'moleculer';

const serviceSchema: ServiceSchema = {
  name: 'calculator',
  version: '1.0.0',
  actions: {
    add(context) {
      return Number(context.params.a) + Number(context.params.b);
    },
    subtract(context: Context<any>): number {
      return context.params.a - context.params.b;
    },
    multiply: {
      params: {
        a: { type: 'number', convert: true },
        b: { type: 'number', convert: true },
      },
      handler(context: Context<any>) {
        return context.params.a * context.params.b;
      },
    },
    divide: {
      params: {
        a: { type: 'number', convert: true },
        b: { type: 'number', convert: true },
      },
      handler(
        context: Context<{
          a: number;
          b: number;
        }>,
      ): number {
        return context.params.a / context.params.b;
      },
    },
  },
};

export = serviceSchema;
