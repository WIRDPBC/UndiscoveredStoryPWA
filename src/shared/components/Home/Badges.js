/**
 * Created By Nikita Mittal
 * 24th Feb 2019
 */

 import React, {PureComponent, Fragment} from 'react'
 import PropTypes from 'prop-types';

 //import components
 import StarCircle from '../../icons/StarCircle'

 class Badges extends PureComponent{
     static propTypes = {

     }

     static defaultProps = {

     }

     constructor(props){
         super(props)
     }

     render(){
         return (
            <Fragment>
            <div className="home-tab-donation-badge-container">
                <div className="home-tab-donation-text-container">Donation</div>
                <div className="home-tab-donation-star-badges-container">
                    <div className="home-tab-badges-flex-container">
                        <div className="home-tab-newbie-badge-container">
                            <StarCircle size="super-massive"/>
                            <div>Newbie</div>
                        </div>
                       
                    </div>
                    <div className="home-tab-badges-flex-container">
                        <div className="home-tab-socialite-badge-container">
                            <StarCircle size="super-massive"/>
                            <div>Socialite</div>
                        </div>
                       
                    </div>
                    <div className="home-tab-badges-flex-container">
                        <div className="home-tab-king-at-last-container">
                            <StarCircle size="super-massive"/>
                            <div>King at last</div>
                        </div>
                       
                    </div>
                   
                    
                   
                </div>
            </div>  
            <div className="home-tab-refer-badge-container">
                <div className="home-tab-refer-text-container">Refer a friend</div>
                <div className="home-tab-donation-star-badges-container">
                    <div className="home-tab-badges-flex-container">
                        <div className="home-tab-newbie-badge-container">
                            <StarCircle size="super-massive"/>
                            <div>Newbie</div>
                        </div>
                       
                    </div>
                    <div className="home-tab-badges-flex-container">
                        <div className="home-tab-socialite-badge-container">
                            <StarCircle size="super-massive"/>
                            <div>Socialite</div>
                        </div>
                       
                    </div>
                    <div className="home-tab-badges-flex-container">
                        <div className="home-tab-king-at-last-container">
                            <StarCircle size="super-massive"/>
                            <div>King at last</div>
                        </div>
                       
                    </div>
                   
                    
                   
                </div>
            </div>
          </Fragment>
         )
     }
 }

 export default Badges