//This page is an example of the clerk client working; currently everything is
//public and requires no authentication or signing in if you go to local host
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
    return (
        <div className=" bg-white text-[#0C1D1D]">
            <div className="flex flex-col justify-center align-middle py-32 gap-8">
                <p className="text-center mx-auto max-w-[786px] text-[90px] leading-tight font-bold">All Your Inventory In One Place</p>
                <Image alt="JumboCode x Theatre@First" src="/images/landing_icons.png" width="251" height="113" className="mx-auto"></Image>
                <div>
                    <p className="text-center text-[#839996]">Your one-stop inventory management system designed by JumboCode specifically for Theatre@First.</p>
                    <p className="text-center text-[#839996]">Streamline your organization's inventory tracking process, ensuring smooth operations for your productions.</p>
                </div>
                <a href="" className="mx-auto py-4 px-10 bg-[#0C2B35] text-white rounded-3xl">Get Started</a>
                <Image alt="Add New Product page" src="/images/landing_1.png" width="1108" height="496" className="mx-auto"></Image>
            </div>
            <div className="flex flex-col justify-center mx-auto">
                <div className="flex flex-col gap-5">
                    <p className="text-[60px] font-bold text-center">Our Key Features</p>
                    <p className="text-center text-[#839996]">Our platform helps Theatre@First better manage their inventory system</p>
                </div>
                <div>
                    <div className="border-2 flex flex-row align-top gap-8">
                        <Image alt="Inventory tracking icon" src="/images/landing_key_features.svg" width="51" height="51" className=""></Image>
                        <div className="shrink">
                            <p className="text-[24px] font-[600] pb-2">Inventory Tracking</p>
                            <p className="text-[#839996]">Easily monitor and manage all costumes, props, set pieces, and equipment across productions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
