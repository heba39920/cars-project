import Section from "../Section/Section";
import "./About.css"
import person1 from "../../assets/assignment-images/imges/landing-page/sec-6/girl.png";
import person2 from "../../assets/assignment-images/imges/landing-page/sec-6/boy.png";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section className="aboutBg py-4">

    <Section head="TESTIMONIALS" title="What people say about us?">
    <div className="d-flex flex-wrap justify-content-center">

       <AboutCard img={person1}/>

      <AboutCard  img={person2}/>
    </div>
 

    
    </Section>

    </section>
  )
}
