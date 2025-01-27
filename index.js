import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

// GET Method

app.get('/employees',(req,res)=>{
    res.json({
        message: "Welcome to the employees GET path"
    })
})
app.get('/managers',(req,res)=>{
    res.json({
        message: "THis is the managers GET path"
    })
})

// POST Method

app.post('/employees',(req,res)=>{
    res.json({
        message: "This is the employees POST path and something was added"
    })

})
app.post('/managers',(req,res)=>{
    res.json({
        message: "This is the managers POST path and something was added"
    })
})

// PATCH Method

app.patch('/employees',(req,res)=>{
    res.json({
        message: "This is the employees PATCH path and some information was edited"
    })
})
app.patch('/managers',(req,res)=>{
    res.json({
        message: "This is the managers PATCH path and some information was edited"
    })
})

// DELETE Method

app.delete('/employees',(req,res)=>{
    res.json({
        message: "This is the employees DELETE path and something was deleted"
    })
})
app.delete('/managers',(req,res)=>{
    res.json({
        message: "This is the managers DELETE path and something was deleted"
    })
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
    
})