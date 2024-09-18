import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ButtonLink } from "@/components/button-link";
import { CardLink } from "@/components/card-link";
import { data } from "@/constants";
import Hero from "@/components/bridge/hero2";

export default function HomePage() {
  return (
    <main className="flex items-center flex-col mx-auto w-full justify-center pt-24 px-8">
      <Hero />
    </main>
  );
}
