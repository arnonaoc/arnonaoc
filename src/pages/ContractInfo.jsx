import React from 'react'
import Share from "./Share";
import { useBetween } from 'use-between';
import 'antd/dist/antd.css';
import { useState } from "react"
import axios from "axios";
import { Spin } from 'antd';



function ContractInfo() {
  const { bookingInfo } = useBetween(Share)
  const { resBooking, setResBooking } = useBetween(Share)
  // console.log(resBooking.recordLocator);
  


const showPNR = resBooking.recordLocator
  // console.log(ObjBookingInfo);
  // console.log(ObjBookingInfo);
  // const Option = Select.Option;

  const DepFlight = bookingInfo[0].depFlight[0]
  // console.log(DepFlight);
  const RetFlight = bookingInfo[0].retFlight[0]

  const svc_class = bookingInfo[0].svc_class
  const noOfAdult = bookingInfo[0].noOfAdult
  const noOfChildren = bookingInfo[0].noOfChildren
  const noOfInfants = bookingInfo[0].noOfInfants
  // console.log(noOfAdult);
  // console.log(noOfChildren);
  // console.log(noOfInfants);
  // console.log(svc_class);

  const handleEvent = (inputTitle, inputFirstName, inputMiddlename, inputLastName, inputEmail, inputTelNo, CountryCode, noOfAdult, noOfChildren, noOfInfants, svc_class, DepFlight, RetFlight) => {

    axios.post("http://localhost:3001/accesstoken", { //Get token จาก server (localhost:3001)
    }).then(res => {
      console.log(res.data.accessToken);
      axios.post("http://localhost:3001/bookingInfo", {
        body: ObjBookingInfo,
        accessToken: res.data.accessToken
      }, {
        headers: res.data.accessToken
      }).then(dataSearch => {
        console.log(dataSearch.data);
        setResBooking(dataSearch.data);
      })
    }, 1500)

    const ObjBookingInfo = (Object.values([{

      "noOfAdults": noOfAdult,
      "noOfChildren": noOfChildren,
      "noOfInfants": noOfInfants,
      "svc_class": svc_class,
      "depFlight": [
        {
          "depCity": {
            "code": DepFlight.depCity.code,
            "name": DepFlight.depCity.name
          },
          "arrCity": {
            "code": DepFlight.arrCity.code,
            "name": DepFlight.arrCity.name
          },
          "airline": {
            "code": DepFlight.airline.code,
            "name": DepFlight.airline.name
          },
          "flightNumber": DepFlight.flightNumber,
          "operatedAirline": {
            "code": DepFlight.operatedAirline.code,
            "name": DepFlight.operatedAirline.name
          },
          "departureDateTime": DepFlight.departureDateTime,
          "arrivalDateTime": DepFlight.arrivalDateTime,
          "rbd": "V",
          "Seq": DepFlight.Seq
        }
      ],
      "retFlight": [
        {
          "depCity": {
            "code": RetFlight.depCity.code,
            "name": RetFlight.depCity.name
          },
          "arrCity": {
            "code": RetFlight.arrCity.code,
            "name": RetFlight.arrCity.name
          },
          "airline": {
            "code": RetFlight.airline.code,
            "name": RetFlight.airline.name
          },
          "flightNumber": RetFlight.flightNumber,
          "operatedAirline": {
            "code": RetFlight.operatedAirline.code,
            "name": RetFlight.operatedAirline.name
          },
          "departureDateTime": RetFlight.departureDateTime,
          "arrivalDateTime": RetFlight.arrivalDateTime,
          "rbd": "V",
          "Seq": RetFlight.Seq
        }
      ],
      "contactInfo": {
        "title": inputTitle,
              "firstname": inputFirstName,
              "middlename": inputMiddlename,
              "lastname": inputLastName,
              "email": inputEmail,
              "telNo": inputTelNo,
              "countryCode": CountryCode
      },
      "adtPaxs": [
        {
          "id": 1,
          "paxType": "ADT",
          "title": "MR",
          "firstname": "ning",
          "middlename": null,
          "lastname": "aisoft",
          "birthday": "1988-01-01T00:00:00",
          "email": null,
          "telNo": null,
          "passportNumber": null,
          "passportIssuingDate": "0001-01-01T00:00:00",
          "passportExpiryDate": "0001-01-01T00:00:00",
          "passportIssuingCountry": null,
          "passportNationality": null,
          "frequencyFlyerAirline": null,
          "frequencyFlyerNumber": null,
          "seatRequest": null,
          "mealRequest": null,
          "travelWithAdultID": 0,
          "netRefund": 0.0,
          "agentRefund": 0.0,
          "refundAmount": 0.0,
          "tickNoRefund": null,
          "remarkRefund": null,
          "StatusRefund": false,
          "netReissue": 0.0,
          "agentReissue": 0.0,
          "reissueSelling": 0.0,
          "tickNoReissueOld": null,
          "tickNoReissueNew": null,
          "remarkReissue": null,
          "StatusReissue": false
        }
      ],
      "chdPaxs": [
        {
          "id": 2,
          "paxType": "CHD",
          "title": "MSTR",
          "firstname": "nina",
          "middlename": null,
          "lastname": "aisoft",
          "birthday": "2015-05-20T00:00:00",
          "email": null,
          "telNo": null,
          "passportNumber": null,
          "passportIssuingDate": "0001-01-01T00:00:00",
          "passportExpiryDate": "0001-01-01T00:00:00",
          "passportIssuingCountry": null,
          "passportNationality": null,
          "frequencyFlyerAirline": null,
          "frequencyFlyerNumber": null,
          "seatRequest": null,
          "mealRequest": null,
          "travelWithAdultID": 1,
          "netRefund": 0.0,
          "agentRefund": 0.0,
          "refundAmount": 0.0,
          "tickNoRefund": null,
          "remarkRefund": null,
          "StatusRefund": false,
          "netReissue": 0.0,
          "agentReissue": 0.0,
          "reissueSelling": 0.0,
          "tickNoReissueOld": null,
          "tickNoReissueNew": null,
          "remarkReissue": null,
          "StatusReissue": false
        }
      ],
      "infPaxs": [
        {
          "id": 3,
          "paxType": "INF",
          "title": "MSTR",
          "firstname": "non",
          "middlename": null,
          "lastname": "aisoft",
          "birthday": "2021-02-06T00:00:00",
          "email": null,
          "telNo": null,
          "passportNumber": null,
          "passportIssuingDate": "0001-01-01T00:00:00",
          "passportExpiryDate": "0001-01-01T00:00:00",
          "passportIssuingCountry": null,
          "passportNationality": null,
          "frequencyFlyerAirline": null,
          "frequencyFlyerNumber": null,
          "seatRequest": null,
          "mealRequest": null,
          "travelWithAdultID": 0,
          "netRefund": 0.0,
          "agentRefund": 0.0,
          "refundAmount": 0.0,
          "tickNoRefund": null,
          "remarkRefund": null,
          "StatusRefund": false,
          "netReissue": 0.0,
          "agentReissue": 0.0,
          "reissueSelling": 0.0,
          "tickNoReissueOld": null,
          "tickNoReissueNew": null,
          "remarkReissue": null,
          "StatusReissue": false
        }
      ],
      "languageCode": "th"
    }]))
    console.log("Confirm Booking", ObjBookingInfo);
  }

  // Hard Code
  //     const ObjBookingInfo = (Object.values([{
  //       "pgSearchOID": "f45c364d-70dd-486c-8527-40f68f6626da",
  //       "noOfAdults": 1,
  //       "noOfChildren": 1,
  //       "noOfInfants": 1,
  //       "svc_class": "Y",
  //       "depFlight": [
  //         {
  //           "depCity": {
  //             "code": "BKK",
  //             "name": "Suvarnabhumi, Bangkok"
  //           },
  //           "arrCity": {
  //             "code": "CNX",
  //             "name": "Chiang Mai Int'l, เชียงใหม่"
  //           },
  //           "airline": {
  //             "code": "TG",
  //             "name": "Thai Airways Intl"
  //           },
  //           "flightNumber": "2102",
  //           "operatedAirline": {
  //             "code": "WE",
  //             "name": "Thai Smile Airways"
  //           },
  //           "departureDateTime": "2022-09-25T07:25:00",
  //           "arrivalDateTime": "2022-09-25T08:45:00",      
  //           "rbd": "V",      
  //           "Seq": 1
  //         }
  //       ],
  //       "retFlight": [
  //         {
  //           "depCity": {
  //             "code": "CNX",
  //             "name": "Narita, Tokyo"
  //           },
  //           "arrCity": {
  //             "code": "BKK",
  //             "name": "Suvarnabhumi, Bangkok"
  //           },
  //           "airline": {
  //             "code": "WE",
  //             "name": "Thai Smile Airways"
  //           },
  //           "flightNumber": "103",
  //           "operatedAirline": {
  //             "code": "WE",
  //             "name": "Thai Smile Airways"
  //           },
  //           "departureDateTime": "2022-09-27T09:25:00",
  //           "arrivalDateTime": "2022-09-27T10:45:00",      
  //           "rbd": "V",
  //           "Seq": 1
  //         }
  //       ],
  //      "contactInfo": {
  //       "title": inputTitle,
  //       "firstname": inputFirstName,
  //       "middlename": inputMiddlename,
  //       "lastname": inputLastName,
  //       "email": inputEmail,
  //       "telNo": inputTelNo,
  //       "countryCode": CountryCode
  //     },
  //     "adtPaxs": [
  //       {
  //         "id": 1,
  //         "paxType": "ADT",
  //         "title": "MR",
  //         "firstname": "ning",
  //         "middlename": null,
  //         "lastname": "aisoft",
  //         "birthday": "1988-01-01T00:00:00",
  //         "email": null,
  //         "telNo": null,
  //         "passportNumber": null,
  //         "passportIssuingDate": "0001-01-01T00:00:00",
  //         "passportExpiryDate": "0001-01-01T00:00:00",
  //         "passportIssuingCountry": null,
  //         "passportNationality": null,
  //         "frequencyFlyerAirline": null,
  //         "frequencyFlyerNumber": null,
  //         "seatRequest": null,
  //         "mealRequest": null,
  //         "travelWithAdultID": 0,
  //         "netRefund": 0.0,
  //         "agentRefund": 0.0,
  //         "refundAmount": 0.0,
  //         "tickNoRefund": null,
  //         "remarkRefund": null,
  //         "StatusRefund": false,
  //         "netReissue": 0.0,
  //         "agentReissue": 0.0,
  //         "reissueSelling": 0.0,
  //         "tickNoReissueOld": null,
  //         "tickNoReissueNew": null,
  //         "remarkReissue": null,
  //         "StatusReissue": false
  //       }
  //     ],
  //     "chdPaxs": [
  //       {
  //         "id": 2,
  //         "paxType": "CHD",
  //         "title": "MSTR",
  //         "firstname": "nina",
  //         "middlename": null,
  //         "lastname": "aisoft",
  //         "birthday": "2015-05-20T00:00:00",
  //         "email": null,
  //         "telNo": null,
  //         "passportNumber": null,
  //         "passportIssuingDate": "0001-01-01T00:00:00",
  //         "passportExpiryDate": "0001-01-01T00:00:00",
  //         "passportIssuingCountry": null,
  //         "passportNationality": null,
  //         "frequencyFlyerAirline": null,
  //         "frequencyFlyerNumber": null,
  //         "seatRequest": null,
  //         "mealRequest": null,
  //         "travelWithAdultID": 1,
  //         "netRefund": 0.0,
  //         "agentRefund": 0.0,
  //         "refundAmount": 0.0,
  //         "tickNoRefund": null,
  //         "remarkRefund": null,
  //         "StatusRefund": false,
  //         "netReissue": 0.0,
  //         "agentReissue": 0.0,
  //         "reissueSelling": 0.0,
  //         "tickNoReissueOld": null,
  //         "tickNoReissueNew": null,
  //         "remarkReissue": null,
  //         "StatusReissue": false
  //       }
  //     ],
  //     "infPaxs": [
  //       {
  //         "id": 3,
  //         "paxType": "INF",
  //         "title": "MSTR",
  //         "firstname": "non",
  //         "middlename": null,
  //         "lastname": "aisoft",
  //         "birthday": "2021-02-06T00:00:00",
  //         "email": null,
  //         "telNo": null,
  //         "passportNumber": null,
  //         "passportIssuingDate": "0001-01-01T00:00:00",
  //         "passportExpiryDate": "0001-01-01T00:00:00",
  //         "passportIssuingCountry": null,
  //         "passportNationality": null,
  //         "frequencyFlyerAirline": null,
  //         "frequencyFlyerNumber": null,
  //         "seatRequest": null,
  //         "mealRequest": null,
  //         "travelWithAdultID": 0,
  //         "netRefund": 0.0,
  //         "agentRefund": 0.0,
  //         "refundAmount": 0.0,
  //         "tickNoRefund": null,
  //         "remarkRefund": null,
  //         "StatusRefund": false,
  //         "netReissue": 0.0,
  //         "agentReissue": 0.0,
  //         "reissueSelling": 0.0,
  //         "tickNoReissueOld": null,
  //         "tickNoReissueNew": null,
  //         "remarkReissue": null,
  //         "StatusReissue": false
  //       }
  //     ],
  //     "languageCode":CountryCode
  //   }

  //   ]))
  //   console.log("Show", ObjBookingInfo);
  // };

  const [inputTitle, setInputTitle] = useState("");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputMiddlename, setInputMiddlename] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTelNo, setInputTelNo] = useState("");
  const [CountryCode, setCountryCode] = useState("");



  const onChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const onChangeFirstName = (e) => {
    setInputFirstName(e.target.value);
  };

  const onChangeMiddlename = (e) => {
    setInputMiddlename(e.target.value);
  };

  const onChangeLastName = (e) => {
    setInputLastName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const onChangeTelNo = (e) => {
    setInputTelNo(e.target.value);
  };

  const onChangeCountryCode = (e) => {
    setCountryCode(e.target.value);
  };

  return (

    <>
      <div>
        <h3>DEPARTURE FLIGHT</h3>
      </div>

      <div>
      {/* "noOfAdults": {noOfAdult} <br></br>
      "noOfChildren": {noOfChildren} <br></br>
      "noOfInfants": {noOfInfants} <br></br> */}
      Departure Code : {DepFlight.depCity.code} <br></br>
      Departure Name : {DepFlight.depCity.name} <br></br>
      Arrival Code : {DepFlight.arrCity.code} <br></br>
      Arrival Name : {DepFlight.arrCity.name}  <br></br>
      Airline Code : {DepFlight.airline.code} <br></br>
      Airline Name: {DepFlight.airline.name} <br></br>
      Flight No. : {DepFlight.flightNumber} <br></br>
      Date Travel : {DepFlight.longDate} <br></br>
      Departure Time : {DepFlight.depTime} <br></br>
      Arrival Time : {DepFlight.arrTime} 
      </div>

      <hr></hr>

      <div>
        <h3>RETURN FLIGHT</h3>
      </div>

      <div>
      Departure Code : {RetFlight.depCity.code} <br></br>
      Departure Name : {RetFlight.depCity.name} <br></br>
      Arrival Code : {RetFlight.arrCity.code} <br></br>
      Arrival Name : {RetFlight.arrCity.name}  <br></br>
      Airline Code : {RetFlight.airline.code} <br></br>
      Airline Name: {RetFlight.airline.name} <br></br>
      Flight No. : {RetFlight.flightNumber} <br></br>
      Date Travel : {RetFlight.longDate} <br></br>
      Departure Time : {RetFlight.depTime} <br></br>
      Arrival Time : {RetFlight.arrTime} 
      </div>

      <hr></hr>

      <div>
        <div>
          Passenger Details

          <div> <br></br>
          
            <label htmlFor="title">title : </label> &nbsp;
            <select name="title" id="title" onClick={onChangeTitle} > 
              <option value="">โปรดระบุ</option>
              <option value="MR">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Ms">Ms.</option>
              <option value="Dr">Dr.</option>
              <option value="Phra">Phr.a</option>
              <option value="Phramaha">Phramaha.</option>
            </select>  <br></br>
            <label htmlFor="firstname">firstname : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="firstname" onChange={onChangeFirstName} value={inputFirstName} /> <br></br>
            <label htmlFor="middlename">middlename : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="middlename" onChange={onChangeMiddlename} value={inputMiddlename} /> <br></br>
            <label htmlFor="lastname">lastname : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="lastname" onChange={onChangeLastName} value={inputLastName} /> <br></br>
            <label htmlFor="title">email : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="email" onChange={onChangeEmail} value={inputEmail} /> <br></br>
            <label htmlFor="telNo">telNo : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="telNo" onChange={onChangeTelNo} value={inputTelNo} /> <br></br>
            <label htmlFor="countryCode">countryCode : </label> &nbsp;
            <select name="countryCode" id="countryCode" onClick={onChangeCountryCode} defaultValue=""  > 
              <option value="">โปรดระบุ</option>
              <option value="TH">TH</option>
            </select>  <br></br>

            <button type="submit" onClick={() => handleEvent(inputTitle, inputFirstName, inputMiddlename, inputLastName, inputEmail, inputTelNo, CountryCode, noOfAdult, noOfChildren, noOfInfants, svc_class, DepFlight, RetFlight)} >Confirm Booking !!!</button >
        
          </div>

        </div>
        <br></br>
        <div>
          PNR : {showPNR}
        </div>
      </div>
    </>




  )
}

export default ContractInfo
