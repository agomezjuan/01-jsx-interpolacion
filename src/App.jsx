import './App.css';
import { Image } from './components/Image/Image';
import { Paragraph } from './components/Paragraph/Paragraph';
import { SubTitle } from './components/SubTitle/SubTitle';
import { Title } from './components/Title/Title';

const imagen = 'http://unsplash.it/200/200';

const school = 'Rock{theCode}';
const chapters = 6;
const isAwesome = true;
const technologies = ['JavaScript', 'React', 'Node'];
const profile = {
  job: 'Web developer',
  description: '¡Me encanta la programación y el desarrollo web!'
};

function App() {
  return (
    <div>
      <Title texto={school} />
      <h1>{school}</h1>
      <SubTitle texto="Lorem ipsum dolor." />
      <Paragraph texto={chapters} />
      <p>
        Lo que estoy aprendiendo en {school} está siendo {isAwesome ? 'increible' : 'top'}
      </p>
      <Image urlImg={imagen} altText="Imagen de prueba" ancho={200} alto={200} />
      <div className="container">
        <p>Esto es un parrafo dentro del div</p>
      </div>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>Aprendemos a usar {technology}</li>
        ))}
      </ul>

      <h3>
        Quiero ser {profile.job} y {profile.description}.
      </h3>
    </div>
  );
}

export default App;
