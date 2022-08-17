import React from 'react'
import Share from "./Share";
import { useBetween } from 'use-between';
import { Select, Form, Button, Card, Radio, Space, Input, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";



function Booking() {

  const { share } = useBetween(Share)
  const { info } = useBetween(Share)
  const { bookingInfo, setBookingInfo } = useBetween(Share)
  // console.log("data", share.data);
  // console.log("Bookinginfo", bookingInfo);
  // console.log("info", info.destinationCode);
  // console.log("info", info.departDate);
  // console.log("info", info.returnDate);

  const departureFlight = share.data.departureFlight;
  const returnFlight = share.data.returnFlight;
  console.log(departureFlight);
  console.log(share);

  const selectFlight = info;
  // console.log(selectFlight);
  // console.log(selectFlight.adult);
  // console.log(selectFlight.child);
  // console.log(selectFlight.infant);
  // console.log(selectFlight.svcClass);
  // console.log(selectFlight.svcClass);
  
  // const [form] = Form.useForm();

  const [Tick, setTick] = useState(1);
  const [Tock, setTok] = useState(1);

  let navigate = useNavigate();

  const onChangeDeparture = (e) => {
    console.log('radio checked', e.target.value); //Check ที่นั่ง
    setTick(e.target.value);
  };

  const onChangeReturn = (e) => { //Check ที่นั่ง
    console.log('radio checked', e.target.value);
    setTok(e.target.value);
  };



  const [airline, setAirline] = useState('')
  const [name, setName] = useState('')
  const [flightNumber, setFlightNumber] = useState('')
  const [arrCity, setArrCityName] = useState('')
  const [arrCityCode, setArrCityCode] = useState('')
  const [longDate, setLongDate] = useState('')
  const [depCityCode, setDepCityCode] = useState('')
  const [depCity, setDepCity] = useState('')
  const [airCraft, setAirCraft] = useState('')
  const [depTime, setDepTime] = useState('')
  const [arrTime, setArrTime] = useState('')
  const [totalTime, setTotalTime] = useState('')

  const [adult, setAdult] = useState('')
  const [child, setChild] = useState('')
  const [infant, setInfant] = useState('')

  const [operateCode, setOperateCode] = useState('')
  const [operateName, setOperateName] = useState('')
  const [arrivalDateTime, setArrivalDateTime] = useState('')
  const [departureDateTime, setDepartureDateTime] = useState('')
  const [seq, setSeq] = useState('')


  const handleDepartureSelected = (data2, data) => {
    console.log(data2.airline.code); // H1
    setAirline(data2.airline.code)
    console.log(data2.airline.name); // Hahn Air
    setName(data2.airline.name)
    console.log(data2.flightNumber); // 4727
    setFlightNumber(data2.flightNumber);
    console.log(data2.arrCity.name); // Chiang Mai Int'l, เชียงใหม่
    setArrCityName(data2.arrCity.name)
    console.log(data2.arrCity.code);
    setArrCityCode(data2.arrCity.code)
    console.log(data2.arrDisplayDateTime.longDate);
    setLongDate(data2.arrDisplayDateTime.longDate)
    console.log(data2.depCity.code);
    setDepCityCode(data2.depCity.code)
    console.log(data2.depCity.name);
    setDepCity(data2.depCity.name);
    console.log(data2.typeOfAircraft);
    setAirCraft(data2.typeOfAircraft);
    console.log(data2.depDisplayDateTime.displayTime);
    setDepTime(data2.depDisplayDateTime.displayTime);
    console.log(data2.arrDisplayDateTime.displayTime);
    setArrTime(data2.arrDisplayDateTime.displayTime);
    console.log(data.totalTime);
    setTotalTime(data.totalTime);
    console.log(selectFlight.adult)
    setAdult(selectFlight.adult);
    console.log(selectFlight.child)
    setChild(selectFlight.child);
    console.log(selectFlight.infant)
    setInfant(selectFlight.infant);
    console.log(data2.operatedAirline.code)
    setOperateCode(data2.operatedAirline.code);
    console.log(data2.operatedAirline.name)
    setOperateName(data2.operatedAirline.name);
    console.log(data2.arrivalDateTime);
    setArrivalDateTime(data2.arrivalDateTime)
    console.log(data2.departureDateTime);
    setDepartureDateTime(data2.departureDateTime)
    console.log("Seq",data2.Seq);
    setSeq(data2.Seq);
   
  }

  const [airline2, setAirline2] = useState('')
  const [name2, setName2] = useState('')
  const [flightNumber2, setFlightNumber2] = useState('')
  const [arrCity2, setArrCityName2] = useState('')
  const [arrCityCode2, setArrCityCode2] = useState('')
  const [longDate2, setLongDate2] = useState('')
  const [depCityCode2, setDepCityCode2] = useState('')
  const [depCity2, setDepCity2] = useState('')
  const [airCraft2, setAirCraft2] = useState('')
  const [depTime2, setDepTime2] = useState('')
  const [arrTime2, setArrTime2] = useState('')
  const [totalTime2, setTotalTime2] = useState('')

  const [adult2, setAdult2] = useState('')
  const [child2, setChild2] = useState('')
  const [infant2, setInfant2] = useState('')

  const [operateCode2, setOperateCode2] = useState('')
  const [operateName2, setOperateName2] = useState('')
  const [arrivalDateTime2, setArrivalDateTime2] = useState('')
  const [departureDateTime2, setDepartureDateTime2] = useState('')
  const [seq2, setSeq2] = useState('')

  const handleArrSelected = (data2_, data_) => {
    console.log(data2_.airline.code); // VZ
    setAirline2(data2_.airline.code)
    console.log(data2_.airline.name);
    setName2(data2_.airline.name)
    console.log(data2_.flightNumber);
    setFlightNumber2(data2_.flightNumber);
    console.log(data2_.arrCity.name);
    setArrCityName2(data2_.arrCity.name)
    console.log(data2_.arrCity.code);
    setArrCityCode2(data2_.arrCity.code)
    console.log(data2_.arrDisplayDateTime.longDate);
    setLongDate2(data2_.arrDisplayDateTime.longDate)
    console.log(data2_.depCity.code);
    setDepCityCode2(data2_.depCity.code)
    console.log(data2_.depCity.name);
    setDepCity2(data2_.depCity.name);
    console.log(data2_.typeOfAircraft);
    setAirCraft2(data2_.typeOfAircraft);
    console.log(data2_.depDisplayDateTime.displayTime);
    setDepTime2(data2_.depDisplayDateTime.displayTime);
    console.log(data2_.arrDisplayDateTime.displayTime);
    setArrTime2(data2_.arrDisplayDateTime.displayTime);
    console.log(data_.totalTime);
    setTotalTime2(data_.totalTime);
    console.log(selectFlight.adult)
    setAdult2(selectFlight.adult);
    console.log(selectFlight.child)
    setChild2(selectFlight.child);
    console.log(selectFlight.infant)
    setInfant2(selectFlight.infant);
    console.log(data2_.operatedAirline.code)
    setOperateCode2(data2_.operatedAirline.code);
    console.log(data2_.operatedAirline.name)
    setOperateName2(data2_.operatedAirline.name);
    console.log(data2_.arrivalDateTime);
    setArrivalDateTime2(data2_.arrivalDateTime)
    console.log(data2_.departureDateTime);
    setDepartureDateTime2(data2_.departureDateTime)
    console.log(data2_.Seq);
    setSeq2(data2_.Seq);
  }

  const handleBooking = (
    name,
    flightNumber,
    arrCity,
    arrCityCode,
    longDate,
    depCity,
    depCityCode,
    airCraft,
    depTime,
    arrTime,
    totalTime,
    airline,
    adult,
    child,
    infant,
    operateCode,
    operateName,
    arrivalDateTime,
    departureDateTime,
    seq,
    name2,
    flightNumber2,
    arrCity2,
    arrCityCode2,
    longDate2,
    depCity2,
    depCityCode2,
    airCraft2,
    depTime2,
    arrTime2,
    totalTime2,
    airline2,
    adult2,
    child2,
    infant2,
    operateCode2,
    operateName2,
    arrivalDateTime2,
    departureDateTime2,
    seq2

  ) => {
    const BookingInfo_ = (Object.values(
     [ {
        "noOfAdult": adult,
        "noOfChildren": child,
        "noOfInfants": infant,
        "svc_class": "Y",
        "depFlight": [{
          "depCity": {
            "code": depCityCode,
            "name": depCity,
          },
          "arrCity": {
            "code": arrCityCode,
            "name": arrCity
          },
          "airline": {
            "code": airline, //H1ntractInfo
            "name": name // Hahn Air
          },
          "flightNumber": flightNumber,
          "operatedAirline": {
            "code": operateCode,
            "name": operateName
          },
          "departureDateTime": departureDateTime,
          "arrivalDateTime": arrivalDateTime,
          "rbd": "V",
          "Seq": seq,
          "longDate" : longDate,
          "depTime" : depTime,
          "arrTime" : arrTime,
        }
          // name,
          // flightNumber,
          // arrCity,
          // arrCityCode,
          // longDate
          // depCity,
          // depCityCode,
          // airCraft,
          // depTime,
          // arrTime,
          // totalTime,
          // airline,
          // adult,
          // child,
          // infant,
          // operateCode,
          // operateName,
          // arrivalDateTime,
          // departureDateTime,
          // seq
        ],
        "retFlight": [{
          "depCity": {
            "code": depCityCode2,
            "name": depCity2,
          },
          "arrCity": {
            "code": arrCityCode2,
            "name": arrCity2
          },
          "airline": {
            "code": airline2, //H1
            "name": name2 // Hahn Air
          },
          "flightNumber": flightNumber2,
          "operatedAirline": {
            "code": operateCode2,
            "name": operateName2
          },
          "departureDateTime": departureDateTime2,
          "arrivalDateTime": arrivalDateTime2,
          "rbd": "V",
          "Seq": seq2,
          "longDate" : longDate2,
          "depTime" : depTime2,
          "arrTime" : arrTime2
          // name2,
          // flightNumber2,
          // arrCity2,
          // arrCityCode2,
          // longDate2,
          // depCity2,
          // depCityCode2,
          // airCraft2,
          // depTime2,
          // arrTime2,
          // totalTime2,
          // airline2,
          // adult2,
          // child2,
          // infant2,
          // operateCode2,
          // operateName2,
          // arrivalDateTime2,
          // departureDateTime2,
          // seq2
        }],

        // "contractInfo": {
        //   "title": "MR",
        //   "firstname": "ning",
        //   "middlename": null,
        //   "lastname": "aisoft",
        //   "email": "butsanee@aisoftthailand.com",
        //   "telNo": "660891223223",
        //   "countryCode": "TH"
        // },
        // "adtPaxs": {},
        // "adtPaxs": [{}],
        // "chdPaxs": [{}],
        // "infPaxs": [{}],
        // "languageCode": "th"
      }
    ]));
    console.log("Booking", BookingInfo_);
    setBookingInfo(BookingInfo_)
    navigate("/ContractInfo", { replace: true });
  }




  return (
    <div>
      <div className='c'>
        <h2>Departure : {info.originCode} Date  : {info.departDate}</h2>
        <h2>Arrival : {info.destinationCode} Date : {info.returnDate}</h2>
        <h2>Adult : {info.adult}</h2>
      </div>

      <Card title="เที่ยวบินของคุณ(ขาไป)" extra={<a href="#">More</a>} style={{ width: 1600 }}>
        {
          departureFlight.map((data, index) => (
            <div key={index} className="c"> {
              data.flightDetails.map((data2, index2) => (<div key={index2} >
                <p>Air Line : {data2.airline.name}</p>
                <p>Code :{data2.airline.code} {data2.flightNumber} </p>
                <p>Departure Time : {data2.depDisplayDateTime.displayTime}</p>
                <p>Arrival Time : {data2.arrDisplayDateTime.displayTime}</p>
                <p>{data2.depDisplayDateTime.longDate}</p>
                <p>Departure City : {data2.depCity.code} ({data2.depCity.name})</p>
                <p>Destination City : {data2.arrCity.code} {data2.arrCity.name}</p>
                <p>Total Time : {data.totalTime}</p>
                {/* <Radio.Group name={"back"} onChange={onChangeReturn} value={Tock}>
                  {data2.productInfo.map((data3, index3) => (<Radio value={data3.rbd} key={index + '' + index2 + '' + index3 + '' + data2.bookingCode}>{data3.rbd} {data3.availabilityStatus}</Radio>))}
                </Radio.Group> */}
                <button type="button" onClick={() => handleDepartureSelected(data2, data)}>Click Me!</button>
              </div>))}
            </div>
          ))
        }
      </Card>

      <Card title="เที่ยวบินของคุณ(ขากลับ)" extra={<a href="#">More</a>} style={{ width: 1600 }}>
        {
          returnFlight.map((data_, index) => (
            <div key={index} className="c"> {
              data_.flightDetails.map((data2_, index2) => (<div key={index2}>
                <p>Air Line : {data2_.airline.name}</p>
                <p>Code :{data2_.airline.code} {data2_.flightNumber} </p>
                <p>Departure Time : {data2_.depDisplayDateTime.displayTime}</p>
                <p>Arrival Time : {data2_.arrDisplayDateTime.displayTime}</p>
                <p>{data2_.depDisplayDateTime.longDate}</p>
                <p>Departure City : {data2_.depCity.code} ({data2_.depCity.name})</p>
                <p>Destination City : {data2_.arrCity.code} {data2_.arrCity.name}</p>
                <p>Total Time : {data_.totalTime}</p>
                {/* <Radio.Group name={"back"} onChange={onChangeReturn} value={Tock}>
                  {data2.productInfo.map((data3, index3) => (<Radio value={index + '' + index2 + '' + index3} key={index3}>{data3.rbd} {data3.availabilityStatus}</Radio>))}
                </Radio.Group> */}
                <button type="button" onClick={() => handleArrSelected(data2_, data_)}>Click Me!</button>
              </div>))}
            </div>
          ))
        }
      </Card>

      <br></br>

      BOOKING FLIGHT :
      <hr></hr>

      Departure Flight (ขาไป) <br></br>

      Airline : {airline} <br></br>
      Name : {name} <br></br>
      FlightNumber : {flightNumber} <br></br>
      ArrCity : {arrCity} <br></br>
      ArrCityCode : {arrCityCode} <br></br>
      Date : {longDate} <br></br>
      DepCity : {depCity} <br></br>
      DepCityCode : {depCityCode} <br></br>
      Aircaraft : {airCraft} <br></br>
      Departure Time : {depTime} <br></br>
      Arrival Time : {arrTime} <br></br>


      <hr></hr>

      <div>
        Arrival Flight (ขากลับ) <br></br>
        Airline : {airline2} <br></br>
        Name : {name2} <br></br>
        FlightNumber : {flightNumber2} <br></br>
        ArrCity : {arrCity2} <br></br>
        ArrCityCode : {arrCityCode2} <br></br>
        Date : {longDate2} <br></br>
        DepCity : {depCity2} <br></br>
        DepCityCode : {depCityCode2} <br></br>
        Aircaraft : {airCraft2} <br></br>
        Departure Time : {depTime2} <br></br>
        Arrival Time : {arrTime2} <br></br>
      </div>

      <button type="button" onClick={() => handleBooking(
        name,
        flightNumber,
        arrCity,
        arrCityCode,
        longDate,
        depCity,
        depCityCode,
        airCraft,
        depTime,
        arrTime,
        totalTime,
        airline,
        adult,
        child,
        infant,
        operateCode,
        operateName,
        arrivalDateTime,
        departureDateTime,
        seq,
        name2,
        flightNumber2,
        arrCity2,
        arrCityCode2,
        longDate2,
        depCity2,
        depCityCode2,
        airCraft2,
        depTime2,
        arrTime2,
        totalTime2,
        airline2,
        adult2,
        child2,
        infant2,
        operateCode2,
        operateName2,
        arrivalDateTime2,
        departureDateTime2,
        seq2
      )}>Booking</button>

    </div>
  )
}

export default Booking