const express = require('express');
const router = express.Router();

router.use('/calendar', calendar);

module.exports = router;