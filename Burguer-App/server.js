let express = require("express");
let PORT = process.env.PORT || 5080;
let app = express();


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({defaultLayout : "main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controllers");
app.use(routes);
app.get("/", function(req, res) {
    connection.query("SELECT * FROM tasks;", function(err, data) {
      if (err) throw err;
  
      // Test it
      // console.log('The solution is: ', data);
  
      // Test it
      // return res.send(data);
  
      res.render("index", { burAdd: data });
    });
  });
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});