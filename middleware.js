const isLogged=(req,res,next)=>{
    if(!req.isAuthenticated()){
      req.flash("error","You must be logged in");
      res.redirect("/login");
    }else
    {
        next();
    }
}

module.exports=isLogged;