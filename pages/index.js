import Link from "next/link";
import Banner from "../component/Banner";
import Category from "../component/Category";
import {
  BuyProductModal,
  ClosedModal,
  SubscriptionModal,
  SummmerSaleModal,
} from "../component/common/modal/Modal";
import Offer from "../component/common/offer";
import ExtraService from "../component/ExtraService";
import Feature from "../component/Features";
import Footer from "../component/footer";
import HottestCollection from "../component/Hottext_Collection";
import NavBar from "../component/navbar";
import NewsLetter from "../component/NewsLetter";
import Treding from "../component/Trending";

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <Category />
      <Offer />
      <Treding />
      <HottestCollection />
      {/* <SubscriptionModal />
      <ClosedModal />
      <SummmerSaleModal />
      <BuyProductModal /> */}
    </>
  );
};

export default Home;
