import { InsertItem, items } from "@/db/schema";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
        const data = await req.json();
        console.log(data);
        let id:number = data.id;
        let name:string = data.name;
        let desc:string = data.desc;
        let tags:string[] = data.tags;
        let imageUrl:string = data.imageUrl;
        let status:string = data.status;

        //check for missing fields
        if(id == undefined || name == undefined || desc == undefined
        || tags == undefined || imageUrl == undefined || status == undefined){
                return NextResponse.json({
                        message: "Missing fields!"
                      }, {
                        status: 400,
                });
        } else {
                //Insert this to the Database
                return NextResponse.json({
                        message: "Item id " + id + " added to the database."
                      }, {
                        status: 200,
                });
        }
}