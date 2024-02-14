import './App.css';
import { Link } from 'react-router-dom';

const paths = [
  { url: '/accordion', displayName: 'Accordion' },
  { url: '/color-generator', displayName: 'Color Generator' },
];

function App() {
  return (
    <ol>
      {paths.map((e, i) => (
        <li key={i} className="mt-2 text-2xl font-semibold">
          <Link to={e.url} className=" text-slate-800">
            <span className="text-xl">{i + 1}.</span> {e.displayName}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default App;
