import { OutputStyled, TopBox, BottomBox } from './OutputStyled';
import PropTypes from 'prop-types';

const Output = ({ stringMain, stringPrev }) => {
  return (
    <OutputStyled>
      <TopBox fontSize={stringPrev.length}>{stringPrev}</TopBox>
      <BottomBox fontSize={stringMain.length}>{stringMain}</BottomBox>
    </OutputStyled>
  );
};

Output.propTypes = {
  stringPrev: PropTypes.string,
  stringMain: PropTypes.string,
};

Output.defaultProps = {
  stringPrev: '',
  stringMain: '',
};

export default Output;
