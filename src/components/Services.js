import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>At House to Haven Interiors, we provide a wide range of services to transform your space into a haven.</p>
      </header>
      <section className="services-list">
        <div className="service-item">
          <h2>Interior Design Consultation</h2>
          <p>Our interior design consultations provide expert advice and guidance to help you create a cohesive and stylish space.</p>
        </div>
        <div className="service-item">
          <h2>Space Planning</h2>
          <p>We offer space planning services to optimize the layout of your home or office, making it functional and aesthetically pleasing.</p>
        </div>
        <div className="service-item">
          <h2>Custom Furniture Design</h2>
          <p>Our team can design custom furniture pieces tailored to your style and needs, ensuring that every piece fits perfectly in your space.</p>
        </div>
        <div className="service-item">
          <h2>Project Management</h2>
          <p>We handle all aspects of your project, from concept to completion, ensuring a smooth and stress-free experience.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
