import styles from "../../styles/styleDefault.module.css";
const Button = ({ text, value, background, href, className, color }) => {
  let buttonDefault = `${styles.buttonDefault} ${className} `;
  return (
    <button
      value={value}
      href={href}
      style={
        background == null
          ? { background: "#025496", color: "#FFFFFF" }
          : { background: background, color: color }
      }
      className={buttonDefault}
    >
      {text}
    </button>
  );
};

export default Button;
