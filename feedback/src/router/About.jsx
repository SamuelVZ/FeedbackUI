import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function About() {
  return (
    <div>
      <Card>
        <h1>About this project</h1>
        <p>This is a React app to leave feedback</p>
        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </Card>
    </div>
  );
}
export default About;
