const userService = require("../services/users.service");
module.exports  = {
    localStrategyHandler:  async (email,password,done) => {
        try{
            console.log("we are in localstrategy")
            const user = await userService.getUser({email,password});
            if(!user){
                return done(null,false,{message:'Invalid username'});
            }
            return done(null,user);
    } catch(err){
        return done(err);
    }
    },
    serializeUser:(user,done)=>{
        done(null,user);
    },
    deserializeUser:(user,done)=>{
        done(null,user);
    },
    isValid:(req,res,next)=>{
        if(req.isAuthenticated()){
            return next();
        }
        return res.sendStatus(401);

    },
}