import express from 'express'
const router = express.Router();

import loginConteroller from '../controller/login.controller.js'

router.route('/').post(loginConteroller)

export default router;