import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Work Finished');
});

app.listen(3000);