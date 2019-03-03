/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

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
        this.state = {
            selectedContinent : ""
        }
    }

    onSelect = (tag) => {
        this.setState({
            selectedContinent : tag
        })
    }

    render(){
        const {selectedContinent} = this.state
        let isNorthAmericaSelected = false, isSouthAmericaSelected = false, isAfricaSelected = false, isAsiaSelected = false, isOceaniaSelected = false, isEuropeSelected = false 
        if(selectedContinent === "N. AMERICA"){
            isNorthAmericaSelected = true
        } else if(selectedContinent === "S. AMERICA"){
            isSouthAmericaSelected = true
        } else if(selectedContinent === "AFRICA"){
            isAfricaSelected = true
        } else if(selectedContinent === "ASIA"){
            isAsiaSelected = true
        } else if(selectedContinent === "OCEANIA"){
            isOceaniaSelected = true
        } else if(selectedContinent === "EUROPE"){
            isEuropeSelected = true
        }
        let disabled = true
        if(selectedContinent){
            disabled = false
        }
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
                                <ContinentElement name="N. AMERICA" color="#00cc00" onSelect={this.onSelect} isSelected={isNorthAmericaSelected}/>
                            </GridColumn>
                            <GridColumn>
                                <ContinentElement name="S. AMERICA" color="#008000" onSelect={this.onSelect} isSelected ={isSouthAmericaSelected}/>
                            </GridColumn>
                            <GridColumn>
                                <ContinentElement color="#fed52e" name="AFRICA" onSelect={this.onSelect} isSelected={isAfricaSelected}/>
                            </GridColumn>

                            <GridColumn>
                                <ContinentElement color="#f33e01" name="ASIA" onSelect={this.onSelect} isSelected={isAsiaSelected}/>
                            </GridColumn>

                            <GridColumn>
                                <ContinentElement color="#c04080" name="OCEANIA" onSelect={this.onSelect} isSelected={isOceaniaSelected}/>
                            </GridColumn>
                            <GridColumn>
                                <ContinentElement color="#f33e01" name="EUROPE" onSelect={this.onSelect} isSelected={isEuropeSelected}/>
                            </GridColumn>
                         
                           
                            
                           
                            

                        </Grid>

                    </div>
                    <div className="select-continent-button-container">
                        <Link to={'/select-initiative'} >
                            <Button content="Next" primary disabled={disabled} className="select-continent-button"/>
                        </Link>
                       
                    </div>
                </div>
            </div>
        )
    }


}

export default SelectContinent