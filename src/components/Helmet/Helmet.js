import React from 'react'

/**
* @author
* @function Helmet
**/

const Helmet = (props) => {
    
    document.title = "Maltimart | " + props.title;

  return(
    <div>
        {props.children}
    </div>
   )

 }

 export default Helmet;