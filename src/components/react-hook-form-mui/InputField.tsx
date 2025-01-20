




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
        disabled={disabled}
        rules={{required:required}}
        render={({ field }) => (
            <TextField
                {...field}
                label={label}
                fullWidth 
                required={required}
                type={type}
                variant="outlined"
                error={!!errors[name]}
                helperText={errors[name]?.message}
            />
        )}
    />
);

export default InputField;
