import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to our Store 🛍️</h1>
        <p>Find the best products at amazing prices</p>
        <button className="btn">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="/images/hero.png" alt="Hero" />
      </div>
    </section>
  );
}
export default Hero;