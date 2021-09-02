const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const { getGameReviews } = require('./controllers.js');

app.get('/reviews/:gameID', async ({params: {gameID}}, res) => {
  try {
    const reviews = await getGameReviews(gameID);
    res.send(reviews);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

app.listen(4002, () => {
  console.log('DB listening on port 4002');
})
