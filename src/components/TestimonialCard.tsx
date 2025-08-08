interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard = ({ quote, author, position, company }: TestimonialCardProps) => {
  return (
    <article className="min-w-0 flex-shrink-0 animate-fade-in">
      <div className="relative rounded-3xl border border-background/30 p-6 md:p-8">
        <p className="text-background/90 leading-relaxed text-sm md:text-base break-words">“{quote}”</p>
        <div aria-hidden className="absolute left-10 -bottom-2 w-4 h-4 bg-foreground border border-background/30 rotate-45 rounded-[2px]" />
      </div>
      <div className="mt-6 space-y-1">
        <p className="font-semibold text-background">{author}</p>
        <p className="text-sm text-background/70">{position}</p>
        <p className="text-sm text-background/70">{company}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;