import { ReactNode } from 'react';
import { ButtonSchema } from '@shared/constants/constants';
import styles from './button.module.scss';

type ButtonProps = {
  text: string;
  schema: ButtonSchema;
  icon?: ReactNode;
};

function Button({ text, schema, icon }: ButtonProps) {
  return (
    <button className={styles[schema]}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
