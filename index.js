//Underscore example

/*

var _ = require('underscore');
_.each([1,2,3], function(v) {
    console.log(v);
});

*/

//Connecting to MongoDB with Node.Js example

/*
var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    
    db.collection('sample').insert({ x: 1 }, function(error, result) {
        if(error){
            console.log(error);
            process.exit(1);
        }
    
    
    db.collection('sample').find().toArray(function(error, docs) {
        if(error){
            console.log(error);
            process.exit(1);
        }
        
        console.log('Found Docs: ');
        docs.forEach(function(doc) {
            console.log(JSON.stringify(doc));
        });
        process.exit;
    });
    });
});

*/

var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    
    var doc = {
        title: 'Jaws',
        year: 1975,
        director: 'Steven Spielberg',
        rating: 'PG',
        ratings: {
            critics: 80,
            audience: 97
    }
    };
    
    db.collection('movies').insert(doc, function(error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        
        var query = { year: 1975, rating: 'PG' };
        //can also search nested arrays by: find({'ratings.audience':{'$gte':90} }). etc ($gte means all docs with >90)
        db.collection('movies').find(query).toArray(function(error, docs) {
            if(error) {
                console.log(error);
                process.exit(1);
            }
            
            console.log('Found Docs: ');
            docs.forEach(function(doc) {
                console.log(JSON.stringify(doc));
            });
            process.exit(0);
        });
        
    });
});