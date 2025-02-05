
import  Todos  from './components/Todos.js';
import RemoveFromBin from './components/RemoveToRecyclebin.js';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import MessageComponent from './components/Message.js';
function App() {
  // const { t, i18n } = useTranslation();  
  // const translate = (language) => {
  //   i18n.changeLanguage(language);
  // }

  return (
    <>
    <MessageComponent/>
    
{/* 
    <Provider store={store}>
    <Todos/>
    <RemoveFromBin/>
    </Provider> */}

</>
  );
}

export default App;