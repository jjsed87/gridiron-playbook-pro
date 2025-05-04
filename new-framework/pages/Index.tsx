import React from "react";

const Index: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to Cox Mill Offensive Line Playbook</h1>
      <div className="grid grid-cols-3">
        <div className="card">
          <h2>Run Plays</h2>
          <p>Explore power, zone, and option run plays.</p>
        </div>
        <div className="card">
          <h2>Pass Plays</h2>
          <p>Discover passing concepts and protection schemes.</p>
        </div>
        <div className="card">
          <h2>Special Teams</h2>
          <p>Learn about kickoffs, punts, and field goals.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
