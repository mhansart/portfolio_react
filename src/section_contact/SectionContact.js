import ContactForm from '../contact_form/ContactForm';
import Section from '../section/Section';
import Title from '../title/Title';

function SectionContact() {
  return (
    <Section section="contact" extremite first={false}>
      <div className="content-container">

        <Title titleBalise="contact" title="Contact" first={false} />
        <div className="text-contact" data-aos="fade-up">Je recherche un <span className="bold">stage</span>. Intéressé par mon profil?  <span className="bold">N&apos;hésitez pas à me contacter !</span></div>
        <ContactForm />
        <div className="balise balise-closing" data-aos="fade-up">
          &lt;<span className="balise-name">/div</span>&gt;
        </div>
        <div className="balise body" data-aos="fade-up">&lt;/body&gt;</div>
      </div>

    </Section>
  );
}

export default SectionContact;
