const express = require("express");
const app = express();
const port = 3001;
app.use(express.static('public'))
app.set('view engine','ejs');

// Vérifie si la requête est effectuée entre lundi et vendredi et entre 9h00 et 17h00
function myMiddleware(req, res, next) {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();

  if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
    next(); // Continue si c'est entre lundi et vendredi, et entre 9h00 et 17h00
  } else {
    res.render("unavailable")
  }
}


// app.use(myMiddleware);



app.get('/',(req,res)=>{
  res.render('index',{date: Date().toString()});
})

app.get('/contact',(req,res)=>{
  res.render('contact');
})

app.get('/services',(req,res)=>{
  res.render('services');
})


app.listen(port);

module.exports =app;