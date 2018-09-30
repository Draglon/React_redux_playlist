import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    render() {
        return(
            <h2>About</h2>
        );
    }
}

export default connect(
)(About);