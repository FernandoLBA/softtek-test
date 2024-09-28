import { CardsContainer, TopText } from "../components";

export function TopLayout() {
  return (
    <div className="flex flex-col md:items-center gap-8">
      <TopText />

      <CardsContainer />
    </div>
  )
}