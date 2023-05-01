import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <div className="profile">
            <img
              src="https://pbs.twimg.com/profile_images/1350667071202332673/glWYSyvy_400x400.jpg"
              alt="profile_picture"
            />
            <h3>Assignment three</h3>
            <strong>
              <ul>
                <li>
                  <NavLink to="/">
                    <span className="item">Tab</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Grocerylistitems">
                    <span className="item">Grocery List Items</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/card_with_rounded_corner">
                    <span className="item">Card With Rounded Corner</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/select_backGround_color">
                    <span className="item">Select BackGround Color</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/chat_room">
                    <span className="item">Chat Room</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tweets">
                    <span className="item">Tweets</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/movie_list">
                    <span className="item">Movie List</span>
                  </NavLink>
                </li>
              </ul>
            </strong>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
