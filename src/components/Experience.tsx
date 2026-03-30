import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Junior Network Engineer',
    company: 'Drick ICT Ltd.',
    description: '❖Detecting Down internet connection using SMTP map and ping, Find responsible party and contact them for restoration of the link, Configuring DHCP, DNS, OSPF, EIGRP, BGP, VLAN. Linux server & Network Configuration. ',
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}