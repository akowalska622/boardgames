import classes from './FormWrapper.module.css';

function FormWrapper(props) {
  return <div className={classes.formWrapper}>{props.children}</div>;
}

export default FormWrapper;
