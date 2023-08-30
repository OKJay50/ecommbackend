const express = require('express');
const sequelize = require('./config/connection'); // Assuming you have a connection.js file in the config directory
const apiRoutes = require('./routes/apiRoutes'); // Assuming you have an apiRoutes.js file in the routes directory

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the apiRoutes router as middleware
app.use('/api', apiRoutes);

// Sync Sequelize models to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
