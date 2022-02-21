import React from 'react'
import Styles from '../styles/Login.module.css'

 type Props = {
     execFunction : React.MouseEventHandler<HTMLButtonElement>
     text : string
     style : string
 }
 
 const Button = (props: Props) => {
   return (
       <button className={`${Styles.Button} ${props.style}`} onClick={props.execFunction}>{props.text}</button>
   )
 }
 
 export default Button