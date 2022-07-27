import React from "react";
import { ethers } from 'ethers'
import { useState } from "react";
import { Container } from '../styles/layoutStyled'
import axios from "axios";
import Carousel, { CarouselItem } from "./Carousel";
import { Select, Form, DatePicker, Space, Tooltip, Button } from 'antd';
import 'antd/dist/antd.css';
// import { useNavigate } from "react-router-dom";
import moment from "moment"
// import { useBetween } from 'use-between';
// import Share from "../pages/Share";




const FlightApp = () => {

  // const{share,setShare} = useBetween(Share)
  // let navigate = useNavigate();
  // const sData = JSON.parse(sessionStorage.data)

  const Option = Select.Option;

  const [form] = Form.useForm();

  const dateFormat = 'YYYY-MM-DD';

  const onFinish = (value) => {
    console.log(value);
    
    value.returnDate = moment(value.returnDate).format("YYYY-MM-DD")
    value.departDate = moment(value.departDate).format("YYYY-MM-DD")
    value.child = Number(value.child)
    value.infant = Number(value.infant)
    value.adult = Number(value.adult)
    console.log(value);
    axios.post("http://localhost:3001/accesstoken", { //Get token จาก server (localhost:3001)
    }).then(res => {
      console.log(res.data.accessToken);
       axios.post("http://localhost:3001/searchflight", {
        body: value,
        accessToken: res.data.accessToken
      }, {
        headers: res.data.accessToken
      }).then(dataSearch => {
        console.log(dataSearch);
      })
    },)
    // sessionStorage.removeItem('data')
    // sessionStorage.data = JSON.stringify(value);

    
    // navigate("/Mint", { replace: true });
  };

  const [account, setAccount] = useState("")
  const [result, setResult] = useState([])
  const [data, setData] = useState([])
  
  // console.log(data);

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
        console.log(filter);
        
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
  }

  axios.get(`https://opensea.mypinata.cloud/ipfs/QmWKxoYDLTHTyye2iQTPBGw3aYzi1f9uLVSQbwd5TnyF4b/_metadata.json`)
    .then(res => {
      // console.log(res.data)
    })

    

  return (
    <Container>
      <div>
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

        <Form form={form} onFinish={onFinish}>

        <Form.Item label="NFT ID" name="nftID">
            <Select placeholder="Select amount a NFT ID" >
            {
            data
              .filter(data_ => data_.asset_contract.address === '0x53facd169aff2ef0185f13dcf56195531b192d51')
              .map((data_, pass) =>
              <Option key={pass} value={data_.token_id}> {data_.token_id} </Option>
              )}
            </Select>
          </Form.Item>
          {/* sessionStorage.data */}

          <Form.Item label="TripType" name="tripType">
            <Select placeholder="Select a TripType" >
              <Option value="O">One Way</Option>
              <Option value="R">Round Trip</Option>
            </Select>
          </Form.Item>
              {/* <input type="text" value={sData.departDate} /> */}
          <Form.Item label="Passenger(adult)" name="adult">
            <Select placeholder="Select amount a Passenger" >
              <Option value="0">0</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Passenger(child)" name="child">
            <Select placeholder="Select amount a Passenger" >
              <Option value="0">0</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Passenger(infant)" name="infant">
            <Select placeholder="Select amount a Passenger" >
              <Option value="0">0</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Class" name="svcClass" >
            <Select placeholder="Select a class" >
              <Option value="Y">Economy</Option>
              <Option value="C">Bussiness</Option>
              <Option value="P">Primuim</Option>
              <Option value="F">First</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Departure" name="originCode">
            <Select placeholder="Select the terminal" >
              <Option value="BKK">BKK</Option>
              <Option value="CNX">CNX</Option>
              <Option value="CEI">CEI</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Arrival" name="destinationCode">
            <Select placeholder="Select the terminal" >
              <Option value="BKK">BKK</Option>
              <Option value="CNX">CNX</Option>
              <Option value="CEI">CEI</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Language" name="languageCode">
            <Select placeholder="Select the language">
              <Option value="th">Thai</Option>
              <Option value="en">English</Option>

            </Select>
          </Form.Item>

          <Form.Item label="Airlines" name="airlines">
            <Select
              mode="tags"
              style={{
                width: '100%',
              }}
              placeholder="Select the Airlines"              
            >
              <Option value="TG">Thai Airways International</Option>
              <Option value="PG">Bangkok Airways</Option>
              <Option value="WE">Thai Smaile</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Departure Date" name="departDate">
            <DatePicker format={dateFormat} />
          </Form.Item>

          <Form.Item label="Arrival Date" name="returnDate">
            <DatePicker format={dateFormat} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>


        </Form>
      </div>
    </Container>
  );
};

export default FlightApp;
