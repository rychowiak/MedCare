import CardComponent from "@/components/cardComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardAction, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
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
    { title: "Create Your Profile", content: "Sign up and complete your profile to get personalized healthcare recommendations and services." },
    { title: "Book Appointments", content: "Browse doctor profiles, check availability, and book appointments that fit your schedule." },
    { title: "Video Consultation", content: "Connect with doctors through secure, high-quality video consultations from the comfort of your home." },
  ]

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
            {cardData.map((data , index) => {
              return (
              <Card key={index}>
                <CardHeader>
                  <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                    <User className="h-6 w-6 text-emerald-400"></User>
                  </div>
                  <CardTitle>{data.title}</CardTitle>
                  <CardAction></CardAction>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                      {data.content}
                  </p>
                </CardContent>
              </Card>)
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
