export function JsxLoop() {
  const mySet = new Set(["Task 1", "Task 2", "Task 3"]);
  const myArray = Array.from(mySet);

  return (
    <ul>
      {[1, 2, 3].map((eachElement, index) => {
        const content = 100 + eachElement;
        return <Entry key={index} index={content}></Entry>;
      })}
    </ul>
  );
}

interface EntryProps {
  index?: number;
}

function Entry(props: EntryProps) {
  return <li>{props.index}</li>;
}
