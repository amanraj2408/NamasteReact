import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      {error && (
        <pre className="mt-4 text-sm text-red-600">{String(error.status || error.message)}</pre>
      )}
    </div>
  );
};

export default ErrorPage;
