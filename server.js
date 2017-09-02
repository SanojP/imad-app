var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
'article-one': {
  title: 'Article One | SanojP',
  heading: 'Article One',
  content:` <p>
                The club isn't the best place to find a lover
                So the bar is where I go
                Me and my friends at the table doing shots
                Drinking fast and then we talk slow
                Come over and start up a conversation with just me
                And trust me I'll give it a chance now
                Take my hand, stop, put Van the Man on the jukebox
                And then we start to dance, and now I'm singing like
            </p>
            <p>
                Girl, you know I want your love
                Your love was handmade for somebody like me
                Come on now, follow my lead
                I may be crazy, don't mind me
                Say, boy, let's not talk too much
                Grab on my waist and put that body on me
                Come on now, follow my lead
                Come, come on now, follow my lead
  `
},
'article-2':  {
    title: 'Article Two | SanojP',
  heading: 'Article Two',
  content:` <p>
                The college isn't the best place to find a lover
                So the bar is where I go
                Me and my friends at the table doing shots
                Drinking fast and then we talk slow
                Come over and start up a conversation with just me
                And trust me I'll give it a chance now
                Take my hand, stop, put Van the Man on the jukebox
                And then we start to dance, and now I'm singing like
            </p>
            <p>
                Girl, you know I want your love
                Your love was handmade for somebody like me
                Come on now, follow my lead
                I may be crazy, don't mind me
                Say, boy, let's not talk too much
                Grab on my waist and put that body on me
                Come on now, follow my lead
                Come, come on now, follow my lead
  `},
'article-3':  {
    title: 'Article Three | SanojP',
  heading: 'Article Three',
  content:` <p>
                The school isn't the best place to find a lover
                So the bar is where I go
                Me and my friends at the table doing shots
                Drinking fast and then we talk slow
                Come over and start up a conversation with just me
                And trust me I'll give it a chance now
                Take my hand, stop, put Van the Man on the jukebox
                And then we start to dance, and now I'm singing like
            </p>
            <p>
                Girl, you know I want your love
                Your love was handmade for somebody like me
                Come on now, follow my lead
                I may be crazy, don't mind me
                Say, boy, let's not talk too much
                Grab on my waist and put that body on me
                Come on now, follow my lead
                Come, come on now, follow my lead
  `}
};
function createTemplate (data) {
var title = data.title;
var heading = data.heading;
var content = data.content;
var htmlTemplate = `
<html>
 
<head>

    <title>
       ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    
</head>
<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <h3>
    ${heading}
    </h3>
    <div>
       ${content}
           
    </div>
    </div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter =0;
app.get('/counter', function (req, res){
    counter = counter + 1;
    res.send(counter.toString())
});


app.get('/:articleName', function(req, res){
var articleName = req.params.articleName;    
res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var names =[];
app.get('/submit-name/:name', function (req, res) {
    //get the name from request
    var name = req.params.name;
    
    names.push(name);
    res.send(JSON.stringify(names));

});
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
