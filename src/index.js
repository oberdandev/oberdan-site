import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req,res)=> {
    res.send('<h1>Welcome to my webpage Oberdan!</h1>')
})

app.listen(PORT, ()=> console.log('app running at port: ', PORT))

