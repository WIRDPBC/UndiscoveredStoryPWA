/**
 * Created By Nikita Mittal
 * 27th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

//import css
import './SelectInitiative.css'

//import component
import TopHeaderBack from '../TopHeaderBack'
import InitiativeIcon1 from '../../icons/InitiativeIcon1.png'
import InitiativeIcon2 from '../../icons/InitiativeIcon2.png'
import InitiativeIcon3 from '../../icons/InitiativeIcon3.png'
import InitiativeElement from './InitativeElement'
import { Button } from 'semantic-ui-react';


class SelectInitiative extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            selectedInitiative : ""
        }
    }

    onSelect = (tag) => {
        this.setState({
            selectedInitiative : tag
        })
    }

    render(){
        const {selectedInitiative} = this.state
        let disabled = true, isBlackCodeSelected = false, isMotherCodeSelected = false, isGirlCodeSelected = false
        if(selectedInitiative === "Black Girl Code"){
            isBlackCodeSelected = true
        } else if(selectedInitiative === "Mother Coder"){
            isMotherCodeSelected = true
        } else if(selectedInitiative === "Girls Who Code"){
            isGirlCodeSelected = true
        }
        if(selectedInitiative){
            disabled = false
        }
        return (
            <div className="select-initiative-container">
                <TopHeaderBack title="Select Initiative"/>
                <div className="select-initiative-header-container">Vetted Groups from N.AMERICA</div>
                <div className="select-initiative-list-container">
                    <InitiativeElement image={InitiativeIcon1} name="Black Girl Code" onSelect={this.onSelect} isSelected={isBlackCodeSelected} imageClass="select-initative-black-girl-code-image"/>
                    <InitiativeElement image={InitiativeIcon3} name="Mother Coder" onSelect={this.onSelect} isSelected={isMotherCodeSelected} imageClass="select-initative-mother-coder-image"/>
                    <InitiativeElement image={InitiativeIcon2} name="Girls Who Code" onSelect={this.onSelect} isSelected={isGirlCodeSelected} imageClass="select-initiative-girl-code"/>

                </div>
                <div className="select-initiative-button-container">
                    <Button content="Next" primary disabled={disabled} className="select-initiative-button"/>
                </div>

            </div>
        )
    }
}

export default SelectInitiative