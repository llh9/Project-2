const router = require('express').Router();
const memberRoutes = require("./api/mbrRoute");
const loginRoute = require('./loginRoute');

router.use("/", loginRoute);
router.use('/api', memberRoutes);

module.exports = router;