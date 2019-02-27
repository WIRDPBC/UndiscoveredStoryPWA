/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

//import css
import './SelectContinent.css'

//import components
import TopHeaderBack from '../TopHeaderBack';

import ContinentIcon from '../../icons/ContinentIcon.png'
import ContinentElement from './ContientElement';
import { GridColumn, Grid, Button } from 'semantic-ui-react';


class SelectContinent extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="select-contient-parent-container">
                <TopHeaderBack title="Select Continent" />
                <div className="select-continent-container">
                    <div className="select-continent-image-container">
                        <img src={ContinentIcon} alt="Continent Icon" />
                    </div>
                    <div className="select-continent-list-container">
                        <Grid doubling columns={3}>
                            <GridColumn>
                                <ContinentElement name="N. AMERICA" color="#00cc00"/>
                            </GridColumn>
                            <GridColumn>
                                <ContinentElement name="S. AMERICA" color="#008000"/>
                            </GridColumn>
                            <GridColumn>
                                <ContinentElement color="#fed52e" name="AFRICA"/>
                            </GridColumn>

                            <GridColumn>
                                <ContinentElement color="#f33e01" name="ASIA" />
                            </GridColumn>

                            <GridColumn>
                                <ContinentElement color="#c04080" name="OCEANA"/>
                            </GridColumn>
                         
                           
                            
                           
                            

                        </Grid>

                    </div>
                    <div className="select-continent-button-container">
                        <Button content="Next" primary className="select-continent-button"/>
                    </div>
                </div>
            </div>
        )
    }


}

export default SelectContinent