import React from 'react';
import "./Card.css";



export const Card = (Target) => {
    return (
        
        <div className="Card">
            <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </div>

            <div className="Image">
            <img src="Person.png" alt="Phot" />
            </div>
            
            <div className="Text">
            <p><h4>Help Rahul recover from cancer</h4></p>
            </div>

            <div className="Money">
            Donation progress: <br />
            <progress max="100" value="35"></progress>    
            <p>To be raised: Rupees &#8377; 10,00,000</p>
            </div>

            <div className="button-container">
            <button><i class="fas fa-donate"></i> Donate </button>
            <button><i class="fas fa-share-alt"></i> Share</button>
            </div>


        </div>
    );
};

