import Alert from 'components/Alert/Alert';
import RequireCharacter from 'components/RequireCharacter/RequireCharacter';
import SceneTransition from 'components/SceneTransition/SceneTransition';
import emitter, { eventName } from 'emitter';
import useSceneTransition from 'hooks/useSceneTransition';
import useWindowSize from 'hooks/useWindowSize';
import ErrorPage from 'pages/ErrorPage';
import GamePage from 'pages/GamePage';
import LoginPage from 'pages/LoginPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { isSceneTransition, sceneTransitionHandler } =
    useSceneTransition(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    emitter.on(
      eventName.sceneTransition,
      sceneTransitionHandler,
    );
    return () => {
      emitter.off(
        eventName.sceneTransition,
        sceneTransitionHandler,
      );
    };
  }, [sceneTransitionHandler]);

  if (windowSize === 'mobile') {
    return (
      <div className='flex h-screen w-full flex-col items-center justify-center bg-black p-4 text-xl text-white'>
        <h2 className='mb-4 text-start'>親愛的玩家您好:</h2>
        <p>
          本專案體驗請使用桌上型電腦操作，造成不便敬請見諒。
        </p>
      </div>
    );
  }

  return (
    <>
      <Alert />
      <SceneTransition isShow={isSceneTransition} />
      <Routes>
        <Route
          path='/'
          element={
            <RequireCharacter>
              <GamePage />
            </RequireCharacter>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
