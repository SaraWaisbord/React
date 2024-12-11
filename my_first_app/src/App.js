
import { useState } from 'react';
import ImgComponent from "../src/lesson2/components/ImgComponent"

import a from '../src/lesson2/assats/a.png'
import b from '../src/lesson2/assats/b.png'
import c from '../src/lesson2/assats/c.png'
import d from '../src/lesson2/assats/d.png'
import e from '../src/lesson2/assats/e.png'
import f from '../src/lesson2/assats/f.png'
function App() {

  const [imgs, setImg] = useState([a, b, c, d, e, f])
  const [idx, setIndex] = useState(0)

  function checkNext(e) {
    console.log(idx);
    if (idx == 5) {
      return true;
    }
    return false;
  }
  function checkBack(e) {
    if (idx == 0) {
      return true;
    }
    return false;
  }
  return (
    <>
      <button disabled={checkNext()} onClick={(e) => {
        setIndex(idx + 1)
      }}> next </button>
      <ImgComponent path={imgs[idx]}></ImgComponent>
      <button disabled={checkBack()} onClick={(e) => { setIndex(idx - 1) }
      }
      > back </button>
    </>
  );
}

export default App;
