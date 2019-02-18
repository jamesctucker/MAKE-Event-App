// import React, { useState, Component } from "react";
// import ReactDataGrid from "react-data-grid";
// import { connect } from 'react-redux';
// import { Toolbar, Data, Filters } from "react-data-grid-addons";
// import AttendeeTableRow from './AttendeeTableRow';



// const defaultColumnProperties = {
//     filterable: true,
//     width: 160
// };

// const selectors = Data.Selectors;
// const {
//     NumericFilter,
//     AutoCompleteFilter,
//     MultiSelectFilter,
//     SingleSelectFilter
// } = Filters;
// const columns = [
//     {
//         key: "name",
//         name: "Name",
//         filterRenderer: AutoCompleteFilter
//     },
//     {
//         key: "dob",
//         name: "Birthdate",
//         filterRenderer: AutoCompleteFilter
//     },
//     {
//         key: "email",
//         name: "Email",
//         filterRenderer: MultiSelectFilter
//     },
//     {
//         key: "phone",
//         name: "Phone",
//         filterRenderer: SingleSelectFilter
//     },
//     {
//         key: "hometown",
//         name: "Hometown"
//     },
//     {
//         key: "country",
//         name: "Country"
//     },
//     {
//         key: "gender",
//         name: "Gender"
//     },
//     {
//         key: "socialHandles",
//         name: "Social Handle(s)"
//     },
//     {
//         key: "employer",
//         name: "Employer"
//     },
//     {
//         key: "jobTitle",
//         name: "Job Title"
//     },
//     {
//         key: "foodPreferences",
//         name: "Food Preferences"
//     },
//     {
//         key: "preferredTransportation",
//         name: "Preferred Transportation"
//     },
//     {
//         key: "comments",
//         name: "Comments"
//     },
// ].map(c => ({ ...c, ...defaultColumnProperties }));

// // const ROW_COUNT = 50;

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

// function TestTable({ rows }) {
//     const [filters, setFilters] = useState({});
//     const filteredRows = getRows(rows, filters);
//     return (
//         <ReactDataGrid
//             columns={columns}
//             rowGetter={i => filteredRows[i]}
//             rowsCount={filteredRows.length}
//             minHeight={500}
//             toolbar={<Toolbar enableFilter={true} />}
//             onAddFilter={filter => setFilters(handleFilterChange(filter))}
//             onClearFilters={() => setFilters({})}
//             getValidFilterValues={columnKey => getValidFilterValues(rows, columnKey)}
//         />
//     );
// }
// class AttendeeTableTest extends Component {
//     render() {
//         return (
//             <TestTable rows={AttendeeTableRow(50)} />
//         )
//     }
// }

// const mapStoreToProps = reduxStore => ({ reduxStore });

// export default connect(mapStoreToProps)(AttendeeTableTest);



