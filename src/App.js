import React from "react";
import Props from "./Props";
import Data from "./Data";



const App = () => {
  return (
    <>
      <h1 className="card-text text-center text-danger my-4">
        Bootstrap cards with props and API
      </h1>

      <div className="container my-4">
        <div className="row">
          <Props
            imgsrc={Data[0].imgsrc}
            title={Data[0].title}
            text={Data[0].text}
            btn={Data[0].btn}
          />

          <Props
            imgsrc={Data[1].imgsrc}
            title={Data[1].title}
            text={Data[1].text}
            btn={Data[1].btn}
          />

          <Props
            imgsrc={Data[2].imgsrc}
            title={Data[2].title}
            text={Data[2].text}
            btn={Data[2].btn}
          />

          <Props
            imgsrc={Data[3].imgsrc}
            title={Data[3].title}
            text={Data[3].text}
            btn={Data[3].btn}
          />
        </div>
      </div>
    </>
  )
}
export default App;
