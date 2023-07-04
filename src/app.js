const express = require('express');

const { routerLogin, routerUser, routerCategory } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
