import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Card, Image, Tooltip, Modal, Input, Alert, Spin, Button } from "antd";
import nftInfo from '../img/nftLogo.png';
import marketInfo from '../img/nftMarketplace.png';

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
          <h1>NFT란 무엇인가?</h1>
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
          <h1>NFT MarketPlace란 무엇인가?</h1>
        </div>

      </Modal>
    </>
  );
};

export default CardNews;