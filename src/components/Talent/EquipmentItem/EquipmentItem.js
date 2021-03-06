import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';

export class EquipmentItem extends Component {
    componentDidMount(){
        this.props.equipment.map(equipment => {
            if (equipment === this.props.item) {
                this.setState({
                ...this.state,
                color: 'primary'
            })
            }
        })
    }

    state = {
        color: ''
    }

    addOrDeleteSkill = (event, property) => {
        if (this.state.color === '') {


            this.setState({
                ...this.state,
                color: 'primary'
            })
        } else {
            this.setState({
                ...this.state,
                color: ''
            })
        } //end of conditional 
        console.log(this.state)
        this.props.dispatch({ type: 'SET_EQUIPMENT', payload: property })

    } //end of addOrDelete function 

    render() {
        return (
             <Grid item>
                <Button size="small" variant='contained' color={this.state.color} onClick={(event) => this.addOrDeleteSkill(event, this.props.item)}> {this.props.item.proficiency_name} </Button>
            </Grid>
         
        )
    }
}



EquipmentItem.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    equipment: state.talentForm.formData.equipment,
});

export default connect(mapStateToProps)(withStyles(styles)(EquipmentItem)); 