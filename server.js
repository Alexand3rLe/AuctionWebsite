const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers')
const exphbs = require('express-handlebars');
const model = require('./models'); 



const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

app.use(express.static('public'));
app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/users', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

