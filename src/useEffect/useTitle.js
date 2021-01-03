import { useState, useEffect } from 'react';

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  //componen가 mount되면 updateTitle이 실행된다.
  //title을 두 번째 인자로 넘겼기 때문에 title이 update되었을 때도 updateTitle이 실행된다.
  useEffect(updateTitle, [title]);
  return setTitle;
};
