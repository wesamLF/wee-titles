import express from "express"
const router = express.Router();
import {downloadFileCsv} from '../controllers/downloadFilesController'
router.post('/csv', downloadFileCsv); 










export default router;