export default function JobList({ query }) {
  return (
    <ul>
      {query.data.map((job) => (
        <li key={job._id}>{job.title}</li>
      ))}
    </ul>
  );
}
