export const home = (req,res) => {
    res.status(404).json({
        message: "test message",
        error: 'test error'
    })
}