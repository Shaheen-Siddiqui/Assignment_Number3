import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TabsComponent } from "./1-Tabs";
import { NavBar } from "./Navbar";
import { GroceryListItems } from "./2-GroceryList";
import { CardWithRoundedCorner } from "./3-Card";
import { SelectBackGroundColor } from "./4-SetBackground";
import { ChatRoom } from "./5-ChatRoom/ChatRoom";
import { Tweets } from "./6-Tweets/Tweets";
import { MovieList } from "./7-Movies/Movies";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TabsComponent />} />
          <Route path="/GroceryListItems" element={<GroceryListItems />} />
          <Route
            path="/card_with_rounded_corner"
            element={<CardWithRoundedCorner />}
          />
          <Route
            path="/select_backGround_color"
            element={<SelectBackGroundColor />}
          />
          <Route path="/chat_room" element={<ChatRoom />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="/movie_list" element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
