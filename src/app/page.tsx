"use client";

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Award, Target, TrendingUp, Users, Zap, Brain, RotateCw, DollarSign, Star, Sparkles, Calendar, Quote, Linkedin, Instagram, Twitter, Trophy } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Experience", id: "feature" },
            { name: "Clients", id: "testimonial" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="CoachPro"
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Elite Basketball Training"
          description="Transform your game with 20+ years of proven coaching experience. I've trained the best players and I'm ready to elevate your skills to championship level."
          tag="Pro Coaching"
          tagIcon={Trophy}
          buttons={[
            { text: "Get In Touch", href: "contact" },
            { text: "View Clients", href: "testimonial" }
          ]}
          imageSrc="https://pixabay.com/get/gcbd6ab898d3cee8b5f15a7be969e0821e5c5b56ab97c3beb0e18b61d13a96e7ec8a7f8e79849e6d96522b275f39fa06906d7ba5b8ba3da2f9aa469326b68a077_1280.jpg"
          imageAlt="Professional basketball training session"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="Two decades of elite basketball coaching experience. I've worked with the best players in the game, developing champions and transforming careers through proven training methodologies."
          features={[
            {
              icon: Award,
              title: "20+ Years Experience",
              description: "Over two decades of coaching elite basketball players, from rising stars to professional champions, with proven results at every level."
            },
            {
              icon: Target,
              title: "Personalized Training",
              description: "Custom training programs tailored to each player's unique strengths, weaknesses, and goals for maximum performance improvement."
            },
            {
              icon: TrendingUp,
              title: "Proven Results",
              description: "Consistent track record of developing players who achieve their basketball dreams, from college scholarships to professional contracts."
            },
            {
              icon: Users,
              title: "Elite Clientele",
              description: "Trusted by top-tier players who demand excellence, including professional athletes and rising basketball stars."
            }
          ]
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="Training Excellence"
          description="Comprehensive basketball development focused on every aspect of the game"
          tag="Core Skills"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            { title: "Shooting Mechanics", icon: Target },
            { title: "Ball Handling", icon: RotateCw },
            { title: "Game Strategy", icon: Brain },
            { title: "Mental Toughness", icon: Zap }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardOne
          title="Training Programs"
          description="Professional basketball training packages designed for serious players"
          tag="Programs"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Individual Training",
              price: "Get In Touch",
              imageSrc: "https://pixabay.com/get/g48ad6b8f83aaa5fdd63011b03e6fe801bf73144df9f8f1de05d553b799377b8564d33273a0c2294f0cac37e2203a0624bfd14f749510f194ad43707d1b86b016_1280.jpg",
              imageAlt: "One-on-one basketball training",
              onProductClick: () => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            },
            {
              id: "2",
              name: "Group Sessions",
              price: "Get In Touch",
              imageSrc: "https://pixabay.com/get/g63e4eeab13651a0e8e506a0ad5153820fa51a686b0cad6c37a40c8e0f9f15d97bbe12ecbe605a041b5217619ccacfdbdd77fc667a38f4f83697550e4202a5d9f_1280.jpg",
              imageAlt: "Group basketball training",
              onProductClick: () => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            },
            {
              id: "3",
              name: "Monthly Package",
              price: "Get In Touch",
              imageSrc: "https://pixabay.com/get/g6c7169a7c116cb0b2fda28c64ae9d328e06a3068012a66fb3e673a8fca4bd9a1912118f90b8ee8047176387fac6df8a4e4473ac47e9d5b7b675443593ac2b20c_1280.jpg",
              imageAlt: "Monthly training program",
              onProductClick: () => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Training Impact"
          description="Numbers that showcase our commitment to player development excellence"
          tag="Results"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "20+",
              title: "years",
              description: "Of elite basketball coaching experience",
              icon: Calendar
            },
            {
              id: "2",
              value: "200+",
              title: "players",
              description: "Trained to reach their potential",
              icon: Users
            },
            {
              id: "3",
              value: "85%",
              title: "success",
              description: "Player improvement rate",
              icon: TrendingUp
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Coaching Team"
          description="Meet the experienced professionals dedicated to your basketball success"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Coach Marcus Johnson",
              role: "Head Coach",
              description: "20+ years coaching elite players. Former college basketball player with deep understanding of player development and championship mentality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1762989180000-ursowxj4.png",
              imageAlt: "Head Coach Marcus Johnson",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/coach-marcus" },
                { icon: Instagram, url: "https://instagram.com/coach_marcus" }
              ]
            },
            {
              id: "2",
              name: "Coach Sarah Davis",
              role: "Skills Specialist",
              description: "Former professional player specializing in shooting mechanics and ball handling. Expert in developing fundamental skills for all playing levels.",
              imageSrc: "https://pixabay.com/get/gfb88bbc9c96781a9a22db79512c54406d96349093a535181b5a4f575c3d2ed48fc99018cbeac7aaf784a45bbc9a7894ff44670775bb554cc65a467d82f774ea4_1280.jpg",
              imageAlt: "Skills Specialist Sarah Davis",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/coach-sarah" },
                { icon: Twitter, url: "https://twitter.com/coach_sarah" }
              ]
            }
          ]
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Player Success Stories"
          description="Hear from the elite players who've transformed their game through our training"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Michael Rodriguez",
              role: "Professional Player",
              testimonial: "Coach Johnson's training completely transformed my shooting mechanics. In just 6 months, my field goal percentage increased by 15%. His attention to detail and personalized approach is unmatched.",
              imageSrc: "https://pixabay.com/get/g19914dcc8317f006d65cb6857a45372339db2c1a15af68ecf7b0205f086abf169b30641d10060a10b4da4d4af2943d1727785bec595d765f9752625c3bcbc2ee_1280.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "College All-Star",
              testimonial: "The mental toughness training was a game-changer. I went from being inconsistent to becoming team captain and earning a full scholarship. This coaching changed my life.",
              imageSrc: "https://pixabay.com/get/g92e83b382ecdb382d4d6037218690809822aec42db4c279ae33879267e99a94cb553589666b25ded01af36547d9dca67b1fc96408790a1838fdcdc26288097e6_1280.jpg",
              imageAlt: "Sarah Thompson"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Rising Junior",
              testimonial: "Working with Coach Johnson for 2 years helped me develop skills I never thought possible. His training methods are intense but incredibly effective. Highly recommend to serious players.",
              imageSrc: "https://pixabay.com/get/g6b026a78c29fc1a5c82b1b31d1e2a2c29564b905410c8ec21060595f5d25e4c56ef9bdaab560d55e9d7735fb2fa422ea_1280.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "4",
              name: "Ashley Chen",
              role: "Pro Draft Pick",
              testimonial: "The comprehensive training approach covering skills, strategy, and mental preparation gave me the edge I needed. Now playing professionally thanks to this amazing coaching.",
              imageSrc: "https://pixabay.com/get/g7d79b816b6e3f984c5133b8e2f63f2896d128a303d0a2c64314dcd4a9102190837f764c72fd2789ff3a265a978853cf7e9b60f012695e3e9e7eebc16aa4eeff9_1280.jpg",
              imageAlt: "Ashley Chen"
            },
            {
              id: "5",
              name: "Marcus Williams",
              role: "Division I Player",
              testimonial: "From fundamentals to advanced techniques, every session was valuable. The personalized feedback and constant encouragement pushed me to reach my full potential.",
              imageSrc: "https://pixabay.com/get/gef36c758e3cb44e652d7572d0444f1cdf51b3bd3f565e5d50500fae0be7fc98e41fced25e8edd45305daba30ebcbd91e62454c4cb462c14259a61a2041253291_1280.jpg",
              imageAlt: "Marcus Williams"
            },
            {
              id: "6",
              name: "Taylor Johnson",
              role: "High School MVP",
              testimonial: "This training gave me the confidence and skills to dominate at the high school level. The improvement in my game was immediate and dramatic. Worth every penny.",
              imageSrc: "https://pixabay.com/get/g9ad29c769451bf598cddfe4951344f2afaddd9e0dd791586ad2770e00fb4d3a4fd0cd76ecb02e003515fc41e0617cac0307b730101f5dfb48893f8f8af76990f_1280.jpg",
              imageAlt: "Taylor Johnson"
            }
          ]
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Everything you need to know about elite basketball training"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes your coaching different?",
              content: "With 20+ years of experience training elite players, I provide personalized programs tailored to each player's specific needs. My proven methodology focuses on fundamental skills, mental toughness, and game strategy."
            },
            {
              id: "2",
              title: "What age groups do you work with?",
              content: "I work with serious players of all ages, from high school students looking to earn scholarships to professional players wanting to elevate their game to the next level."
            },
            {
              id: "3",
              title: "How long does it take to see results?",
              content: "Most players see significant improvement within the first month of consistent training. However, meaningful skill development is an ongoing process that requires dedication and commitment."
            },
            {
              id: "4",
              title: "Do you offer group training sessions?",
              content: "Yes, I offer both individual one-on-one sessions and small group training. Group sessions are limited to maintain the quality of instruction and individual attention each player receives."
            }
          ]
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Transform Your Game?"
          description="Take the first step towards basketball excellence. Contact me to discuss your training goals and start your journey to becoming an elite player."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "position", type: "text", placeholder: "Playing Position", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your basketball goals and current skill level...",
            rows: 5,
            required: true
          }}
          imageSrc="https://pixabay.com/get/g6c7169a7c116cb0b2fda28c64ae9d328e06a3068012a66fb3e673a8fca4bd9a1912118f90b8ee8047176387fac6df8a4e4473ac47e9d5b7b675443593ac2b20c_1280.jpg"
          imageAlt="Basketball training facility"
          mediaPosition="right"
          buttonText="Get In Touch"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Training",
              items: [
                { label: "Individual Sessions", href: "contact" },
                { label: "Group Training", href: "contact" },
                { label: "Monthly Programs", href: "contact" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Experience", href: "about" },
                { label: "Success Stories", href: "testimonial" },
                { label: "Coaching Team", href: "team" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Get In Touch", href: "contact" },
                { label: "Schedule Session", href: "contact" },
                { label: "FAQ", href: "faq" }
              ]
            }
          ]
        />
      </div>
    </ThemeProvider>
  );
}