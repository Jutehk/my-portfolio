
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} Juliana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
