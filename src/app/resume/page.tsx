import {Container} from "@/components/Container";
import {Heading} from "@/components/Heading";
import {Highlight} from "@/components/Highlight";
import {Paragraph} from "@/components/Paragraph";
import {WorkHistory} from "@/components/WorkHistory";

export default function Home() {
    return (
        <Container>
            <span className="text-4xl">💼</span>
            <Heading className="font-black">Work History</Heading>
            <Paragraph className="max-w-xl mt-4">
                I&apos;m a software developer that loves{" "}
                <Highlight>building products</Highlight>
                pursuing{" "}
                <Highlight>my dreams</Highlight> and{" "}
                <Highlight>helping others</Highlight> to do the same.
            </Paragraph>
            <WorkHistory/>
        </Container>
    );
}
