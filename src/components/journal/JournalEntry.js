import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://s.france24.com/media/display/0851897a-e20a-11eb-b871-005056a97e36/07-10%20CA%20Foto%20Principal.jpeg)",
        }}
      ></div>

      <div className="journal__entry-body">
          <p className="journal__entry-title">Argentina campeón</p>
          <p className="journal__entry-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde facere laborum dolorem!</p>
      </div>

      <div className="journal__entry-date-box">
          <span>Monday</span>
          <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
