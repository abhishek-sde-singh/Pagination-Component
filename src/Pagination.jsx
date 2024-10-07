const Pagination = ({ page, setPage }) => {
  const prevThreeArray = Array.from(
    { length: 3 },
    (_, index) => page - 1 - index
  )
    .filter((value) => value > 0)
    .reverse();

  const nextThreeArray = Array.from(
    { length: 3 },
    (_, index) => page + index
  ).filter((value) => value > 0);

  const combineArray = [...prevThreeArray, ...nextThreeArray];

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="flex gap-4 text-white mt-20">
      <button
        onClick={handlePrev}
        disabled={page <= 1}
        className={`p-2 bg-red-300 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-black`}
      >
        {"<"}
      </button>
      <button>
        {combineArray.map((item, index) => (
          <span
            key={index}
            className={`p-3 ml-2 ${
              item === page ? "bg-yellow-400" : "bg-green-500"
            }`}
            onClick={() => setPage(item)}
          >
            {item}
          </span>
        ))}
      </button>
      <button onClick={handleNext} className="p-2 bg-red-300">
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
