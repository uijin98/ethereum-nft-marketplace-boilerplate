import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Text from "antd/lib/typography/Text";



import NFTMarketTransactions from "components/NFTMarketTransactions";
import CardNews from "components/CardNews";
const { Header, Footer } = Layout;


const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "40px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
    height: "150px"
  },
  headerRight: {
    marginLeft: '300px',
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();



  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        {/*<Header style={styles.header}>*/}
        <Header style={{height: "127px", backgroundColor: "#F2B310"}}>
          <div style={{display: 'flex', marginTop:"10px"}}>
            <Logo />
            <SearchCollections setInputValue={setInputValue}/>
            <div style={styles.headerRight}>
              <Chains />
              <NativeBalance />
              <Account />
            </div>
          </div>
          <div>
          
            <Menu
              theme="light"
              mode="horizontal"
              style={{
                display: "flex",
                alignItems:"center",
                justifyContent: "center",
                fontSize: "17px",
                fontWeight: "500",
                backgroundColor:"#FAE495",
                marginLeft:"-50px",
                width: "108%",
              }}
              defaultSelectedKeys={["nftMarket"]}
            >
              <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} style={{marginRight:'50px'}}>
                <NavLink to="/NFTMarketPlace">🛒 상품 구매</NavLink>
              </Menu.Item>
              <Menu.Item key="nft" style={{marginRight:'50px'}}>
                <NavLink to="/nftBalance">🖼 상품 판매</NavLink>
              </Menu.Item>
              <Menu.Item key="transactions" style={{marginRight:'50px'}}>
                <NavLink to="/Transactions">📑 거래 내역</NavLink>
              </Menu.Item>
              <Menu.Item key="cardNews" style={{marginRight:'50px'}}>
                <NavLink to="/CardNews">📰 카드 뉴스</NavLink>
              </Menu.Item>
            </Menu>
            </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">

              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue}/>

            </Route>

            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
            <Route path="/CardNews">
              <CardNews />
            </Route>
          </Switch>
          <Redirect to="/NFTMarketPlace" />
        </div>
      </Router>
      <Footer></Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <p style={{ fontSize: 40, color: "black",}}>🅜🅝🅝🅢</p>
  </div>
);

export default App;
