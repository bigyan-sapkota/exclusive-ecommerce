const supportDetails = [
  { id: 1, text: "Bharatpur-10, chitwan" },
  { id: 2, text: "info@exclusive.com" },
  { id: 3, text: "+977 9841644488" },
];

const accountDetails = [
  { id: 1, text: "My Account" },
  { id: 2, text: "Login/Register" },
  { id: 3, text: "Cart" },
  { id: 4, text: "Shop" },
];

const quickLinksDetails = [
  { id: 1, text: "Terms & Conditions" },
  { id: 2, text: "Cookies Policy" },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-light ">
      <div className="max-width padding-x flex flex-col gap-6 lg:flex-row items-start justify-between py-4 lg:py-10">
        <div>
          <h2>Exclusive</h2>
          <p className="lg:max-w-96 mt-2">
            Welcome to exclusive ecommerce. We are always here for you!!!
          </p>
        </div>

        <FooterColumn title="Support" arr={supportDetails} />

        <FooterColumn title="Account" arr={accountDetails} />

        <FooterColumn title="Quick Link" arr={quickLinksDetails} />
      </div>
    </footer>
  );
};

export default Footer;

const FooterColumn = ({ title, arr }) => {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {arr.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};
