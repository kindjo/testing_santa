import React from "react";
import style from "./App.module.css";

import Button from "./components/Button/Button";

function App() {
  return (
    <div className={style.App}>
      <Button disabled>Button</Button>
    </div>
  );
}

export default App;

// import React from "react";

// import style from "./App.module.css";
// import Heading from "./components/Heading/Heading";
// import Participants from "./components/Participants/Participants";
// import santa from "./img/santa.svg";

// function App() {
//   return (
//     <div className={style.App}>
//       <Heading />
//       <img className={style.image_santa} src={santa} alt="Santa" />
//       <Participants />
//     </div>
//   );
// }

// export default App;
