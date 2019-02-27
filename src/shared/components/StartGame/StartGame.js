/**
 * Created By Nikita Mittal
 * 25th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, GridColumn } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

//import css
import './StartGame.css'
import BackIcon from '../../icons/BackIcon';
import BackBtn from '../BackBtn/BackBtn';


// Importing Image
import ScienceandTechnology from '../../icons/18_ScienceandTechnology.jpg';

class StartGame extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }

    onBack = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="start-game-container">
                <div className="start-game-header-container">
                    <BackBtn onClick={this.onBack}/>
                    <div className="start-game-header-text-container">Game - 01</div>
                </div>
                <Grid className="start-game-data-container" style={{ padding: "0 0 0 55px" }}>
                    <Grid.Row style={{ padding: 0 }} className="start-game-image-container">
                        <div className="start-game-image-placeholder">
                            <img src={ScienceandTechnology} style={{ height: "300px", width: "300px" }} />
                        </div>
                    </Grid.Row>
                    <Grid.Row style={{ padding: 0 }} className="start-game-content-container">
                        <GridColumn style={{ padding: 0 }}>
                            <div className="start-game-content-heading-container">Science & Technology</div>
                            <div className="start-game-content-text-container">Number of Questions: 22</div>
                            <div className="start-game-content-text-container">Time/question: 10 seconds</div>
                            <div className="start-game-content-text-container">Correct Answer: 1 UDST</div>
                            <div className="start-game-content-text-container">Incorrect Answer: 1 UDST goes to donation</div>
                            <Link to={'/questions'}>
                                <Button content="Start Game" primary style={{ marginTop: "10px", height: "40px", width: "300px", fontFamily: "HelveticaNeue" }} />
                            </Link>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default withRouter(StartGame)