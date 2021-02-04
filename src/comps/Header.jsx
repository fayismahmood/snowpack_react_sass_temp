import React, { useState } from "react";

export default function Header() {
  return (
    <div>
      <div>
        React <span>Header</span>
      </div>
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Works</li>
            <li>About Us</li>
            <li>Portfolio</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
