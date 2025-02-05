
import  Todos  from './components/todos.js';
import RemoveFromBin from './components/RemoveToRecyclebin.js';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
function App() {
  // const { t, i18n } = useTranslation();  
  // const translate = (language) => {
  //   i18n.changeLanguage(language);
  // }

  return (
    <>

    <Provider store={store}>
    <Todos/>
    <RemoveFromBin/>
    </Provider>

</>
  );
}

export default App;