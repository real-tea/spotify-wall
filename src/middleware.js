import { getToken } from "next-auth/jwt";
// import { nrp } from "nrp";
import { NextResponse } from "next/server";


export async function middleware(req){
    const token = await getToken({req , secret : process.env.JWT_SECRET });


    const {pathname} = req.nextUrl
    
    if(!token && pathname.includes("tracks")){
        return NextResponse.redirect(new URL('/',req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher : [
        '/((?!api|_next/static|_next/image|favicon-light.ico|favicon-dark.ico).*)',
    ]
}