const express= require('express');

const router = express.Router();

 
//routes
router.get("/user" , (req,res)=>{

    res.json({
        data: "User api endpoint",
    });
});

module.exports=router;