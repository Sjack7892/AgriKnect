import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';
import { TextField, Typography } from '@material-ui/core';

export class FarmBio extends Component {
    state = {
        fBio: ''
    }
    //sends bio to redux state to add or delete 
    addFarmBio = (event, property) => {
        console.log('add farm bio');
        this.props.dispatch({ type: 'SET_FARM_BIO', payload: property })
        
    } //end of addFarmBio  

    render() {
        return (
            <div>
                <Typography> Please tell us about your farm </Typography>
                <textarea rows="10" cols="70" placeholder="Tell us about your farm" onClick={(event) => this.addFarmBio(event, 'Farm Bio')}></textarea>
            
            </div>
        )
    }
}

// const reduxStateToProps = (reduxState) => {
//     return {
//         farmBio: reduxState.farmForm.farmBio
//     }
// }

// export default connect (reduxStateToProps) (FarmBio); 

export default FarmBio;