import {  Button, Stack } from "@mui/material";
import React from "react";
import { useForm, } from "react-hook-form";
import AutocompleteField from "./react-hook-form-mui/AutocompleteField";
import InputField from "./react-hook-form-mui/InputField";
import DatePickerField from "./react-hook-form-mui/DatePickerField";

const Form: React.FC = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const gotra = [
        "Athreyas",
        "Bharadwaj",
        "Kashyapa",
    ];


    const nakshatra = [
        "Shravana", "Swathi"

    ];

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
                        <AutocompleteField name="nakshatra" label="Nakshatra" control={control} options={nakshatra} errors={errors} />
                    </div>

                    <div>
                        <AutocompleteField name="gotra" label="Gothra" control={control} options={gotra} errors={errors} />
                    </div>



                    <div>
                        <AutocompleteField name="seve" label="Seve" control={control} options={gotra} errors={errors} />
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
