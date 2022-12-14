import { useCallback, useEffect } from 'react';
const keyCodeMap = {
  ArrowUp: 'up',
  KeyW: 'up',
  ArrowDown: 'down',
  KeyS: 'down',
  ArrowLeft: 'left',
  KeyA: 'left',
  ArrowRight: 'right',
  KeyD: 'right',
};
const directions = [];
const useKeyPressDirectionListener = (isEnabled) => {
  const keyDownHandler = useCallback(
    (event) => {
      if (!isEnabled) return;
      const dir = keyCodeMap[event.code];
      if (dir && directions.indexOf(dir) === -1) {
        directions.unshift(dir);
      }
    },
    [isEnabled],
  );

  const keyUpHandler = useCallback(
    (event) => {
      if (!isEnabled) return;
      const dir = keyCodeMap[event.code];
      const index = directions.indexOf(dir);
      if (index > -1) {
        directions.splice(index, 1);
      }
    },
    [isEnabled],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [keyDownHandler, keyUpHandler]);
  return directions;
};

export default useKeyPressDirectionListener;
