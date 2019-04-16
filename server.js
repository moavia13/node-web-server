const express = require('express');
const hbs = require('hbs');

const fs = require('fs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
var app = express();

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
});

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
  //res.send('Hello Express!');
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my page',
    currentYear: new Date().getFullYear()
  });
});
app.get('/about', (req,res) => {
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req,res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});
app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
