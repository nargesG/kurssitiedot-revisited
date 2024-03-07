const Total = ({ parts }) => {
  const total = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises;
  }, 0);
  return <h3>total of {total} exercises</h3>;
};

export default Total;
