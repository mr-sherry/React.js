import React, { useEffect } from 'react';
import stylesDark from './Profile1Dark.module.css';
import stylesLight from './Profile1.module.css';
import 'font-awesome/css/font-awesome.min.css';
import { useContext } from 'react';
import UserContext from '../../src/Context/UserContext';
import { useNavigate } from "react-router-dom";



const Profile1 = () => {
    const { userBool, loggedUser, themeBool, setUserBool } = useContext(UserContext)
    const styles = themeBool ? stylesDark : stylesLight;

    const navigate = useNavigate()
    useEffect(() => {
        if (userBool === false) {
            alert("Please Login")
            navigate("/login")
        }
    }, [userBool])
    return (
        <div className={styles.profileContainer}>
            <h1 className={styles.nameHead}>{loggedUser.fName}</h1>
            <div className={styles.header}>
                <img
                    src={loggedUser.gender === "Male" ? "src/assets/male.jpg" : "src/assets/female.jpg"}
                    alt="Profile"
                    className={styles.profileImage}
                />
                <div className={styles.profileInfo}>
                    <p className={styles.subTitle}>Username: <strong style={{ color: "white" }}>{loggedUser.username}</strong></p>
                    <p className={styles.subTitle1}>{loggedUser.about}</p>
                    <p className={styles.subTitle}>Email: <strong style={{ color: "white" }}>{loggedUser.email}</strong></p>
                    <p className={styles.description}>
                        {loggedUser.discription}
                    </p>
                    <div className={styles.socialIcons}>
                        <a href={`${loggedUser.facebook}`}>
                            <i className="fa fa-facebook">
                            </i>
                        </a>

                        <a href={`${loggedUser.twitter}`}>
                            <i className="fa fa-twitter">
                            </i>
                        </a>

                        <a href={`${loggedUser.instagram}`}>
                            <i className="fa fa-instagram">
                            </i>
                        </a>

                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setUserBool(!userBool)}>Logout</button>
                </div>
            </div>

        </div>
    );
};

export default Profile1;
