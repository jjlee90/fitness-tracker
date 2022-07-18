// import React, { useState } from "react";

// export default function ExerciseListForm(props) {
//   const [exerciseName, setExerciseName] = useState("");
//   const [maxRep, setMaxRep] = useState("");

//   const setExercise = (e) => {
//     setExerciseName(e.target.value);
//   };

//   const setMax = (e) => {
//     setMaxRep(e.target.value);
//   };

//   const transferValue = (e) => {
//     e.preventDefault();
//     const val = {
//       exerciseName,
//       maxRep,
//     };
//     props.func(val);
//     clearState();
//   };
//   const clearState = () => {
//     setExerciseName("");
//     setMaxRep("");
//   };

//   return (
//     <form>
//       <label>Exercise Name</label>
//       <input type="text" value={exerciseName} onChange={setExercise} />
//       <label>Max</label>
//       <input type="text" value={maxRep} onChange={setMax} />
//       <button onClick={transferValue}>Submit</button>
//     </form>
//   );
// }
