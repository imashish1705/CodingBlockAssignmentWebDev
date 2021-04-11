const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');
const seedDB = require('./seedDB');
const productRoutes = require('./routes/products/product');
const methodOverride = require("method-override");
const passport = require("passport");
const session = require('express-session');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const reviewRoutes = require('./routes/reviews/review');
const authRoutes = require("./routes/auth/auth");
//mongodbs

mongoose.connect('mongodb://localhost:27017/blog', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex:true
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log("DB Not Connected");
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

app.use(session({
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req,res) => {
    res.render("frontPage");
})

//middleware
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

//routes

app.use(productRoutes);
app.use(authRoutes);
app.use(reviewRoutes);
//seedDB();

app.listen(3000, () => {
    console.log("Server Running At port 3000");
})