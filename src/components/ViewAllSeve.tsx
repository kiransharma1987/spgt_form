
import React, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react'; 
import { ColDef } from "ag-grid-community";
import { getAllSeveDetails } from "../api/seveService";
const ViewAllSeve :React.FC = ()=>{

    const [rowData, setRowData] = useState([]);

    // Column Definitions: Defines the columns to be displayed.
    const colDefs:ColDef<any>[] =[
        { field: "name", filter: true },
        { field: "email", filter: true },
        { field: "mobile", filter: true },
        { field: "gothra", filter: true },
        { field: "nakshatra" , filter: true},
        { field: "rashi" , filter: true},
        { field: "seve" , filter: true},
        { field: "amount" , filter: true},
        { field: "scheduled_date", filter: true }
    ] ;

    useEffect(()=>{
        getAllSeveDetails()
        .then(data=>{
            setRowData(data.seves)
        })
    },[])

    return (
        <div  style={{ height: 500 }}
>

            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
        />


        </div>
    )

}


export default ViewAllSeve;