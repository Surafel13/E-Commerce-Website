// // import React, { useEffect, useState } from 'react'
// // import path from 'path'

// // function Test() {

// //     const [img, setImg] = useState([]);

// //     useEffect(() => {
// //         fetch("http://localhost:4000/api/img/getImage")
// //         .then(response => response.json)
// //         .then(data => setImg(data))
// //         .catch(err => console.log(err))
// //     })


// //   return (
// //     <div>

// //         <div className='text-ceter'>
// //             <h1>Database images</h1>
// //             {
// //                 img?.map((data, i) => {
// //                     <img src={__dirname + data.paat + data.filename} alt={data.filename}/>
// //                     : <h1>Image not found</h1>
// //                 })
// //             }
// //         </div>
// //     </div>
// //   )
// // }

// // export default Test

// import React, { useEffect, useState } from 'react';

// function Test() {
//   const [img, setImg] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/api/img/getImage")
//       .then(response => response.json()) // ✅ parse JSON
//       .then(data => setImg(data))
//       .catch(err => console.log(err));
//   }, []); // ✅ only run once

//   return (
//     <div className='text-center'>
//       <h1>Database Images</h1>
//       {
//         img.length > 0 ? img.map((data, i) => (
//           <img
//             key={i}
//             src={`http://localhost:4000/uploads/${data.filename}`} 
//             alt={data.filename}
//             style={{ width: '200px', margin: '10px' }}
//           />
//         )) : <h2>No images found</h2>
//       }
//     </div>
//   );
// }

// export default Test;

import React from 'react'

function Test() {
  return (
    <div>
      
    </div>
  )
}

export default Test
