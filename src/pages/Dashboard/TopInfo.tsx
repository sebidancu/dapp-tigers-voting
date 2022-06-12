/* eslint-disable prettier/prettier */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useGetAccountInfo, DappUI } from '@elrondnetwork/dapp-core';
import axios from 'axios';
import { contractAddress } from 'config';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

const TopInfo = () => {
  const { address, account } = useGetAccountInfo();

  const [items, setItems] = useState([]);

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

  return (
    <div className='text-black' data-testid='topInfo'>
      {/* <div className='mb-1 bs'>
        <span className='opacity-6 mr-1'>Your address:</span>
        <span data-testid='accountAddress'> {address}</span>
      </div> */}
      {/* <div className='mb-4'>
        <span className='opacity-6 mr-1'>Contract address:</span>
        <span data-testid='contractAddress'> {contractAddress}</span>
      </div> */}

  <div className='row justify-content-center' style={{margin: '15px'}}>  
      <div className='col-md-3'>
              <Card
                hoverable
                style={{ width: '240px'}}
                cover={<img alt="example" src="https://hahahaproduction.com/wp-content/uploads/2021/10/BLJ01791-1.jpeg" style={{ width: '240px', borderRadius: '20px', border: '3px black solid' }} />}
              >
                <Meta title="Alex Velea" description="www.instagram.com" />
              </Card>
      </div>
      <div className='col-md-3'>
            <Card
              hoverable
              style={{ width: '240px' }}
              cover={<img alt="example" src="https://thumbor.unica.ro/unsafe/950x600/smart/filters:format(webp):contrast(8):quality(75)/https://www.viva.ro/wp-content/uploads/2021/05/Connect-R-19-1.jpg" style={{ width: '240px', borderRadius: '20px', border: '3px black solid' }} />}
            >
              <Meta title="Connect-r" description="www.instagram.com" />
            </Card>
      </div>
      <div className='col-md-3'>
            <Card
              hoverable
              style={{ width: '240px' }}
              cover={<img alt="example" src="https://hahahaproduction.com/wp-content/uploads/2021/10/BLJ01791-1.jpeg" style={{ width: '240px', borderRadius: '20px', border: '3px black solid' }} />}
            >
              <Meta title="Killa Fonic" description="www.instagram.com" />
            </Card>
      </div>  
  </div>

    </div>
  );
};

export default TopInfo;
