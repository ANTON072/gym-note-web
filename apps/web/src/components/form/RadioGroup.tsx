import { Children, cloneElement, isValidElement } from "react";
import styles from "./form.module.css";

interface Props {
  name: string;
  children: React.ReactNode;
  defaultValue?: string;
}

export const RadioGroup = ({ name, children, defaultValue }: Props) => {
  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const childProps = child.props as { value?: string };
      return cloneElement(child as React.ReactElement<any>, {
        name,
        defaultChecked: defaultValue === childProps.value,
      });
    }
    return child;
  });

  return <div className={styles.radioGroup}>{enhancedChildren}</div>;
};
