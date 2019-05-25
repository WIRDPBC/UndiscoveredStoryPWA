/**
 * Created By Nikita Mittal
 * 25th May 2019
 */

import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

//Custom Import
import './CustomScrollbar.css';


/**
 * Will return custom scrollbar
 * @param {*} props
 */
class CustomScrollbar extends Component {

  constructor(props){
    super(props)
  }


  render(){

    let {id, onScroll, style, hideTracksWhenNotNeeded, scrollToIndexData, setScrollRef, autoHeight, autoHeightMax} = this.props;
    style = style || {};
    // style = {
    //   position: "relative",
    //   overflow: "hidden",
    //   width: "100%",
    //   height: "100%",
    //   minHeight: "200px",
    //   maxHeight: "450px !important"
    // }
    let className = "react-thumb-vertical"
    className = `${className} ${this.props.className}`
    return (
      <Scrollbars
        // ref="customScrollBar"
         ref={(ref) => {
          setScrollRef?setScrollRef(ref):null;
         }}
        //ref={(ref) => { this.scrollBar = ref}}
        renderThumbVertical={props => <div {...props} className={className}/>}
        renderThumbHorizontal={props => <div {...props} className={className}/>}
        id={id}
        style={{ width: "100%", height: "100%", ...style }}
        universal
        onScroll={onScroll}
        // This will activate auto hide
        autoHide
        autoHeight={autoHeight}
        autoHeightMax={autoHeightMax}
        // Hide delay in ms
        autoHideTimeout={1000}
        hideTracksWhenNotNeeded={hideTracksWhenNotNeeded}
        thumbMinSize={50}
        // Duration for hide animation in ms.
        autoHideDuration={300}>
        {this.props.children}
      </Scrollbars>
    )
  }
}



export default CustomScrollbar;
