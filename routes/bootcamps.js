const express=require('express');

const{getbootcamps,getbootcamp,createbootcamp,updatebootcamp,deletebootcamp }=require('../controllers/bootcamps')
const router=express.Router();

router.route('/')
.get(getbootcamps)
.post(createbootcamp);

router.route('/:id').get(getbootcamp).put(updatebootcamp).delete(deletebootcamp);

module.exports=router;