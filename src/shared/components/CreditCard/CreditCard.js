/**
 * Created By nikita Mittal
 * 27th FEb 2019
 */

 import React from 'react'
 import PropTypes from 'prop-types';


 //import css
 import './CreditCard.css'
import { Icon } from 'semantic-ui-react';

 const CreditCard = (props) => {
     return (
         <div className="credit-card-container">
         <div className="credit-card-icon-container">
             <Icon name="cc mastercard" size="medium" style={{float: "right"}}/>
         </div>
         <div className="credit-card-header-text">Card Number</div>
         <div className="credit-card-number-container">. . .   . . .  . . .  7311</div>
         <div className="credit-card-footer-container">
             <div style={{flex: "1 1 auto"}}>
                 <div className="credit-card-footer-header-container">Card Holder</div>
                 <div className="credit-card-footer-text-container">Marry Doe</div>
             </div>
             <div>
                 <div className="credit-card-footer-header-container">Expiry</div>
                 <div className="credit-card-footer-text-container">12/22</div>
             </div>
         </div>

         </div>
     )
 }

 export default CreditCard