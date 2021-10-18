import { useParams } from "react-router";

export default function CompanyDetail() {
  const { company } = useParams();

  console.log(company);
  return company;
}
