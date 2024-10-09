import React from "react";
import styles from "./styles.module.css";
import Quote from "@/svg/quote";

const Testimonials = () => {
  return (
    <div className={styles.pgContain}>
      <h6>_TESTIMONIALS_</h6>
      <h2>What People Say</h2>
      <div className={styles.Testimonials}>
        <Quote />
        <p>
          <em>
            I worked with ThryNex on a number of projects and the service is
            truly outstanding.
          </em>
        </p>
        <p>
          <em>
            The team go above and beyond to deliver and I always experienced the
            human touch which I really appreciate.
          </em>
        </p>
        <p>
          <em>
            All my projects have been taken care of with the care and
            intelligence that I would invest in my own business.
          </em>
        </p>
        <p>
          <em>
            ThryNex is a rare find. I am delighted to be working with them and
            can gladly recommend them to others.
          </em>
        </p>

        <div>
          <h3>Spohie Pema</h3>
          <p>LION LOTUS</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
