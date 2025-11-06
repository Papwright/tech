import { useState } from "react";
import { Code, Lightbulb, GraduationCap, Trophy, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EventRegistration from "./EventRegistration";
import workshopImage from "@/assets/tech2.jpg";
import mentorshipImage from "@/assets/tech3.jpg";
import leadershipImage from "@/assets/tech4.jpg";

const Programs = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  const handleRegister = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setIsRegistrationOpen(true);
  };

  const programs = [
    {
      icon: Code,
      title: "Coding Workshops",
      description:
        "Hands-on workshops teaching programming fundamentals, web development, and mobile app creation to beginners and intermediate learners.",
      image: workshopImage,
      tags: ["Beginner Friendly", "Monthly", "Free"],
      details: "Our workshops cover HTML, CSS, JavaScript, Python, and more. Sessions run every Saturday from 9 AM to 4 PM.",
    },
    {
      icon: Lightbulb,
      title: "Tech Mentorship Program",
      description:
        "One-on-one mentorship pairing experienced tech professionals with aspiring female developers to guide their career journey.",
      image: mentorshipImage,
      tags: ["Career Growth", "Networking", "Ongoing"],
      details: "6-month mentorship program with monthly check-ins, project reviews, and career guidance from industry experts.",
    },
    {
      icon: GraduationCap,
      title: "Leadership & Innovation Bootcamp",
      description:
        "Advanced training in tech leadership, entrepreneurship, and innovation to prepare women for leadership roles in technology.",
      image: leadershipImage,
      tags: ["Advanced", "Certification", "Quarterly"],
      details: "Intensive 8-week program covering product management, team leadership, and startup fundamentals.",
    },
  ];

  const upcomingEvents = [
    {
      title: "TechPearl Annual Hackathon 2024",
      date: "December 15-17, 2024",
      location: "mHub Innovation Centre, Lilongwe",
      participants: "60+ participants",
      prize: "MWK 500,000 in prizes",
      description: "48-hour hackathon focused on solving local challenges through technology. Teams of 3-5 will compete to build innovative solutions.",
    },
    {
      title: "Web Development Bootcamp",
      date: "November 20-22, 2024",
      location: "Online & In-Person",
      participants: "40 spots available",
      prize: "Free",
      description: "3-day intensive workshop covering HTML, CSS, JavaScript, and React basics for complete beginners.",
    },
    {
      title: "Women in Tech Career Fair",
      date: "January 10, 2025",
      location: "Blantyre Conference Centre",
      participants: "200+ attendees expected",
      prize: "Free Entry",
      description: "Connect with tech companies, attend career workshops, and network with industry professionals.",
    },
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of programs designed to support women at every
            stage of their tech journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-soft hover:shadow-glow transition-all duration-300 group"
            >
              {program.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-accent">
                  <program.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  onClick={() => handleRegister(program.title)}
                  className="w-full"
                  variant="outline"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-primary" />
              Upcoming Events & Hackathons
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us at our upcoming events and hackathons. Network, learn, and compete!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Badge className="mb-2">
                      {event.title.includes("Hackathon") ? "Hackathon" : "Event"}
                    </Badge>
                    <h4 className="font-bold text-xl mb-3">{event.title}</h4>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Trophy className="w-4 h-4" />
                      <span>{event.prize}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <Button 
                    onClick={() => handleRegister(event.title)}
                    className="w-full"
                  >
                    Register for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">Event Registration</DialogTitle>
          </DialogHeader>
          <EventRegistration eventTitle={selectedProgram} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Programs;
