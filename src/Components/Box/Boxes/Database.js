import React from "react";
import firebase from "./firebase";
import Cards2 from "./Cards2"
import Slider from "react-slick";


function Database(props) {


    const [sex, setSex] = React.useState([]);


    React.useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection(props.sex).get();
        setSex(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      };
      fetchData();
    }, []);
  
    return (
<div>
<Slider {...props.setting}>
      {sex.map(sex => (
          <div key={sex.Brand}>
            <h3><Cards2 name={sex.Name} price={sex.Price} img={sex.Img} brand={sex.Brand}/></h3>
          </div>
        ))}
        </Slider>
        </div>
    );
  }
  
  export default Database;