"use client";
import { useState } from 'react';

interface Prop {
    
}

export default function ItemInput(props: Prop) {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);

  const handleBoldClick = (e) => {
    e.preventDefault();
    setIsBold(!isBold);
  };

  const handleItalicClick = (e) => {
    e.preventDefault();
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = (e) => {
    e.preventDefault();
    setIsUnderlined(!isUnderlined);
  };

    return (
        <div className="outer-box bg-white rounded-xl p-5">
            <form className="flex flex-col w-full flex flex-col gap-2">
                <div className="text-gray-600 font-bold">Product Name</div>
                <input className="text-gray-950 rounded border-2" style={{width: "450px"}} 
                        value={productName} onChange={(e) => setProductName(e.target.value)} />
                <div className="text-gray-600 font-bold">Product Description</div>
                <div className="text-gray-950">
                    <button onClick={handleBoldClick} 
                            style={{ fontWeight: isBold ? 'bold' : 'normal', marginRight: '8px',}}>
                    B
                    </button>
                    <button onClick={handleItalicClick} 
                            style={{ fontStyle: isItalic ? 'italic' : 'normal' , marginRight: '8px',}}>
                    I
                    </button>
                    <button onClick={handleUnderlineClick} 
                            style={{ textDecoration: isUnderlined ? 'underline' : 'none' , marginRight: '8px',}}>
                    U
                    </button>
                </div>

                <textarea className="text-gray-950 rounded rounded border-2" 
                          value={description} 
                          onChange={(e) => setDescription(e.target.value)}
                          style={{
                              height:"200px",
                              width: "450px",
                              fontWeight: isBold ? 'bold' : 'normal',
                              fontStyle: isItalic ? 'italic' : 'normal',
                              textDecoration: isUnderlined ? 'underline' : 'none',
                          }}/>

                <button className="w-full rounded-md bg-slate-500 hover:bg-slate-700 h-10">Add Photo</button>
                <button className="w-full rounded-md bg-blue-500 hover:bg-blue-700 h-10">Create Item</button>

                {/* <div className="text-gray-950">
                  <h2 className="text-gray-600 font-bold">Entered Values</h2>
                  <p>Product Name: {productName}</p>
                  <p>Product Description: {description}</p>
                </div> */}
            </form>
        </div>
      );
}

