import express from 'express'
import {
  getAllBanks,
  createBank,
  deleteBank,
  getBankById,
  updateBank,
} from '../controllers/bankController.js'

const router = express.Router()

router.route('/').get(getAllBanks).post(createBank)
router.route('/:id').get(getBankById).delete(deleteBank).put(updateBank)

export default router
