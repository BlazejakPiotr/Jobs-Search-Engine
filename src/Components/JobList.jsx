import { Link } from "react-router-dom";

export default function JobList({ query }) {
  return (
    <ul>
      {query.data.map((job) => (
        <li key={job._id}>
          <h6>{job.title}</h6>
          <p>
            <Link to={`/company-detail/${job.company_name}`}>
              {job.company_name}
            </Link>
          </p>
        </li>
      ))}
    </ul>
  );
}
