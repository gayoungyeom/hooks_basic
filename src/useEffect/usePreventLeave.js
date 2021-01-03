export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ''; //chrome에서 필요한 설정
  };
  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener);
  };
  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener);
  };
  return { enablePrevent, disablePrevent };
};
