const express=require('express')
const {MongoClient,ObjectID}=require('mongodb')
const bodyparser=require('body-parser')
const assert=require('assert')

const app=express()
app.use(bodyparser.json())

const mongo_url='mongodb://localhost:27017';
const dataBase='dataBase_Sante';
MongoClient.connect(mongo_url,{useNewUrlParser : true},(err,client)=>{
    assert.equal(err,null,'data base connexion failed')
    const db=client.db(dataBase)

//get user contact
app.get('/get_user',(req,res)=>{
    db.collection('users').find().toArray((err,data)=>{
        if (err) res.send('we cant get users contact')
        else res.send(data)

    })
})
//add user contact
app.post('/add_user',(req,res)=>{
    let adduser=req.body
    db.collection('users').insertOne(adduser,(err,data)=>{
        if (err) res.send('we cant add user contact')
        else res.send(data)
    })
})
// Delete contact
app.delete('/delete_user/:id', (req,res) =>{
    let  DeleteUser = ObjectID(req.params.id)
    db.collection('users').findOneAndDelete({_id:DeleteUser}, (err,data) =>{
        if (err) res.send('we cant delete user')
        else res.send(data)

        })
    })

    // Update contact
    app.put('/modify_users/:id',(req,res)=>{
        let id=ObjectID(req.params.id)
        let ModifyUser = req.body
        db.collection('users').update({_id : id},{...ModifyUser},(err,data) => {
            if (err) res.send('we cant modify user')
            else res.send(data)
               
            })
        })


// get pharmacie
app.get('/get_pharmacie',(req,res)=>{
    db.collection('pharmacie').find().toArray((err,data)=>{
        if (err) res.send('we cant get pharmacie')
        else res.send(data)

    })
})
//add pharmacie
app.post('/add_pharmacie',(req,res)=>{
    let adduser=req.body
    db.collection('pharmacie').insertOne(adduser,(err,data)=>{
        if (err) res.send('we cant add pharmacie')
        else res.send(data)
    })
})
// Delete pharmacie
app.delete('/delete_pharmacie/:id', (req,res) =>{
    let  DeleteUser = ObjectID(req.params.id)
    db.collection('pharmacie').findOneAndDelete({_id:DeleteUser}, (err,data) =>{
        if (err) res.send('we cant delete pharmacie')
        else res.send(data)

        })
    })

    // Update pharmacie
    app.put('/modify_pharmacie/:id',(req,res)=>{
        let id=ObjectID(req.params.id)
        let ModifyUser = req.body
        db.collection('pharmacie').update({_id : id},{...ModifyUser},(err,data) => {
            if (err) res.send('we cant modify pharmacie')
            else res.send(data)
               
            })
        })

//get IMC
app.get('/get_IMC',(req,res)=>{
    db.collection('IMC').find().toArray((err,data)=>{
        if (err) res.send('we cant get IMC')
        else res.send(data)

    })
})
//add IMC
app.post('/add_IMC',(req,res)=>{
    let addIMC=req.body
    db.collection('IMC').insertOne(addIMC,(err,data)=>{
        if (err) res.send('we cant add IMC')
        else res.send(data)
    })
})
// Delete IMC
app.delete('/delete_IMC/:id', (req,res) =>{
    let  DeleteIMC = ObjectID(req.params.id)
    db.collection('IMC').findOneAndDelete({_id:DeleteIMC}, (err,data) =>{
        if (err) res.send('we cant delete IMC')
        else res.send(data)

        })
    })

    // Update IMC
    app.put('/modify_IMC/:id',(req,res)=>{
        let id=ObjectID(req.params.id)
        let ModifyIMC = req.body
        db.collection('IMC').update({_id : id},{...ModifyIMC},(err,data) => {
            if (err) res.send('we cant modify IMC')
            else res.send(data)
               
            })
        })

//get REPONSE
app.get('/get_REPONSE',(req,res)=>{
    db.collection('REPONSE').find().toArray((err,data)=>{
        if (err) res.send('we cant get REPONSE')
        else res.send(data)

    })
})
//add REPONSE
app.post('/add_REPONSE',(req,res)=>{
    let addREPONSE=req.body
    db.collection('REPONSE').insertOne(addREPONSE,(err,data)=>{
        if (err) res.send('we cant add REPONSE')
        else res.send(data)
    })
})
// Delete REPONSE
app.delete('/delete_REPONSE/:id', (req,res) =>{
    let  DeleteREPONSE = ObjectID(req.params.id)
    db.collection('REPONSE').findOneAndDelete({_id:DeleteREPONSE}, (err,data) =>{
        if (err) res.send('we cant delete REPONSE')
        else res.send(data)

        })
    })

    // Update REPONSE
    app.put('/modify_REPONSE/:id',(req,res)=>{
        let id=ObjectID(req.params.id)
        let ModifyREPONSE = req.body
        db.collection('REPONSE').update({_id : id},{...ModifyREPONSE},(err,data) => {
            if (err) res.send('we cant modify REPONSE')
            else res.send(data)
               
            })
        })
})

app.listen(3007,(err)=>{
    if (err) console.log('server err')
    else console.log('server is running on port 3007')
})



