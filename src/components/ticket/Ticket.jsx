import React from 'react';
import { FaTicketAlt } from 'react-icons/fa';
import './ticket.css';

const FloatingIcon = () => {
    return (
      <div className="floating-icon">
       <a href="https://ticket.agroinsta.com" target="_blank"><FaTicketAlt color='red !important' className="icon" /></a> 
      </div>
    );
  };
export default FloatingIcon;
  