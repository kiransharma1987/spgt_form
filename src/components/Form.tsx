import { Autocomplete, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Form: React.FC = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const gotra = [{ label: 'Athreyas' }, { label: "Bharadwaj" }, {label:"Kashyapa"}]
    const onSubmit = (data:any) => {
        console.log(data)
    
    };


    return (

        <div className="containter">
            <form className="row p-3"  onSubmit={handleSubmit(onSubmit)}>

                <div className="col-lg-4">
                    <Autocomplete
                        disablePortal
                        options={gotra}
                        {...register("nakshatra")}
                        renderInput={(params) => <TextField {...params} label="Nakshatra" />}
                    />
                </div>
                    

                <div className="col-lg-4">
                    <Autocomplete
                        disablePortal
                        options={gotra}
                        {...register("raashi")}
                        renderInput={(params) => <TextField {...params} label="Raashi" />}
                    />
                </div>

                <div className="col-lg-4">
                    <Autocomplete
                        disablePortal
                        options={gotra}
                        {...register("gotra")}
                        renderInput={(params) => <TextField {...params} label="Gothra" />}
                    />
                </div>


                <div className="col-lg-4">
                    <Autocomplete
                        disablePortal
                        options={gotra}
                        {...register("seve")}
                        renderInput={(params) => <TextField {...params} label="Seve" />}
                    />
                </div>

                <Button type="submit" >Submit</Button>
        </form>
        </div>
    )
}

export default Form