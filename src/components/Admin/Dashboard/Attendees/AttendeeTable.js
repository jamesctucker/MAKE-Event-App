import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import MaterialDatatable from "material-datatable";

class AttendeeTestTable3 extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ATTENDEES' });
    }

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
            filterType: "dropdown",
            responsive: "scroll",
            jsonMode: true,
        };

        return (

            <MaterialDatatable

                title={"Attendees"}
                data={this.props.reduxStore.attendees}
                columns={columns}
                options={options}
            />

        );
    }
}

const mapStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapStoreToProps)(AttendeeTestTable3);