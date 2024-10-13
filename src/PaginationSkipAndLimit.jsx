const PaginationSkipAndLimit = ({ skip, setSkip, total }) => {
  const handlePrev = () => {
    setSkip((prev) => prev - 1);
  };

  const handleNext = () => {
    setSkip((prev) => prev + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => setSkip(i)}
            className={`${skip === i ? "bg-green-400" : "bg-red-400"} p-2 mx-1`}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => setSkip(1)}
          className={`${skip === 1 ? "bg-green-400" : "bg-red-400"} p-2 mx-1`}
        >
          1
        </button>
      );

      let startPage = Math.max(2, skip - 1);
      let endPage = Math.min(total - 1, skip + 1);

      if (skip <= 3) {
        endPage = 4;
      } else if (skip >= total - 2) {
        startPage = total - 3;
      }

      if (startPage > 2) {
        pageNumbers.push(<span key="ellipsis1">...</span>);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => setSkip(i)}
            className={`${skip === i ? "bg-green-400" : "bg-red-400"} p-2 mx-1`}
          >
            {i}
          </button>
        );
      }

      if (endPage < total - 1) {
        pageNumbers.push(<span key="ellipsis2">...</span>);
      }

      pageNumbers.push(
        <button
          key={total}
          onClick={() => setSkip(total)}
          className={`${
            skip === total ? "bg-green-400" : "bg-red-400"
          } p-2 mx-1`}
        >
          {total}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="">
      <button onClick={handlePrev}>{"<"}</button>

      {/* {new Array(Math.ceil(total)).fill(0).map((_, index) => {
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
      })} */}
      {renderPageNumbers()}

      <button onClick={handleNext}>{">"}</button>
    </div>
  );
};

export default PaginationSkipAndLimit;
