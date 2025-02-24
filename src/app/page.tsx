import { Header } from "@/components/header/header";
import styles from "./page.module.scss";
import { Footer } from "@/components/footer/footer";
import { GreetingBlock } from "@/components/greetingBlock/greetingBlock";
import Folders from "@/components/folders/folders";
import FortuneCookie from "@/components/fotruneBlock/fortuneBlock";
import ToTheTopButton from "@/components/toTheTop/toTheTopButton";
import ToolsBlock from "@/components/toolsBlock/toolsBLock";
import { PossibleBlock } from "@/components/possibleBlock/possibleBlock";
import ContactButton from "@/components/contactButton/contactButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <GreetingBlock />
        <Folders />
        <FortuneCookie />
        <PossibleBlock />
        <ToolsBlock />
      </main>
      <Footer />
      <ContactButton />
      <ToTheTopButton />
    </div>
  );
}
