import React from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesDetail.css";

interface MemberDetailEntity {
  avatar_url: string;
  name: string;
  id: string;
  login: string;
  bio: string;
}

const defaultMemberDetailEntity = () => ({
  avatar_url: "",
  name: "",
  id: "",
  login: "",
  bio: "",
});

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    defaultMemberDetailEntity()
  );
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <>
      <h2>Hello from Detail page</h2>
      <div className="container">
        <img className="avatar" src={member.avatar_url} />
        <div className="info">
          <p>
            <strong>Name</strong> {member.name}
          </p>
          <p>
            <strong>ID</strong> {member.id}
          </p>
          <p>
            <strong>Login</strong> {member.login}
          </p>
          <p>
            <strong>Biography</strong> {member.bio}
          </p>
        </div>
      </div>

      <Link to="/list">Back to list page</Link>
    </>
  );
};
