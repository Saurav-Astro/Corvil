import { HoverEffect, HoverItem } from "@/components/ui/hover-effect";

export function CardHoverEffectDemo() {
  const projects: HoverItem[] = [
    { title: "Stripe", description: "A technology company that builds economic infrastructure for the internet.", link: "https://stripe.com" },
    { title: "Netflix", description: "A streaming service that offers a wide variety of award-winning content.", link: "https://netflix.com" },
    { title: "Google", description: "A multinational technology company specializing in internet services and products.", link: "https://google.com" },
    { title: "Meta", description: "A technology company focused on building products for connection.", link: "https://meta.com" },
    { title: "Amazon", description: "E-commerce, cloud computing, digital streaming, and artificial intelligence.", link: "https://amazon.com" },
    { title: "Microsoft", description: "Software, services, devices, and solutions for people and businesses.", link: "https://microsoft.com" },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
