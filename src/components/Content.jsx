import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} count={parts[0].exercises} />
      <Part name={parts[1].name} count={parts[1].exercises} />
      <Part name={parts[2].name} count={parts[2].exercises} />
      <Part name={parts[3].name} count={parts[3].exercises} />
    </div>
  );
};

export default Content;
