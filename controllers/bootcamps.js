const Bootcamp=require('../models/Bootcamps');
//@desc        Get all bootcamps
//@route       GET api/v1/bootcamps
//@access      public
exports.getbootcamps=async (req,res,next)=>{
    try {
        const bootcamp=await Bootcamp.find(req.body);
        res.status(200).json({success:true,data: bootcamp});
}
    catch (error) {
        res.status(400).json({success:false});
    }
}  

//@desc        Get bootcamp
//@route       GET api/v1/bootcamps/:id
//@access      public
exports.getbootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`get bootcamp ${req.params.id}`});
}
//@desc        Create bootcamp
//@route       POST api/v1/bootcamps
//@access      private
exports.createbootcamp=async (req,res,next)=>{
    const bootcamp=await Bootcamp.create(req.body);
    res.status(201).json({success:true,data: bootcamp});
}
//@desc        Update bootcamp
//@route       PUT api/v1/bootcamps/:id
//@access      private
exports.updatebootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Update bootcamp ${req.params.id}`});
}
//@desc        Delete bootcamp
//@route       DELETE api/v1/bootcamps
//@access      private
exports.deletebootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`delete bootcamp ${req.params.id}`});
}
