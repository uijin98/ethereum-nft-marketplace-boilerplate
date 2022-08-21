import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Card, Image, Tooltip, Modal, Input, Alert, Spin, Button } from "antd";
import nftInfo from '../img/NFT (1).png';
import marketInfo from '../img/MarketPlace1.png';
import NFT1 from '../img/NFT (1).png';
import NFT2 from '../img/NFT (2).png';
import NFT3 from '../img/NFT (3).png';
import NFT4 from '../img/NFT (4).png';
import MarketPlace1 from '../img/MarketPlace1.png';
import MarketPlace2 from '../img/MarketPlace2.png';
import MarketPlace3 from '../img/MarketPlace3.png';
import MarketPlace4 from '../img/MarketPlace4.png';

const styles = {
  table: {
    margin: "0 auto",
    width: "1200px",
  },
};

const CardNews = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();
  const [visible1, setVisibility1] = useState(false)
  const [visible2, setVisibility2] = useState(false)
  return (
    <>
      <div style={styles.table}>
        <Image
          src={nftInfo} 
          style={{ height: "580px", marginRight: "20px", paddingRight: "20px", paddingBottom: "20px"}}
          onClick={() => setVisibility1(true)}
          preview={false}
        />
        <Image
          src={marketInfo}
          style={{ height: "580px", marginRight: "20px", paddingRight: "20px", paddingBottom: "20px" }}
          onClick={()=> setVisibility2(true)}
          preview={false}
        />
        <Image
          src={nftInfo} 
          style={{ height: "400px", marginRight: "20px", paddingRight: "20px", paddingBottom: "20px"}}
          onClick={() => setVisibility1(true)}
          preview={false}
        />
        <Image
          src={marketInfo}
          style={{ height: "400px", marginRight: "20px", paddingRight: "20px", paddingBottom: "20px" }}
          onClick={()=> setVisibility2(true)}
          preview={false}
        />
      </div>
      <Modal
        visible={visible1}
        onCancel={() => setVisibility1(false)}
        footer={[
          <Button onClick={() => setVisibility1(false)}>
            OK
          </Button>,
        ]}  
      >
        <div>
          <Image
            src={NFT1}
            style={{ height: "500px", paddingBottom: "20px" }}
            preview={false}
          />
          <Image
            src={NFT2}
            style={{ height: "500px", paddingBottom: "20px" }}
            preview={false}
          />
          <Image
            src={NFT3}
            style={{ height: "500px", paddingBottom: "20px" }}
            preview={false}
          />
          <Image
            src={NFT4}
            style={{ height: "500px", paddingBottom: "20px" }}
            preview={false}
          />
        </div>

      </Modal>

      <Modal
        visible={visible2}
        onCancel={() => setVisibility2(false)}
        footer={[
          <Button onClick={() => setVisibility2(false)}>
            OK
          </Button>,
        ]}  
      >
        <div>
          <Image
            src={MarketPlace1}
            style={{ height: "500px", paddingBottom: "20px" }}
            preview={false}
          />
          <Image
            src={MarketPlace2}
            style={{ height: "500px", paddingBottom: "20px" }}
            preview={false}
          />
          <Image
            src={MarketPlace3}
            style={{ height: "500px", paddingBottom: "20px" }}
            preview={false}
          />
          <Image
            src={MarketPlace4}
            style={{ height: "500px", paddingBottom: "20px" }}
            preview={false}
          />
        </div>

      </Modal>
    </>
  );
};

export default CardNews;