const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

// app.get('/reviews/test', async (req, res) => {
//   try {
//     const { data } = await axios(`http://3.140.90.28/reviews/${random}`);
//     res.send(data);
//   } catch (err) {
//     res.send(err);
//   }
// });


app.get('/reviews/:id', async ({ params: { id } }, res) => {
  try {
    const { data } = await axios(`http://3.140.90.28:4002/reviews/${id}`);
    res.send(data);
  } catch (err) {
    console.log(err.message);
    res.send(err);
  }
});

app.listen(4001, () => {
  console.log(`App listening at 4001`);
});