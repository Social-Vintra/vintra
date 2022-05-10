const Input = ({ placeholder, type, name, className }) => {
  let inputDefault = `${className} ${styles.inputDefault}`;
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        className={inputDefault}
      />
    </div>
  );
};

export default Input;
