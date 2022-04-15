import { createServer, Model } from 'miragejs';

createServer({
  models: {
    customer: Model,
  },

  seeds(server) {
    server.create('customer', { id: 1, name: 'thazinho', ano: 1999 });
    server.create('customer', { id: 2, name: 'brunão', ano: 1990 });
    server.create('customer', { id: 3, name: 'patrick quack', ano: 1995 });
  },

  routes() {
    this.get('api/customers', async (schema) => ({
      customers: (await schema.customers.all()).models,

    }));

    this.post('api/customers', async (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return {
        customer: (await schema.customers.create({ data })).attrs,
      };
    });
  },
});
