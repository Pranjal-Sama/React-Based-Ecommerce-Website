export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>About Cartify</h4>
          <p>Your smart shopping partner for best deals on electronics, fashion & more.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#/">About Us</a></li>
            <li><a href="#/">Contact</a></li>
            <li><a href="#/">Careers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Policies</h4>
          <ul>
            <li><a href="#/">Privacy Policy</a></li>
            <li><a href="#/">Terms & Conditions</a></li>
            <li><a href="#/">Returns & Refunds</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#/">Twitter</a></li>
            <li><a href="#/">Facebook</a></li>
            <li><a href="#/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} Cartify. All rights reserved.</p>
      </div>
    </footer>
  );
}
