import React, { useState } from 'react';

function App() {

    const [HeadingText, setHeadignText] = useState('Hello');
    const [mouseHandle , setMouseHandle] = useState(false);
    const [fullName, setFullName] = useState({
        Fname: "Dear friend",
        Lname: "",
        Email: ""
    });


    function submitClick(e) {
        e.preventDefault();
        setHeadignText('Submitted')
    }


    function updateFullName(event) {
        const { name, value } = event.target;

        setFullName(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
            // if (name === "fName")
            // {
            //     return {
            //         fName : value,
            //         LName : prevValue.LName,
            //         Email : prevValue.value
            //     }
            // }

            // else if (name === "lName")
            // {
            //     return{
            //         fName : prevValue.fName,
            //         LName : value,
            //         Email : prevValue.value
            //     }
            // }
            // else if(name  === "Email")
            // {
            //     return {
            //         fName : prevValue.fName,
            //         LName : prevValue.LName,
            //         Email : value
            //     }
            // }
        })
    };



    function handleMouseOver()
    {
        setMouseHandle(true);
    }

    function handleMouseOut()
    {
        setMouseHandle(false)
    }

    

    
    return (
        <div className="container">
            <form>
                <h1>{HeadingText} {fullName.Fname} {fullName.Lname}</h1>
                <p>{fullName.Email}</p>
                <div>
                <input
                    type="text"
                    name="Fname"
                    placeholder="Enter Your Name"
                    value={fullName.Fname}
                    onChange={updateFullName}
                />
                </div>

                <div>
                <input
                    type="text"
                    name="Lname"
                    placeholder="Enter Your Last Name"
                    value={fullName.Lname}
                    onChange={updateFullName}
                />
                </div>

                <div>
                <input
                    type="text"
                    name="Email"
                    placeholder="Enter Your Email"
                    value={fullName.Email}
                    onChange={updateFullName}
                />
                </div>

                <button
                style={{backgroundColor : mouseHandle ? 'rgba(136, 212, 212, 0.39)' : 'rgba(73, 121, 121, 0.897)'}}
                    type="submit"
                    onClick={submitClick}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    Submit</button>
            </form>
        </div>)
}

export default App;