"use client";

import { useState } from "react";
import Image from "next/image";
import LeafDrift from "@/components/LeafDrift";
import LeafShadow from "@/components/LeafShadow";

// Put your photo in /public/images (e.g. /images/about.jpg) and set the path here.
// While this is null, the "IW" placeholder is shown inside the frame.
const ABOUT_PHOTO = "/images/about.jpg";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section-white section-contained" id="about">
      <LeafShadow className="section-big-leaf leaf-shadow-light" />
      <LeafDrift count={5} />
      <div className="wrap">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-photo framed-photo">
              {ABOUT_PHOTO ? (
                <div className="framed-photo-img">
                  <Image src={ABOUT_PHOTO} alt="Reeanne, founder of Icy Whites" fill sizes="(max-width: 880px) 90vw, 40vw" priority />
                </div>
              ) : (
                <span className="about-mark">IW</span>
              )}
            </div>

            <div className="about-info-card">
              <div className="about-name">Reeanne</div>
              <div className="about-role">Founder &amp; Lead Technician</div>
              <div className="about-stats">
                <div className="stat"><div className="n">Certified</div><div className="l">Whitening technician</div></div>
                <div className="stat"><div className="n">One-on-one</div><div className="l">Every appointment</div></div>
                <div className="stat"><div className="n">Low-sensitivity</div><div className="l">Standard formula</div></div>
                <div className="stat"><div className="n">3+ Years</div><div className="l">In practice</div></div>
              </div>
              <div className="about-location">✦ Regina, SK — mobile appointments available</div>
            </div>
          </div>

          <div className="about-copy">
            <div className="kicker">About Me</div>
            <h2 className="about-heading">Hello, I&rsquo;m Reeanne! I&rsquo;m so glad you&rsquo;re here. 🤍</h2>

            <div className={`about-bio${expanded ? " expanded" : ""}`}>
              <div className="bio-section">
                <div className="bio-label">How It Started</div>
                <p className="lead">
                  I started Icy Whites three years ago, inspired by my own experience with professional teeth whitening.
                  I still remember seeing my results for the first time and loving not only how much brighter my smile looked, but how good it made me feel.
                  That experience stayed with me and inspired me to create something that could help others experience that same feeling.
                </p>
              </div>

              <div className="bio-section">
                <div className="bio-label">What I Do</div>
                <p>
                  Icy Whites is a mobile cosmetic teeth whitening service in Regina, created to make achieving a brighter smile comfortable,
                  convenient, and personalized—all from the comfort of your own home or office.
                </p>
                <p>
                  Outside of Icy Whites, I work full-time as a dental hygienist, so caring for smiles is truly a big part of my everyday life.
                  I love connecting with people, and Icy Whites has given me another way to do something I genuinely enjoy while helping others feel great about their smiles.
                </p>
              </div>

              <blockquote className="about-quote">
                One of my favourite parts of what I do is seeing a client&rsquo;s reaction when they look at their results for the first time.
              </blockquote>

              <div className="bio-section">
                <div className="bio-label">My Promise</div>
                <p>
                  What started as a small idea has grown into something I&rsquo;m incredibly proud of and grateful for.
                  Seeing that excitement and watching someone light up over their new smile never gets old.
                </p>
                <p>
                  From the beginning, I&rsquo;ve wanted every Icy Whites appointment to feel comfortable, welcoming, and personal.
                  Whether it&rsquo;s your first whitening experience or you&rsquo;re simply refreshing your smile, my goal is for you to feel at ease,
                  enjoy the experience, and leave loving your brighter smile.
                </p>
              </div>

              <div className="bio-section">
                <div className="bio-label">With Gratitude</div>
                <p>
                  Most of all, I&rsquo;m incredibly thankful for everyone who has supported Icy Whites over the past three years.
                  To every client who has trusted me with their smile, every friend and client who has referred their friends and family,
                  and everyone who has shared a kind word, review, or recommendation—thank you from the bottom of my heart.
                </p>
                <p>
                  Every appointment, referral, and kind word has helped Icy Whites grow into what it is today.
                  I truly wouldn&rsquo;t be here without your support, and I&rsquo;m so grateful to have you as part of the Icy Whites journey.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="about-toggle"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? "Show less" : "Read full story"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}