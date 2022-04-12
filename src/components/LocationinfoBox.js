const LocationinfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event location info:</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
        <li>
          Alert:
          <a href={info.alert[0].url} target="_blank" rel="noreferrer">
            <strong>{info.alert[0].url}</strong>
          </a>
        </li>
        <li>
          Date: <strong>{info.geometries[0].date}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationinfoBox;
