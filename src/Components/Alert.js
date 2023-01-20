import React from 'react'

function Alert(props) {
    // console.log(props);
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        // console.log(lower.charAt(0).toUpperCase )

        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert &&
//  <div classNmae={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//   <strong> {props.alert.type} </strong> : {props.alert.msg}
//   <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close">
//     {/* <span aria-hidden="true">&times;</span> */}
//   </button>
// </div>



<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}

</div>
  )
}

export default Alert
