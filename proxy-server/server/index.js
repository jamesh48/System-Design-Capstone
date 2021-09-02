const express = require('express');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors')
const app = express();
const port = 3000;
const axios = require('axios');

app.use(morgan('dev'));

app.use(cors());

app.use(express.static('./public'));

//app.get('/:id', (req, res) => {
//  res.sendFile(path.resolve('../public/index.html'));
//});

//images routes
app.get('/photoBundle/index_bundle.js', async (req, res) => {
  try {
    const { data } = await axios('http://18.1q18.17.38/index_bundle.js');
    //var {data} = await axios.get('https://steam-fec.s3.amazonaws.com/bundle/index_bundle.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/images/:id', async (req, res) => {
  try {
    const { data } = await axios(`http://18.118.17.38/images/${req.params.id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err)
  }
});

//product routes
app.get('/metaBundle/index.js', async (req, res) => {
  try {
    var {data} = await axios.get('http://3.227.255.185/index.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
});

app.get('/api/product/:id/', async (req, res) => {
  try {
    let {data} = await axios.get(`http://3.227.255.185/api/product/${req.params.id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err)
  }
});


//more like this routes
app.get('/moreLikeThisBundle/bundle.js', async (req, res) => {
  try {
    var {data} = await axios.get('http://3.130.170.99:4022/bundle.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/morelikethis/:id', async (req, res) => {
  await axios(`http://3.130.170.99:4022/morelikethis/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to server', err);
      res.status(404).end();
    });
});

//review routes
// app.get('/reviews/:id', async (req, res) => {
//   try {
//     var {data} = await axios(`https://www.steammop.app/reviews/${req.params.id}`);
//     res.send(data)
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

// app.get('/reviewBundle/bundle.js', async (req, res) => {
//   try {
//     var {data} = await axios('https://steammop.app/bundle.js')
//     res.send(data)
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});


