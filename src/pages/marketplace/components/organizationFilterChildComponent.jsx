import { useEffect, useState } from "react";

export default function OrganizationFilterChildComponent() {
  const [selectedOrganizations, setSelectedOrganizations] = useState({});

  useEffect(() => {
    //TODO: fetch data from the api callback to set
    //the available organizations to fetch and to filter out.
    setSelectedOrganizations({ NASA: false, FBI: false, JnJ: false });
  }, []);

  /**
   * TODO: the toggle data in here must be connected to
   * the state management.
   */
  const toggleSelectedOrganization = (organization) => {
    //the bool of the checked org.
    const organizationBoolean = selectedOrganizations[organization];
    //the map of orgs.
    const updatedOrganizations= Object.assign({},selectedOrganizations);
    updatedOrganizations[organization] = !organizationBoolean;
    // let tmpOrganizations = selectedOrganizations;
    // tmpOrganizations.set({ organization: !organizationBoolean });
    console.log("tooggling the org: "+organization)


    setSelectedOrganizations(updatedOrganizations);
    {
      Object.key(selectedOrganizations).forEach((key) => {
        console.log(key);

      });
    }
  };

  /**Checkbox setter */
  const checkboxes = () => {
    let newCheckboxes = [];
    {
      Object.keys(selectedOrganizations).forEach((key) => {
        newCheckboxes.push(
          <Checkbox
            label={key}
            value={selectedOrganizations[key]}
            onChange={() => {
              toggleSelectedOrganization(key);
            }}
          />
        );
      });
    }
    return newCheckboxes;
  };

  return (
    <div className="flex flex-col">
      {/* {Object.keys(selectedOrganizations).forEach((key) => {
        console.log(key);
      })} */}
      {checkboxes()}
    </div>
  );
}

function Checkbox({ label, value, onChange }) {
  return (
    <div className="flex space-x-3">
      <input type="checkbox" checked={value} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
}
