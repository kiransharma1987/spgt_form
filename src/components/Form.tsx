import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm, } from "react-hook-form";
import AutocompleteField from "./react-hook-form-mui/AutocompleteField";
import InputField from "./react-hook-form-mui/InputField";
import DatePickerField from "./react-hook-form-mui/DatePickerField";
import { getAllSeve, Referential, ReferentialObject, saveSeveDetails } from "../api/seveService";
import { toast } from 'react-toastify';

export interface SeveForm {
    id?:string;
    name: string;
    email: string;
    mobile: string;
    gothra: string;
    nakshatra: string;
    rashi: string;
    seve: string;
    scheduled_date: string;
    amount: string;
    other_gothra?: string;
    other_nakshatra?: string;
    other_seve?: string;
}
const Form: React.FC = () => {



    const {
        handleSubmit,
        control,
        formState: { errors },
        watch,
        setValue
    } = useForm<SeveForm>();

    const [referential, setReferential] = useState<Referential>()


    const getOptionsForReferential = (obj: ReferentialObject[] | undefined) => {
        if (obj) {
            return obj.map(x => x.name)
        }
        return []
    }

    useEffect(() => {
        getAllSeve()
            .then(data => setReferential(data))
    }, [])

    const onSubmit = (data: SeveForm) => {

        console.log(errors,'hiii')
        const payload = Object.keys(data).reduce((acc: SeveForm, key) => {
            const typedKey = key as keyof SeveForm; 

            if (typedKey.startsWith('other_') && data[typedKey]) {
                acc[typedKey.split("other_")[1] as keyof SeveForm] = data[typedKey] as string; 
            } else if (!typedKey.startsWith('other_')) {
                acc[typedKey] = data[typedKey] as string;
            }
            return acc;
        }, {} as SeveForm);

        saveSeveDetails(payload)
        .then((data)=> {
            if(data.status){
                toast.success("Seve created successfully")
            }
        })
        .catch(()=>toast.error("Failed to create a seve"))
    };


    const seve = watch('seve')

    const getSeveAmount = (seve: string) => {
        return referential?.seves.find(x => x.name === seve)?.amount?.toString();
    }

    useEffect(() => {
        setValue('amount', getSeveAmount(seve) as string)
    }, [seve])

    return (
        <div className="container d-flex justify-content-center">
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                <Stack width={500} spacing={2}>

                    <div className="text-center head">Add new Seve</div>

                    <div >
                        <InputField name="name" required type="text" label="Name" control={control} errors={errors} />
                    </div>
                    <div >
                        <InputField name="email"  type="email" label="Email" control={control} errors={errors} />
                    </div>

                    <div >
                        <InputField name="mobile" required type="number" label="Phone number" control={control} errors={errors} />
                    </div>

                    <div>
                        <AutocompleteField name="gothra" required label="Gothra" control={control} options={getOptionsForReferential(referential?.gothras)} errors={errors} isOthersEnabled={true} />
                    </div>

                    <div>
                        <AutocompleteField name="nakshatra" required label="Nakshatra" control={control} options={getOptionsForReferential(referential?.nakshatras)} errors={errors} isOthersEnabled={true} />
                    </div>

                    <div>
                        <AutocompleteField name="rashi" required label="Rashi" control={control} options={getOptionsForReferential(referential?.rashis)} errors={errors} isOthersEnabled={true} />
                    </div>

                    <div>
                        <AutocompleteField name="seve" required label="Seve" control={control} options={getOptionsForReferential(referential?.seves)} errors={errors} isOthersEnabled={true} />
                    </div>

                    <div>
                        <InputField required={seve === 'others'} name="amount" disabled={seve !== 'others'} label="Amount" type="number" control={control} errors={errors} />
                    </div>

                    <div>
                        <DatePickerField name="scheduled_date" required label="Seve Date" control={control} errors={errors} />
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
