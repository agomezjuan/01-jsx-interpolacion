import estilo from './Paragraph.module.css';

// eslint-disable-next-line react/prop-types
export const Paragraph = ({ texto }) => {
  return <p className={estilo.parrafo}>{texto}</p>;
};
