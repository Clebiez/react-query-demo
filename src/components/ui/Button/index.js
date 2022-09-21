import clsx from "clsx";
const Button = ({
  type = "button",
  onClick,
  variant,
  size,
  children,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("btn", {
        [`btn-${variant}`]: variant,
        [`btn-${size}`]: size,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
