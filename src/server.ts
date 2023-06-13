import express from 'express'
import cors from 'cors';
import userRoute from './application/routers/user.route'

const app = express()
const port = process.env.PORT ?? 4000

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'https://www.techskillhub.com',
  preflightContinue: false,
};

app.use(cors(options));

app.use(express.json())
app.use('/user', userRoute)

app.listen(port, () => console.log('Server is running on port ', port))
