import express from 'express';
import * as personController from './controllers/personController';
var bodyParser = require('body-parser');

const app = express();

app.set('port', 3000);

app.use(bodyParser.json());

app.get('/users', personController.getPersonas);
app.get('/user/:id', personController.getPersona);
app.put('/user', personController.addPersona);
app.delete('/user/:id', personController.deletePersona);
app.post('/user/:id', personController.updatePersona);

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
