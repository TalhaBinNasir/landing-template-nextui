import CarrierForm from "../../components/carrier-setup";
import { Footer } from "../../components/footer";
import { Hero } from "../../components/hero";
import { Layout } from "../../components/navbar/layout";
import { Nav } from "../../components/navbar/navbar";
import { Box } from "../../components/styles/box";

const CarrierPortal = () => {
  return (
    <Layout>
      <Nav/>
      <Box as="main">
      <Hero title="Carrier Setup"/>
      <CarrierForm/>
        <Footer />
      </Box>
    </Layout>
  );
};

export default CarrierPortal;
