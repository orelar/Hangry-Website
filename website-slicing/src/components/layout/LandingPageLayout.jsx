import { Navbar } from "../layout/Navbar";
import { Hero } from "../layout/Hero";
import { Restaurants } from "./Restaurants";
import { FindUs } from "./FindUs";
import { BulkOrder } from "./BulkOrder";

// import CardTestList from "./CardTestList";
// import  TestList  from "./TestList";

export function LandingPageLayout() {
  return (
    // <>
    // <CardTestList />
    // </>
    // <>
    //   <TestList />
    // </>
    <div id="landing-page-layout">
      <Navbar />
      <Hero />
      <Restaurants />
      <FindUs />
      <BulkOrder />
    </div>
  );
}
