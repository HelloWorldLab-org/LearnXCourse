import express from 'express';
import pool from '../db/courses.js';

const router = express.Router();

router.get('/:domain', async (req, res) => {
  const { domain } = req.params;

  try {
    const domainResult = await pool.query(
      'SELECT id FROM domains WHERE name = $1',
      [domain]
    );

    if (domainResult.rows.length === 0) {
      return res.status(404).json({ message: 'Domain not found' });
    }

    const domainId = domainResult.rows[0].id;

    const courses = await pool.query(
      `SELECT 
         c.*, 
         p.name as platform_name, 
         p.id as platform_id
       FROM courses c
       JOIN platforms p ON c.platform_id = p.id
       WHERE c.domain_id = $1`,
      [domainId]
    );

    res.json({
      courses: courses.rows
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
