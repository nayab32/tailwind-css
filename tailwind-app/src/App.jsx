// function App() {
//   return (
//     // <div className="min-h-screen bg-chestnut flex items-center justify-center">
//     //   <h1 className="text-4xl font-bold text-white">
//     //     My Tailwind Project
//     //   </h1>
//     // </div>
//     <div className="p-10">
//       <h3>MY Heading</h3>
//     </div>


  
//   );
// }

// export default App;

// import Constructor from "./Constructor";
// function App(){
//   return (
    
//     <Constructor/>
      
//   );
// }
// export default App;

import Card from "./Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="grid gap-6 md:grid-cols-2">

        <Card
          title="Card One"
          text="This is my first reusable card."
        />

        <Card
          title="Card Two"
          text="This is my second reusable card."
        />

      </div>
    </div>
  );
}

export default App;