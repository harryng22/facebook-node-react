import express from 'express'

const router = express.Router();

router.get('/user', (req,res) => {
    res.send('welcome from user')
})

export default router;