import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Heart, Globe, Users, Award } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { t } = useTranslation();

  // Propiedades showcase con ubicaciones globales
  const showcaseProperties = [
    {
      id: 1,
      title: t("home.properties.toscana.title"),
      location: t("home.properties.toscana.location"),
      price: "€8,500,000",
      beds: 8,
      baths: 7,
      sqft: "12,000",
      image: "/property-toscana.jpg",
      status: "SOLD"
    },
    {
      id: 2,
      title: t("home.properties.barcelona.title"),
      location: t("home.properties.barcelona.location"),
      price: "€6,200,000",
      beds: 5,
      baths: 4,
      sqft: "4,500",
      image: "/property-barcelona.jpg",
      status: "SOLD"
    },
    {
      id: 3,
      title: t("home.properties.madrid.title"),
      location: t("home.properties.madrid.location"),
      price: "€9,800,000",
      beds: 7,
      baths: 6,
      sqft: "8,000",
      image: "/property-madrid.jpg",
      status: "SOLD"
    },
    {
      id: 4,
      title: t("home.properties.london.title"),
      location: t("home.properties.london.location"),
      price: "£15,500,000",
      beds: 6,
      baths: 5,
      sqft: "6,500",
      image: "/property-london.jpg",
      status: "SOLD"
    },
    {
      id: 5,
      title: t("home.properties.seoul.title"),
      location: t("home.properties.seoul.location"),
      price: "$12,000,000",
      beds: 4,
      baths: 4,
      sqft: "5,000",
      image: "/property-seoul.jpg",
      status: "SOLD"
    },
    {
      id: 6,
      title: t("home.properties.tokyo.title"),
      location: t("home.properties.tokyo.location"),
      price: "¥1,800,000,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image: "/property-tokyo.jpg",
      status: "SOLD"
    },
    {
      id: 7,
      title: t("home.properties.singapore.title"),
      location: t("home.properties.singapore.location"),
      price: "$18,500,000",
      beds: 4,
      baths: 5,
      sqft: "6,000",
      image: "/property-singapore.jpg",
      status: "SOLD"
    },
    {
      id: 8,
      title: t("home.properties.begur.title"),
      location: t("home.properties.begur.location"),
      price: "€7,200,000",
      beds: 6,
      baths: 6,
      sqft: "7,500",
      image: "/property-begur.jpg",
      status: "SOLD"
    }
  ];

  // Valores discretos y humildes (sin números ostentosos)
  const values = [
    { 
      icon: Award,
      value: t("home.values.since.value"),
      label: t("home.values.since.label")
    },
    { 
      icon: Globe,
      value: t("home.values.network.value"),
      label: t("home.values.network.label")
    },
    { 
      icon: Users,
      value: t("home.values.satisfaction.value"),
      label: t("home.values.satisfaction.label")
    }
  ];

  const services = [
    {
      icon: Shield,
      title: t("home.services.confidentiality.title"),
      description: t("home.services.confidentiality.desc")
    },
    {
      icon: Lock,
      title: t("home.services.verification.title"),
      description: t("home.services.verification.desc")
    },
    {
      icon: Eye,
      title: t("home.services.offmarket.title"),
      description: t("home.services.offmarket.desc")
    },
    {
      icon: Heart,
      title: t("home.services.altruistic.title"),
      description: t("home.services.altruistic.desc")
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-luxury-nyc.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
            {t("home.hero.title1")}<br />
            <span className="text-gold">{t("home.hero.title2")}</span><br />
            {t("home.hero.title3")}
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-12 max-w-3xl mx-auto font-light">
            {t("home.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-6 text-lg"
            >
              {t("home.hero.cta1")}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-cream text-cream hover:bg-cream/10 font-semibold px-8 py-6 text-lg"
            >
              {t("home.hero.cta2")}
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section (Reemplaza Stats ostentosas) */}
      <section className="py-20 bg-charcoal">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <div className="font-serif text-4xl font-bold text-cream mb-2">
                    {item.value}
                  </div>
                  <div className="text-cream/70 text-lg">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase Properties */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("home.showcase.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("home.showcase.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {showcaseProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-charcoal px-4 py-2 rounded-full font-semibold text-sm">
                    {property.status}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {property.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {property.location}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-gold">
                      {property.price}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground border-t border-border pt-4">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Collection Teaser */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="container text-center">
          <Lock className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {t("home.private.title")}
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto mb-10">
            {t("home.private.subtitle")}
          </p>
          <Button 
            size="lg"
            className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-6 text-lg"
          >
            {t("home.private.cta")}
          </Button>
        </div>
      </section>

      {/* How We Protect Your Privacy */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("home.protection.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("home.protection.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                  <Icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Altruistic Project Section */}
      <section className="py-24 bg-gradient-to-br from-gold/10 to-charcoal/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("home.altruistic.title")}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t("home.altruistic.description")}
            </p>
            <Link href="/altruistic">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold px-8 py-6 text-lg"
              >
                {t("home.altruistic.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="container text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {t("home.finalCta.title")}
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto mb-10">
            {t("home.finalCta.subtitle")}
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-6 text-lg"
            >
              {t("home.finalCta.cta")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
