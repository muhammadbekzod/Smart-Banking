import styled from "styled-components";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MassagingSection from "./components/MassagingSection";
import PaymentSection from "./components/PaymentSection";
import {OuterLayout} from './styles/Layouts'

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <ChartSection />
          <MassagingSection />
          <PaymentSection />
          <FAQSection />
        </MainStyled>
      </OuterLayout>
      <Footer/>
    </div>
  );
}

const MainStyled = styled.main`
`

export default App;
