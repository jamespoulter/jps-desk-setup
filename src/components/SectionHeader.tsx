interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
}

export default function SectionHeader({ number, label, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-number">{number}</span>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-divider"></div>
    </div>
  );
}
