const Bootcamp=require('../models/Bootcamps');
const errorResponse=require('../utils/errorResponse');
const asyncHandler=require('../middleware/async')

//@desc        Get all bootcamps
//@route       GET api/v1/bootcamps
//@access      public
exports.getbootcamps=asyncHandler(async(req,res,next)=>{
    
        const bootcamps=await Bootcamp.find(req.body);
        res.status(200).json({success:true,data: bootcamps});
});
   


//@desc        Get bootcamp
//@route       GET api/v1/bootcamps/:id
//@access      public
exports.getbootcamp=asyncHandler(async (req,res,next)=>{
   
        const bootcamp=await Bootcamp.findById(req.params.id);
        if(!bootcamp){
            return next(new errorResponse(`Resource was not found with id ${req.params.id}`,404));
        }
    res.status(200).json({success:true,data:bootcamp});
    
})
//@desc        Create bootcamp
//@route       POST api/v1/bootcamps
//@access      private
exports.createbootcamp=asyncHandler(async (req,res,next)=>{
    
        const bootcamp=await Bootcamp.create(req.body);
    res.status(201).json({success:true,data: bootcamp});
        
})
//@desc        Update bootcamp
//@route       PUT api/v1/bootcamps/:id
//@access      private
exports.updatebootcamp=asyncHandler(async (req,res,next)=>{
    
        const bootcamp=await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            runValidators:true,
            new:true
        })
        if(!bootcamp){
            return next(new errorResponse(`Resource was not found with id ${req.params.id}`,404));
        }
        res.status(200).json({success:true})
 
})
//@desc        Delete bootcamp
//@route       DELETE api/v1/bootcamps
//@access      private
exports.deletebootcamp=asyncHandler(async (req,res,next)=>{
    
        const bootcamp=await Bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamp){
            return next(new errorResponse(`Resource was not found with id ${req.params.id}`,404));
        }
        res.status(200).json({success:true,data: {}})
})