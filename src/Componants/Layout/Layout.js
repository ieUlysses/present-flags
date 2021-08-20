import React from "react"

export default function (props) {

    return (


        <div className=" bg-info w-100 h-100 bg-dark overflow-hidden rounded-pill  text-center text-light " >
            <img src={props.flag} className="w-100 h-50">
            </img>
            <div className="container w-75">
                <div className="row">
                    <h2 className="text-center">{props.name}</h2>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h5>Language</h5>
                    </div>
                    <div className="col-6">
                        <h5>
                            {props.languages}
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h5>Currency</h5>
                    </div>
                    <div className="col-6">
                        <h5>
                            {props.currency}
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h5>Region</h5>
                    </div>
                    <div className="col-6">
                        <h5>
                            {props.region}
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h5>Capital City</h5>
                    </div>
                    <div className="col-6">
                        <h5>{props.capital}</h5>
                    </div>
                </div>
            </div>


        </div>



    )
}