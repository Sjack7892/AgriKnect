import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { TextField, Typography, Button } from '@material-ui/core';
import moment from 'moment';

export class EditTalentEducationItemServer extends Component {
     state = {
        id: this.props.item.id,
        degree: this.props.item.degree,
        school: this.props.item.school,
        startDate: this.props.item.startDate,
        endDate: this.props.item.endDate,
        editMode: false,
       
    }

    addEducation = (event, property) => {

        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
        console.log(this.state)

    }

    deleteEducation = () => {
        console.log('delete',this.state.certificate)
        this.props.dispatch({ type: 'DELETE_EDITED_EDUCATION', payload: this.state})
    }

     toggleEditMode = () => {
        console.log(this.state.id)
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

     toggleEditModeSave = () => {
        this.props.dispatch({ type:'SET_EDITED_EDUCATION', payload: this.state})
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

    

    render() {
        let JSXToRender = <span> </span>
        if (this.state.editMode) {
            JSXToRender = 
            <>
           
                <div>
                
                    <TextField defaultValue={this.state.degree} id="standard-basic" label="Standard" onChange={(event) => this.addEducation(event, 'degree')} />
                </div>
                    <Typography>Issuing Company: </Typography>
                    <TextField defaultValue={this.state.school} onChange={(event) => this.addEducation(event, 'school')} id="standard-basic" label="Standard" />

                    <div>
                        <TextField
                            id="date"
                            defaultValue={moment(this.state.startDate).format(("YYYY-MM-DD"))}
                            label="Start Date"
                            type="date"
                           
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEducation(event, 'startDate')}

                        />
                        <TextField
                            id="date"
                            defaultValue={moment(this.state.endDate).format(("YYYY-MM-DD"))}
                            label="End Date"
                            type="date"
                        
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEducation(event, 'endDate')}

                        />
                        <Button variant="outlined" onClick={this.toggleEditModeSave}> Save </Button> 
                    <Button variant="outlined" onClick={this.deleteEducation}> Delete </Button> 
                    </div> 
             </>
        } else {
            JSXToRender = 
                
               <>
                     <div>

                    <Typography> Degree: {this.state.degree}  </Typography>
                    </div>
                <Typography>School: {this.state.school}  </Typography>
                  

                    <div>
                    <Typography> Start Date: {moment(this.state.startDate).format(("YYYY-MM-DD"))}</Typography>
                    <Typography> End Date: {moment(this.state.endDate).format(("YYYY-MM-DD"))}</Typography>
                       
                        <Button variant="outlined" onClick={this.toggleEditMode}> Edit </Button>
                    <Button variant="outlined" onClick={this.deleteEducation}> Delete </Button> 
                    </div> 
                </>
              
        }


        const { classes } = this.props; //need this for Material UI

        return (
            <div>
                {JSXToRender}
            </div>
        )
    }
}

EditTalentEducationItemServer.propTypes = { classes: PropTypes.object.isRequired };

// const mapStateToProps = state => ({
//     certification: state.talentForm.formData.certification,
// });

export default connect()(withStyles(styles)(EditTalentEducationItemServer)); 