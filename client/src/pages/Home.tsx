import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle, Globe2, Lock, Search, Shield, TrendingUp, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function Home() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Lock,
      titleKey: 'services.confidentiality.title',
      descKey: 'services.confidentiality.description',
    },
    {
      icon: Shield,
      titleKey: 'services.kyc.title',
      descKey: 'services.kyc.description',
    },
    {
      icon: Search,
      titleKey: 'services.matching.title',
      descKey: 'services.matching.description',
    },
    {
      icon: Globe2,
      titleKey: 'services.global.title',
      descKey: 'services.global.description',
    },
  ];

  const stats = [
    { value: "€2.5B+", label: "Portfolio Value" },
    { value: "500+", label: "Exclusive Properties" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-luxury opacity-5"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button size="lg" className="text-lg px-8 py-6 shadow-luxury">
                  {t('hero.cta')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-gold hover:bg-primary/10"
                >
                  {t('hero.ctaSecondary')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="shadow-luxury hover:shadow-luxury-lg transition-all duration-300 border-border hover:border-primary"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      {t(service.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {t(service.descKey)}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose LF Capital
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We specialize in connecting high-net-worth individuals with exceptional properties while maintaining absolute discretion. Our rigorous verification process ensures that every transaction is secure and every client is qualified.
              </p>
              <div className="space-y-4">
                {[
                  "Absolute confidentiality and discretion",
                  "Verified clients through KYC and proof of funds",
                  "Curated property portfolio",
                  "Personalized service and expert guidance",
                  "Global network of exclusive listings",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-luxury shadow-luxury-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 className="w-32 h-32 text-primary opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Users,
                title: "Complete Verification",
                description: "Submit your KYC documents and proof of funds to access our exclusive property portfolio.",
              },
              {
                step: "02",
                icon: Search,
                title: "Personalized Matching",
                description: "Our team curates properties that match your exact requirements and investment goals.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Secure Transaction",
                description: "Complete your purchase with full legal support and absolute confidentiality.",
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-luxury">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join our exclusive network of high-net-worth individuals and access the world's most prestigious properties.
          </p>
          <Link href="/properties">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-6 shadow-luxury-lg"
            >
              Explore Properties
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gradient-gold mb-4">
                LF CAPITAL
              </div>
              <p className="text-muted-foreground">
                Exclusive real estate for discerning clients worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/properties"><a className="block text-muted-foreground hover:text-primary">Properties</a></Link>
                <Link href="/about"><a className="block text-muted-foreground hover:text-primary">About Us</a></Link>
                <Link href="/contact"><a className="block text-muted-foreground hover:text-primary">Contact</a></Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary">Buy Property</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Sell Property</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Consultation</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary">Privacy Policy</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Terms of Service</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 LF CAPITAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
