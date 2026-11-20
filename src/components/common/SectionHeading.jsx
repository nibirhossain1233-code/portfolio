export default function SectionHeading({ title, description, center = true }) {
  return (
    <div className={`mb-14 ${center ? "text-center" : "text-left"}`}>
      <h2 className="section-heading">{title}</h2>
      {description && <p className="section-description mx-auto mt-4 max-w-3xl">{description}</p>}
    </div>
  );
}