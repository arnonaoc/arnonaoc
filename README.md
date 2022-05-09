import './App.css';
import { ethers} from "ethers";
import { useState} from "react";




function App() {
  const [account, setAccount] = useState("")
  const [data, setData] = useState([])


  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    let res =await provider.send("eth_requestAccounts", []);
    setAccount(res[0]);
    getData(res[0]);
  }

  const getData = (_account) => {
    const options = {method: 'GET'};

    fetch('https://testnets-api.opensea.io/api/v1/assets?owner=0x5418EbE7E3CeD183ffB2bcd0e81E8A8fE7E6943d&order_direction=desc&offset=0&limit=20', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }; 


  return <div className="App">
    <button onClick={connect}>Connect</button>
    <p>{account}</p>
    {data.map(nft) => {
return(
	<div>
	<p>{nft.name}</p>
	<p>{nft.token_id}</p}
	</div>
);
})}
  
} 

export default App;
