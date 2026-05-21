import { AboutMarz } from '../components/AboutMarz';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { PilotForm } from '../components/PilotForm';
import { Plans } from '../components/Plans';
import { Problem } from '../components/Problem';
import { Services } from '../components/Services';
import { Solution } from '../components/Solution';
import { TrustPrinciples } from '../components/TrustPrinciples';

export function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <HowItWorks />
      <Plans />
      <PilotForm />
      <TrustPrinciples />
      <AboutMarz />
      <FAQ />
      <FinalCTA />
    </>
  );
}
