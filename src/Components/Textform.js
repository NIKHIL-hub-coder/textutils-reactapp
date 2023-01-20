import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
        
    }

    const handleClrClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = () =>{
        // console.log("Text copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleExtraSpace = () =>{
        // console.log("Text copied");
        let NewTxt = text.split(/[ ]+/);
        setText(NewTxt.join(" "));
        props.showAlert("Extra space removed", "success");
    }
    // const handleVoCoClick = ()=>{
    //     // console.log("Uppercase was clicked" + text);
    //     // let count = text.match(/[aeiou]/gi).length;
        
    //         // const result = countVowel(text);
    //         // console.log(result);
    //     // console.log(count);
    //     // return count;

    //     // setText(newText);
    //     // return count;

    //     // return vcount;
        
    // }

    // const speak = () => {
    //     let msg = new SpeechSynthesisUtterance(text);
    //     window.speechSynthesis.speak(msg);
    //     const toogle = document.getElementById('toggle')
    //     if (toogle.textContent === "Speak") {
    //         toogle.innerHTML = "Stop"
    //     }
    //     else {
    //         toogle.innerHTML = "Speak"
    //         if (toogle.innerHTML = "Speak"){
    //             window.speechSynthesis.cancel()
    //         }
    //     }
    // }


    const handleonChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text";   //wrong way
    // setText = "new text";   //correct way
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">Email address</label> */} 
                    <textarea className="form-control"  value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} > Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick} > Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClrClick} > Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} > Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace} > Extra Space</button>
                {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button> */}
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>
                    Your Text summary
                </h2>
                {/* <p>{text[text.length]===' ' ? text.split(" ").length : text.split(" ").length-1} words and {text.length} characters</p> */}

                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                
                <p>Vowels : {text.replace(/[^aeiou]/g, "").length} Consonants : {text.length - text.replace(/[^aeiou]/g, "").length}</p>
                <p>{text.split(" ").length * 0.008} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter your text to preview"}</p>
            </div>
        </>
    )
}
