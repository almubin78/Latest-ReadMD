
import { Link } from 'react-router-dom'; // Use Link if you're using React Router

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/PtjDMTf/png-clipart-http-404-user-interface-design-design-purple-text-thumbnail.png')" }}>
      <div className="text-white text-center p-8">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg mb-8">Oops! The page you are looking for might be under construction.</p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
// but try to edit background image