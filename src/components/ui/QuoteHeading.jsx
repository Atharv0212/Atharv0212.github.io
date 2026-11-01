// The signature “TITLE . heading used across sections.
export default function QuoteHeading({ children, className = 'text-3xl', as: Tag = 'h3' }) {
  return (
    <Tag className={`${className} font-chunky text-brand-dark flex items-center gap-2`}>
      <span className={`quote-mark ${className}`}>“</span>
      {children} .
    </Tag>
  );
}
