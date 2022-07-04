import AsyncSelect from "react-select/async";

const LocationSelector = ({ handleChange, value, isMulti }) => {
  function stripExcessFields(l) {
    return l.map((f) => {
      return { id: f["id"], place_name: f["place_name"] };
    });
  }
  const loadLocations = (inputValue) => {
    // My Token
    // const token =
    //   "pk.eyJ1IjoidGFtbWVyIiwiYSI6ImNsNGxhNWQ5ZzBta3Yzam4wbnhsamxwMDQifQ.-v9O9EFRFW6Pz89tt8XSXw";

    // Test Token
    const token =
      "pk.eyJ1Ijoib3Blbi1hZGRyZXNzZXMiLCJhIjoiSGx0a1B1NCJ9.2O1QelK6jnFXfDznC2pNSw";

    return fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?proximity=ip&types=country%2Cregion%2Cdistrict%2Clocality%2Cplace&access_token=${token}`
    )
      .then((res) => res.json())
      .then((j) => stripExcessFields(j["features"]));
  };

  return (
    <>
      <AsyncSelect
        isMulti={isMulti}
        cacheOptions
        getOptionLabel={(e) => e["place_name"]}
        getOptionValue={(e) => e["id"]}
        loadOptions={loadLocations}
        closeMenuOnSelect={true}
        placeholder={"Type a location"}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default LocationSelector;
