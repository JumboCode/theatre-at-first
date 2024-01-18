"use client";
import { useState } from 'react';

interface Props {
    
}

export default function ItemInput(props: Props) {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);

  const handleBoldClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsBold(!isBold);
  };

  const handleItalicClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsUnderlined(!isUnderlined);
  };

    return (
        <div className="outer-box bg-white rounded-xl">
            <form className="m-5">
                <div className="text-gray-400 font-bold">Product Name</div>
                <input className="text-gray-950 rounded border-2" style={{width: "450px"}} 
                        value={productName} onChange={(e) => setProductName(e.target.value)} />
                <div className="text-gray-400 font-bold">Product Description</div>
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

                <textarea className="text-gray-950 rounded border-2" 
                          value={description} 
                          onChange={(e) => setDescription(e.target.value)}
                          style={{
                              height:"200px",
                              width: "450px",
                              fontWeight: isBold ? 'bold' : 'normal',
                              fontStyle: isItalic ? 'italic' : 'normal',
                              textDecoration: isUnderlined ? 'underline' : 'none',
                          }}/>
                <div className="text-gray-950">
                  <h2>Entered Values</h2>
                  <p>Product Name: {productName}</p>
                  <p>Product Description: {description}</p>
                </div>
            </form>
        </div>
      );
}

