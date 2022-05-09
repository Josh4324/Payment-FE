import React, { useEffect, useState, useRef } from "react";
import { BigNumber, ethers, providers } from "ethers";
import abi from "../utils/payment.json";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import axios from "axios";

export default function Home() {
  const contractAddress = "0x62e2c7165Df60B3D079cAADfA11B769ea9CcB28E";

  const contractABI = abi.abi;
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(0);
  const [contractBalance, setContractBalance] = useState(0);
  const [price, setPrice] = useState(0);

  const [loading1, setLoading1] = useState(false);
  const [error1, setError1] = useState("");
  const [message1, setMessage1] = useState("");

  const etherRef = useRef();
  const etherAmountRef = useRef();
  const walletRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {};

  const sendEthToAnotherAddr = async () => {};

  const sendEthToContract = async () => {};

  const getPrice = async () => {};

  const getBalance = async () => {};

  const connectWallet = async () => {};

  const disconnectWallet = async () => {};

  return (
    <div
      className="bd"
      style={{
        backgroundImage: `url("./images/pay.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          width: "200px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        {address.length > 0 ? (
          <div>
            <button className="button" onClick={disconnectWallet}>
              {address.slice(0, 5) + "....." + address.slice(-5)}
            </button>
          </div>
        ) : (
          <button className="button" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>

      <div className="balance">
        <div>
          Balance <div>{balance} ether</div>
          <div>${(balance * price).toFixed(2)}</div>
        </div>

        <div>
          Contract balance <div>{contractBalance} ether</div>
          <div>${(contractBalance * price).toFixed(2)}</div>
        </div>
      </div>

      <div className="box">
        <div className="inner__box">
          <div className="text">Send Ether to Another Wallet Address</div>
          <div>
            <input
              className="input"
              ref={etherRef}
              placeholder="Enter amount in ether"
            />
          </div>
          <div>
            <input
              className="input"
              ref={walletRef}
              placeholder="Enter wallet address"
            />
          </div>
          <div style={{ color: "white", padding: "5px" }}>
            {loading === true ? "Transaction in progess......." : ""}
          </div>
          <div style={{ color: "red", padding: "5px" }}>
            {error.length > 0 ? error : ""}
          </div>
          <div style={{ color: "cyan", padding: "5px" }}>
            {message.length > 0 ? message : ""}
          </div>
          <button onClick={sendEthToAnotherAddr} className="button">
            Send Payment
          </button>
        </div>

        <div className="inner__box">
          <div className="text">Send Ether to Contract</div>
          <div>
            <input
              ref={etherAmountRef}
              className="input"
              placeholder="Enter amount in ether"
            />
          </div>
          <div style={{ color: "white", padding: "5px" }}>
            {loading1 === true ? "Transaction in progess......." : ""}
          </div>
          <div style={{ color: "red", padding: "5px" }}>
            {error1.length > 0 ? error1 : ""}
          </div>
          <div style={{ color: "cyan", padding: "5px" }}>
            {message1.length > 0 ? message1 : ""}
          </div>
          <button onClick={sendEthToContract} className="button">
            Send Payment
          </button>
        </div>
      </div>
    </div>
  );
}
