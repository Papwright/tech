import { Target, Eye, Users, Award, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create an inclusive tech ecosystem where girls and women in Malawi have equal access to technology education, mentorship, and career opportunities.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A future where Malawian women are leading innovators and decision-makers in the technology sector, driving positive change in their communities.",
    },
    {
      icon: Users,
      title: "Our Community",
      description:
        "A vibrant network of mentors, learners, and tech enthusiasts committed to breaking barriers and building a more diverse tech industry.",
    },
  ];

  const team = [
    {
      name: "Thandiwe Mwale",
      role: "Founder & Executive Director",
      bio: "Software engineer with 10+ years experience, passionate about empowering women in tech.",
    },
    {
      name: "Grace Banda",
      role: "Programs Director",
      bio: "Education specialist focused on creating accessible tech training programs.",
    },
    {
      name: "Mercy Phiri",
      role: "Community Manager",
      bio: "Building connections and fostering collaboration within our tech community.",
    },
    {
      name: "Linda Kachale",
      role: "Mentorship Coordinator",
      bio: "Connecting aspiring technologists with experienced industry professionals.",
    },
  ];

  const partners = [
    { name: "Microsoft", type: "Technology Partner" },
    { name: "Google for Developers", type: "Education Partner" },
    { name: "TNM", type: "Connectivity Partner" },
    { name: "Airtel Malawi", type: "Telecommunications Partner" },
    { name: "Malawi University of Science and Technology", type: "Academic Partner" },
    { name: "mHub", type: "Innovation Partner" },
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">TechPearl MW</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to transform the tech landscape in Malawi by
            empowering women and girls with the skills, confidence, and
            connections they need to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-soft hover:shadow-glow transition-all duration-300 bg-card"
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Our Team
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals driving TechPearl MW's mission forward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Handshake className="w-8 h-8 text-primary" />
              Our Partners
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with leading organizations to maximize our impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-2">{partner.name}</h4>
                  <Badge variant="secondary">{partner.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
