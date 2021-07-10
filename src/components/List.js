import React from 'react';
import Item from './Item';

function List(props)
{
    //const itemsList = ["My ToDo Item1", "My ToDo Item2", "My ToDo Item3"];

    const {itemsList} = props;

    return(
        itemsList.map((item)=>(
            //<p>{item}</p>
            <Item item={item} />
        ))
    );    
}

export default List;