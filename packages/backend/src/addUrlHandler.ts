import { Request, Response } from 'express';

export const addUrlHandler = (req: Request, res: Response) => {
  const { url } = req.body;
  try {
    new URL(url);
  } catch {
    return res.status(400).json({ error: 'Invalid URL' });
  }
  return res.status(200).json({ message: 'URL added successfully', url });
};
