import { verify } from "jsonwebtoken";
import {serialize} from 'cookie'

export default function logoutHandler(req,res){
  const {myToken} = req.cookies;
  if(!myToken){
    return res.status(401).json({error:'who are u?'})
  }else{
    try {
      verify(myToken,'secretkey');
      const serialized = serialize('myToken','',{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:'strict',//other site none 
        maxAge: 0,
        path:'/'
      })
      res.setHeader('Set-Cookie',serialized)
      return res.status(200).json({message:'logout success'})
    } catch (error) {
      return res.status(401).json({error:'bad request'})
    }
  }
}