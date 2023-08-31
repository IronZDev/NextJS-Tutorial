import { useState } from "react";
import Circle from "./circle";
import styles from "./switch.module.css";

export default function Switch({
  isOn = false,
  textLeft = "",
  textRight = "",
  showIndicator = false,
}) {
  const [switched, setSwitched] = useState(isOn);
  const onChange = (_newValue: React.ChangeEvent<HTMLInputElement>) => {
    setSwitched(!switched);
  };
  return (
    <>
      <div className={styles.slider}>
        <span>{textLeft}</span>
        <div className={styles["toggle-switch"]}>
          <input
            type="checkbox"
            className={styles["toggle-switch-checkbox"]}
            name="toggleSwitch"
            id="toggleSwitch"
            checked={switched}
            onChange={onChange}
          />
          <label
            className={styles["toggle-switch-label"]}
            htmlFor="toggleSwitch"
          >
            <span className={styles["toggle-switch-inner"]} />
            <span className={styles["toggle-switch-switch"]} />
          </label>
        </div>
        <span>{textRight}</span>
      </div>
      {showIndicator && (
        <Circle color={`${switched ? "green" : "red"}`} diameter={50} />
      )}
    </>
  );
}
