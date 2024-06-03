export const reqfilter=(req,res,next)=>{
    console.log('im reqfilter func');
    if(!req.query.age){
        res.send('please fill age in the link bar')
    }
    else if(req.query.age<18){
        res.send('invalid for this service')
    }
    else{
        next()
    }
    }