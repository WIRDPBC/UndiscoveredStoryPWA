/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React from 'react'
import PropTypes from 'prop-types';

//import css
import './Leaderboard.css'
import NavUser from '../../icons/NavUser';


const LeaderboardItem = (props) => {
    const {count, name, isLoginUser, points} = props
    let className = "leader-board-item-container"
    let fill, textStyle = {}
    if(isLoginUser){
        className = `${className} is-login-user`
        fill = "#ffffff"
        textStyle = {color: "#ffffff"}
    }

    return (
        <div className={className}>
            <div className="leader-board-item-text" style={textStyle}>{count}</div>
            <NavUser fill={fill} style={{ width: "35px", height: "35px", marginLeft: "20px", position:"relative", top: "16px"}}/>
            <div className="leader-board-item-text" style={{...textStyle, marginLeft: "20px", flex:"1 1 auto"}}>{name}</div>
            <div className="leader-board-item-text" style={textStyle}>{points}</div>
        </div>
    )

}

export default LeaderboardItem