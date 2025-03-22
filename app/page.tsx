import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Code,
  Globe,
  Briefcase,
  User,
  MessageSquare,
  FileText,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">PORTFOLIO</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="#about" className="hidden sm:inline-block px-3 py-2 text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="#skills" className="hidden sm:inline-block px-3 py-2 text-sm font-medium hover:text-primary">
                Skills
              </Link>
              <Link
                href="#projects"
                className="hidden sm:inline-block px-3 py-2 text-sm font-medium hover:text-primary"
              >
                Projects
              </Link>
              <Link href="#contact" className="hidden sm:inline-block px-3 py-2 text-sm font-medium hover:text-primary">
                Contact
              </Link>
              <Button variant="default" size="sm">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <div className="space-y-4 md:w-1/2">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-primary">Tamana Rani</span>
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl">
                Full Stack Developer specializing in building exceptional digital experiences.
              </p>
              <div className="flex gap-4">
                <Link href="#projects">
                  <Button>
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="/Tamana CV.PDF" download="My_Resume.pdf">
                  <Button variant="outline">
                    Download CV <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>

              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/tamana869940" className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/tamana-rani-596a6b300/" className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary">
                <Image
                  src="/tamana .jpg?height=320&width=320"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-900 py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <User className="mr-2 h-6 w-6 text-primary" /> About Me
                </h2>
                <p className="text-gray-300 mb-4">
                  I'm a passionate Full Stack Developer with expertise in building responsive web applications. With a
                  strong foundation in both frontend and backend technologies, I create seamless user experiences that
                  solve real-world problems.
                </p>
                <p className="text-gray-300 mb-4">
                  My journey in web development started 1 years ago, and since then, I've worked on various projects
                  ranging from small business websites to complex enterprise applications.
                </p>
                <p className="text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through technical blogs.
                </p>
              </div>
                  </div>
                  </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 flex items-center">
              <Code className="mr-2 h-6 w-6 text-primary" /> My Skills
            </h2>

            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="tools">Tools & Others</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "Vue.js"].map(
                    (skill) => (
                      <Card key={skill} className="bg-gray-800 border-gray-700">
                        <CardContent className="flex items-center justify-center p-6">
                          <span>{skill}</span>
                        </CardContent>
                      </Card>
                    ),
                  )}
                </div>
              </TabsContent>
              <TabsContent value="backend" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "GraphQL", "REST API", "Python"].map(
                    (skill) => (
                      <Card key={skill} className="bg-gray-800 border-gray-700">
                        <CardContent className="flex items-center justify-center p-6">
                          <span>{skill}</span>
                        </CardContent>
                      </Card>
                    ),
                  )}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Git", "GitHub", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Jest"].map((skill) => (
                    <Card key={skill} className="bg-gray-800 border-gray-700">
                      <CardContent className="flex items-center justify-center p-6">
                        <span>{skill}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-gray-900 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" /> My Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((project) => (
                <Card key={project} className="bg-gray-800 border-gray-700 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                      alt={`Project ${project}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                    <p className="text-gray-400 mb-4">
                      A brief description of the project, what technologies were used, and what problems it solves.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs">MongoDB</span>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <Globe className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 flex items-center">
              <MessageSquare className="mr-2 h-6 w-6 text-primary" /> Get In Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-300 mb-6">
                I am a passionate Full-Stack Web Developer with expertise in building advanced and feature-rich web applications. With a strong command over the MERN stack (MongoDB, Express.js, React.js, Node.js), I specialize in creating highly interactive and visually stunning user interfaces. My focus is on developing scalable, real-time, and futuristic applications with seamless user experiences. I thrive on tackling complex challenges and pushing the boundaries of web development with cutting-edge UI/UX, animations, and high-performance solutions. 🚀
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>tamana869940@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <span>linkedin.com/in/tamana-rani-596a6b300</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3 text-primary" />
                    <span>github.com/tamana869940</span>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        type="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} Tamana Rani. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="github.com/tamana869940" className="text-gray-400 hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="linkedin.com/in/tamana-rani-596a6b300" className="text-gray-400 hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="tamana869940@gmail.com" className="text-gray-400 hover:text-primary">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

