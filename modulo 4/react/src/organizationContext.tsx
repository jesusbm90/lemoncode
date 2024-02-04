import React, { PropsWithChildren, createContext, useState } from "react";

interface OrganizationModel {
  organization: string;
  setOrganization: (org: string) => void;
}

export const OrganizationContext = createContext<OrganizationModel>({
  organization: "lemoncode",
  setOrganization: () => {},
});

export const OrganizationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [organization, setOrganization] = useState("lemoncode");

  return (
    <OrganizationContext.Provider value={{ organization, setOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};
