import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Vedic Mathematics Research Intern",
      company: "MG Technical",
      period: "2025",
      location: "Remote",
      description: "Built a Vedic-math-based chatbot using DL/ML algorithms with TensorFlow & Colab.",
      type: "Internship",
    },
    {
      title: "Jr. Software Development Intern",
      company: "BlueStocks Finance",
      period: "2025",
      location: "Remote",
      description: "Enhanced client apps by developing UI/UX components and transaction features.",
      type: "Internship",
    },
    {
      title: "Data Science & ML Intern",
      company: "YBI Foundation",
      period: "2024",
      location: "Remote",
      description: "Applied ML models on real-world datasets using TensorFlow & Jupyter.",
      type: "Internship",
    },
    {
      title: "Head of Development",
      company: "Amity Event Management",
      period: "2023 - Present",
      location: "Jaipur",
      description: "Leading technical development and website operations for university events.",
      type: "Leadership",
    },
    {
      title: "Co-Founder",
      company: "JSP Coders",
      period: "2019 - Present",
      location: "Remote",
      description: "Driving web and mobile app projects, from concept to deployment.",
      type: "Leadership",
    },
    {
      title: "UI/UX Designer",
      company: "Imoska Labs",
      period: "2021",
      location: "Remote",
      description: "Designed and tested client-facing applications for usability and performance.",
      type: "Internship",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Experience & Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A journey through various roles in software development, research, and leadership positions.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="font-heading text-xl">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant={exp.type === "Leadership" ? "default" : "secondary"}>{exp.type}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
