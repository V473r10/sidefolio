import {Container} from "@/components/Container";
import {Heading} from "@/components/Heading";
import {Metadata} from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Facundo Valerio",
  description:
    "Facundo Valerio is the founder of Codedicated a company dedicated to bridging the gap between tech and non-tech people",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
