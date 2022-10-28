import React from "react";
import { profile } from "../../Profile";
import Link from "../../Link";

function Links() {
  return (
    <div className="profile-body">
      {profile.map((profile) => {
        return (
          <Link
            key={Math.random() * 10}
            name={profile.name}
            link={profile.link}
            id={profile.id}
          />
        );
      })}
    </div>
  );
}

export default Links;
