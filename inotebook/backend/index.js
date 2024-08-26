import connectToMongo from './db.js';
import auth from './routes/auth.js';
import note from './routes/note.js';
import express from 'express';

connectToMongo();

const app = express();
const port = 5000;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/notes', note);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

