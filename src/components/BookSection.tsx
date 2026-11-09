import ScrollAnimator from '@/components/ScrollAnimator';

export default function BookSection() {
  return (
    <section className="book-section" id="book">
      <div className="book-bg"></div>
      <div className="book-inner">
        <ScrollAnimator>
          <div className="book-cover-area">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://jamespoulter.co.uk/images/ai%20at%20work.jpg"
              alt="AI at Work by James Poulter — book cover"
              className="book-cover-image"
            />
          </div>
        </ScrollAnimator>
        <ScrollAnimator>
          <div className="book-content">
            <span className="book-eyebrow">New Book</span>
            <h2 className="book-heading">Check out my first book — AI At Work</h2>
            <span className="book-launch-badge">Out now from Bloomsbury</span>
            <p className="book-description">
              Transform your organisation with practical AI frameworks, implementation strategies, and real-world insights from the frontlines of AI adoption.
            </p>
            <ul className="book-benefits">
              <li>Sign up for launch event invites in the US &amp; UK</li>
              <li>Get exclusive webinar invites and bonus content</li>
              <li>Early access to chapters and frameworks</li>
              <li>Priority access to book launch events</li>
              <li>Behind-the-scenes updates on the writing process</li>
            </ul>
            <div className="book-cta-row">
              <a
                href="https://www.amazon.co.uk/dp/1350597929?tag=jamespoulte0c-21"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-book-primary"
              >
                Buy on Amazon
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://www.jamespoulter.co.uk/aiatwork"
                target="_blank"
                rel="noopener"
                className="btn-book-primary btn-book-secondary"
              >
                Sign Up &amp; Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
