function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Corporate services partner</p>
        <h1 id="hero-title">Smartlogix AI</h1>
        <p>
          We help enterprises modernize operations, build resilient digital
          platforms, and create service experiences that clients can trust.
        </p>
      </div>
      <div className="hero-panel" aria-label="Company trust indicators">
        <div>
          <strong>18+</strong>
          <span>markets served</span>
        </div>
        <div>
          <strong>240</strong>
          <span>specialists</span>
        </div>
        <div>
          <strong>92%</strong>
          <span>client retention</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
