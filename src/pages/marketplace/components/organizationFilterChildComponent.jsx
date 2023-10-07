import { useEffect, useState } from "react";

export default function OrganizationFilterChildComponent() {
  //todo: add checkbox.
  const [selectedOrganizations, setSelectedOrganizations] = useState({});

  //TODO
  useEffect( () => {
    //TODO: fetch data from the api callback to set
    //the available organizations to fetch and to filter out.
    setSelectedOrganizations({ org1: false, org3: false, org2: false });
  },[]);

  const toggleSelectedOrganization = (organization) => {
    const organizationBoolean = selectedOrganizations[organization];
    setSelectedOrganizations({ organization: !organizationBoolean });
  };

  return (
    <div className="flex flex-col">
      {Object.entries(selectedOrganizations).forEach((key,value) => {
        console.log(key);
      })}
      <Checkbox
        label={"s"}
        value={true}
        onChange={() => {
          toggleSelectedOrganization();
        }}
      />
    </div>
  );
}

function Checkbox({ label, value, onChange }) {
  return (
    <label>
        <div>label</div>
      <input type="checkbox" checked={value} onChange={onChange} />
    </label>
  );
}
