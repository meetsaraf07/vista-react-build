interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard = ({ quote, author, position, company }: TestimonialCardProps) => {
  return (
    <div className="space-y-6 animate-fade-in min-w-0 flex-shrink-0">
      <p className="text-background/90 leading-relaxed text-sm">
        "{quote}"
      </p>
      <div className="space-y-1">
        <p className="font-semibold text-background">
          {author}
        </p>
        <p className="text-sm text-background/70">
          {position}
        </p>
        <p className="text-sm text-background/70">
          {company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;