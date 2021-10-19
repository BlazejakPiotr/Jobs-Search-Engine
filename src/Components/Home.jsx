import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import JobList from "./JobList";

export default function Home({ data, setData, query, loadingData, isLoading }) {
  useEffect(() => {
    fetchOffers();
  }, []);
  const fetchOffers = async () => {
    try {
      let res = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?limit=25`
      );
      if (res.ok) {
        let offers = await res.json();
        setData(offers);
        loadingData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
          <p>We are loading job offers. Please wait.</p>
        </div>
      ) : (
        <div>
          <h6 className="my-3">
            Results for {query.query}({data.data.length})
          </h6>
          <ul>
            {data.data.map((job) => {
              return <JobList job={job} key={job._id} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
}
