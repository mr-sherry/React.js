import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  //   const { userid } = useParams();
  //   return <div>user:{userid}</div>;
  // };
  const navigate = useNavigate();
  const styles = {
    card: {
      width: "300px",
      padding: "20px",
      backgroundColor: "#f5f9f8",
      borderRadius: "15px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    imgWrapper: {
      width: "80px",
      height: "80px",
      margin: "0 auto 15px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "4px solid white",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    name: {
      fontSize: "20px",
      margin: "10px 0",
      color: "#222",
    },
    text: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "white",
      border: "none",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        justifyContent: "center",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <div style={styles.card}>
        <div style={styles.imgWrapper}>
          <img src="src\assets\female.jpg" alt="" style={styles.img} />
        </div>
        <h2 style={styles.name}>Amna Shahid</h2>
        <p style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          maiores labore molestiae, neque voluptas dolor consectetur.
        </p>
        <button
          onClick={() => navigate("/user/amnashahid7")}
          style={styles.button}
        >
          Github Details
        </button>
      </div>

      <div style={styles.card}>
        <div style={styles.imgWrapper}>
          <img src="src\assets\male.jpg" alt="" style={styles.img} />
        </div>
        <h2 style={styles.name}>Ahmed Raza</h2>
        <p style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          maiores labore molestiae, neque voluptas dolor consectetur.
        </p>
        <button
          onClick={() => navigate("/user/mr-sherry")}
          style={styles.button}
        >
          Github Details
        </button>
      </div>

      <div style={styles.card}>
        <div style={styles.imgWrapper}>
          <img src="src\assets\male.jpg" alt="" style={styles.img} />
        </div>
        <h2 style={styles.name}>Shafqat Raza</h2>
        <p style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          maiores labore molestiae, neque voluptas dolor consectetur.
        </p>
        <button
          onClick={() => navigate("/user/shafqatraza494")}
          style={styles.button}
        >
          Github Details
        </button>
      </div>
    </div>
  );
};
export default User;
