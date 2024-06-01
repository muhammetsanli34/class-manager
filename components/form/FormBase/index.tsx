import * as yup from "yup";

interface FormBaseProps extends React.HTMLAttributes<HTMLFormElement> {
  rules?: yup.ObjectSchema<any>;
  children: React.ReactNode;
  onSubmit: () => void;
  values: any;
}

export default function FormBase(props: FormBaseProps) {
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    props.rules?.validate(values, { abortEarly: false });
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <form {...props} className="w-full" onSubmit={(e) => submit(e)}>
      {props.children}
    </form>
  );
}
