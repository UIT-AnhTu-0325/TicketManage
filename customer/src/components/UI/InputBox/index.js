import React from 'react'
import '../../../asset/css/component-css/input-box.css'
/**
* @author
* @function InputBox
**/

export const InputBox = (props) => {
  return (
    <>
      <div className="input-box">
        <div className="input__title">
          {props.title}
        </div>
        <input type={props.type} className="" placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
      </div>
    </>
  )

}