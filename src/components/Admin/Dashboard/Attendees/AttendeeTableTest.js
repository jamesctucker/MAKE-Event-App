import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import AttendeeTableRow from './AttendeeTableRow';

class AttendeeTableTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {
                    headerName: "Name",
                    field: "name",
                    filter: "agTextColumnFilter"
                },
                { headerName: "Birthdate", field: "dob" },
                { headerName: "Email", field: "email" },
                { headerName: "Phone", field: "phone" },
                { headerName: "Hometown", field: "hometown" },
                { headerName: "Country", field: "country" },
                { headerName: "Gender", field: "gender" },
                { headerName: "Social Handle(s)", field: "social_handles" },
                { headerName: "Employer", field: "employer" },
                { headerName: "Job Title", field: "job_title" },
                { headerName: "Food Preferences", field: "food_preferences" },
                { headerName: "Preferred Transportation", field: "preferred_transportation" },
                { headerName: "Comments", field: "comments" },
            ],

        }

    }
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ATTENDEES' });
    }

    render() {
        return (
            <div
                className="ag-theme-material"
                style={{
                    minheight: '500px',
                    minwidth: '600px'
                }}
            >
                {/* {JSON.stringify(this.props.reduxStore.attendees)} */}
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.props.reduxStore.attendees}
                >
                </AgGridReact>
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapStoreToProps)(AttendeeTableTest);