//This page is an example of the clerk client working; currently everything is
//public and requires no authentication or signing in if you go to local host
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-white text-[#0C1D1D]">
            <div className="px-24">
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
                <div className="flex flex-col justify-center mx-auto mb-[100px]">
                    <div className="flex flex-col gap-5">
                        <p className="text-[60px] font-bold text-center">Our Key Features</p>
                        <p className="text-center text-[#839996]">Our platform helps Theatre@First better manage their inventory system</p>
                    </div>
                    <div className="flex flex-row align-middle justify-center items-center gap-12 pt-12">
                        <div className="w-[1/2] flex flex-col gap-6 py-12">
                            <div className="flex flex-row align-top justify-start gap-8">
                                <Image alt="Inventory tracking icon" src="/images/landing_key_features_icon.svg" width="51" height="51" className=""></Image>
                                <div className="shrink">
                                    <p className="text-[24px] font-[600] pb-2">Inventory Tracking</p>
                                    <p className="text-[#839996]">Easily monitor and manage all costumes, props, set pieces, and equipment across productions.</p>
                                </div>
                            </div>
                            <div className="flex flex-row align-top gap-8">
                                <Image alt="Inventory tracking icon" src="/images/landing_key_features_icon.svg" width="51" height="51" className=""></Image>
                                <div className="shrink">
                                    <p className="text-[24px] font-[600] pb-2">Customizable Categories</p>
                                    <p className="text-[#839996]">Tailor the system to your specific needs with customizable categories for items.</p>
                                </div>
                            </div>
                            <div className="flex flex-row align-top gap-8">
                                <Image alt="Inventory tracking icon" src="/images/landing_key_features_icon.svg" width="51" height="51" className=""></Image>
                                <div className="shrink">
                                    <p className="text-[24px] font-[600] pb-2">Collaborative Platform</p>
                                    <p className="text-[#839996]">Facilitate collaboration among production teams with shared access and communication features</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image alt="User Permissions" src="/images/landing_user_permissions.png" width="608" height="413" className=""></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[570px] flex flex-row gap-10 align-bottom justify-center items-end pl-24">
                <div className="flex flex-col gap-10 w-[1/2] pb-28">
                    <p className="text-[40px] font-[700] leading-tight">Start Tracking Your Theatrical Inventory System Today</p>
                    <p className="text-[#839996]">Sign up or log in to start using our platform.</p>
                    <div className="flex flex-row gap-4 justify-start align-middle items-start w-fit">
                        <a href="" className="mx-auto py-4 px-10 bg-[#496767] text-white rounded-3xl">Sign Up</a>
                        <a href="" className="mx-auto py-4 px-10 bg-[#0C2B35] text-white rounded-3xl">Log In</a>
                    </div>
                </div>
                <div>
                    <Image alt="Inventory View" src="/images/landing_inventory.png" width="1000" height="478"></Image>
                </div>
            </div>
        </div>
        
    );
}
