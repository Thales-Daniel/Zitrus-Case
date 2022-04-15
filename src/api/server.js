import { createServer } from 'miragejs';

export default function server() {
  createServer({
    routes() {
      this.get('api/customers', () => ({
        customers: [
          { id: 1, name: 'patrick quack' },
          { id: 2, name: 'thazinho' },
          { id: 3, name: 'brunão' },
        ],

      }));
    },
  });
}
