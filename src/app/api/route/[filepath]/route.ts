import { NextResponse } from "next/server"

// route handler
//Next.js convention

// get method
export async function GET(request: Request, { params }) {
  const filepath = params.filepath
  const res = (await fetch(filepath)).json()
  //do we need to use middleware like multer for file uploading?

  return NextResponse.json({ response : res })
}

// post method
export async function POST(request: Request) {

  return NextResponse.json({ response : 'This is a post request' })
}