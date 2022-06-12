/* eslint-disable prettier/prettier */
import * as React from 'react';


const TopInfo = () => {
  return (
    <div className='text-black' data-testid='topInfo'>
      <section>
        <div className="container">
          <div className="">      
          {/* <div className='mb-1 bs'>
        <span className='opacity-6 mr-1'>Your address:</span>
        <span data-testid='accountAddress'> {address}</span>
      </div> */}
            {/* <div className='mb-4'>
        <span className='opacity-6 mr-1'>Contract address:</span>
        <span data-testid='contractAddress'> {contractAddress}</span>
      </div> */}
            <div className='row justify-content-center' style={{ marginTop: '5%' }}>
              <div className='col-md-3' style={{ margin: '20px' }}>
                <div className="box">
                <img src="https://usdm.service.cloudworks.ro/media/cache/im_e556e64a524f73c49504c5c4a5c15c8c.jpg" style={{
                    height: '150px',
                    width: 'auto',
                    margin: '0px',
                  }}></img>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div className="content">
                    <h2 style={{ color: 'white', fontWeight:'900' }}><b>Alex Velea</b></h2>
                  </div>

                </div>
              </div>
              <div className='col-md-3' style={{ margin: '20px' }}>
                <div className="box">
                <img src="https://usdm.service.cloudworks.ro/media/cache/im_e556e64a524f73c49504c5c4a5c15c8c.jpg" style={{
                    height: '150px',
                    width: 'auto',
                    margin: '0px',
                  }}></img>

                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div className="content">
                    <h2 style={{ color: 'white' }}>Connect-R</h2>
                  </div>

                </div>
              </div>

              <div className='col-md-3' style={{ margin: '20px' }}>
                <h2>etet</h2>
                <div className="box">
                  <img src="https://usdm.service.cloudworks.ro/media/cache/im_e556e64a524f73c49504c5c4a5c15c8c.jpg" style={{
                    height: '150px',
                    width: 'auto',
                    margin: '0px',
                  }}></img>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div className="content">
                    <h2 style={{ color: 'white' }}>Killa Fonic</h2>
                  </div>

                </div>

              </div>
            </div>

            {/* <section>
        <div className="container">
          <div className="background-img">
            <div className="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="content">
                <h2 style={{ color: 'white' }}>Alex Velea</h2>
              </div>

            </div>
          </div>
        </div>
      </section> */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default TopInfo;
