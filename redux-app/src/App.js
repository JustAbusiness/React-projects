import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import Card from './uis/Card';
import { getNews } from './sagas/news/newSlice';
import HackerNews from './others/HackerNews';
// import { toggleDarkMode } from './redux-toolkit/globalSlice';
// import useDarkMode from './hooks/useDarkMode';
// import ButtonToggle from './uis/ButtonToggle';
// import Sidebar from './uis/SideBar';
// import HackerNews from './others/HackerNews';


function App() {
  // const { count } = useSelector(state => state.counter);
  // const globalOptions = useSelector(state => state.global);
  // console.log("🚀 ~ file: App.js:12 ~ App ~ globalOptions:", globalOptions)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getNews());

  // }, [dispatch])

  // const hits = useSelector(state => state.news.hits);
  // console.log("🚀 ~ file: App.js:25 ~ App ~ hits:", hits)
  // const [darkMode, setDarkMode] = useDarkMode();
  // useEffect(() => {
  //   dispatch(toggleDarkMode(!darkMode));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const handleToggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   dispatch(toggleDarkMode(!darkMode));
  // }

  return (
    <>
      {/* <h2> This is also count : {count} </h2>
      <Counter></Counter> */}
      {/* <Card></Card>
      <button onClick={handleToggleDarkMode} >Toggle dark mode </button> */}

      {/* <Sidebar></Sidebar>
      <ButtonToggle></ButtonToggle> */}
      <HackerNews></HackerNews>
    </>
  );
}

export default App;
