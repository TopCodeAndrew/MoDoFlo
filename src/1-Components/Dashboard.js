import React from 'react';
import { connect } from 'react-redux'

function Dashboard(props) {
    console.log(props)
    return (
        <div className='dashboard'>THIS IS THE DASHBOARD ELEMENT</div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {})(Dashboard)