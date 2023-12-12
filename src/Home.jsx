import React, { useEffect, useState } from 'react'

export const Home = () => {

    const [data, setData] = useState([]);
    const [Search, setSearch] = useState('');


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "GET",
            headers: { "content-type": "application/json" },
        }
        ).then(res => {
            return res.json();
        }).then(responce => {
            setData(responce);
        })


    })

    return (
        <>
            <div className="mt-5 pt-5">
                <input
                    onChange={(value) => setSearch(value.target.value)}
                    placeholder="Search"
                    type="text"
                    className="form-control my-5"
                />
                <div className="container">
                    <div className="row">
                        {data.filter((filterValue) => filterValue.title.toLowerCase().includes(Search.toLowerCase()))

                            .map((data) => {
                                return (
                                    <div className="col-md-4">
                                        <div className="card" style={{ width: "18rem", height: "600px", margin: "20px" }}>
                                            <img src='https://media.licdn.com/dms/image/D5603AQGdCXGNoAjCAg/profile-displayphoto-shrink_200_200/0/1702290181115?e=1707955200&v=beta&t=ImgoK1w9cC6X4mTrretWtHQ8u-p_Vx1hVWQfpn5CWMI' className="card-img-top" alt="..." />
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
    )
}
