const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.route'))


async function start() {
    try {
        await mongoose.connect('mongodb+srv://Shang:Tsung@cluster0.y1j7x.mongodb.net/todo?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        })
    }
    catch (err) {
        console.log(err)
    }

    app.listen(PORT, () => {
        console.log(`SERVER START ON PORT ${PORT}`)
    })
}


start()