import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Task Manager
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-3">Task List</h2>

        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet.</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <span>{item}</span>

                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;




// import { useEffect, useState } from 'react'
// const API_URL = " https//jsonplaceholder.typicode.com/users";


// export default function App() {

//   const [isLoading, setIsLoading] = useState(true);

//   const handleFetchUsers = async() => {

//     try {
//       await fetch(API_URL); //loads all in react application
//     } catch (e) {
//       console.error(e);
//     } finally {
//         setIsLoading(false)
//       }

// }


// useEffect(() => {
//   handleFetchUsers();
//   }, []);

//   return (
//     <>

//     {isLoading ? (
//       <p>Loading...</p>
//     ) : (
//       <>
//       Fetch finished!
//       </>
//     )}


//     </>
//   );
// }


/*
  Data types:
  - boolean
  - string
  - number
  - arrays (list)
  - null
  - undefined
  - "" (Empty string)
  - object
*/

//import { useState } from "react";

// Interfaces are usually for objects but is not limited to it.
// Proper naming convention: <Variable>Props, e.g. AgeProps, UsersProps, etc...
// interface UsersProps {
//   name: string; // With pure semicolon, this field is required
//   age?: number; // Question mark indicates that this field (age) is optional
// }

// Specific data types (User-Defined)
// Proper naming convention: <Variable>Types, e.g. NamesTypes, AgeTypes, etc...
// type CapstoneMemberTypes = "Khian" | "Dishiela" | "Rafael"; // This also comes with auto completion when typing

// export default function App() {

  // Directly integrating the data types inline
  // const [name, setName] = useState<string>("John Doe");
  // const [age, setAge] = useState<number>(17);
  // const [isAlive, setIsAlive] = useState<boolean>(true);

  // ---------------------------------

  // Using interfaces (This is common with objects and array of objects)
  // const [users, setUsers] = useState<UsersProps>({
  //   name: "John",
  //   age: 18
  // });
  // This is the inline version for objects data types
  // const [users2, setUsers2] = useState<{ name: string, age?: number }>({
  //   name: "Blake",
  //   age: 24
  // });

  // ---------------------------------
  
  // User-defined data types, (specific data types, not limited to string, but also numbers too)
  //const [capstoneMember, setCapstoneMember] = useState<CapstoneMemberTypes>("Khian");

  // ---------------------------------

  // Array of objects data types (Just put a [] to the object interface, it translates to "Array of Objects" in plain english)
//   const [data, setData] = useState<UsersProps[]>([
//     {
//       name: "John",
//       age: 17
//     },
//     {
//       name: "Jake",
//       age: 18
//     }
//   ]);

//   return (
//     <>
      
//     </>
//   );
// }


//-----------------

/*
Dont
Repeat
Yourself
*/

/*
Fetch States:
-pending
-success
-failed/error
*/

//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState<string[]>([]);

//   const addTask = () => { */}
//     if (task === "") return; 

//     setTasks([...tasks, task]);
//     setTask("");
//   };

//   const deleteTask = (indexToDelete: number) => {
//     setTasks(
//       tasks.filter((_, index) => index !== indexToDelete)
//     );
//   }

//   return (
//     <div>
//       <h1>Task Manager</h1>

//       <input
//       type="text"
//       placeholder="Enter task"
//       value={task}
//       onChange={(e) => setTask(e.target.value)}
//       />

//       <button onClick={addTask}>Add Task</button>

//       <h2>Task List</h2>

//       <ul>
//         {tasks.map((item, index) => (
//           <li key={index}>
//             {item}

//         <button onClick={() => deleteTask(index)}>
//           Delete
//         </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );


