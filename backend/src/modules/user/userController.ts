import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
};

export const getUserById = (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json({ id: userId, name: `User ${userId}` });
};
