import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';

const client = generateClient<Schema>({
    authMode: 'apiKey',
  });

// Now you should be able to make CRUDL operations with the
// Data client
const fetchTodos = async () => {
    const { data: todos, errors } = await client.models.Todo.list({
        authMode: 'apiKey',
      });
};