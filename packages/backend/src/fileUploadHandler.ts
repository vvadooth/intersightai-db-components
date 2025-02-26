import { Request, Response, RequestHandler } from 'express';
import * as multer from 'multer';

const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only PDF, JPEG, or PNG files are allowed.'));
    }
    cb(null, true);
  }
});


export const fileUploadMiddleware: RequestHandler = upload.single('file');

export const fileUploadHandler = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded or file type not allowed.' });
  }
  return res.status(200).json({ message: 'File received successfully', file: req.file.originalname });
};
