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
import { Address } from '@elrondnetwork/erdjs/out';



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

  const sendVoteRuby = async (token_id: any, nft_nonce: any) => {
    const pingTransaction = {
      value: '0',
      data:
        'ESDTNFTTransfer@' +
        strtoHex(token_id) +
        '@' +
        numtoHex(nft_nonce) +
        '@' +
        numtoHex(1) +
        '@' +
        new Address(contractAddress).hex() +
        '@' +
        strtoHex('vote')+
        '@01',
      receiver: address
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

  const sendVoteVelea = async (token_id: any, nft_nonce: any) => {
    const pingTransaction = {
      value: '0',
      data:
        'ESDTNFTTransfer@' +
        strtoHex(token_id) +
        '@' +
        numtoHex(nft_nonce) +
        '@' +
        numtoHex(1) +
        '@' +
        new Address(contractAddress).hex() +
        '@' +
        strtoHex('vote')+
        '@02',
      receiver: address
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

  const sendVoteMarko = async (token_id: any, nft_nonce: any) => {
    const pingTransaction = {
      value: '0',
      data:
        'ESDTNFTTransfer@' +
        strtoHex(token_id) +
        '@' +
        numtoHex(nft_nonce) +
        '@' +
        numtoHex(1) +
        '@' +
        new Address(contractAddress).hex() +
        '@' +
        strtoHex('vote')+
        '@03',
      receiver: address
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
  function strtoHex(str: string) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    if (result.length % 2 == 1) {
      result = '0' + result;
    }
    return result;
  }

  function numtoHex(num: number) {
    let result = num.toString(16);
    if (result.length % 2 == 1) {
      result = '0' + result;
    }
    return result;
  }
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

            <div className='text-center'>
              <br />
              <Button variant="primary" className='button' style={{ width: '200px', backgroundColor: '#FFF', color: 'black', borderRadius: 15, }} onClick={()=>sendVoteRuby(value.collection,value.nonce)}><b>RUBY</b></Button>
            </div>
            <div className='text-center'>
              <br />
              <Button variant="primary" className='button' style={{ width: '200px', backgroundColor: 'black', color: 'white', borderRadius: 15 }} onClick={()=>sendVoteVelea(value.collection,value.nonce)}><b>ALEX VELEA</b></Button>
            </div>
            <div className='text-center' >
              <br />
              <Button variant="primary" className='button' style={{ width: '200px', backgroundColor: 'black', color: 'white', borderRadius: 15 }} onClick={()=>sendVoteMarko(value.collection,value.nonce)}><b>MARKO GLASS</b></Button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};


export default Transactions;
