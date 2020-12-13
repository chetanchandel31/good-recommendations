import React from 'react';
import style from '../style.module.css';

export default function TabContent(props) {
    return(
        <div className={style.containerCenter}>
            <ul className={style.listNonBullet}>
                { props.list.map(({name, rating, description}, key) => (
                <li key={key}>
                    <h3>{name}</h3>
                    <h4>Rating: {rating}</h4>
                    <p>{description}</p>
                    <hr></hr>
                </li> 
             ))}
            </ul>
        </div>
    )
}