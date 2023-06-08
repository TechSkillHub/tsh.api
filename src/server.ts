import express from 'express'
import userRoute from './application/routers/user.route'

const app = express()
const port = process.env.PORT ?? 4000

app.use(express.json())
app.use('/user', userRoute)

app.listen(port, () => console.log('Server is running on port ', port))
