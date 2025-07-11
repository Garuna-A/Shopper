require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const roomRoutes = require('./routes/room');
const itemRoutes = require('./routes/items');
const ebayRoutes = require('./routes/ebay');


app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/rooms', roomRoutes);
app.use('/api/ebay',ebayRoutes);
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
