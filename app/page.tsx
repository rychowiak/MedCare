import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  const cardData = [
    {
      icon: <User className="h-6 w-6 text-emerald-400" />,
      title: "Create Your Profile",
      content:
        "Sign up and complete your profile to get personalized healthcare recommendations and services.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-emerald-400" />,
      title: "Book Appointments",
      content:
        "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
    },
    {
      icon: <Video className="h-6 w-6 text-emerald-400" />,
      title: "Video Consultation",
      content:
        "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
      title: "Consultation Credits",
      content:
        "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      title: "Verified Doctors",
      content:
        "All healthcare providers are carefully vetted and verified to ensure quality care.",
    },
    {
      icon: <FileText className="h-6 w-6 text-emerald-400" />,
      title: "Medical Documentation",
      content:
        "Access and manage your appointment history, doctor's notes, and medical recommendations.",
    },
  ];

  const testimonials = [
    {
      initials: "SP",
      name: "Sarah P.",
      role: "Patient",
      quote:
        "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
    },
    {
      initials: "DR",
      name: "Dr. Robert M.",
      role: "Cardiologist",
      quote:
        "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
    },
    {
      initials: "JT",
      name: "James T.",
      role: "Patient",
      quote:
        "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
    },
  ];

  const creditBenefits = [
    "Each consultation requires <strong class='text-emerald-400'>2 credits</strong> regardless of duration",
    "Credits <strong class='text-emerald-400'>never expire</strong> - use them whenever you need",
    "Monthly subscriptions give you <strong class='text-emerald-400'>fresh credits every month</strong>",
    "Cancel or change your subscription <strong class='text-emerald-400'>anytime</strong> without penalties",
  ];

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                Healthcare made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with doctors <br />
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-700/30 hover:bg-muted/80"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400] lg:h-[500] rounded-xl overflow-hidden">
              <Image
                src={"/banner2.png"}
                alt="Doctor Consultation"
                className="object-contain md:pt-14 rounded-xl"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2x1 mx-auto">
              Out platform makes healthcare accesible with just a few clicks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((data, index) => {
              return (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                      {data.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {data.title}
                    </CardTitle>
                    <CardAction></CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{data.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4">
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2x1 mx-auto">
              Choose the perfect consultation package that fits your healthcare
            </p>
          </div>

          <div>
            {/* Pricing Table */}

            <Card className="mt-12 bg-muted/20 border-emerald-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400"></Stethoscope>
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefits, index) => {
                    return (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-emerald-400" />
                        </div>
                        <p
                          className="text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: benefits }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant={"outline"}
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2x1 mx-auto">
              Hear from patients and doctors who use our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((data, index) => {
              return (
                <Card
                  key={index}
                  className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4">
                        <span className="text-emerald-400 font-bold">
                          {data.initials}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {data.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {data.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;{data.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/30">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                  quas deserunt recusandae ea dolore natus. Officiis eius,
                  facilis aut et sunt consequuntur fugit, ab quasi minima,
                  laborum praesentium illo error.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size={"lg"}
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                    asChild
                  >
                    <Link href={"/sign-up"}>Sign up now</Link>
                  </Button>
                  <Button
                    asChild
                    variant={"outline"}
                  >
                    <Link href={"/pricing"}>View Pricing</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
