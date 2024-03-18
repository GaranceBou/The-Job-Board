const Job = (props) => {
  return (
    <div className="job">
      <p className="name">{props.title}</p>
      <p className="desc">
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Job;
