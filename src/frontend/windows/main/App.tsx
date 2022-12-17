import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/layout/sidebar/Sidebar';
import { routes } from './contants/routes';

const S_ApplicationWrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.screens.xl2};
`;

const S_FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <S_ApplicationWrapper>
      <S_FlexWrapper>
        <Sidebar />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </S_FlexWrapper>
    </S_ApplicationWrapper>
  );
}

export default App;
