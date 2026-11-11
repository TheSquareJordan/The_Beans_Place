// ============================================================
// CTASECTION.JSX — Call-to-Action Section (Day 10)
// ============================================================
// A compelling section that encourages visitors to place an
// order. Includes a headline, perks grid with icons, action
// buttons, and animated statistics counters.
//
// WHAT YOU WILL LEARN:
// - Defining data arrays for UI elements (perks)
// - Rendering icon + label pairs from an array
// - Using the AnimatedCounter component
// - Combining multiple UI components (Badge, Button, Separator)
// - StaggerContainer for sequenced entrance animations
//
// CONCEPTS COVERED:
// - Array of objects with emoji icons
// - .map() for rendering repeated UI patterns
// - Component composition (nesting components)
// - ScrollReveal animation wrapper
//
// ============================================================

// STEP 1: Imports
// Import UI components: Button, Badge, Separator,
//   ScrollReveal (+ StaggerContainer, StaggerItem),
//   AnimatedCounter

import Button from "./ui/Button";
import Badge from "./ui/Badge";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import AnimatedCounter from "./ui/AnimatedCounter";
import appStoreLogo from "../assets/apple-logo-svgrepo-com (1).svg";
import playStoreLogo from "../assets/google-play-svgrepo-com.svg";

const perks = [
  { icon: "🌱", label: "Ethically Sourced" },
  { icon: "🔥", label: "Freshly Roasted" },
  { icon: "🚚", label: "Free Shipping $50+" },
  { icon: "♻️", label: "Eco-Friendly Bags" },
];

export default function CtaSection() {
  return (
    <div className="cta-section">
      <ScrollReveal animation="fadeUp" delay={0}>
        <Badge variant="accent" className="mb06">
          Fresh Roasts Daily
        </Badge>
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <h2>
          Brewed With Passion,
          <br />
          Delivered Fresh
        </h2>
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.2}>
        <p className="cta-subtitle">
          Skip the line, order premium single-origin coffee online and get it
          roasted to order. From our roastery to your doorstep in 1-2 business
          days.
        </p>
      </ScrollReveal>

      <StaggerContainer staggerDelay={0.1} className="cta-perks">
        {perks.map((perk) => (
          <StaggerItem
            key={perk.label}
            animation="scaleUp"
            className="cta-perk-item"
          >
            <span className="cta-perk-icon">{perk.icon}</span>
            <span className="cta-perk-label">{perk.label}</span>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal animation="fadeUp" delay={0.15}>
        <div className="cta-buttons">
          <Button variant="accent" size="lg">
            Order Now
          </Button>
          <Button variant="ghost" size="lg">
            View Full Menu
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.22}>
        <div className="cta-download">
          <span className="cta-download-label">
            Download The Beans Place App
          </span>
          <div className="cta-download-steps">
            <div className="cta-download-step">
              <span className="cta-download-step-index">1</span>
              <div className="cta-download-step-copy">
                <strong>Open the app page</strong>
                <p>
                  Tap the download button or visit the app link from your
                  device.
                </p>
              </div>
            </div>

            <div className="cta-download-step">
              <span className="cta-download-step-index">2</span>
              <div className="cta-download-step-copy">
                <strong>Choose your platform</strong>
                <p>Select iOS or Android and start the install process.</p>
              </div>
            </div>

            <div className="cta-download-step">
              <span className="cta-download-step-index">3</span>
              <div className="cta-download-step-copy">
                <strong>Launch and order</strong>
                <p>
                  Open the app, browse our roasts, and place your first order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.24}>
        <div className="cta-store-badges">
          <a href="#" className="cta-store-badge app-store-badge">
            <span className="badge-icon">
              <img
                src={appStoreLogo}
                alt="Apple App Store"
                className="w-5 h-5"
              />
            </span>
            <span>
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </a>

          <a href="#" className="cta-store-badge play-store-badge">
            <span className="badge-icon">
              <img
                src={playStoreLogo}
                alt="Google Play Store"
                className="w-5 h-5"
              />
            </span>
            <span>
              <small>Get it on</small>
              <strong>Google Play</strong>
            </span>
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.2}>
        <div className="cta-stats">
          <div className="cta-stat">
            <span className="cta-stat-number">
              <AnimatedCounter target={15} suffix="+" />
            </span>
            <span className="cta-stat-label">Origins</span>
          </div>

          <div className="cta-stat-divider" />

          <div className="cta-stat">
            <span className="cta-stat-number">
              <AnimatedCounter target={2400} suffix="+" />
            </span>
            <span className="cta-stat-label">Happy Customers</span>
          </div>

          <div className="cta-stat-divider" />

          <div className="cta-stat">
            <span className="cta-stat-number">
              <AnimatedCounter target={48} suffix="hr" />
            </span>
            <span className="cta-stat-label">Fresh Delivery</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
