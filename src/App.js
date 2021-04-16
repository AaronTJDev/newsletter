import { useState } from 'react';
import NotifyContext from './context/NotifyContext';
import Newsletter from './components/Newsletter';
import Notification from './components/Notification';

function App() {
  const [message, setMessage] = useState("");

  const notify = (msg) => {
    var el = document.querySelector("#notify");
    el.classList.add("display-notify");
    setMessage(msg);

    setTimeout(() => {
      el.classList.remove("display-notify");
    }, 2000);
  };

  return (
    <div className="app">
      <NotifyContext.Provider
        value={{
          notify: notify,
          message: message,
        }}
      >
        <Newsletter/>
        <Notification/>
      </NotifyContext.Provider>
    </div>
  );
}

export default App;