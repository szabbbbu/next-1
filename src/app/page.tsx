import CustomLink from "@/components/CustomLink";
import AboutPage from "./about/page";
import LightningBolt from "@/components/icons/LightningBolt";
// import RootLayout from "./layout";


export default function Home() {
  return (
    <div>
      <AboutPage>
        <h1>
          hello
        </h1>

        <div>
          Hello 2
        </div>
      </AboutPage>

      <CustomLink to="/contact">
        <>
          <h1>Contact Us</h1>
          <LightningBolt />
        </>
      </CustomLink>

      {/* <RootLayout>
        <div>
          content
        </div>
      </RootLayout> */}
    </div>
  );
}
