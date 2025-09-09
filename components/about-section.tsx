import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Award, Users } from "lucide-react"

export default function AboutSection() {
  const achievements = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "B.Tech CSE at Amity University Rajasthan",
      detail: "CGPA: 5.33 | Expected 2026",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Experience",
      description: "5+ Internships & Leadership Roles",
      detail: "From ML/AI to UI/UX Design",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certifications",
      description: "Walmart USA, Pearl Academy & More",
      detail: "Advanced Software Engineering",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leadership",
      description: "Founder of JSP Coders",
      detail: "Website Committee Head & More",
    },
  ]

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Python",
    "TensorFlow",
    "React Native",
    "Figma",
    "Git",
    "HTML/CSS",
    "TypeScript",
    "Next.js",
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about problem-solving, coding, and designing intuitive user experiences. Actively engaged in
            hackathons, coding competitions, and technological innovations.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <div className="text-primary">{achievement.icon}</div>
                </div>
                <CardTitle className="text-lg font-heading">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">{achievement.description}</p>
                <p className="text-sm text-muted-foreground">{achievement.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
