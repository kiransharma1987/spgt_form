
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from "ag-grid-community";
import { getAllReferential, getAllSeveDetails, Referential } from "../api/seveService";
import { useForm } from "react-hook-form";
import AutocompleteField from "../components/react-hook-form-mui/AutocompleteField";
import DatePickerField from "../components/react-hook-form-mui/DatePickerField";
import Button from "@mui/material/Button";
const ViewAllSeve: React.FC = () => {
    const {
        handleSubmit,
        control,
    } = useForm();

    const gridRef = useRef<AgGridReact>(null)

    const [referential, setReferential] = useState<Referential>()

    const [seveData, setSeveData] = useState([])

    const [rowData, setRowData] = useState([]);

    const [seves, setSeves] = useState([])

    // Column Definitions: Defines the columns to be displayed.
    const colDefs: ColDef<any>[] = [
        { field: "bill_num", filter: true },
        { field: "name", filter: true },
        { field: "email", filter: true },
        { field: "mobile", filter: true },
        { field: "gothra", filter: true },
        { field: "nakshatra", filter: true },
        { field: "rashi", filter: true },
        { field: "seve", filter: true },
        { field: "amount", filter: true },
        { field: "scheduled_date", filter: true }
    ];

    useEffect(() => {

        getAllReferential()
            .then(data => setReferential(data))

        getAllSeveDetails()
            .then(data => {
                setRowData(data.seves)
                const seves = data.seves.reduce((acc: string[], val: any) => {
                    if (val.seve && !acc.includes(val.seve)) {
                        acc.push(val.seve)
                    }
                    return acc
                }, [])

                setSeves(seves)

                console.log(seves, 's')
                setSeveData(data.seves)
            })


    }, [])

    const onSubmit = (data: any) => {
        let filters = seveData;
        if(data.seve){
           filters =  filters.filter((x: any) => x.seve === data.seve)
        }
        if(data.scheduled_date){
            filters =  filters.filter((x: any) => {
              return x.scheduled_date === data.scheduled_date
            })
        }
        setRowData(filters)

    }

    const exportGrid = useCallback(() => {
        if (gridRef.current) {
            gridRef.current.api.exportDataAsCsv();

        }
    }, []);

    return (
        <div className="container">



            <form onSubmit={handleSubmit(onSubmit)} className="row my-3">


                <div className="col-4">
                    <AutocompleteField name="seve" label="Seve" control={control} options={seves} errors={{}} isOthersEnabled={false} />

                </div>
                <div className="col-4">
                    <DatePickerField name="scheduled_date" label="Seve Date" control={control} />
                </div>

                <div className="col align-self-center">
                    <Button type="submit" variant="contained">Filter</Button>
                </div>
                <div className="col align-self-center">
                    <Button onClick={exportGrid} type="submit" color="success" variant="contained">Export data</Button>
                </div>

            </form>

            <div style={{ height: 600 }}>

                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={colDefs}
                />

            </div>
        </div>

    )

}


export default ViewAllSeve;