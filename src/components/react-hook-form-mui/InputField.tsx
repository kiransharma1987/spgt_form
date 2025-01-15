




import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface InputFieldProps {
    name: string;
    label: string;
    control: any;
    type: string;
    errors: any;
}

const InputField: React.FC<InputFieldProps> = ({
    name,
    label,
    control,
    type,
    errors,
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label={label}
                fullWidth 
                type={type}
                variant="outlined"
                error={!!errors[name]}
                helperText={errors[name]?.message}
            />
        )}
    />
);

export default InputField;
