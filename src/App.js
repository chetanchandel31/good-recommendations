import React from 'react';
import Button from './components/button';
import TabContainer from './components/tabContainer';
import style from './style.module.css';

function App() {
  const [tab, setTab] = React.useState();

  return (
    <div className={style.containerFirst}>
      
      <header className={style.header}>
        <h1>Good recommendations</h1>
      </header>

      <div className={style.containerBtn}>
        <Button btnName='Anime' tab={tab} setTab={setTab}/>
        <Button btnName='Books' tab={tab} setTab={setTab}/>
        <Button btnName='Games' tab={tab} setTab={setTab}/>
      </div>

      <section>
        <TabContainer tab={tab}/>
      </section>
    </div>
    );
}

export default App;