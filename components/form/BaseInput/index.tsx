import { Input, InputProps } from "@mui/material";

interface BaseInputProps extends InputProps {
  type: string;
  placeholder: string;
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BaseInput(props: BaseInputProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
