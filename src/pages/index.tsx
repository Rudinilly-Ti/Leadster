import Header from "@/components/Header";
import { Container } from "./styles";

import First from "./First";
import Videos from "./Videos";

export default function Home() {
  return (
    <Container>
      <Header />
      <First />
      <Videos />
    </Container>
  )
}
