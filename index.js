const express = require('express')
const CustomError = require('./src/utils/customError')
const errorHandler = require('./src/middleware/errorHandler')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send("Welcome to the Express Error Handling Demo!")
})


//not found routes
app.get('/notfound' ,(req,res,next) => {
    next(new CustomError("Not Found Eroor" , 404))
})

//unauthorized
app.get('/unauthorized' , (req,res,next) => {
    next(new CustomError())

})


//for normal Error
app.get('/normal-error', (req,res,next) => {
    next(new Error("This is a normal error,just ignore it"))

})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
