// import "./exerciseList.css";
// import React, { useState } from "react";
// import { mockExerciseData } from "./MockExerciseData";
// import { Link } from "react-router-dom";
// import ExerciseListForm from "./ExerciseListForm";

// console.log(mockExerciseData);

// export default function ExerciseList() {
//   const [exerciseInput, setExerciseInput] = useState(mockExerciseData);

//   const tableRows = exerciseInput.map((exercise, i) => {
//     return (
//       <tr key={i}>
//         <td>{exercise.exerciseName}</td>
//         <td>{exercise.maxRep}</td>
//       </tr>
//     );
//   });

//   const addRows = (data) => {
//     const totalExercises = exerciseInput.length;
//     data.name = totalExercises + 1;
//     const updatedExerciseData = [...exerciseInput];
//     updatedExerciseData.push(data);
//     setExerciseInput(updatedExerciseData);
//   };

//   return (
//     <div>
//       <div>
//         <Link to="/">Home</Link>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Exercise Name</th>
//             <th>Max</th>
//             <th>95%</th>
//             <th>90%</th>
//             <th>85%</th>
//             <th>80%</th>
//           </tr>
//         </thead>
//         {/* {mockExerciseData.map((exerciseData, i) => {
//             return (
//               <tr key={i}>
//                 <td>{exerciseData.name}</td>
//                 <td>{exerciseData.max} lbs</td>
//                 <td>{exerciseData.ninetyFive} lbs</td>
//                 <td>{exerciseData.ninety} lbs</td>
//                 <td>{exerciseData.eightyFive} lbs</td>
//                 <td>{exerciseData.eighty} lbs</td>
//               </tr>
//             );
//           })} */}

//         {tableRows}
//       </table>
//       <ExerciseListForm func={addRows} />
//     </div>
//   );
// }
