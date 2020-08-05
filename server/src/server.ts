import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        {"name": "Guilherme", "age" : 19},
        {"name": "Antônio", "age" : 23}
    ]

    return response.json(users)
}) 




app.listen(3333);

