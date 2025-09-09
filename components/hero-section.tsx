import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Rishabh Bothra
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">Full-Stack Developer & UI/UX Designer</p>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          A dedicated software developer, UI/UX designer, and tech enthusiast with expertise in full-stack development,
          robotics, AI, and entrepreneurship. Currently pursuing B.Tech CSE at Amity University Rajasthan.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Bikaner, Rajasthan</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 8955226422</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Rishabhjain27082004@gmail.com</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8 py-3 text-base font-semibold">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-base font-semibold bg-transparent">
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/rexjain27" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/rishabhjain27" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:Rishabhjain27082004@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
