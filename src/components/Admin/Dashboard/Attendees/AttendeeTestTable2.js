// import React, { Component, useState } from "react";
// import { connect } from 'react-redux';
// import ReactDataGrid from "react-data-grid";
// import { Toolbar, Data, Filters } from "react-data-grid-addons";


// const defaultColumnProperties = {
//     filterable: true,
//     width: 250
// };

// const selectors = Data.Selectors;
// const {
//     NumericFilter,
//     AutoCompleteFilter,
//     MultiSelectFilter,
//     SingleSelectFilter
// } = Filters;
// const columns = [
//     { name: "Name", key: "name", filterRenderer: AutoCompleteFilter },
//     { name: "Birthdate", key: "dob" },
//     { name: "Email", key: "email" },
//     { name: "Phone", key: "phone" },
//     { name: "Hometown", key: "hometown" },
//     { name: "Country", key: "country" },
//     { name: "Gender", key: "gender" },
//     { name: "Social Handle(s)", key: "social_handles" },
//     { name: "Employer", key: "employer" },
//     { name: "Job Title", key: "job_title" },
//     { name: "Food Preferences", key: "food_preferences" },
//     { name: "Preferred Transportation", key: "preferred_transportation" },
//     { name: "Comments", key: "comments" },
// ].map(c => ({ ...c, ...defaultColumnProperties }));

// const ROW_COUNT = 50;

// const handleFilterChange = filter => filters => {
//     const newFilters = { ...filters };
//     if (filter.filterTerm) {
//         newFilters[filter.column.key] = filter;
//     } else {
//         delete newFilters[filter.column.key];
//     }
//     return newFilters;
// };

// function getValidFilterValues(rows, columnId) {
//     return rows
//         .map(r => r[columnId])
//         .filter((item, i, a) => {
//             return i === a.indexOf(item);
//         });
// }

// function getRows(rows, filters) {
//     return selectors.getRows({ rows, filters });
// }

// function Example({ rows }) {
//     const [filters, setFilters] = useState({});
//     const filteredRows = getRows(rows, filters);
//     return (
//         <ReactDataGrid
//             columns={columns}
//             rowGetter={i => filteredRows[i]}
//             rowsCount={filteredRows.length}
//             minHeight={500}
//             headerRowHeight={40}
//             toolbar={<Toolbar enableFilter={true} />}
//             onAddFilter={filter => setFilters(handleFilterChange(filter))}
//             onClearFilters={() => setFilters({})}
//             getValidFilterValues={columnKey => getValidFilterValues(rows, columnKey)}
//         />
//     );
// }

// class AttendeeTestTable2 extends Component {
//     componentDidMount() {
//         this.props.dispatch({ type: 'FETCH_ATTENDEES' });
//     }

//     render() {
//         return (
//             <Example rows={this.props.reduxStore.attendees} />
//         )
//     }
// }

// const mapStoreToProps = (reduxStore) => ({ reduxStore });

// export default connect(mapStoreToProps)(AttendeeTestTable2);