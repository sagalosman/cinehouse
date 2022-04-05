import React, { useState } from "react";
import Menu from "./Menu";
import Maps from "./Maps";
import Categories from "./Categories";
import items from "./data";
import logo from "./logo.JPG";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Movie List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
      <div className="title">
          <h2>List Of Cinemas In London</h2>
          <div className="underline"></div>
          <br>
          </br>
          <Maps />
        </div>
      {/* <Maps /> */}
    </main>
  );
};


export default App;
