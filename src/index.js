import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";


const App = () => {

    const todoData = [
        { label: 'Drink Cofee', important: false },
        { label: 'Work imos', important: true },
        { label: 'Eat', important: true}

    ];


  return (
      <div>
          <AppHeader/>
          <SearchPanel/>
          <TodoList todos={todoData}/>
      </div>
  );
};


const el = <App />;

    ReactDOM.render(el, document.getElementById('root'));