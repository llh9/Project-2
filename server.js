require("dotenv").config(); 
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const db = require('./models');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');


// express set up
const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({ db: sequelize }),
// };
// app.use(session(sess));

// handlebars related technologies
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

/***/// Middleware
app.use(express.json());

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// redirect routes
// utilize req.param(s) to target correct routes ( get and post requests concerned)
// work on inheriting
// work from server
app.use(routes)


sequelize.sync({force: true}).then(()=>{
  app.listen(PORT, () => {
   console.log(`Server is listening at http://localhost:${PORT}`)
  });
})