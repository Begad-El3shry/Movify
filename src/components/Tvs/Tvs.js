import React, { useEffect } from "react";
import TvCard from "./TvCard";
import { useDispatch, useSelector } from "react-redux";
import { setTvsPage } from "../../redux/actions";

const Tvs = () => {
  const tvs = useSelector((state) => state.tvs);
  const page = useSelector((state) => state.tvsPage);

  const dispatchPage = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const getPrevPage = () => {
    let currentPage = page;
    if (!currentPage <= 1) {
      currentPage = currentPage - 1;
      dispatchPage(setTvsPage(currentPage));
    }
  };

  const getNextPage = () => {
    let currentPage = page;
    currentPage = currentPage + 1;
    dispatchPage(setTvsPage(currentPage));
  };

  return (
    <section className="bg-black">
      <div className="container">
        <div className="d-flex justify-content-between align-aitems-center">
          <h1 className="text-center text-light py-5">Tv Shows</h1>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-success"
              disabled={page <= 1 ? true : false}
              onClick={getPrevPage}
            >
              Prev
            </button>
            <button className="btn btn-success ms-2" onClick={getNextPage}>
              Next
            </button>
          </div>
        </div>

        <div className="row py-4 rounded">
          {tvs?.map((tvData, index) => (
            <TvCard key={index} tv={tvData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tvs;
