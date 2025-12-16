export const getAdmin=(req,res)=>{
  try{
    res.status(200).json({success:true,message:"Admin Home Accessed Successfully", user: req.user});
  } catch (error){
    console.log(error.message);
    res.status(500).json({message:"Internal Server Error"});
  }
}