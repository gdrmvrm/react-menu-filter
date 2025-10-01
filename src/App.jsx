import { useState } from 'react';
import Title from './components/Title';
import list from './data';
import Menu from './components/Menu';
import Categories from './components/Categories';

// const categories = list.map((item) => item.category);
// const categorySet = new Set(categories);
// const categoryItems = ['all', ...categorySet];
// console.log(categoryItems);

const allCategories = ['all', ...new Set(list.map((item) => item.category))];

const App = () => {
  const [menuList, setMenuList] = useState(list);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories categories={categories} />
        <Menu list={menuList} />
      </section>
    </main>
  );
};
export default App;
