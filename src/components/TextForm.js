import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");

  const makeUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const makeLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }

  const makeChange = (event) => {
    setText(event.target.value)
  }

  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  }

  let counted = text.split(/\s+/).filter((element) => {
    return element.length !== 0
  });

  return (
    <>
      <div className="row d-flex justify-content-evenly">
        <div className="col-lg-7">
          <h2 className='mb-3'> {props.heading} </h2>
          <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="10" value={text} onChange={makeChange} placeholder="Enter Text Here" style={{backgroundColor: props.mode==="light"?"white":"black", color: props.mode==="light"?"black":"white"}}></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary" onClick={makeUpper}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary ms-1 mt-1" onClick={makeLower}>Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary ms-1 my-1" onClick={clearText}>Clear</button>
          <button disabled={text.length===0} className="btn btn-primary ms-1 my-1" onClick={copyText}>Copy</button>
        </div>

        <div className="col-lg-4">
          <h4 className="my-4">Text Summary</h4>
          <p>
            {counted.length} Words and {text.length} Characters
          </p>
          <p>Can be read in {0.008 * counted.length} minutes</p>
          <h5>Preview</h5>
          <p>{counted.length>0?text:"Nothing to Preview"}</p>
        </div>
      </div>
    </>
  )
}
