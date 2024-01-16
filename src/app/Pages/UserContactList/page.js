// const getdata = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/api/contact");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error fetching data:", error);
//     throw error;
//   }
// };

// const page = async () => {
//   const datalist = await getdata();
//   console.log(datalist,"datalist");
//   return (
//     <>
//       <div className="container mx-auto px-4 mt-5">
//         <h1 className="font-bold text-2xl">User Datalist</h1>
//         {/* {results.map((item, index) => (
//             <div key={index} className="mt-2">
//               <h2>Name:{item.username}</h2>
//             </div>
//           ))} */}
//       </div>
//     </>
//   );
// };

// export default page;

const page = async () => {
  try {
    const datalist = await fetch("http://localhost:3001/api/contact").then(response => response.json());

    console.log(datalist, "datalist");

    return (
      <>
        <div className="container mx-auto px-4 mt-5">
          <h1 className="font-bold text-2xl">User Datalist</h1>
          {datalist && datalist.result && datalist.result.map((item, index) => (
            <div key={index} className="mt-2">
              <h2>Name: {item.username}</h2>
            </div>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};

export default page;
