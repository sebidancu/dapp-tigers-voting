/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  useGetAccountInfo,
  DappUI,
  transactionServices,
  refreshAccount,
  useGetNetworkConfig,
  getIsLoggedIn,
  setNonce
} from '@elrondnetwork/dapp-core';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { getTransactions } from 'apiRequests';
import { contractAddress } from 'config';
import { StateType } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';



const Transactions = () => {
  const [items, setItems] = useState([]);
  const { address, account } = useGetAccountInfo();
  const /*transactionSessionId*/[, setTransactionSessionId] = React.useState<
    string | null
  >(null);

  useEffect(() => {
    (async () => {
      await axios
        .get(
          `https://devnet-api.elrond.com/accounts/${address}/nfts?collection=TPC-b1e55b`
        )
        .then(
          async (result) => {
            setItems(result.data);
            console.log(result.data);
          },
          (error) => {
            console.log(error);
          }
        )
        .catch((err) => {
          console.log(err.message);
        });
    })();
  }, [address]);

  const { sendTransactions } = transactionServices;

  const sendPingTransaction = async () => {
    const pingTransaction = {
      value: '0',
      data: 'vote@01',
      receiver: contractAddress
    };
    await refreshAccount();

    const { sessionId /*, error*/ } = await sendTransactions({
      transactions: pingTransaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing Ping transaction',
        errorMessage: 'An error has occured during Ping',
        successMessage: 'Ping transaction successful'
      },
      redirectAfterSign: false
    });
    if (sessionId != null) {
      setTransactionSessionId(sessionId);
    }
  };

  return (
    <div >
      <div className='text-center'>
        <h2 style={{color:'white', fontWeight:700, fontFamily: 'Cinzel', textTransform:'uppercase', textShadow:'2px 2px #242526'}}>
          <b>{items.length}</b> NFTs <img src='https://tigerspartyclub.com/wp-content/uploads/2022/02/cropped-logo-bun.png' style={{width:'120px'}}/> <b>{items.length}</b> votes.
        </h2>
      </div>
      <div className='row justify-content-center' >
        {items.map((value: any, index) => (
          <div key={index} style={{ margin: '25px', backgroundColor:'#242526' }} className='bs'>
            <img
              src={value.url}
              alt='nft'
              style={{
                height: '200px',
                width: '200px',
                margin: '0px',
                borderRadius: 10,
                border: '3px black solid'
              }}
            />
            <div className='text-center' style={{color: 'white'}}><b>{value.identifier}</b></div>

            <div className='text-center' onClick={sendPingTransaction}>
              <br />
              <Button variant="primary" className='button' style={{ width: '200px', backgroundColor: '#FFF', color: 'black', borderRadius: 15, }}><b>Alex Velea</b></Button>
            </div>
            <div className='text-center' onClick={sendPingTransaction}>
              <br />
              <Button variant="primary" className='button' style={{ width: '200px', backgroundColor: 'black', color: 'white', borderRadius: 15 }}><b>Connect-R</b></Button>
            </div>
            <div className='text-center' onClick={sendPingTransaction}>
              <br />
              <Button variant="primary" className='button' style={{ width: '200px', backgroundColor: 'black', color: 'white', borderRadius: 15 }}><b>Smiley</b></Button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};


export default Transactions;
