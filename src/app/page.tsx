
import Header from "@/components/ui/Header";
import Logo from "@/components/ui/Logo";
import SubscribeForm from "@/components/ui/SubscribeForm";
import TestimonialOne from "@/components/ui/HeaderTestimonial";
import ProblemStatement from "@/components/ui/ProblemStatement";
import DesiredFuture from "@/components/ui/DesiredFuture";
import AfterDesired from "@/components/ui/AfterDesired";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import WhatYouWillGet from "@/components/ui/WhatYouWillGet";
import WhoIsThisFor from "@/components/ui/WhoIsThisFor";
import WhyYouShouldGetThis from "@/components/ui/WhyYouShouldGetThis";
import StillNotConvinced from "@/components/ui/StillNotConvinced";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
      <>
      <Logo />
        <Header />
        <SubscribeForm />
        <TestimonialOne />
        <ProblemStatement />
        <DesiredFuture />
        <AfterDesired />
        <TestimonialCarousel />
        <WhatYouWillGet />
        <WhoIsThisFor />
        <WhyYouShouldGetThis />
        <StillNotConvinced />
        <Footer />
      </>
  );
}
