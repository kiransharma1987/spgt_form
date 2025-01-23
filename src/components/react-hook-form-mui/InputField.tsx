




import { TextField } from "@mui/material";
import { Controller, ValidationRule } from "react-hook-form";

interface InputFieldProps {
    name: string;
    label: string;
    control: any;
    type: string;
    errors: any;
    disabled?: boolean;
    required?: boolean;
    maxLength?:number;
    pattern?: ValidationRule<RegExp> 
}

const InputField: React.FC<InputFieldProps> = ({
    name,
    label,
    control,
    type,
    disabled,
    required,
    pattern,
    errors,
    maxLength
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{
            required: required && "This field is mandatory", pattern: pattern,
        }}
        render={({ field }) => (
            <TextField
                {...field}
                label={label}
                fullWidth
                disabled={disabled}
                slotProps={{ inputLabel: { required: required } }}
                type={type}
                variant="outlined"
                error={!!errors[name]}
                helperText={errors[name]?.message}
            />
        )}
    />
);

export default InputField;
