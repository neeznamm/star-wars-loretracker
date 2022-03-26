import React from "react";
import styles from "../../styles/Home.module.css";
import LinksContainer from "./LinksContainer";

export default function CardContents({ i2, currentKey, currentValue }) {
  return (
    <div key={"2" + i2}>
      {currentKey === "coverImage" ? (
        <div className={styles.coverImageContainer}>
          <img className={styles.coverImage} src={currentValue} />
        </div>
      ) : currentKey === "links" ? (
        <LinksContainer currentValue={currentValue} />
      ) : currentKey === "canonicity" ? null : (
        <h2>{currentKey.replace(/([A-Z])/g, " $1")}:</h2>
      )}
      {typeof currentValue === "string" && currentKey !== "coverImage" ? (
        <p>{currentValue}</p>
      ) : null}
      {currentKey === "timeline" && currentValue > 0 ? (
        <p>{Math.abs(currentValue).toLocaleString("en")} ABY</p>
      ) : null}
      {currentKey === "timeline" && currentValue <= 0 ? (
        <p>{Math.abs(currentValue).toLocaleString("en")} BBY</p>
      ) : null}
      {currentKey === "timeline" && currentValue === "" ? <p>N/A</p> : null}

      {currentKey === "canonicity" ? (
        currentValue ? (
          <div className={styles.canonDiv}>
            <h3 className={styles.canon}>Canon</h3>
          </div>
        ) : (
          <div className={styles.legendsDiv}>
            <h3 className={styles.legends}>Legends</h3>
          </div>
        )
      ) : null}
    </div>
  );
}
