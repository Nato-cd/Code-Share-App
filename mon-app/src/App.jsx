import { useEffect, useState }from "react";



export default function App(){
   
   
  


    return(
        <>
        <div id="containerVs" className="container">
            <div className="ulContainer">
                <ul>
                 <li id="listNumber" className="liStyle">1</li>
                </ul>
                <input type="text" name=""className="inputStyle"  value={snippetVal} onChange={(e) => setSnippetVal(e.target.value)} onKeyDown={handleKeyPress} /> 
            </div>
        </div>
            <div className="btnContainer">
                 <button className="btnStyle" id="buttonShare">Share</button>
             </div>
        </>
    )
}
 




