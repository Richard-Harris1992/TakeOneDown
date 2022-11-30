const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>99 bottles of beer on the wall, 99 bottles of beer.</h1>
              <h2><a href="./98">Take one down, pass it around.</a></h2>`);
}); 

app.get('/:numberOfBeers', (req, res) => {
   if(req.params.numberOfBeers > 0) {
    res.send(`<h1>${req.params.numberOfBeers} bottles of beer on the wall, ${req.params.numberOfBeers} bottles of beer.</br>
    <a href="./${req.params.numberOfBeers - 1}">Take one down, pass it around.</a></h1>`);
   } else {
    res.send(`<h1> No more beer on the wall. <a href="/"> Start over. </a></h1>`);
   }
}); 

app.listen(port, () => console.log(`port 3000`));