import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <>
      <div className="flex flex-wrap  gap-2 pt-5 mx-auto justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Income</h2>
            <div className="card-actions">
              <Link to="/income" className="btn btn-primary">
                Go to Income Page
              </Link>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Expense</h2>

            <div className="card-actions">
              <Link to="/expenses" className="btn btn-primary">
                Go to Expense Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultPage;
