import React from 'react';

const ListGroup = (props) => {

    const { items, valueProperty, onItemSelect, selectedItem } = props

    return(

        <ul className="list-group d-inline ">
             <li 
             className = { !selectedItem ? 'list-group-item active' : 'list-group-item list-group-item-dark text-light' }
             onClick = {() => onItemSelect('')}
             key = 'all'
               > All  </li>
            { items.map(genre => (
                    <li 
                    onClick = {() => onItemSelect(genre)}
                    key= { genre[valueProperty]}
                    className = { genre === selectedItem ? 'list-group-item active' : 'list-group-item list-group-item-dark' }  
                    >
                        {genre.name}  
                    </li>
            ))}
        </ul>
    )
}


ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;