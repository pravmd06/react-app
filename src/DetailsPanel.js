import styled from 'styled-components';
import * as mediaQueries from './media-queries';

const DetailsPanel = styled.div`
  ${mediaQueries.large} {
    padding: 0 50px;
  }
`;

export default DetailsPanel;
