import jwt from 'jsonwebtoken'
import {serialize} from 'cookie'
export default function loginHandler(req,res){
    const {user,password} = req.body;
    if(user === 'admin' && password === 'admin'){
      const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60 * 24 * 30,
        user:'admin'}, 'secretkey')
        const serialized = serialize('myToken',token,{
          httpOnly:true,
          secure:process.env.NODE_ENV === 'production',
          sameSite:'strict',//other site none 
          maxAge: 1000 * 60 * 60 * 24 * 30,
          path:'/'
        })
        res.setHeader('Set-Cookie',serialized)
      }else{
        res.status(401).json({error:'unauthorized'})
      }
  return res.json("login sucess");
}