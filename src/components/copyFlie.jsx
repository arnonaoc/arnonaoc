import React from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { ethers } from 'ethers'
import { useState } from "react";
import { Container } from '../styles/layoutStyled'
import axios from "axios";
import Carousel, { CarouselItem } from "./Carousel";
import { Select } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const FlightApp = () => {

  // handle event
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    axios.post("http://localhost:3001/accesstoken", { //Get token จาก server (localhost:3001)
    }).then(res => {
      console.log(res.data.accessToken);
      axios.post("http://localhost:3001/searchflight", { //Get ข้อมูลสายการบิน จาก server (localhost:3001)
        accessToken: res.data.accessToken
      }).then(dataSearch => {
        console.log(dataSearch);
      })
    })
  };

  const [account, setAccount] = useState("")
  const [result, setResult] = useState([])
  const [data, setData] = useState([])

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    let res = await provider.send("eth_requestAccounts", []);
    setAccount(res[0]);
    getData(res[0]);
    // console.log(res); //Accout Metamask

  };

  const getData = (account) => {

    const options = { method: 'GET' };

    fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${account}&order_direction=desc&offset=0&limit=100`, options)
      .then(response => response.json())
      .then(response => {
        let filter = response.assets.filter(data_ => data_.asset_contract.address === '0x53facd169aff2ef0185f13dcf56195531b192d51')
        setData(filter);
        console.log(response.assets);
      })
      .catch(err => console.error(err));
  };

  const handleData = (elm) => { //handle ID ของ NFT กรณีมี NFT แค่ตัวเดียว
    return (
      <>
        <option>--ระบุ--</option>
        <option>{elm}</option>
      </>
    )
  }

  const onChangeData = (e) => { //ฟังก์ชั่น onChangeData 
    let index = data.findIndex(elm => elm.token_id === e);
    setResult(data[index].traits);
    // console.log(e);
    // console.log(index)
    // console.log([index])
    // console.log([data[index].traits])
    // console.log([data[index].token_id])
    // console.log([data[index].asset_contract.name])
  }

  axios.get(`https://opensea.mypinata.cloud/ipfs/QmWKxoYDLTHTyye2iQTPBGw3aYzi1f9uLVSQbwd5TnyF4b/_metadata.json`)
    .then(res => {
      console.log(res.data)
    }, [])

  return (
    <Container>
      <div className='c'>
        <button onClick={connect} className="botton" >Connect your wallet</button>
      </div>

      <div>
        <p style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>Your Wallet Address is : {account}</p>
      </div>
      <hr />

      <Carousel>
        {
          data
            .filter(data_ => data_.asset_contract.address === '0x53facd169aff2ef0185f13dcf56195531b192d51')
            .map((data_, pass) =>
              <CarouselItem key={pass}>
                <img src={data_.image_thumbnail_url} alt={"img"} width="300" height="300" />
              </CarouselItem>
            )}
      </Carousel>

      <hr />
      <>
        <section>
  
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              {/* body section */}
              <div>
                <div className="grid justify-center space-y-5 bg-indigo-50 pb-10">
                  <div>
                    <div className="flex space-x-8 mt-5">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          className={`w-6 h-6 ${errors.tripType &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                          value="round trip"
                          {...register("tripType", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        />
                        <p className="text-xl font-bold uppercase">Round trip</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          className={`w-6 h-6 ${errors.tripType &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                          value="one way"
                          {...register("tripType", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        />
                        <p className="text-xl font-bold uppercase">one way</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          className={`w-6 h-6 ${errors.tripType &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                          value="multy-city"
                          {...register("tripType", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        />
                        <p className="text-xl font-bold uppercase">multy-city</p>
                      </div>
                    </div>
                    <div>
                      {errors.tripType && (
                        <span className="text-sm text-red-500">
                          {errors.tripType.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* departure section */}
                  <div>
                    <div>
                      <span>Select : ID</span>
                      <form>
                        <select onChange={(e) => onChangeData(e.target.value)}>
                          {data.filter(data_ => data_.asset_contract.address === '0x53facd169aff2ef0185f13dcf56195531b192d51')
                            .map((item, index) => { //handle ID ของ NFT กรณีมี NFT แค่ตัวเดียว
                              if (data.length == 1)
                                return handleData(item.token_id)
                              else
                                return <option key={index} value={item.token_id}> {item.token_id} </option>
                            }
                            )};
                        </select>
                      </form>
                    </div>
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">flying from</p>
                        <select
                          className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors.departure &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                          {...register("departure", {
                            required: {
                              value: true,
                              message: "Departure is required",
                            },
                          })}
                        >
                          <option value="selected disabled hidden">
                            --Select Airport--
                          </option>
                          {
                            result.map(el => <option value={el.trait_type} key={el.trait_type}>{el.trait_type}</option>)
                          }
                        </select>
                        <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " />
                      </div>
                      <div>
                        {errors.departure && (
                          <span className="text-sm text-red-500">
                            {errors.departure.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* arrival section */}
                  <div>
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">flying to</p>
                        <select
                          className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors.arrival &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                          {...register("arrival", {
                            required: {
                              value: true,
                              message: "Arrival is required",
                            },
                          })}
                        >
                          <option value="selected disabled hidden">
                            --Select Airport--
                          </option>
                          {
                            result.map(el => <option value={el.trait_type} key={el.trait_type}>{el.trait_type}</option>)
                          }
                        </select>
                        <FaPlaneArrival className="text-4xl absolute left-5 top-10 " />
                      </div>
                      <div>
                        {errors.arrival && (
                          <span className="text-sm text-red-500">
                            {errors.arrival.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* date section */}
                  <div className="flex space-x-2">
                    {/* departure section */}
                    <div>
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">
                            departure date
                          </p>
                          <input
                            type="date"
                            className={`w-full h-16 text-2xl rounded-lg ${errors.departureDate &&
                              " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                            {...register("departureDate", {
                              required: {
                                value: true,
                                message: "Departure date is required",
                              },
                            })}
                          />
                        </div>
                        <div>
                          {errors.departureDate && (
                            <span className="text-sm text-red-500">
                              {errors.departureDate.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* return section */}
                    <div>
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">
                            return date
                          </p>
                          <input
                            type="date"
                            className={`w-full h-16 text-2xl rounded-lg ${errors.returnDate &&
                              " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                            {...register("returnDate", {
                              required: {
                                value: true,
                                message: "Return date is required",
                              },
                            })}
                          />
                        </div>
                        <div>
                          {errors.returnDate && (
                            <span className="text-sm text-red-500">
                              {errors.returnDate.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* passenger section */}
                  <div className="flex space-x-2">
                    {/* adult section */}
                    <div className="w-full">
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">
                            {" "}
                            adults (18+)
                          </p>
                          <select
                            className="w-full h-16 rounded-lg text-2xl pl-20"
                            {...register("adult", {
                              required: {
                                value: true,
                                message: "Trip type is required",
                              },
                            })}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                          <GiPerson className="text-4xl absolute left-5 top-10 " />
                        </div>
                        {/* <div>Error</div> */}
                      </div>
                    </div>

                    {/* children section */}
                    <div className="w-full">
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">
                            {" "}
                            children (Age 0-17 years)
                          </p>
                          <select
                            className="w-full h-16 rounded-lg text-2xl pl-20"
                            {...register("children", {
                              required: {
                                value: true,
                                message: "Trip type is required",
                              },
                            })}
                          >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                          <FaChild className="text-4xl absolute left-5 top-10 " />
                        </div>
                        {/* <div>Error</div> */}
                      </div>
                    </div>
                  </div>

                  {/* class and price section */}
                  <div className="flex space-x-2">
                    {/* class section */}
                    <div className="w-full">
                      <div>
                        <div>
                          <p className="font-bold text-xl uppercase"> class</p>
                          <select
                            className="w-full h-16 rounded-lg text-2xl pl-20"
                            {...register("class", {
                              required: {
                                value: true,
                                message: "Trip type is required",
                              },
                            })}
                          >
                            <option>Economy</option>
                            <option>Business</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Airlines section */}
                    <div>
                      <p className="font-bold text-xl uppercase">Airlines</p>
                      <select
                        className="w-full h-16 rounded-lg text-2xl pl-20"
                        {...register("Airlines", {
                          required: {
                            value: true,
                            message: "Airlines is required",
                          },
                        })}
                      >
                        <option value="TG">Thai Airways International</option>
                        <option value="PG">Bangkok Airways</option>
                        <option value="WE">Thai Smaile</option>
                      </select>
                    </div>
                  </div>

                  {/* btn section */}
                  <div>
                    <input
                      type="submit"
                      value="Find flight"
                      className="w-full h-16 font-bold text-3xl uppercase rounded-lg bg-green-100 hover:bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </>
    </Container>
  );
};

export default FlightApp;
