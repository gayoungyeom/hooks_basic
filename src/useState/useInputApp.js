import { useInput } from './useState/useInput';

//Hooks을 통해 이벤트를 다른 함수에서 처리할 수 있다.
function App() {
  const maxLen = (value) => value.length < 10;

  const name = useInput('Mr.', maxLen);
  console.log(name);
  return (
    <>
      <h1>Hello</h1>
      <input placeholder='Name' {...name} />
    </>
  );
}

export default App;
