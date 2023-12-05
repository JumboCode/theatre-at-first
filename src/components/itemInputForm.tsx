"use client";

interface Prop {
    
}

export default function ItemInput(props: Prop) {
    return (
        <>
          <label>
            Product Name <input name="ProductName" />
          </label>
          <hr/>
          <label>
            Product Description <input type="checkbox" name="myCheckbox" />
          </label>
          <hr/>
          <p>
            Radio buttons:
            <label>
              <input type="radio" name="myRadio" value="option1" />
              Option 1
            </label>
            <label>
              <input type="radio" name="myRadio" value="option2" />
              Option 2
            </label>
            <label>
              <input type="radio" name="myRadio" value="option3" />
              Option 3
            </label>
          </p>
          <hr/>
        </>
      );
}