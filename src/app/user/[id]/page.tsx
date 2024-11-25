'use client'
import { useParams } from "next/navigation";

const UserPage: React.FC = () => {
  const params = useParams()
  const { id } = params;
  return <h1>User ID: {id}</h1>;
};
export default UserPage;
