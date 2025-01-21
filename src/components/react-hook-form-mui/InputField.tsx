




import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface InputFieldProps {
    name: string;
    label: string;
    control: any;
    type: string;
    errors: any;
    disabled?:boolean;
    required?:boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    name,
    label,
    control,
    type,
    disabled,
    required,
    errors,
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{required:required && "This field is mandatory"}}
        render={({ field }) => (
            <TextField
                {...field}
                label={label}
                fullWidth 
                disabled={disabled}
                slotProps={{inputLabel:{required:required}}}
                type={type}
                variant="outlined"
                error={!!errors[name]}
                helperText={errors[name]?.message}
            />
        )}
    />
);

export default InputField;
