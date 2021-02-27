import React from 'react';
import DirectoryContainer from "./components/DirectoryContainer";
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <>
    <Header />
    <Search />
    <DirectoryContainer />
    </>
  );
}

export default App;