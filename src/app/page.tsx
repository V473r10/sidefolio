import {Container} from "@/components/Container";
import {Heading} from "@/components/Heading";
import {Highlight} from "@/components/Highlight";
import {Paragraph} from "@/components/Paragraph";
import {Products} from "@/components/Products";
import {TechStack} from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Facundo</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a software developer building{" "}
        <Highlight>Codedicated</Highlight> a company dedicated to bridging the gap between tech and non-tech people.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
