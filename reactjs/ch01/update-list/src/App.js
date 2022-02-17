import { useState } from "react";
import PositionList from "./PositionList";



let current = [
  [3, 0],
  [4, 0],
  [5, 0],
  [4, 1],
];
 

function App() {
  const [positions, setPositions] = useState([
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
    [
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
      "block",
    ],
  ]);


  const handleAdd = () => {
    //debugger
    console.log("move");
    //positions[0][0] = 'block full'

    let positionX = []
    let positionY = []
    current.forEach((position) => {
      positionX.push(position[0])
      positionY.push(position[1])
    })
    console.log(positionX)
    console.log(positionY)

    setPositions((before) => {
      let after = before.map((position, y) => {
        //debugger 
        if (positionY.includes(y)) {
          return position.map((block, x) => {
            if(positionX.includes(x)){
              console.log(x,y,"block full")
              return "block full"
            }else{
              return block
            }
          });
        } else {
          return position;
        }
      });
      return after;
    })



    // current.forEach((position) => {
    //   const [x, y] = position;

    //   setPositions((before) => {
    //     let after = before.map((position, index) => {
    //       if (index === y) {
    //         return position.map((block, index) =>
    //           index === x ? "block full" : block
    //         );
    //       } else {
    //         return position;
    //       }
    //     });
    //     return after;
    //   });

    // });

    console.log(positions[0]);
  };
  
  

  const move = () => {
    current.forEach((position) => {
      console.log(position)
      const [x, y] = position;

      setPositions((before) => {
        let after = before.map((position, index) => {
          if (index === y) {
            return position.map((block, index) =>
              index === x ? "block" : block
            );
          } else {
            return position;
          }
        });
        return after;
      });
    });
    
    current.forEach((position) => {
      position[1] = position[1] + 1
    })

    console.log(current)

   current.forEach((position) => {
      const [x, y] = position;

      setPositions((before) => {
        let after = before.map((position, index) => {
          if (index === y) {
            return position.map((block, index) =>
              index === x ? "block full" : block
            );
          } else {
            return position;
          }
        });
        return after;
      });
    });
    


  }

  const handleDelete = () => {
    console.log("handleDelete");

    //positions[0][0] = 'block full'

    setPositions((before) => {
      let after = before.map((position, index) => {
        if (index === 0) {
          return position.map((block, index) =>
            index === 0 ? "block" : block
          );
        } else {
          return position;
        }
      });
      return after;
    });
    console.log(positions[0]);
  };

  const handleModify = () => {
    move()
     
  };

  return (
    <PositionList
      positions={positions}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleModify={handleModify}
    />
  );
}

export default App;
