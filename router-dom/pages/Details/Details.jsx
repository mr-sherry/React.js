import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";

const Details = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [username]);

  if (!user || user.message === "Not Found")
    return <p className={styles.page}>User not found.</p>;

  return (
    <div className={styles.page}>
      <img src={user.avatar_url} alt={user.name} className={styles.avatar} />
      <div className={styles.name}>{user.name || user.login}</div>
      <div className={styles.username}>@{user.login}</div>
      <div className={styles.bio}>{user.bio || "This user has no bio."}</div>
      <div className={styles.location}>
        {user.location ? ` ${user.location}` : "Location unknown"}
      </div>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <strong>{user.public_repos}</strong>
          <div>Repos</div>
        </div>
        <div className={styles.statItem}>
          <strong>{user.followers}</strong>
          <div>Followers</div>
        </div>
        <div className={styles.statItem}>
          <strong>{user.following}</strong>
          <div>Following</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
