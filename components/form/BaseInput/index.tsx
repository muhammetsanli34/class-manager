import { Input, InputProps } from "@mui/material";
import { ErrorContext } from "../FormBase";

interface BaseInputProps extends InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
}

export default function BaseInput(props: BaseInputProps) {
  return (
    <ErrorContext.Consumer>
      {({ errors, values }) => (
        <div className="flex flex-col">
          <Input
            {...props}
            error={!!errors[props.name]}
            onChange={(e) => {
              console.log("values", values);
              props.onChange
                ? props.onChange(e)
                : (values[props.name] = e.target.value);
            }}
          />
          <span className="text-red-500">{errors[props.name]}</span>
        </div>
      )}
    </ErrorContext.Consumer>
  );
}
