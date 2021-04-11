const mongoose = require('mongoose');
const Product = require('./models/product');

const arr = [
    {
        name: 'iphone',
        img:'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'Macbook Pro',
        img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'Macbook Air 2015',
        img:'https://images.unsplash.com/photo-1517430868310-0bc91ef7d89a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'Titan Watch',
        img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'HP Watch',
        img:'https://unsplash.com/photos/lY97zkaJJbo',
     
        desc:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain."
    },
    {
        name: 'Apple Series',
        img:'https://images.unsplash.com/photo-1613398773682-9e272a85f203?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
       
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'Yoga',
        img:'https://unsplash.com/photos/nqUHQkuVj3c',
       
        desc:"Yogaa was founded with the sheer passion to teach the benefits of Yoga in everyday life We are devoted to offering a superior yoga experience, the patanjali way. We offer a wide range of regular and specialty yoga classes to allow everyone to improve their wellness through the practice of Yoga. With Practice one can move on to advance level Welcome to a space where you awaken and realize their own inner greatness."
    },

]



function seedDB() {
    
    Product.insertMany(arr)
        .then(() => {
            console.log("Data Seeded");
    })
    .catch(err => {
            console.log(err);
    })

}

module.exports = seedDB;