/**
 * Created By Nikita Mittal
 * 24th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';


class HistoryTab extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <div className="home-tab-heading-container">Game score</div>
                <div className="home-tab-no-game-history-text">
                    There is no Game history available
                </div>
            </Fragment>
        )
    }
}


export default HistoryTab