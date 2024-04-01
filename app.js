const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/v1/userRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/v1/users', userRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
