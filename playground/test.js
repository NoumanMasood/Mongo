var {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/DB',function(err,client){

var user = {name:'Basim'};

var {name} = user;

console.log(name);

var db = client.db('DB');
if(err){
    return console.log('Unable to connect to database');
    
}
console.log('Connected to database');

// db.collection('newTable').insertOne({
//     name:'Nouman',
//     age:23
// },function(err,result){
//     if(err){
//         return console.log('Cannot insert data',err);
        
//     }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    
// })

db.collection('newTable').find({_id:new ObjectId("5b2f84613dc18920942fec99")}).toArray().then((docs)=>{
    console.log('Data of a specific ID');
    
    console.log(JSON.stringify(docs,undefined,2));
    
},function(err){
    console.log('Unable',err);
    
})

db.collection('newTable').find().count().then((count)=>{


    console.log('Total records are',count);
    
})

db.collection('newTable').find({name:'Basim Ahmad'}).toArray().then((docs)=>{

    console.log('Data of Basim Ahmad');
    
console.log(docs);
})

db.collection('newTable').insertOne({
    name:'Mohsin Khan',
    age:25
},function(err,result){
    if(err){
        return console.log('unable to insert data',err);
        
    }
    
    console.log('Data which is now I have inserted');
    
    console.log(JSON.stringify(result.ops,undefined,2));
    
})


client.close();
})