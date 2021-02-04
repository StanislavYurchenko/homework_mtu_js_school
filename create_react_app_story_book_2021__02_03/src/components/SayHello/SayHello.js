import PropTypes from 'prop-types';
import { Title } from './SayHelloStyled';

function SayHello({ name, color }) {
  return <Title color={color}>Hello {name}!</Title>;
}

SayHello.propTypes = {
  name: PropTypes.string,
};

SayHello.defaultProps = {
  name: 'User',
};

export default SayHello;
