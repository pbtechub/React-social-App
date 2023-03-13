import  express  from "express";
import bodyParser from 'body-parser';

import userRouter from '../server/routes/users.js' 
import postRouter from '../server/routes/posts.js' 
import commentRouter from './routes/comments.js' 
import authRouter from '../server/routes/auth.js' 
import likeRouter from '../server/routes/likes.js' 
import cors from 'cors';
import cookieParser from "cookie-parser"; 

const app = express();
const PORT = process.env.PORT || 8800;

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
})
app.use(cors({origin:'http://localhost:3000'}))
app.use(cookieParser())

app.use('/', userRouter)
app.use('/', postRouter)
app.use('/', commentRouter)
app.use('/', authRouter)
app.use('/', likeRouter)


app.listen(PORT, ()=> console.log(`Server running at port: http://localhost${PORT}`));