import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Badge
               variant={"outline"}
               className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                Healthcare made Simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"> Connect with doctors <br /> <span className="gradient-title" >anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">Book appointments, consult via video and manage your healthcare journey all in one secure platform</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size={"lg"} 
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                <Link href={"/onboarding"}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                size={"lg"} 
                variant={"outline"}
                className="bg-emerald-700/30 hover:bg-muted/80"
              >
                <Link href={"/doctors"}>
                  Find Doctors <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <Image width={100} height={100} src={"/banner2.png"} alt="Doctor Consultation" />
          </div>
        </div>
      </section>
    </div>
  );
}
