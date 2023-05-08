import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  forwardRef,
  useState,
} from "react";
import Loading from "../Loading";
import styles from "./button.module.css";

interface ButtonProps {
  handleOnClick: () => Promise<unknown>;
}

const Button = forwardRef<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  ButtonProps
>(({ handleOnClick, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClickButton = async () => {
    setIsLoading(true);
    await handleOnClick();
    setIsLoading(false);
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleOnClickButton}
      className={styles.button}
      style={{ background: "gray", padding: ".25em .5em" }}
      {...rest}
    >
      <p style={{ opacity: `${isLoading ? "0" : "1"}` }}>Search</p>

      {isLoading && <Loading className={styles.button__loading} />}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
