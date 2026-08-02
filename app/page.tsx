import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Section>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-slate-900">SmartFinds</h1>

          <p className="mt-6 text-lg text-slate-600">
            One Platform. Every Marketplace. Powered by AI.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button>Start Selling</Button>
            <Button variant="outline">Learn More</Button>
          </div>

          <Card className="mx-auto mt-16 max-w-xl">
            🎉 SmartFinds design system is working.
          </Card>
        </div>
      </Section>
    </main>
  );
}
