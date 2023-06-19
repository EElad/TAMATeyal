/********* Api Server *************/
const express = require('express');
const app = express();
const port = 5000;
const routerFlats = require('./routers/routerFlats.js');

const cors = require('cors');

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/flats', routerFlats);

app.get('/', (req, res) => {
   res.sendStatus('200');
});

app.use((err, req, res, next) => {
   console.error(err);
   res.status(500).send('Server Error!');
});

app.listen(port, () => {
   console.log('listen to port', port);
});
/**********************************/