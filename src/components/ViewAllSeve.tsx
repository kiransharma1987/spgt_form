
import React, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react'; 
import { ColDef } from "ag-grid-community";
import { getAllSeveDetails } from "../api/seveService";
const ViewAllSeve :React.FC = ()=>{

    const [rowData, setRowData] = useState([]);

    // Column Definitions: Defines the columns to be displayed.
    const colDefs:ColDef<any>[] =[
        { field: "name" },
        { field: "email" },
        { field: "mobile" },
        { field: "gothra" },
        { field: "nakshatra" },
        { field: "rashi" },
        { field: "seve" },
        { field: "amount" },
        { field: "scheduled_date" }
    ] ;

    useEffect(()=>{
        getAllSeveDetails()
        .then(data=>{console.log(data)
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