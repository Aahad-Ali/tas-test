import React, { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

export const Home = () => {

  const [newData, setNewData] = useState([]);
  const [Search, setSearch] = useState("");

  let API = "https://jsonplaceholder.typicode.com/posts";
  const fetch1 = () => {
    fetch(API)
      .then((res) => res.json())
      .then((responce) => {
        setNewData(responce);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch1();
  }, []);

  return (
    <>
      <div className="mt-5 pt-5">
        <input
          onChange={(value) => setSearch(value.target.value)}
          placeholder="Search"
          type="text"
          className="form-control my-5"
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            {
              localStorage.clear();
              window.location.reload(true);
            }
          }}
        >
          <LogoutIcon /> log out
        </button>
        <div className="container">
          <div className="row">
            {newData
              .filter((filterValue) =>
                filterValue.title.toLowerCase().includes(Search.toLowerCase())
              )

              .map((data) => {
                return (
                  <div className="col-md-4">
                    <div
                      className="card"
                      style={{
                        width: "18rem",
                        height: "600px",
                        margin: "20px",
                      }}
                    >
                      <img
                        src="https://media.licdn.com/dms/image/D5603AQGdCXGNoAjCAg/profile-displayphoto-shrink_200_200/0/1702290181115?e=1707955200&v=beta&t=ImgoK1w9cC6X4mTrretWtHQ8u-p_Vx1hVWQfpn5CWMI"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.body}</p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
