import React from 'react';
import './Process.css';

const Process = () => {
  // Handle scroll event for parallax effect
  const handleScroll = () => {
    const background = document.querySelector('.process-background');
    const content = document.querySelector('.process-title ');
    const content1 = document.querySelector('.process-subtitle ');

    const scrollPosition = window.scrollY;

    // Adjust the speed of background and content movement here
    background.style.transform = `translateY(-${scrollPosition * 0.8}px)`;
    content.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    content1.style.transform = `translateY(${scrollPosition * 0.4}px)`;

  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="process-container">
      <div className="process-background">
        <div className="white-overlay"></div>
        <h1 className="process-title">THE DESIGN PROCESS</h1>
        <p className="process-subtitle">how it works</p>
      </div>
      <div className="process-content">
     
     
       
        <br>
            
        </br>
        <p className="process-paragraph left">
        {/* <h3>title 1</h3> */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="process-paragraph right">
        {/* <h3>title 2</h3> */}
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="process-paragraph left">
        {/* <h3>title 3</h3> */}
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="process-paragraph right">
        {/* <h3>title 4</h3> */}
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="process-paragraph left">
        {/* <h3>title 5</h3> */}
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
      </div>
    </div>
  );
};

export default Process;
