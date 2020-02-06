/**
 * @file Startup file.
 * @author Ivan Kockarevic
 */
import bodyParser from 'body-parser';
import express from 'express';

// Initialize Express.
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Map routes.
app.post('/', (request: any, response: any) => {
    response.send();
});

app.get('/', (request: any, response: any) => {
    response.send();
});

app.get('/:id', (request: any, response: any) => {
    response.send();
});

app.put('/:id', (request: any, response: any) => {
    response.send();
});

app.delete('/:id', (request: any, response: any) => {
    response.send();
});

// Start the app.
app.listen(3000, () => console.log(`App listening on http://localhost:3000`));
