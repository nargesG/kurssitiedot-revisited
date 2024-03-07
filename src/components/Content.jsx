import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} count={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
