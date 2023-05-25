import { createClient } from 'redis';

const creds = require('../creds.json');

const client = createClient({
    url: `redis://${creds.username}:${creds.password}@${creds.endpoint}`,
});

client.on('error', (err) => {
    console.log('Redis Error', err);
});

export function connect() {
    return client.connect();
}

export default client;