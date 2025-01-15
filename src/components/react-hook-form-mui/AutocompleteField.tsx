import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface AutocompleteFieldProps {
    name: string;
    label: string;
    options: string[];
    control: any;
    errors: any;
}


const AutocompleteField: React.FC<AutocompleteFieldProps> = ({
    name,
    label,
    options,
    control,
    errors,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <Autocomplete
                    {...field}
                    options={options}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            error={!!errors[name]}
                            helperText={errors[name]?.message as string}
                        />
                    )}
                    onChange={(_, value) => field.onChange(value)}
                />


            )}
        />
    );
};

export default AutocompleteField;