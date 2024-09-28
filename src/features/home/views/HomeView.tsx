import { HeroForm, HeroImg } from "../components";
import { HeroContainer } from "../components/heroContainer/HeroContainer";

export function HomeView() {
  return (
    <section className="flex flex-col">
      <HeroContainer>
        <HeroImg />
      </HeroContainer>

      {/* Mobile */}
      <HeroForm className="block md:hidden" />
    </section>
  );
}
