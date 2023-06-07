import './App.css';
import React, { Children, useState } from 'react';
import Titlte from './components/advanced_react/render_props/Titlte';
// import { CountProvider, useCount } from "./contexts/CountContext2";
import { render } from '@testing-library/react';
import HandleValue from './components/advanced_react/render_props/HandleValue';
import Input from './components/advanced_react/render_props/HandleValue';
import Accordian from './components/advanced_react/react_composition/Accordian';
import Editable from './components/advanced_react/react_composition/Editable';
import Counter from './components/advanced_react/state-reducer/Counter';
import useCounter from './components/advanced_react/state-reducer/useCounter';
import Dropdown from './components/advanced_react/inversion_of_control/Dropdown';
import Wibu from './components/Other/Wibu';
import FireBaseApp from './firebase/FireBaseApp';
import FireBaseAuth from './firebase/FireBaseAuth';
// import Counter from './components/advanced_react/control_props/Counter';


function App() {
  // const [count, setCount] = useState(5);
  // const handleCountChange = (newCount) => {
  //   setCount(newCount);
  // }
  // const {count, handleDecrement, handleIncrement} = useCounter();
  // const Names = ['Lazada', 'Tiki', 'TikTok' ];
  // const [likes, setLikes] = useState(0);

  // const hanldeClick = () => {
  //   setLikes(likes + 1);
  //   console.log(likes);
  // }


  return (
    // <Fragment>

    //   <AuthProvider>
    //     <GalleryProvider>
    //       <HeaderMain></HeaderMain>
    //       <PhotoList></PhotoList>
    //       <CardList></CardList>
    //     </GalleryProvider>
    //   </AuthProvider>
    // </Fragment>
    <div>
      {/* <Routes>
        <Route path="/" element={<NavPage></NavPage>}>
          <Route path="/" element={<> Home Page </>}> </Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route path="/blog/:slug" element={<BlogPageDetail></BlogPageDetail>}></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}> </Route>
        </Route>

          <Route path="*" element={<> This is 404 page </>}> </Route>
      </Routes> */}

      {/* <FetchingData></FetchingData> */}
      {/* <Titlte khangWibu={() => { return <h1> Out Here</h1> }}>
       
      </Titlte> */}

      {/* <HandleValue></HandleValue> */}
      {/* <Accordian header="Can I Join Ok">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium. Facilis ad veniam minus necessitatibus deleniti! Tempora, laudantium. Reprehenderit, veritatis?
        </div>
      </Accordian> */}
      {/* <Editable></Editable> */}

      {/* <Counter value={count} onChange={handleCountChange}></Counter> */}
      {/* <Counter count={count} handleDecrement={handleDecrement} handleIncrement={handleIncrement}></Counter> */}
      {/* <Dropdown></Dropdown> */}
      {/* <Wibu></Wibu> */}

      {/* <FireBaseApp></FireBaseApp> */}
     <FireBaseAuth></FireBaseAuth>
    </div>
  );
}

export default App;
