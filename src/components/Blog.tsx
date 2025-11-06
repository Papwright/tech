import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import tech4 from "@/assets/tech4.jpg";
import tech5 from "@/assets/tech5.jpg";
import tech6 from "@/assets/tech6.jpg";
import tech7 from "@/assets/tech7.jpg";
import tech8 from "@/assets/tech8.jpg";
import tech9 from "@/assets/tech9.jpg";

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  
  const posts = [
    {
      id: 1,
      title: "From Zero to Hero: Grace Banda's Journey to Software Engineer",
      excerpt:
        "How Grace went from never touching a computer to landing her first software engineering role at Airtel Malawi in just 12 months through our bootcamp program.",
      category: "Success Story",
      author: "TechPearl Team",
      date: "Nov 1, 2024",
      image: tech4,
      featured: true,
    },
    {
      id: 2,
      title: "5 Essential Tips for Women Starting Their Tech Journey",
      excerpt:
        "Practical advice from successful women in tech: building confidence, finding mentors, continuous learning, and joining supportive communities.",
      category: "Tech Insights",
      author: "Mercy Phiri",
      date: "Oct 28, 2024",
      image: tech5,
      featured: false,
    },
    {
      id: 3,
      title: "TechPearl Hackathon 2024: Innovation That Changes Lives",
      excerpt:
        "50+ women developers created 15 innovative solutions to local challenges. Meet the winning teams and their groundbreaking healthcare app for rural communities.",
      category: "Event Update",
      author: "TechPearl Team",
      date: "Oct 20, 2024",
      image: tech6,
      featured: true,
    },
    {
      id: 4,
      title: "Breaking Barriers: Linda Kachale's Rise to Tech Lead",
      excerpt:
        "After 8 months in our mentorship program, Linda became the first female tech lead at her company. Here's how mentorship transformed her career trajectory.",
      category: "Success Story",
      author: "Linda Kachale",
      date: "Oct 15, 2024",
      image: tech7,
      featured: true,
    },
    {
      id: 5,
      title: "Why Malawi Needs More Women in Technology Now",
      excerpt:
        "Exploring the gender gap in tech and how TechPearl MW is working to create opportunities for the next generation of female innovators.",
      category: "Tech Insights",
      author: "Thandiwe Mwale",
      date: "Oct 10, 2024",
      image: tech8,
      featured: false,
    },
    {
      id: 6,
      title: "Alumni Spotlight: 10 Women Who Are Changing Tech in Malawi",
      excerpt:
        "Celebrating our alumni who are now working at Microsoft, Airtel, TNM, and leading their own tech startups across Malawi.",
      category: "Community",
      author: "TechPearl Team",
      date: "Sep 25, 2024",
      image: tech9,
      featured: true,
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            News & <span className="text-primary">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with success stories, tech insights, and community news
            from TechPearl MW.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {(showAll ? posts : posts.slice(0, 4)).map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-none shadow-soft hover:shadow-glow transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="outline" className="group/btn" onClick={() => alert(`Reading: ${post.title}`)}>
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All Posts"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
