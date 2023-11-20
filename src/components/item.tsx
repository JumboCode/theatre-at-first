'use client';

interface Prop {
    title: string;
    image: string;
    status: string;
}


export default function Item(props: Prop){
    return (
        <div className="h-1/3 w-60 bg-white rounded-xl">
                <div className="h-full flex flex-col">
                        <div className="h-4/5 bg-slate-500 rounded-t-xl"></div>
                        <div className="p-3">                  
                                <p className="text-gray-950 font-bold text-base"> 
                                {props.title} 
                                </p>
                                
                                <p className="text-gray-500 text-sm" >
                                {props.status}
                                </p>
                        </div>
                        
                </div>
        </div>
    )
}