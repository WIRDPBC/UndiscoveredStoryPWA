/**
 * Created By Nikita Mittal
 * 24th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';
import { Chart } from 'react-charts'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import {connect} from 'react-redux'
import {hostUrl} from '../helper'
import {getStatsData} from './StatsHelper'


class Stats extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
        this.state = {
            statsData : [
                [[0,0]]
            ]
        }
    }

    onSelectMonth = (e, data) => {
        const {email} = this.props
        console.log("On Select Month", data.value)
        let url = `${hostUrl}/stats`
        let formData = {
            email : email,
            year: 2019,
            month: data.value
        }
        const config = {
            headers: { 
                'content-type': 'application/json',
             },
        }

        axios.post(url, formData, config)
        .then(result => {
            console.log("Stats Data", result.data.data)
            if(result.data.data && result.data.data.length){
                this.setState({
                    statsData:  [getStatsData(result.data.data, data.value)]
                })
               
            } else{
                this.setState({
                    statsData:  [[[0,0]]]
                })
            }
        })
        .catch(error => {
            console.error("Stats Error", error)
        })


    }


    render() {
        const {statsData} = this.state
        const data = [
            [[1, 10], [2, 0], [3, 500]],
        ];
        const monthOptions = [
            {
              key: 'january',
              text: 'January',
              value: 0
            },
            {
              key: 'february',
              text: 'February',
              value: 1,
            },
            {
              key: 'march',
              text: 'March',
              value: 2
            },
            {
             key: "april",
             text: "April",
             value: 3
            },
            {
             key: "may",
             text: "May",
             value: 4
            },
            {
              key: "june",
              text: "June",
              value: 5
            },
            {
                key: "july",
                text: "July",
                value: 6
            },
            {
                key : "august",
                text: "August",
                value: 7
            },
            {
                key : "september",
                text: "September",
                value: 8
            },
            {
                key : "october",
                text: "October",
                value: 9
            },
            {
                key : "november",
                text: "November",
                value: 10
            },
            {
                key: "december",
                text: "December",
                value: 11
            }
          ]
        return (
            <Fragment>
                <div style={{marginTop:"10px"}}>
                    <Dropdown
                        placeholder='Select Month'
                        selection
                        options={monthOptions}
                        onChange={this.onSelectMonth}
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "300px",
                        marginTop: "30px"
                    }}
                >
                    <Chart
                        data={statsData}
                        series={{ type: 'area' }}
                        axes={[
                            { primary: true, position: 'bottom', type: 'linear' },
                            { position: 'left', type: 'linear', stacked: true },
                        ]}
                        primaryCursor
                        secondaryCursor
                        tooltip
                    />
                </div>
            </Fragment>


            // <div className="home-tab-no-game-history-text">
            //     There is no Stats available
            // </div>

        )
    }
}

const mapStateToProps = (state, props) => {
    const gameData = state.GameReducer
    let login = gameData.login
    let email
    if(login){
        email = login.email
    }
    return {
        email
    }
}

const mapActionsToProps = {

}

export default connect(mapStateToProps, mapActionsToProps)(Stats)