const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv').config();
const { buildPattern } = require('./necessoryFiles/buildPattern');
const app=express();
const MONGODB_URL=process.env.MONGODB_URL;
const PORT=process.env.PORT

app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//connect to database
mongoose.connect(MONGODB_URL);
const conn=mongoose.connection;
conn.once('open',()=>{console.log('data base connected successfully')});  //uOq9wF3m3KmGD6Lm-bookingapp mongodb password
conn.on('error',()=>{
    console.log('error connecting to database');                          //uukgHP34VW9LLnij-pattern mongodb password
    process.exit();
})

const patternSchema=new mongoose.Schema({
    ptrn:String,
    limit: {
        type:Number,
        unique:true
    }
});
const Pattern=mongoose.model('Pattern',patternSchema);

app.post('/pattern/create',(req,res)=>{
    let {limit}=req.body;
    if(limit<0){
        limit*=-1;
    }
    const ptrn=buildPattern(limit);
    const newPattern=new Pattern({ptrn,limit});
    newPattern.save()
    .then(result=>{res.json('data successfully saved in database')})
    .catch(err=>{return res.status(500).json(err)})
    
});
app.post('/pattern/find',async (req,res)=>{
    const {number}=req.body;
    Pattern.findOne({limit:number})
    .then(result=>{
        if(!result){
            throw 'no data found'
        }
        res.json(result)
    })
    .catch(err=>res.status(404).json(err))
    
})

app.listen(PORT,()=>console.log('server started'))