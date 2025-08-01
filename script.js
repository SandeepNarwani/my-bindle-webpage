gsap.from(".hero-title", {
  y: -40,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".hero-description", {
  y: 20,
  opacity: 0,
  delay: 0.3,
  duration: 1
});

gsap.from(".hero-button", {
  scale: 0.9,
  opacity: 0,
  delay: 0.6,
  duration: 0.8
});
gsap.from(".feature-box", {
  scrollTrigger: {
    trigger: ".features-grid",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 0.6
});

gsap.from(".connection-text h2", {
  x: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".connection-section",
    start: "top 80%"
  }
});

gsap.from(".connection-card", {
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 0.8,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".connection-cards",
    start: "top 85%"
  }
});

gsap.from(".phone-main", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".connection-images",
    start: "top 90%"
  }
});

gsap.from(".phone-side", {
  y: 120,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".connection-images",
    start: "top 90%"
  }
});

gsap.from(".phone1", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});
gsap.from(".phone2", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "power3.out"
});
gsap.from(".text-side h1", {
  x: 50,
  opacity: 0,
  duration: 1,
  delay: 0.4,
});
gsap.from(".card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  delay: 0.7,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".fade-up", {
  scrollTrigger: {
    trigger: ".install-section",
    start: "top 85%",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2
});

gsap.from(".donation-title", {
  opacity: 0,
  y: -30,
  duration: 1
});

gsap.from(".donation-text", {
  opacity: 0,
  y: -20,
  duration: 1,
  delay: 0.3
});

gsap.from(".donation-btn", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  delay: 0.6
});

gsap.from(".donation-img", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1,
  stagger: 0.3
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    y: 0,
    opacity: 1,
    duration: 0.6,
    delay: i * 0.1,
    ease: 'power3.out'
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".download-heading", {
  scrollTrigger: {
    trigger: ".download-section",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".download-subtext", {
  scrollTrigger: {
    trigger: ".download-section",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".download-buttons", {
  scrollTrigger: {
    trigger: ".download-section",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "power3.out"
});

gsap.from(".phone-back", {
  scrollTrigger: {
    trigger: ".download-section",
    start: "top 80%",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power2.out"
});

gsap.from(".phone-front", {
  scrollTrigger: {
    trigger: ".download-section",
    start: "top 80%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: "power2.out"
});
