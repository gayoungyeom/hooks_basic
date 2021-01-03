import { useTabs } from './useState/useTabs';

const content = [
  { tab: 'Section 1', content: "I'm the content of the Section 1" },
  { tab: 'Section 2', content: "I'm the content of the Section 2" },
];

//Hooks을 통해 이벤트를 다른 함수에서 처리할 수 있다.
function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <>
      <h2>Hello</h2>
      {content.map((section, index) => (
        <button
          key={section.tab}
          onClick={() => {
            changeItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
}

export default App;
