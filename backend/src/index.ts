import express from 'express';
import userRoutes from './routes/userRoutes';
import logger from './middleware/logger';

const app = express();
const port = 10001;

app.use(express.json());
app.use(logger); // custom middleware
app.use('/users', userRoutes); // router

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
