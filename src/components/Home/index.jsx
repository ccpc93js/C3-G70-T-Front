import React from "react";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div fluid className={styles.root}>
      <div className={styles.row}>
        <div sm={23} md={5} lg={6} className={styles.profile} xsHidden>
          <div className={styles.profile__top}>
            <img
              className={styles.profileImage}
              size="lg"
              
              src="https://i.pravatar.cc/150?img=13"
              alt="@juanmartin"
            />

            <h3>Juan Martin</h3>
            <p>@juanmartin</p>
          </div>
          <div className={styles.profile__stats}>
            <div className={styles.profile__stat}>
              <span>Tweets</span>
              <span>1.2k</span>
            </div>
            <div className={styles.profile__stat}>
              <span>Tweets</span>
              <span>1.2k</span>
            </div>
            <div className={styles.profile__stat}>
              <span>Tweets</span>
              <span>1.2k</span>
            </div>
          </div>
        </div>
        <div xs={22} sm={23} md={11} lg={12} className={styles.feed}>
          <div type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div sm={23} md={5} lg={6} className={styles.aside} xsHidden>
          <h3>Statistics</h3>
          <div />
          <div percent={30} strokeColor="#ffc107" />
          <div percent={30} status="active" />
          <div percent={50} status="fail" />
          <div percent={100} status="success" />
          <div percent={80} showInfo={false} />
        </div>
      </div>
    </div>
  );
}
