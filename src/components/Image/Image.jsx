import PropTypes from 'prop-types';

export const Image = ({ urlImg, altText, ancho, alto }) => {
  return <img src={urlImg} alt={altText} width={ancho} height={alto} />;
};

Image.propTypes = {
  urlImg: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  ancho: PropTypes.number.isRequired,
  alto: PropTypes.number.isRequired
};
