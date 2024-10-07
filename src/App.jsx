// import { useCallback, useEffect, useState } from "react";
// import Pagination from "./Pagination";
// import PaginationSkipAndLimit from "./PaginationSkipAndLimit";

// function App() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const fetchData = useCallback(async () => {
//     if (loading) return;
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://picsum.photos/v2/list?page=${page}&limit=5`
//       );
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.log("Error getting response", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [loading, page]);

//   useEffect(() => {
//     fetchData();
//   }, [page]);

//   return (
//     <div className="flex flex-col items-center h-[100vh] w-full bg-gray-500">
//       <h1 className="text-5xl text-teal-300">Pagination</h1>
//       <div className="flex w-full h-[400px]">
//         {!loading ? (
//           data.map((item) => {
//             return (
//               <img
//                 key={item.id}
//                 src={item.download_url}
//                 alt={item.author}
//                 height={200}
//                 width={250}
//                 className="ml-6"
//               />
//             );
//           })
//         ) : (
//           <div className="font-bold text-3xl">loading...</div>
//         )}
//       </div>
//       <Pagination page={page} setPage={setPage} />
//       <PaginationSkipAndLimit/>
//     </div>
//   );
// }

// export default App;

// Pagination Skip & Limit
import { useCallback, useEffect, useState } from "react";
import PaginationSkipAndLimit from "./PaginationSkipAndLimit";

const App = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=5&skip=${skip * 5}`
      );
      const result = await response.json();
      setData(result.products);
      setTotal(Math.floor(result.total / 10));
    } catch (error) {
      console.log("Error getting response", error);
    } finally {
      setLoading(false);
    }
  }, [loading, skip]);

  useEffect(() => {
    fetchData();
  }, [skip]);

  return (
    <div className="flex flex-col items-center h-[100vh] w-full bg-gray-500">
      <h1 className="text-5xl text-teal-300">Pagination</h1>
      <div className="flex w-full h-[400px]">
        {!loading ? (
          data.map((item) => {
            return (
              <img
                key={item.id}
                src={item.thumbnail}
                alt={item.description}
                height={100}
                width={150}
                className="ml-6"
              />
            );
          })
        ) : (
          <div className="font-bold text-3xl">loading...</div>
        )}
      </div>
      <PaginationSkipAndLimit total={total} skip={skip} setSkip={setSkip} />
    </div>
  );
};

export default App;
