import React from 'react'

function App(){

    function submitData(event){
        event.preventDefault();
        console.log("hi...")   

        const formData = {
            firstName:event.target.form[0].value,
            lastName:event.target.form[1].value,
            age:event.target.form[2].value,
            city:event.target.form[3].value    
        }
        console.log(formData)
    }
    return(
        <center>
            <div>

                <h2> Contact form </h2>

                <form method="POST">
                    <label>First Name:</label>
                    <input type="text"/><br/><br/>

                    <label>Last Name:</label>
                    <input type="text"/><br/><br/>

                    <label>Age:</label>
                    <input type="text"/><br/><br/>
                    
                    <label>City:</label>
                    <input type="text"/><br/><br/>

                    <button onClick={submitData}>Submit</button>
                </form>

            </div>
        </center>
    )
}
export default App;