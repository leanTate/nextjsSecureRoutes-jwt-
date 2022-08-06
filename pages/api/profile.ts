import {verify} from 'jsonwebtoken'

export default function profileHandler(req,res){
  const  {myToken} =req.cookies;
  if(!myToken){
    return res.status(401).json({error:'who are u?'})
  }else{
    try {
      const user = verify(myToken,'secretkey')
      console.log(user)
      return res.json({user:user.user})
    } catch (error) {
      return res.status(401).json({error:'who are u?'})
    }
  }
}