import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Heart, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { t } = useTranslation();

  // Propiedades showcase (ejemplo - luego vendrán de la base de datos)
  const showcaseProperties = [
    {
      id: 1,
      title: "Oceanfront Villa - Dubai Palm",
      location: "Palm Jumeirah, Dubai, UAE",
      price: "$18,500,000",
      beds: 7,
      baths: 9,
      sqft: "15,000",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      status: "SOLD"
    },
    {
      id: 2,
      title: "Beachfront Estate - Marbella",
      location: "Golden Mile, Marbella, Spain",
      price: "$12,900,000",
      beds: 6,
      baths: 7,
      sqft: "12,500",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      status: "SOLD"
    },
    {
      id: 3,
      title: "Penthouse - Burj Khalifa",
      location: "Downtown Dubai, UAE",
      price: "$25,000,000",
      beds: 5,
      baths: 6,
      sqft: "10,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      status: "SOLD"
    }
  ];

  const stats = [
    { value: "$500M+", label: t("home.stats.transactions") || "In Transactions" },
    { value: "50+", label: t("home.stats.clients") || "UHNW Clients" },
    { value: "95%", label: t("home.stats.satisfaction") || "Satisfaction Rate" },
    { value: "15+", label: t("home.stats.countries") || "Countries" }
  ];

  const services = [
    {
      icon: Shield,
      title: t("home.services.confidentiality.title") || "Absolute Confidentiality",
      description: t("home.services.confidentiality.desc") || "Your privacy is our top priority. All transactions are handled with the utmost discretion."
    },
    {
      icon: Lock,
      title: t("home.services.verification.title") || "Verified Buyers Only",
      description: t("home.services.verification.desc") || "Rigorous KYC and proof of funds verification ensures serious buyers only."
    },
    {
      icon: Eye,
      title: t("home.services.offmarket.title") || "Off-Market Access",
      description: t("home.services.offmarket.desc") || "Exclusive access to properties never listed publicly, protecting seller privacy."
    },
    {
      icon: Heart,
      title: t("home.services.altruistic.title") || "Luxury with Purpose",
      description: t("home.services.altruistic.desc") || "Part of every transaction supports our mission to provide shelter for those in need."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
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
              className="border-2 border-cream text-cream hover:bg-cream hover:text-charcoal font-semibold px-8 py-6 text-lg"
            >
              {t("home.hero.cta2")}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal border-y border-gold/20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-cream/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Properties Section */}
      <section className="py-24 bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
              {t("home.showcase.title") || "Recent Success Stories"}
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              {t("home.showcase.subtitle") || "A glimpse of the exceptional properties we've successfully transacted"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-charcoal px-4 py-1 rounded-full text-sm font-semibold">
                    {property.status}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                    {property.title}
                  </h3>
                  <p className="text-charcoal/60 mb-4">{property.location}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-serif font-bold text-gold">
                      {property.price}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-charcoal/70">
                    <span>{property.beds} Beds</span>
                    <span>•</span>
                    <span>{property.baths} Baths</span>
                    <span>•</span>
                    <span>{property.sqft} SF</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Collection Teaser */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }} />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Lock className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
              {t("home.private.title") || "Private Collection"}
            </h2>
            <p className="text-xl text-cream/80 mb-8">
              {t("home.private.subtitle") || "Access our exclusive portfolio of off-market properties. Available only to verified buyers with proven financial capacity."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="flex items-center gap-2 text-cream/70">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span>{t("home.private.feature1") || "50+ Exclusive Listings"}</span>
              </div>
              <div className="flex items-center gap-2 text-cream/70">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span>{t("home.private.feature2") || "Verified Buyers Only"}</span>
              </div>
              <div className="flex items-center gap-2 text-cream/70">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span>{t("home.private.feature3") || "NDA Protected"}</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-6 text-lg"
            >
              {t("home.private.cta") || "Request Access"}
            </Button>
            <p className="text-sm text-cream/50 mt-4">
              {t("home.private.note") || "Requires KYC verification and proof of funds"}
            </p>
          </div>
        </div>
      </section>

      {/* How We Protect Your Privacy */}
      <section className="py-24 bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
              {t("home.privacy.title") || "How We Protect Your Privacy"}
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              {t("home.privacy.subtitle") || "Your confidentiality is paramount. Here's how we ensure it."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/70">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Altruistic Project Section */}
      <section className="py-24 bg-gradient-to-br from-charcoal via-charcoal/95 to-gold/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {t("home.altruistic.badge") || "Luxury with Purpose"}
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
                {t("home.altruistic.title") || "Every Transaction Creates Impact"}
              </h2>
              <p className="text-xl text-cream/80 mb-8">
                {t("home.altruistic.description") || "We believe that those who have been blessed with wealth have a responsibility to help those without shelter. A portion of every transaction goes directly to providing safe housing for people experiencing homelessness."}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-serif font-bold text-gold mb-2">250+</div>
                  <div className="text-cream/70">{t("home.altruistic.stat1") || "People Housed"}</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-gold mb-2">$2M+</div>
                  <div className="text-cream/70">{t("home.altruistic.stat2") || "Donated"}</div>
                </div>
              </div>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal"
              >
                {t("home.altruistic.cta") || "Learn About Our Mission"}
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                alt="Altruistic Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold">
        <div className="container text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            {t("home.cta.title") || "Ready to Begin Your Journey?"}
          </h2>
          <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
            {t("home.cta.subtitle") || "Whether buying or selling, we provide the discretion and expertise you deserve."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-charcoal hover:bg-charcoal/90 text-cream font-semibold px-8 py-6 text-lg"
            >
              {t("home.cta.buy") || "I Want to Buy"}
            </Button>
            <Button 
              size="lg" 
              className="bg-charcoal hover:bg-charcoal/90 text-cream font-semibold px-8 py-6 text-lg"
            >
              {t("home.cta.sell") || "I Want to Sell"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
