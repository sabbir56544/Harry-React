import React, {useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("")

    const handleUpperCase = (e) =>{
        if (text === ''){
            props.showAlert("form is empty", "warning")
        }
        else{
            let newText = text.toUpperCase()
            setText(newText)
            e.preventDefault();
            props.showAlert("UpperCase done successfully !!", "success")
        }
    }

    const handleLowerCase = (e) =>{
        if (text === ''){
            props.showAlert("form is empty", "warning")
        }
        else{
            let lowerText = text.toLowerCase()
            setText(lowerText)
            e.preventDefault();
            props.showAlert("Lowercase done successfully !!", "success")
        }
        

    }

    const handleClear = () => {
        if (text === ''){
            props.showAlert("form is empty", "warning")
        }
        else{
            let clearText = "";
            setText(clearText)
            console.log("clear")
            props.showAlert("Remove successfully !!", "danger")
        }
        
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    return (
        <>
          <div className="container" style={{backgroundColor: props.mode === 'dark'?'#212529':'white'}}>
            <h1 className="mt-3" style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <div className="my-3">
                <textarea className="form-control" onChange={handleChange} value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
            </div> 
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpperCase}>UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLowerCase}>LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
          </div> 
          

            <div className="container my-4">
            <h1>Preview</h1>
                <p>{text.split(" ").length} Words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Read Time</p>
            </div>
        </>
    )
}

export default TextForm
