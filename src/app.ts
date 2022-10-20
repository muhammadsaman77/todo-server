import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes';

const app = express();
const port = 2003;

const {
    MONGODB_ATLAS_USERNAME,
    MONGODB_ATLAS_PASSWORD,
    MONGODB_ATLAS_DBNAME
} = process.env
const url = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.9kkap.mongodb.net/?retryWrites=true&w=majority`

const options = {
    useNewUrlParser: true, useUnifiedTopology: true
}

app.use(cors())

app.use('/api',router)

mongoose.set('useFindAndModify',true)
mongoose.connect(url,options)
.then(()=>{
    app.listen(port,()=>{
        console.info(`server was ready in ${port}`)
    })
}).catch((err)=>{
    throw err;
})
