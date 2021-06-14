import styles from './FormsControls.module.css';

// export const Textarea = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//       <div>
//         <textarea {...props} {...input} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//       <div>
//         <input {...props} {...input} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };

export const FormControl = ({ input, child, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...restProps} {...input} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...restProps} {...input} />
    </FormControl>
  );
};
