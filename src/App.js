import React, { useEffect, useState } from "react"

import axios from "axios"
import Layout from "./Componants/Layout/Layout"
import "./App.css"
export default function () {

  const [allCountries, setallCountries] = useState([])

  let firstPull = []


  useEffect(async () => {
    try {
      const url = `https://restcountries.eu/rest/v2/all`

      const res = await axios.get(url)

      firstPull = (res.data)

      let preCountries = (firstPull.map(country => (
        <Layout name={country.name} flag={country.flag} region={country.region} capital={country.capital} currency={country.currency} /*languages={country.languages.name} */ />
      )))

      setallCountries(preCountries)

    } catch (error) {
      console.log(error)
    }
  }, [allCountries])
  return (
    <>
      <button onClick={() => { setallCountries(firstPull.slice(0, 4)) }}>
        Load 4 Countries
      </button>
      <div className="container  wrapper">

        {allCountries}
      </div>
    </>
  )
}