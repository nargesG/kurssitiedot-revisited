const Total = ({ parts }) => {
  return (
    <p>
      <h3>
        total of{" "}
        {parts[0].exercises +
          parts[1].exercises +
          parts[2].exercises +
          parts[3].exercises}{" "}
        exercises
      </h3>
    </p>
  );
};

export default Total;
