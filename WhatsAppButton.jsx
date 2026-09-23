function WhatsAppButton() {
  const whatsappNumber = "916301549680";

  const message =
    "Hi Saketh, I came across your portfolio and would like to connect with you.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Contact Saketh on WhatsApp"
      title="Chat with me on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;