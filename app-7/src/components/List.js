import React from 'react';
import ToDo from './ToDo';

export default function List(props){
    let list = props.tasks.map((e, i) => {
        return(
            <ToDo key={i} task={e} />
        )
    })
    return(
<div>{list}</div>
    )
}