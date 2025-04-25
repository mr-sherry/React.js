import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <Accordion defaultActiveKey="0" className={styles.accordionWrapper}>
        {[...Array(5)].map((_, i) => (
          <Accordion.Item
            eventKey={i.toString()}
            key={i}
            className={styles.accordionItem}
          >
            <Accordion.Header className={styles.accordionHeader}>
              Accordion Item #{i + 1}
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default About;
