import express from 'express'

export const router = express.Router();

router.get('/user', (req,res) => {
    res.send('welcome from user')
})
