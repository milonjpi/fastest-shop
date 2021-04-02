import React from "react";

const Search = () => {
  return (
      <div className="col-md-6 my-5 mx-auto">
          <div className="input-group mb-3">
              <input className="form-control" type="text"/>
              <div className="input-group-append">
                    <button className="btn btn-success">Search</button>
              </div>
          </div>
      </div>

  );
};

export default Search;
