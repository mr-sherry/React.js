import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [username]);

  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
    },
    avatar: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      marginBottom: "20px",
    },
    name: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    username: {
      fontSize: "18px",
      color: "#555",
      marginBottom: "20px",
    },
    bio: {
      fontSize: "16px",
      marginBottom: "20px",
      color: "#333",
    },
    stats: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      fontSize: "16px",
      marginBottom: "20px",
    },
    statItem: {
      textAlign: "center",
    },
    link: {
      display: "inline-block",
      textDecoration: "none",
      color: "#0366d6",
      fontWeight: "bold",
      marginTop: "10px",
    },
    location: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "20px",
    },
  };

  if (!user || user.message === "Not Found")
    return <p style={styles.page}>User not found.</p>;

  return (
    <div style={styles.page}>
      <img src={user.avatar_url} alt={user.name} style={styles.avatar} />
      <div style={styles.name}>{user.name || user.login}</div>
      <div style={styles.username}>@{user.login}</div>
      <div style={styles.bio}>{user.bio || "This user has no bio."}</div>
      <div style={styles.location}>
        {user.location ? ` ${user.location}` : "Location unknown"}
      </div>
      <div style={styles.stats}>
        <div style={styles.statItem}>
          <strong>{user.public_repos}</strong>
          <div>Repos</div>
        </div>
        <div style={styles.statItem}>
          <strong>{user.followers}</strong>
          <div>Followers</div>
        </div>
        <div style={styles.statItem}>
          <strong>{user.following}</strong>
          <div>Following</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
