import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrganizationContext } from "./organizationContext";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { organization, setOrganization } = useContext(OrganizationContext);
  const fetchMembers = () => {
    try {
      fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((response) => {
          if (response.status === 404) {
            setOrganization("lemoncode");
            throw new Error(
              `There was an error with the request, the organization ${organization} might not exist.`
            );
          }
          return response.json();
        })
        .then((json) => setMembers(json))
        .catch((error) => {
          alert(
            `There was an error with the request, the organization ${organization} might not exist.`
          );
        });
    } catch (error) {
      alert(
        `There was an error with the request, the organization ${organization} might not exist.`
      );
    }
  };

  React.useEffect(() => {
    fetchMembers();
  }, []);

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchMembers();
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <form onSubmit={handleNavigation}>
        <div>
          <label>Organization: </label>
          <input
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>

      <br />

      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/selection">Navigate to selection page</Link>
    </>
  );
};
