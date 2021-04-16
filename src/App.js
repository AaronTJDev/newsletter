import { useState } from 'react';
import Loading from './components/Loading';
import NotifyContext from './context/NotifyContext';
import Newsletter from './components/Newsletter';
import Notification from './components/Notification';

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
        <Newsletter handleLoad={setLoading}/>
        <Notification/>
        { 
          loading
            ? <Loading/>
            : null
        }
      </NotifyContext.Provider>
    </div>
  );
}

export default App;