import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import contactRoute from './routes/contact.js';
import courseRouter from './routes/courses.js';
import enrollRouter from './routes/enrollment.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // to parse JSON
app.use('/api/contact', contactRoute);
app.use('/api/enroll',enrollRouter);
app.use('/api/courses',courseRouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
