import estilos from './SubTitle.module.css';

// eslint-disable-next-line react/prop-types
export const SubTitle = ({ texto }) => {
  return <h2 className={estilos.parrafo}>{texto}</h2>;
};
