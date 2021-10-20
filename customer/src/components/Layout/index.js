import React from 'react'
import {HeaderCustomer} from '../Header/index';
/**
* @author
* @function LayoutCustomer
**/

export const LayoutCustomer = (props) => {
  return(
     <div>
         <HeaderCustomer />
         {props.children}
     </div>
   )

 }