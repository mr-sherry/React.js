import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import UserContext from "../../src/Context/UserContext";

const Profile = () => {
  const navigate = useNavigate()
  const { loggedUser, userBool } = useContext(UserContext)
  const [user1, setUser1] = useState(null);
  console.log(user1);


  useEffect(() => {
    if (userBool) {

      fetch(`https://api.github.com/users/${loggedUser.username}`)
        .then((res) => res.json())
        .then((data) => setUser1(data));
    }
    else {
      navigate("/login")
      alert("please Login First")
    }
  }, [userBool, loggedUser]);

  if (!user1 || user1.message === "Not Found")
    return <p className={styles.page}>User not found.</p>;

  return (
    <div className={styles.page}>
      <img src={user1.avatar_url} alt={user1.name} className={styles.avatar} />
      <div className={styles.name}>{user1.name || user1.login}</div>
      <div className={styles.username}>@{user1.login}</div>
      <div className={styles.bio}>{user1.bio || "This user has no bio."}</div>
      <div className={styles.location}>
        {user1.location ? ` ${user1.location}` : "Location unknown"}
      </div>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <strong>{user1.public_repos}</strong>
          <div>Repos</div>
        </div>
        <div className={styles.statItem}>
          <strong>{user1.followers}</strong>
          <div>Followers</div>
        </div>
        <div className={styles.statItem}>
          <strong>{user1.following}</strong>
          <div>Following</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
