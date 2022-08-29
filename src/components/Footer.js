const Icons = ({ icons }) => {
  return (
    <div className="footer">
      <div className="icon-list">
        {icons.map((link, index) => (
          <a className="icon" href={link.url} target="blank" key={index}>
            <i className={`${link.className} fa-lg`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ links }) => {
  return <Icons icons={links} />;
};

export default Footer;
