import React from "react";

const MapComponent = () => {
  return (
    <div style={{ width: "100%", height: "200px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234940.45841849444!2d29.741249000000003!3d62.610371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469b84265dbe9099%3A0x1c0146d96254b900!2s80110%20Joensuu%2C%20Finland!5e0!3m2!1sen!2sus!4v1728161401593!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
