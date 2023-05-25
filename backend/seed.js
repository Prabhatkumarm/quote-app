const mongoose = require('mongoose');
const Quote = require('./models/quotes');

const Dummy =[
    {
        author:'Mahatma gandhi',
        quote:'Be the change that you wish to see in the world.'
    },{
        author:'APJ Abdul Kalam',
        quote:'Dream is not that which you see while sleeping it is something that does not let you sleep'
    },{
        author:'Swami Vivekanand',
        quote:'Arise, Awake and stop not till the goal is reached'
    },{
        author:'Anonymos',
        quote:'Everyone goes through pain of discipline or pain of regret'
    }
];

async function seedDb(){
    await Quote.deleteMany();
    await Quote.insertMany(Dummy);
    console.log('Database seeded');
}

module.exports = seedDb;