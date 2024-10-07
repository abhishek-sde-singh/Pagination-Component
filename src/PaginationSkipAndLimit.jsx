const PaginationSkipAndLimit = ({ skip, setSkip, total }) => {
  const handlePrev = () => {
    setSkip((prev) => prev - 1);
  };

  const handleNext = () => {
    setSkip((prev) => prev + 1);
  };

  return (
    <div className="">
      <button onClick={handlePrev}>{"<"}</button>

      {new Array(Math.ceil(total)).fill(0).map((_, index) => {
        return (
          <button
            className={`${
              skip === index + 1 ? "bg-green-400" : "bg-red-400"
            } p-2 ml-4`}
            key={index}
            onClick={() => {
              setSkip(index + 1);
            }}
          >
            {index + 1}
          </button>
        );
      })}

      <button onClick={handleNext}>{">"}</button>
    </div>
  );
};

export default PaginationSkipAndLimit;
