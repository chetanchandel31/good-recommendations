import React from 'react';
import style from '../style.module.css'

export default function Button(props) {
    return(
        <button className={props.tab === props.btnName? style.btnSelected:style.btnUnselected} onClick = {() => props.setTab(props.btnName)}>
            {props.btnName}
        </button>
    )
}