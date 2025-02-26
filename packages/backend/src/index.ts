import express from 'express';
import { fileUploadMiddleware, fileUploadHandler } from './fileUploadHandler';
import { addUrlHandler } from './addUrlHandler';

const app = express();
app.use(express.json());

app.post('/upload', fileUploadMiddleware, fileUploadHandler);
app.post('/add-url', addUrlHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(\`Backend service running on port \${PORT}\`);
});
