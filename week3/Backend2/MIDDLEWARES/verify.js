import jwt from 'jsonwebtoken'
export function verifyToken(req,res,next){
    //token verification logic
    
    //1.get token from req(using cookie parser)
     let signedToken=req.cookies.token  // { token : value}
     console.log(signedToken)
     if(!signedToken){
            res.status(401).json({message:"please login first"})
     }
    //2.verify the token
    let decodedToken=jwt.verify(signedToken,'abcdef')
    console.log("decoded token:",decodedToken)
    next()
}