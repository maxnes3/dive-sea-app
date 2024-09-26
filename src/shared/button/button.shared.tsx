import { ReactNode } from 'react';
import { ButtonSchema } from '@shared/constants/constants';
import './button.module.scss';

type ButtonProps = {
  text: string;
  schema: ButtonSchema;
  icon?: ReactNode;
};

function Button({ text, schema, icon }: ButtonProps) {
  return (
    <button className={`${schema}`}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
