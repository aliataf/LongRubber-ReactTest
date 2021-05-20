import React from "react";
import RestaurantCard from "@components/RestaurantCard";
import logo from "@images/logo.png";

export default function Home() {
  return (
    <div style={styles.container}>
      <img src={logo} alt="logo" width="60" />
      <h2>Best classic Dubai restaurants</h2>

      <div className="grid-restaurants">
        <div className="column" style={styles.column}>
          <RestaurantCard />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  column: {
    width: 300,
  },
};
