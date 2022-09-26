import express from "express";
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use()

app.get('/', (req,res)=>{
    res.send('Welcome home')
})

app.get('/books', (req,res)=>{
    res.send('Welcome to books')
})

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});