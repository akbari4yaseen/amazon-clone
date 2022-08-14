import "./pageNotFound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <main className="page__not-found">
      <h1>Error 404</h1>
      <h3>Page not found!</h3>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
    </main>
  );
};

export default PageNotFound;
