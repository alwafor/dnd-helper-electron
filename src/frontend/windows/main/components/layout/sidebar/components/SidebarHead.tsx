import { sFlexCenter } from '@/frontend/assets/styles/common-styles';
import { theme } from '@/frontend/assets/styles/theme';
import { css } from '@emotion/css';

const sHead = css`
  font-family: ${theme.font.fredericka};
  font-size: 32px;

  height: 64px;

  ${sFlexCenter}

  border: 1px solid black;
  border-right: none;
`;

const SidebarHead = () => {
  return <div className={sHead}>DnD Helper</div>;
};

export default SidebarHead;
