import express from 'express';

import { getUser } from './user.helpers';

const router = express.Router();

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await getUser(userId);
    res.status(200).json(result);
  } catch (e) {
    res.status(401).json({ message: 'failed to retrieve user info' });
  }
});

export default router;
