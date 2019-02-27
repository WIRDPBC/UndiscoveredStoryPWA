/**
 * Created by Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

//import css
import './AdvertisingOPT.css'

//import components
import TopHeaderBack from '../TopHeaderBack'

import AdvertisingImage1 from '../../icons/AdvertisingImage1.png'
import AdvertisingImage2 from '../../icons/AdvertisingImage2.png'
import AdvertisingElement from './AdvertisingElement';


class AdvertisingOPT extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <TopHeaderBack title="Advertising OPT" />
                <div className="advertising-opt-container">
                <AdvertisingElement image={AdvertisingImage1} imageTitle="Pachas Pajamas" description="An internationally-acclaimed educational storybook that uses Augmented Reality (AR).  Featuring Yasiin “Mos Def” Bey, Cheech Marin, Talib Kweli, Genevieve Goings, Lester Chambers, and…more
"/>
                <AdvertisingElement image={AdvertisingImage2} imageTitle="Tools for grassroots activists" description="For almost 40 years, Patagonia has supported grassroots activists working to find solutions to the environmental crisis. Tools for Grassroots Activists, Edited by Nora Gallagher and…more"/>


                </div>
            </Fragment>
        )
    }


}

export default AdvertisingOPT