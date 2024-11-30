const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('“I am a server one"');
});

 

app.get('/health', (req, res) => {
    res.status(200).send('done');
  });
  
   
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
