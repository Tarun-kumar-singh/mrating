import React from 'react';

const TableBody = (props) => {

        const { data, columns } = props

        return(
            <tbody>
           
          { data.map((item)=>{
                     <tr>
                    { columns.map(column =>{  })}     
                     </tr>
         })}
              
            </tbody>
 )

}

export default TableBody;