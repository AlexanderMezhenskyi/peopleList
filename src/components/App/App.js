import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

const App = () => {
  const headerContent = 'People list',
        footerContent  = 'Copyright © 2019 By Me.';

  return (
    <div className="container p-5">
        <Header headerContent={headerContent}/>
        <Content/>
        <Footer footerContent={footerContent}/>
    </div>
  );
};

export default App;
