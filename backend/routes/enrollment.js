import express from 'express';
import pool from '../db/enrollmentDB.js'; // Make sure you import your pool

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, course_topic, motivation, courseTitle, level } = req.body;

    // Basic validation
    if (!name || !email || !courseTitle || !level) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    console.log('Received enrollment:', { name, email, phone, course_topic, motivation, courseTitle, level });

    const result = await pool.query(
      `INSERT INTO enrollments (full_name, email, phone, course_topic, motivation, course_title, level)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, email, phone, course_topic, motivation, courseTitle, level]
    );

    console.log('Inserted:', result.rows[0]);

    return res.status(200).json({ message: 'Enrollment received successfully.', data: result.rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error while processing enrollment.' });
  }
});

export default router;
