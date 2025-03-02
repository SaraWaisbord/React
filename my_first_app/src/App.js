
// import  Todos  from './components/todos.js';
// import RemoveFromBin from './components/RemoveToRecyclebin.js';
// import store from '../src/Redux/store.js';
// import { Provider } from 'react-redux';
// import { useTranslation } from 'react-i18next';
import MessageComponent from './components/Message.js';
import OneHOC from './components/oneHOC.js';
import TwoHOC from './components/twoHOC.js';
import WithLoggingC from './components/withLogging.js';
import useLocalStorage from './customHooks/localStorageHook.js';
function App() {
  

  // const { t, i18n } = useTranslation();  
  // const translate = (language) => {
  //   i18n.changeLanguage(language);
  // }
  const HocOne = WithLoggingC(OneHOC);
  const HocTwe = WithLoggingC(TwoHOC);
  const [theme, setTheme] = useLocalStorage("set","theme", "dark");
  return (
    <>
    <HocOne></HocOne>
    <HocTwe></HocTwe>
    {/* <MessageComponent/> */}

    
{/* 
    <Provider store={store}>
    <Todos/>
    <RemoveFromBin/>
    </Provider> */}

</>
  );
}

export default App;