import logo from './logo.svg';
import './App.css';
import Amazon from './components/Amazon';
import React from 'react';
import style from './components/amazon.module.css'


function App() {

  // const [details,setDetails]=React.useState([])

  return (
    <div className="App">
      <Amazon Date={"28/10/2020"} logo={"https://image.similarpng.com/very-thumbnail/2020/11/Amazon-icon-in-flat-design-on-transparent-background-PNG.png"} GiftFrom={"AMAZON GIFT"} pay={"Pay"} OS={"Desktop"} stylee={style.mainouter}/>

      <Amazon Date={"28/10/2020"} logo={"https://image.similarpng.com/very-thumbnail/2020/11/Amazon-icon-in-flat-design-on-transparent-background-PNG.png"} GiftFrom={"AMAZON GIFT"} pay={"Pay"} OS={"Desktop"} stylee={style.mainouter}/>

      <Amazon Date={"17 Sep 2020"} logo={"https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg"} GiftFrom={"Apple GIFT"} pay={"Payment"} OS={"MacOS"} stylee={style.mainouterr}/>
    </div>
  );
}

export default App;
