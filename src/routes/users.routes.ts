import { Router } from 'express';

const router = Router();

/**
 * For admin use cases
 */
router.route('/users').get();

router.route('/users/:id/data').get();

export default router;
