import {Link} from 'react-router-dom';

export default function Root(props) {
  return (
    <nav style={{fontSize: "25px"}} >
      <a href="angular">Go to Angular app</a>
      <a href="react" style={{marginLeft: '20px'}}>Go to React app</a>
    </nav>
  );
}
