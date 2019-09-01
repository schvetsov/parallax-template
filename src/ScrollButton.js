import React, { Component } from 'react';
import './App.css';

class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0,
          isHide: false
      };
      this.hideBar = this.hideBar.bind(this)
    }

hideBar = () => {
    const { isHide } = this.state

    window.scrollY > 20 ?
    !isHide && this.setState({ isHide: true })
    :
    isHide && this.setState({ isHide: false });

    this.prev = window.scrollY;
}

componentDidMount(){
    window.addEventListener('scroll', this.hideBar);
}

componentWillUnmount(){
      window.removeEventListener('scroll', this.hideBar);
}
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
    //   let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    //   this.setState({ intervalId: intervalId });
    window.scrollTo(0, 0)
    }
    
    render () {
        // const classHide = this.state.isHide ? '' : 'hide';
        return (
            <div>
                          <div>
            <title>Font Awesome 5 Icons</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'/>
          </div>
                <a title='Back to top'
                    onClick={ () => { this.scrollToTop(); }}>
                    <span className="scroll-top-text">
                        <i id="arrow-up" className="fa fa-eject"></i>
                    </span>
                </a>
            </div>
        );
     }
  }

export default ScrollButton;