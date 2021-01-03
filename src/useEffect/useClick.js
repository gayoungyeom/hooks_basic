import { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
  //   if (typeof onClick !== 'function') {
  //     return;
  //   }
  const element = useRef(); //current 속성을 가진 객체 반환해 줌
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      //정리
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
};
