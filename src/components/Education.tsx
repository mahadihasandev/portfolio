
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Bachelor of Computer Science and Engineering',
    institution: 'Bangladesh University of Business and Technology (BUBT)',
    passingYear: '2022',
  },
  {
    degree: 'Higher Secondary Certificate-(HSC)',
    institution: 'shaheen college',
  },
  {
    degree: 'Secondary School Certificate-(SSC)',
    institution: 'Savar Cantonment Board High School, Savar , Dhaka',
  },
  
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}