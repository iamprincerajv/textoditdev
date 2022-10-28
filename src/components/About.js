import React from 'react'

export default function About(props) {

    let myStyle = {
        backgroundColor: "white",
        color: "black"
    }

    if(props.mode==="light") {
        myStyle = {
            backgroundColor: "white",
        color: "black"
        }
    } else {
        myStyle = {
            backgroundColor: "black",
            color: "white"
        }
    }

    return (
        <div className='container my-3'>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           What is Textodit?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textodit is a simple text editing tool where you can perform simple editings to your texts. Although, this is just a testing website but tools provided here works perfectly fine and with no errors.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What are the features of Textodit?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            You can preform some simple tasks on this website like transforming your text to uppercase or lowercase and then copying to your clipboard. I may add new features in future and they will be highlighted in the main page.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
