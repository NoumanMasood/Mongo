var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', (err, client) => {
    // Client returned
    var db = client.db('test');

if(err){
    return console.log('Unable to connect to mongodb');
    
}

    console.log('Connected');
   

    db.collection('collection').insertOne({
    name:'nouman'
},(err,result) => {
    if(err){
        return console.log('Unable to to ',err);
        
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    
})
client.close();
});