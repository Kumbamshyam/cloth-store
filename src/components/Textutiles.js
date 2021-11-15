import React, {useState} from 'react'


export default function Textutiles() {
    const handleupclick = ()=> {
        // setText("successfully changed");
        let newtext = text.toUpperCase();
        setText(newtext);
    };

    const handleloclick = ()=> {
        // setText("successfully changed");
        let newtext = text.toLowerCase();
        setText(newtext);
    };

    const handleonchange = (event)=> {
        // console.log("this is onchange");
        setText(event.target.value);
        
    };

    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3 form-floating">
            <div>
            <label for="floatingTextarea"><h4>Textutiles</h4></label>
            <textarea className="form-control " value={text} onChange={handleonchange} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <button type="button" onClick={handleupclick} class="btn btn-primary my-2">Convert To Uppercase</button>
            <button type="button" onClick={handleloclick} class="btn btn-primary my-2 mx-3">Convert To Lowercase</button>
            </div>
        </div>
        <div className="container">
            <h5 className= "  bg-light d-inline p-1 rounded-3 border border-2">Your Text Summary</h5>
            <p className=" my-3">{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{(60/125) * text.split(" ").length-0.48 } Time To Read</p>
            <h5 className="border border-3 d-inline p-1 bg-light">Preview</h5>
            <p className="border border-2 p-2 bg-light">{text}</p>

        </div>
        </> 
    )
}
