import React from 'react';
import {Helmet} from 'react-helmet';
 

const BackgroundTheme = (props)=>{

return(
        <div className="application">
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
             
        </div>)
}


export default BackgroundTheme;