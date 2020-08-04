const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

var json = 
{
    "title": "JSON Example",
    "nested": {
      "someInteger": 7,
      "someBoolean": true,
      "someArray": Array[3][
        "list of",
        "fake strings",
        "and fake keys"
      ]
    }
  }