import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Target,
  BarChart3,
  TrendingUp,
  Rocket,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Filter,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">Native Digi</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
              Results
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
              Why Work with Us
            </a>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-background">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 text-sm">
              Speed to Result
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Digital marketing strategies.
              <br />
              Real-world impact.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              {/* Escaped quotes and apostrophes for ESLint compliance */}
              Native Digi is a full‑service digital marketing agency that helps modern companies grow—faster and more
              predictably—by combining human strategy with practical AI. We plan, build, and optimize the end‑to‑end
              growth stack: brand, websites, content, SEO, media, and revenue automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 px-4 bg-card relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge variant="secondary" className="mb-4 text-sm text-primary">
                RESULTS-DRIVEN SOLUTIONS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We build strategies that{" "}
                <span className="relative">
                  attract, convert, and keep
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>
                </span>{" "}
                customers coming back.
              </h2>
              <p className="text-xl text-muted-foreground">
                We design solutions that take your biggest frustrations and turn them into your biggest wins, all while{" "}
                <strong>delivering the ROI you&apos;ve been looking for.</strong>
              </p>
            </div>
            <div className="flex items-center justify-center">
              {/* Replaced img tag with Next.js Image component */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NTD-Subject-AI-chess-pieces-on-red-1024x1024-SGllPbvyGoaArfw50rZjGIeV8JfNVN.png"
                alt="AI chess pieces representing strategic digital marketing"
                width={400}
                height={400}
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                pretitle: "Strategy & Foundations",
                title: "Get Your House in Order",
                description:
                  "Before we build anything, let&apos;s figure out what you actually need and where you&apos;re going.",
                bullets: [
                  "Figure out your digital strategy (no more throwing stuff at the wall)",
                  "Get you ready for AI (practical stuff, not sci-fi dreams)",
                  "Nail your brand messaging (so people actually get what you do)",
                  "Set up tracking that makes sense (goodbye, data black holes)",
                  "Build you a roadmap with real milestones (not just &quot;increase awareness by 50%&quot;)",
                ],
              },
              {
                icon: <Zap className="h-8 w-8" />,
                pretitle: "Experience & Conversion",
                title: "Make Your Website Actually Work",
                description: "Your site should turn visitors into customers, not just look pretty.",
                bullets: [
                  "Design websites that convert (every page has a job to do)",
                  "Write copy that people actually want to read",
                  "Build sites that load fast and work on phones",
                  "Create landing pages that don&apos;t suck",
                  "Test everything (because hunches don&apos;t pay the bills)",
                ],
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                pretitle: "Demand & Content",
                title: "Get Found and Stay Top of Mind",
                description: "Create content that brings the right people to you—and keeps them coming back.",
                bullets: [
                  "SEO that actually works (not just keyword stuffing)",
                  "Content marketing that people share",
                  "Social media that doesn&apos;t feel like shouting into the void",
                  "Paid ads that generate real customers (not just clicks)",
                  "Partner with influencers who actually influence your audience",
                ],
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                pretitle: "Revenue Systems",
                title: "Turn Leads into Customers on Autopilot",
                description: "Stop losing leads in spreadsheets and start nurturing them into paying customers.",
                bullets: [
                  "Set up automation that feels human (not robotic)",
                  "Build lead generation that works while you sleep",
                  "Create email sequences people actually open",
                  "Connect your CRM so nothing falls through cracks",
                  "Build data pipelines that give you real insights",
                ],
              },
              {
                icon: <Users className="h-8 w-8" />,
                pretitle: "Reputation & Advocacy",
                title: "Turn Customers into Your Marketing Team",
                description: "Happy customers are your best marketing channel—let&apos;s make them work for you.",
                bullets: [
                  "Get you more reviews (the good kind)",
                  "Manage your reputation (before problems become PR nightmares)",
                  "Build referral systems that actually get used",
                  "Create communities where your customers become your biggest fans",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:border-muted-foreground/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">{service.pretitle}</p>
                  <CardTitle className="text-3xl md:text-4xl mb-3">{service.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.bullets.map((item, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">What our clients say</h2>
            <div className="flex gap-2">
              <button className="p-3 rounded-full border border-border hover:bg-card transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-3 rounded-full border border-border hover:bg-card transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border border-border bg-card p-8">
              <CardContent className="p-0">
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  {/* Escaped quotes for ESLint compliance */}
                  &quot;We&apos;ve seen remarkable results since integrating AI solutions from this company into our
                  workflows. Their computer vision technology has enabled us to automate tasks and extract valuable
                  insights from visual data.&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <span className="text-sm font-semibold">RK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Rachel Kim</p>
                      <p className="text-sm text-muted-foreground">Rachel Kim, Greenish</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground text-sm">Greenish</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card p-8">
              <CardContent className="p-0">
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  {/* Escaped quotes for ESLint compliance */}
                  &quot;We&apos;ve seen remarkable results since integrating AI solutions from this company into our
                  workflows. Their computer vision technology has enabled us to automate tasks and extract valuable
                  insights from visual data.&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <span className="text-sm font-semibold">DP</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">David Patel</p>
                      <p className="text-sm text-muted-foreground">David Patel, Hues</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground text-sm">Hues</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Project Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real outcomes from real clients. Here&apos;s what happens when strategy, execution, and technology work
              together.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4 p-2 bg-card rounded-lg border border-border">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
                All Projects
              </button>
              <button className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                B2B SaaS
              </button>
              <button className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                E-commerce
              </button>
              <button className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                Tech
              </button>
              <button className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                Healthcare
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Caratoken",
                image: "/projects/placeholder-ig38a.png",
                website: "https://caratoken.com",
              },
              {
                title: "SingularityNET",
                image: "/projects/ai-network-platform-blue.png",
                website: "https://singularitynet.io",
              },
              {
                title: "Block House",
                image: "/projects/blockchain-house-green.png",
                website: "https://blockhouse.com",
              },
              {
                title: "SAIACONF",
                image: "/projects/ai-conference-colorful.png",
                website: "https://saiaconf.com",
              },
              {
                title: "NERD CONF",
                image: "/projects/tech-conference-crowd-indoor.png",
                website: "https://nerdconf.com",
              },
              {
                title: "WEB3MAKERS",
                image: "/projects/web3-makers-conference-audience.png",
                website: "https://web3makers.com",
              },
              {
                title: "TechFlow",
                image: "/projects/placeholder-ig38a.png",
                website: "https://techflow.com",
              },
              {
                title: "DataSync",
                image: "/projects/ai-network-platform-blue.png",
                website: "https://datasync.com",
              },
              {
                title: "CloudVault",
                image: "/projects/blockchain-house-green.png",
                website: "https://cloudvault.com",
              },
              {
                title: "AI Summit",
                image: "/projects/ai-conference-colorful.png",
                website: "https://aisummit.com",
              },
              {
                title: "DevCon",
                image: "/projects/tech-conference-crowd-indoor.png",
                website: "https://devcon.com",
              },
              {
                title: "CodeCraft",
                image: "/projects/web3-makers-conference-audience.png",
                website: "https://codecraft.com",
              },
            ].map((project, index) => (
              <a key={index} href={project.website} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} project`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold text-center">{project.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The experts behind your marketing transformation. Our team combines decades of experience with
              cutting-edge AI expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                image: "/team/professional-woman-dark-hair-smiling.png",
                bio: "15+ years in digital marketing strategy and AI implementation",
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Strategy",
                image: "/team/professional-bearded-man.png",
                bio: "Former McKinsey consultant specializing in growth marketing",
              },
              {
                name: "Emily Watson",
                role: "Creative Director",
                image: "/team/blonde-creative-professional.png",
                bio: "Award-winning designer with expertise in conversion optimization",
              },
              {
                name: "David Kim",
                role: "Technical Lead",
                image: "/team/asian-tech-professional.png",
                bio: "Full-stack developer and AI automation specialist",
              },
              {
                name: "Lisa Thompson",
                role: "Client Success",
                image: "/team/smiling-redhead-professional.png",
                bio: "Dedicated to ensuring every client achieves their growth goals",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section id="solutions" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Work With Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here&apos;s what makes working with us different from other agencies and why our clients stick around.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "We Actually Get Your Business",
                description:
                  "We take time to understand your industry, customers, and what makes your business tick before we touch anything.",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "No More Vendor Juggling",
                description:
                  "Stop managing five different agencies. We handle everything under one roof so nothing falls through the cracks.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "AI That Actually Works",
                description:
                  "We use AI to do the heavy lifting so you can focus on running your business, not managing marketing tools.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Leads That Actually Convert",
                description:
                  "We don&apos;t just drive traffic—we bring you people who are ready to buy what you&apos;re selling.",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "You&apos;ll Know What&apos;s Working",
                description:
                  "Clear reporting that shows exactly where your money is going and what results you&apos;re getting.",
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "We Move Fast",
                description:
                  "No six-month strategy phases. We start getting you results while we&apos;re building the bigger picture.",
              },
            ].map((solution, index) => (
              <Card
                key={index}
                className="group hover:border-muted-foreground/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Heading, Description, Contact Details */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let&apos;s discuss how we can transform your marketing from fragmented to integrated using our AI‑first
                approach. Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📧 hello@nativedigi.com</p>
                    <p>📞 (555) 123-4567</p>
                    <p>📍 Austin, TX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium mb-2">
                        Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        className="w-full px-4 py-3 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      >
                        <option value="">Select your role</option>
                        <option value="ceo">CEO/Founder</option>
                        <option value="cmo">CMO</option>
                        <option value="vp-marketing">VP of Marketing</option>
                        <option value="marketing-director">Marketing Director</option>
                        <option value="operations">Operations Manager</option>
                        <option value="business-dev">Business Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3">
                        What are your biggest marketing challenges? (Select all that apply) *
                      </label>
                      <div className="space-y-3">
                        {[
                          "I&apos;m not getting enough quality leads",
                          "My website isn&apos;t converting visitors into customers",
                          "My content isn&apos;t bringing in the right people",
                          "I&apos;m losing leads because my follow-up is inconsistent",
                          "My paid ads aren&apos;t generating real customers",
                          "My social media feels like shouting into the void",
                        ].map((challenge, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              id={`challenge-${index}`}
                              name="challenges"
                              value={challenge}
                              className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
                            />
                            <label htmlFor={`challenge-${index}`} className="text-sm text-muted-foreground">
                              {challenge}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="additionalDetails" className="block text-sm font-medium mb-2">
                        Any other important details we should know?
                      </label>
                      <textarea
                        id="additionalDetails"
                        name="additionalDetails"
                        rows={4}
                        className="w-full px-4 py-3 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your goals, timeline, budget considerations, or anything else that would help us understand your needs..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        We respond within 24 hours • No spam, ever • Your information is secure
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-border bg-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-foreground mb-4">Native Digi</div>
              <p className="text-muted-foreground mb-6">
                Full‑service digital marketing agency combining human strategy with practical AI to make
                high‑performance marketing accessible for modern companies.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#results" className="hover:text-foreground transition-colors">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-foreground transition-colors">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-foreground transition-colors">
                    Why Work With Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-muted-foreground mb-4">Get the latest marketing insights and tips.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-md text-sm"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Native Digi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
