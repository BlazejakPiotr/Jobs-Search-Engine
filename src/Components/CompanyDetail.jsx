import { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobList from "./JobList";

export default function CompanyDetail() {
  const { company } = useParams();
  const [companyOffers, setCompanyOffers] = useState({ data: [] });

  const fetchCompany = async () => {
    try {
      let res = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?company=" + company
      );
      if (res.ok) {
        let companyOffers = await res.json();
        setCompanyOffers(companyOffers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  return (
    <>
      <h6 className="my-3">
        All job offers from {company} ({companyOffers.data.length})
      </h6>
      <ul>
        {companyOffers.data.map((job) => {
          return <JobList job={job} key={job._id} />;
        })}
      </ul>
    </>
  );
}
