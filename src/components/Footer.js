const Icons = ({ icons }) => {
  return (
    <div className="icon-list">
      {icons.map((link, index) => (
        <a className="icon" href={link.url} target="blank" key={index}>
          <i className={`${link.className} fa-lg`}></i>
        </a>
      ))}
    </div>
  );
};

const Footer = ({ links }) => {
  return (
    <div className="footer">
      <Icons icons={links} />
      {/* <div className="copyright">Copyright &copy; Xiongju Li</div> */}
    </div>
  );
};

export default Footer;
