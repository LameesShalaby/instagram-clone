import { Avatar } from "@mui/material";
import "./Suggestions.css";

function Suggestions() {

  return (
    <div className="suggestions">
      <div className="suggestions-title">Suggestions for you</div>
      <div className="suggestions-usernames">
        <div className="suggestions-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>

        <div className="suggestions-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>

        <div className="suggestions-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>

        <div className="suggestions-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  );

}

export default Suggestions