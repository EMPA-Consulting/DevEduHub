import React, { useState } from 'react';
import './App.css';
import { categories } from './components/Hooks';
import List from './components/List';
import BackButton from './components/BackButton';

const Title = ({ activeHook, activeCategory }) => {
  const title = activeHook || activeCategory || 'React Hooks Simplified';
  return <h1 className="h1">{title}</h1>;
};

function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeHook, setActiveHook] = useState('');

  const ActiveHookComponent = categories
    .flatMap(category => category.hooks)
    .find(hook => hook.name === activeHook)?.component;

  const handleCategoryClick = (categoryName) => {
    const category = categories.find(category => category.name === categoryName);
    if (category.hooks.length === 1) {
      setActiveHook(category.hooks[0].name);
    } else {
      setActiveCategory(categoryName);
    }
  };

  return (
    <div className="main-container">
      <Title activeHook={activeHook} activeCategory={activeCategory} />
      {ActiveHookComponent && <ActiveHookComponent />}
      <br />

      {activeHook ? (
        <BackButton onClick={() => setActiveHook('')} />
      ) : activeCategory ? (
        <>
          <List items={categories.find(category => category.name === activeCategory).hooks} onClick={setActiveHook} className="h2" />
          <BackButton onClick={() => setActiveCategory('')} />
        </>
      ) : (
        <List items={categories} onClick={handleCategoryClick} className="h2" />
      )}
    </div>
  );
}

export default App;