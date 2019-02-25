import React, { Component } from "react";
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import './../Dashboard.css';
import moment from 'moment';
import MaterialDatatable from "material-datatable";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


// this component displays event attendees
class AttendeeTestTable3 extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ATTENDEES' });
    }
    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTable: { responsiveScroll: { maxHeight: 'none', }, },
            MuiTableCell: { root: { padding: '5px 20px 5px 10px' }, },
            MuiTableRow: { footer: { height: 40 } },
            MuiTablePagination: { toolbar: { height: 40, minHeight: 40 } },
            MUIDataTableBodyCell: {}
        },
    });


    render() {
        const columns = [
            { name: "Name", field: "name" },
            { name: "Event", field: "event_name" },
            { name: "Birthdate", field: "dob" },
            { name: "Email", field: "email" },
            { name: "Phone", field: "phone" },
            { name: "Hometown", field: "hometown" },
            { name: "Country", field: "country_name" },
            { name: "Gender", field: "gender" },
            { name: "Social Handle(s)", field: "facebook_username" },
            { name: "Employer", field: "employer" },
            { name: "Job Title", field: "job_title" },
            { name: "Food Preferences", field: "food_preferences" },
            { name: "Preferred Transportation", field: "preferred_transportation" },
            { name: "Comments", field: "comments" }
        ];




        const options = {
            filterType: "multiselect",
            responsive: "scroll",
            jsonMode: true,
        };

        return (
            <Paper elevation={3}>
                <MuiThemeProvider theme={this.getMuiTheme()}>
                    <MaterialDatatable
                        title={"Attendees"}
                        data={this.props.reduxStore.attendees}
                        columns={columns}
                        options={options}
                    />
                </MuiThemeProvider>
            </Paper>

        );
    }
}

const mapStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapStoreToProps)(AttendeeTestTable3);