/**
 * Created by Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {hostUrl} from '../helper'
import {connect} from 'react-redux'

//import css
import './AdvertisingOPT.css'

//import actions
import {storeLoadAdvertisingList} from '../../reducers/AdvertisingOpt/action'

//import components
import TopHeaderBack from '../TopHeaderBack'

import AdvertisingImage1 from '../../icons/AdvertisingImage1.png'
import AdvertisingImage2 from '../../icons/AdvertisingImage2.png'
import AdvertisingElement from './AdvertisingElement';


class AdvertisingOPT extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        const {storeLoadAdvertisingList} = this.props
        let url = `${hostUrl}/loadAdvertismentDescription`
        const formData = {}
        const config = {
            headers: { 
                'content-type': 'application/json',
             },
        }
        axios.post(url, formData, config)
        .then(data => {
            console.log("Advertising Data", data.data)
            storeLoadAdvertisingList(data.data)
        })
        .catch(error => {
            console.error("Advertising Opt Error", error)
        })
    }

    // getAdvertisingElement = () => {
    //     const {advertisingOptData} = this.props
    //     if(advertisingOptData && advertisingOptData.length){
    //       return   advertisingOptData.map((advertisingData, index) => {

    //             return  <AdvertisingElement image={AdvertisingImage1} imageTitle="Pachas Pajamas" description="An internationally-acclaimed educational storybook that uses Augmented Reality (AR).  Featuring Yasiin “Mos Def” Bey, Cheech Marin, Talib Kweli, Genevieve Goings, Lester Chambers, and…more"/>
    //         })
    //     }
    // }

    render() {
        const {advertisingOptData} = this.props
        return (
            <Fragment>
                <TopHeaderBack title="Advertising OPT-IN" />
                <div className="advertising-opt-container">
                {advertisingOptData && advertisingOptData.length && <AdvertisingElement image={AdvertisingImage1} imageTitle="Pachas Pajamas" description={advertisingOptData[0].advertisementDescription}/>}
                {advertisingOptData && advertisingOptData.length &&  <AdvertisingElement image={AdvertisingImage2} imageTitle="Tools for grassroots activists" description={advertisingOptData[1].advertisementDescription}/>}


                </div>
            </Fragment>
        )
    }


}

const mapStateToProps = (state, props) => {
    let gameData = state.GameReducer
    let advertisingOptData = gameData.advertisingOptData
    return {
        advertisingOptData
    }
}

const mapActionsToProps = {
    storeLoadAdvertisingList
}


export default connect(mapStateToProps, mapActionsToProps)(AdvertisingOPT)