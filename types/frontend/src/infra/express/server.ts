import express, { Application } from 'express';
import defaultRoutes from './routes';

const app: Application = express();
const port = process.env.PORT || 666;

app.use('/', defaultRoutes);

app.listen(port, () => {
	console.log(`the server is running on port ${port}`);
});

export default app;
