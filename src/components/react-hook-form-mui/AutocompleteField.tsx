import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface AutocompleteFieldProps {
  name: string;
  label: string;
  options: string[];
  control:  Control<any>;
  errors: any;
  isOthersEnabled:boolean;
  required?:boolean;
}

const AutocompleteField: React.FC<AutocompleteFieldProps> = ({
  name,
  label,
  options,
  required,
  control,
  errors,
  isOthersEnabled
}) => {
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  
  useEffect(()=>{
    if(!isOtherSelected){
      control.unregister('other_'+name)
    }
  },[isOtherSelected])


  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{required:required && "This field is mandatory"}}
        defaultValue=""
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={options}
            onChange={(_, value) => {
              field.onChange(value);
              setIsOtherSelected(value === "others");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                slotProps={{inputLabel:{required:required}}}
                error={!!errors[name]}
                helperText={errors[name]?.message as string}
              />
            )}
          />
        )}
      />

      {isOthersEnabled && isOtherSelected && (
        <Controller
          name={'other_'+name}
          control={control}
          defaultValue=""
          rules={{
            required: `Please specify your ${label}`,
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label={`Please specify your ${label}`}
              slotProps={{inputLabel:{required:required}}}
              error={!!errors[name]}
              helperText={errors[name]?.message as string}
              fullWidth
              margin="normal"
            />
          )}
        />
      )}
    </>
  );
};

export default AutocompleteField;