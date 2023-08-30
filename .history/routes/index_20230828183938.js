const express = require('express');
const sequelize = require('../config/connection');
const apiRoutes = require('../routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoutes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
