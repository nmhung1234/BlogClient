import React from 'react'
import { connect } from 'react-redux'
import Profile from '../../components/Profile';
import Header from './../../components/Header';

export const UserProfile = (props) => {
    return (
        <>
            {/* <Header /> */}
            <Profile />
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
