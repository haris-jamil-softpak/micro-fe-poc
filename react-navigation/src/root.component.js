import {Link} from 'react-router-dom';

export default function Root(props) {
  return (
    <nav>
      <Link to="/angular">Angular App</Link>
      <Link to="/react">React App</Link>
    </nav>
  );
}
