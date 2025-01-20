import {  Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm, } from "react-hook-form";
import AutocompleteField from "./react-hook-form-mui/AutocompleteField";
import InputField from "./react-hook-form-mui/InputField";
import DatePickerField from "./react-hook-form-mui/DatePickerField";
import { getAllSeve, Referential, ReferentialObject } from "../api/seveService";

const Form: React.FC = () => {

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const [referential, setReferential] = useState<Referential>()


    const getOptionsForReferential =(obj:ReferentialObject[]|undefined) =>{
        if(obj){
            return obj.map(x=>x.name)
        }
        return []
    }

    useEffect(()=>{
        getAllSeve()
        .then(data=>setReferential(data))
    },[])

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="container d-flex justify-content-center">
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                <Stack width={500} spacing={2}>

        <div className="text-center head">Add new Seve</div>

                    <div >
                        <InputField name="name" type="text" label="Name" control={control} errors={errors} />
                    </div>
                    <div >
                        <InputField name="email" type="email" label="Email" control={control} errors={errors} />
                    </div>

                    <div >
                        <InputField name="phoneNumber" type="number" label="Phone number" control={control} errors={errors} />
                    </div>

                    <div>
                        <AutocompleteField name="gotra" label="Gothra" control={control} options={getOptionsForReferential(referential?.gothras)} errors={errors} isOthersEnabled ={true}/>
                    </div>

                    <div>
                        <AutocompleteField name="nakshatra" label="Nakshatra" control={control} options={getOptionsForReferential(referential?.nakshatras)} errors={errors}  isOthersEnabled ={true} />
                    </div>

                    <div>
                        <AutocompleteField name="rashi" label="Rashi" control={control} options={getOptionsForReferential(referential?.rashis)} errors={errors}  isOthersEnabled ={true} />
                    </div>

                    <div>
                        <AutocompleteField name="seve" label="Seve" control={control} options={getOptionsForReferential(referential?.seves)} errors={errors}  isOthersEnabled ={true} />
                    </div>

                    <div>
                        <InputField name="amount" label="Amount" type="number" control={control} errors={errors} />
                    </div>

                    <div>
                        <DatePickerField name="seveDate" label="Seve Date" control={control} errors={errors} />
                    </div>

                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </Stack>
            </form>
        </div>
    );
};

export default Form;
