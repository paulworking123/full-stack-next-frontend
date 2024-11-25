// "use client";

// import React from "react";

// interface User {
//   id: number;
//   firstname: string;
//   lastname: string;
//   email: string;
//   profile: string;
//   dob: string;
//   password?: string;
// }

// const UserProfileComponent: React.FC<{ user: User }> = ({ user }) => {
//   console.log(user);
//   const [data, setData] = React.useState<User>({
//     id: 0,
//     firstname: "",
//     lastname: "",
//     email: "",
//     dob: "",
//     profile: "",
//   });

//   const handleSetDataForUpdate = () => {
//     setData(user);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value, // Dynamically update the field based on the input's name
//     }));
//   };

//   return (
//     <>
//       <div className="flex items-center justify-around h-screen w-full">
//         <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <img className="rounded-t-lg" src={user?.profile} alt="" />
//           </a>
//           <div className="p-5">
//             <a href="#">
//               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                 {user?.firstname}&nbsp;&nbsp;{user?.lastname}
//               </h5>
//             </a>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//               {user?.email}
//             </p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//               {user?.password}
//             </p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//               {user?.dob}
//             </p>
//             <button
//               onClick={() => handleSetDataForUpdate()}
//               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//         <div className="border border-gray-300 rounded p-6">
//           {/* <form className="space-y-4" onSubmit={handleRegister}> */}
//           <form className="space-y-4">
//             <div className="w-24 h-24">
//               <img
//                 className="rounded-t-lg"
//                 src={
//                   data?.profile
//                     ? data?.profile
//                     : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
//                 }
//                 alt=""
//               />
//             </div>
//             <input
//               name="firstName"
//               type="text"
//               placeholder="Enter your first name...."
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
//               value={data.firstname}
//               onChange={handleInputChange}
//             />
//             <input
//               name="Last name"
//               type="text"
//               placeholder="Enter your last name...."
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
//               value={data?.lastname}
//               onChange={handleInputChange}
//             />
//             <input
//               name="Email"
//               type="email"
//               placeholder="Enter your email...."
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
//               value={data?.email}
//               onChange={handleInputChange}
//             />
//             <input
//               name="password"
//               type="password"
//               placeholder="*************"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
//               // value={password}
//               onChange={handleInputChange}
//             />
//             <input
//               name="Birthday"
//               type="date"
//               placeholder="Date of birth"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
//               value={data?.password}
//               onChange={handleInputChange}
//             />
//             <button
//               type="submit"
//               className="w-auto bg-green-400 text-white py-2 rounded font-semibold hover:bg-teal-600 p-4"
//             >
//               Update profile
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserProfileComponent;

"use client";

import React from "react";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  profile: string;
  dob: string;
  password?: string;
}

const UserProfileComponent: React.FC<{ user: User }> = ({ user }) => {
  const [data, setData] = React.useState<User>({
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    profile: "",
    password: "",
  });

  const handleSetDataForUpdate = () => {
    setData(user);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Updated User Data:", data);
  };

  return (
    <div className="flex items-center justify-around h-screen w-full">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={user?.profile} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {user?.firstname} {user?.lastname}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {user?.email}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {user?.dob}
          </p>
          <button
            onClick={handleSetDataForUpdate}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="border border-gray-300 rounded p-6">
        <form className="space-y-4" onSubmit={handleUpdateProfile}>
          <div className="w-24 h-24">
            <img
              className="rounded-t-lg"
              src={
                data?.profile ||
                "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              }
              alt=""
            />
          </div>

          <input
            name="firstname"
            type="text"
            placeholder="Enter your first name..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            value={data.firstname}
            onChange={handleInputChange}
          />
          <input
            name="lastname"
            type="text"
            placeholder="Enter your last name..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            value={data.lastname}
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            value={data.email}
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter your password..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            value={data.password}
            onChange={handleInputChange}
          />
          <input
            name="dob"
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            value={data.dob}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-auto bg-green-400 text-white py-2 rounded font-semibold hover:bg-teal-600 px-4"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileComponent;
