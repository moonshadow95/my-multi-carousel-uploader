import express from 'express';
import cors from 'cors';
import multer from 'multer'

const app = express();

app.use(cors())
// app.use('uploads', express.static('uploads'))

const uploadFiles = multer({dest: 'uploads/'})

const postUpload = async (req,res)=>{
    console.log(req.body)
}

// app.post('/api/uploads', uploadFiles.single('image'), postUpload)
app.post('/api/uploads', postUpload)

app.listen(8080,()=>{
    console.log("Server Listening on port 8080")
})