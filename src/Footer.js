import React from 'react';
import footer from './Footer.module.css'
import TabContainer from 'react-bootstrap/esm/TabContainer';



function Footer(){
    return(
        <TabContainer>
        <div className ={footer.footer}>
        <img
           src="https://th.bing.com/th/id/OIP.B8rA6plo7Pqi8LFEPLYPwgHaE0?pid=ImgDet&rs=1"
           width="60"
           height="60"
           className="d-inline-block align-center"
           alt="2022"/>{' '}      
              "FakeBros" Created By Timothy Roberts
        </div>
        </TabContainer>
    )
}
export default Footer