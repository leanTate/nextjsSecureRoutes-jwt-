
import { NextResponse } from "next/server";
import {jwtVerify} from 'jose';
export async function middleware(request){
  const jwt = request.cookies.get('myToken');
    if(jwt === undefined ){
      return NextResponse.redirect(new URL('/login',request.url))
  }
  try {
    const {payload}= await jwtVerify(jwt,new TextEncoder().encode('secretkey'));
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL('/login',request.url))
  }
}

export const config = {
  matcher:['/dashboard/:path*','/']
}