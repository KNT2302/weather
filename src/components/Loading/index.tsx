import { FC, HTMLAttributes } from "react";
import styles from "./loading.module.css";

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {}

const Loading: FC<LoadingProps> = ({className, ...rest }) => {
  return (
    <div
      {...rest}
      className={[styles.loading, className].join(" ")}
      style={{
        borderRadius: "50%",
        borderColor: "black",
        border: "solid 2px",
        borderTopColor: "transparent",
        width: "1em",
        height: "1em",
      }}
    ></div>
  );
};

export default Loading;
