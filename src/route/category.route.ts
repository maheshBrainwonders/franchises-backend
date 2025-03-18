import {Router} from 'express'
import CategoryController from '../controller/category.controller'

const router=Router()

router.post('/',CategoryController.createCategory)
router.get('/',CategoryController.getCategory)

export default router