import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import FavoritesIndicator from "./FavoritesIndicator";
import JobList from "./JobList";
import { CounterComponent } from "./Playground/CounterComponent";
import { fetchData } from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Home({ setData, query, loadingData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const data = useSelector((state) => state.data.data);
  // const isLoading = useSelector((state) => state.data.isLoading);

  // const fetchOffers = async () => {
  //   try {
  //     let res = await fetch(
  //       `https://strive-jobs-api.herokuapp.com/jobs?limit=25`
  //     );
  //     if (res.ok) {
  //       let offers = await res.json();
  //       setData(offers);
  //       loadingData();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {data === undefined ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
          <p>We are loading job offers. Please wait.</p>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="my-3">
              Results for {query.query}({data.length})
            </h6>
            {/* <CounterComponent /> */}
            <FavoritesIndicator />
          </div>
          <ul>
            {data.map((job) => {
              return <JobList job={job} key={job._id} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
}
