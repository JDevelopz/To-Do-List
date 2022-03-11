// activate express and body-parser npm
const express = require('express');
const bodyParser = require('body-parser');
// construct app as express.js
const app = express();
// Construct external date-time.js file.
const date = require(__dirname + '/date-time.js');

// Make container for pushed items
let items = [];
// Make container for pushed workItems
let workItems = [];

// activate EJS
app.set('view engine', 'ejs');
// Use body-parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// allow app to use static filesystem
app.use(express.static('public'));

// Start request to get '/' filesystem with a require and response. Shortend practice.
app.get('/', function(req, res) {

  // Make day recieved from imported data const date gives day and date
  let day = date.getDate();

  // Making a statement if statement.
  // if today is equal to saturday ( ||= or) today is equal to Sunday
  // 1 monday / 2 tuesday / 3 wednesday / 4 thursday / 5 friday / 6 saturday / 0 sunday
  if (day == 6 || day === 0) {
    text = 'Lets spend time with family!';
    // render text from list.ejs as in view folder -> with action change <%=whatDay+whatText%> in list.ejs
    res.render('list', {
      listTitle: day,
      whatText: text,
      newListItems: items
    });
  } else {
    text = 'Lets grind hard, master those skills!';
    // render text from list.ejs as in view folder -> with action change <%=whatDay+whatText%> in list.ejs
    res.render('list', {
      listTitle: day,
      whatText: text,
      newListItems: items
    });
  };
});

//  Get value of the posted item-- if its equal to Work List post on '/work' && if else push in '/'
app.post('/', function(req, res) {

  let item = req.body.newItem;

  if (req.body.list === 'Work list') {
    workItems.push(item);
    console.log(items);
    res.redirect('/work');
  } else {
    items.push(item);
    console.log(items);
    res.redirect('/');
  }
});

// Get '/work'
app.get('/work', function(req, res) {
  text = null;
  res.render('list', {
    listTitle: 'Work list',
    whatText: text,
    newListItems: workItems
  });
});

// Listen if server is launched. If launched send log with text.
app.listen(3001, function() {
  console.log('server started on port 3001. Ready to Rock and Roll Sir.')
});
