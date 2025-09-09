import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Vizionary",
      description: "Excel Analytics Platform built with JavaScript for data visualization and analysis.",
      technologies: ["JavaScript", "Excel API", "Data Analytics"],
      githubUrl: "https://github.com/rexjain27/Vizionary",
      isPrivate: true,
      featured: true,
    },
    {
      title: "Urban Nest",
      description: "Real estate platform for property management and listings with modern UI/UX.",
      technologies: ["TypeScript", "React", "Node.js"],
      githubUrl: "https://github.com/rexjain27/urban-nest",
      isPrivate: true,
      featured: true,
    },
    {
      title: "Odyssey 2025",
      description: "University event management system with comprehensive features.",
      technologies: ["TypeScript", "Next.js", "Database"],
      githubUrl: "https://github.com/rexjain27/odyssey25",
      isPrivate: true,
      featured: true,
    },
    {
      title: "Amity Admin Dashboard",
      description: "Student dashboard portal for university administration and management.",
      technologies: ["JavaScript", "React", "Dashboard"],
      githubUrl: "https://github.com/rexjain27/amidash",
      isPrivate: false,
      featured: false,
    },
    {
      title: "Scinovation Website",
      description: "Event website for university science innovation showcase.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/rexjain27/Scinovation.github.io",
      isPrivate: false,
      featured: false,
    },
    {
      title: "Bothra Hotels",
      description: "Hotel management and booking system with modern interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/rexjain27/Bothra-Hotels.github.io",
      isPrivate: false,
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work in web development, data analytics, and UI/UX design.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.isPrivate && (
                    <Badge variant="outline" className="text-xs">
                      Private
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {!project.isPrivate && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl.replace("github.com", "github.io")}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-heading font-semibold text-lg">{project.title}</h4>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/rexjain27" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
