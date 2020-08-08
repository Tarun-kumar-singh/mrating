import React from 'react';

const TableHeader = (props)=> {


    const riseSort = (path) => {

       
        const sortColumn = { ...props.sortColumn }
        if(sortColumn.path === path){ sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc' }
        else{ sortColumn.path = path; sortColumn.order = 'asc' }
        props.onSort(sortColumn)
    }

    return(
             <thead>
                <tr>      
                    {
                    props.columns.map((column, index) =>   
                        <th key ={ index } onClick = {()=> riseSort( column.path )} scope="col"> { column.label }</th>
                    )}
                </tr>
            </thead>
     )

}

export default TableHeader;