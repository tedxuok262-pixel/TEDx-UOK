import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export interface Speaker {
  id: number;
  name: string;
  title: string;
  talkTitle: string;
  image: string;
}

interface Props {
  speakers: Speaker[];
}

const Speakers = ({ speakers }: Props) => {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Featured Speakers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Meet the minds behind
              <br />
              the ideas
            </h2>
          </div>
          <Button variant="tedxSecondary" size="lg">
            View All Speakers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <article
              key={speaker.id}
              className="group bg-background border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {speaker.title}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Talk Title
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    {speaker.talkTitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
