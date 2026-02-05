import logoDark from '@/app/assets/images/WebsiteLogoDark.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer id="contacto" className="bg-carbonblack text-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">
              <Image
                src={logoDark}
                alt="Palazzo Invites Logo"
                className='website-logo-footer'
                width={150}
                height={80}
              />
            </h3>
            <p className="text-card/70 text-sm">
              Experiencias digitales premium para bodas.
              Invitaciones elegantes con gestión inteligente de invitados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-sand">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li><a href="#inicio" className="hover:text-sand transition-colors">Inicio</a></li>
              <li><a href="#beneficios" className="hover:text-sand transition-colors">Beneficios</a></li>
              <li><a href="#paquetes" className="hover:text-sand transition-colors">Paquetes</a></li>
              <li><a href="#ejemplos" className="hover:text-sand transition-colors">Ejemplos</a></li>
              <li><a href="#contacto" className="hover:text-sand transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-sand">Contacto</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li>
                <div className="space-y-2 text-sm text-card/70 p-0.5 flex gap-4">
                    <a href="https://www.instagram.com/palazzoinvites" className="hover:text-coolsteel transition-colors"><i
                            className="fa-brands fa-instagram text-xl"></i></a>
                    <a href="https://www.facebook.com/palazzo.invitations/"
                        className="hover:text-coolsteel transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
                    <a href="https://www.tiktok.com/@palazzo.invites" className="hover:text-coolsteel transition-colors"><i
                            className="fa-brands fa-tiktok text-xl"></i></a>
                    <a href="https://wa.me/529996382810" target="_blank" className="hover:text-coolsteel transition-colors">
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                    </a>
                </div>
              </li>
              <li>
                <a href="mailto:contacto@palazzoinvites.com" className="hover:text-sand transition-colors">contacto@palazzoinvites.com</a>
              </li>
              <li>
                <a rel='nofollow' href='https://www.bodas.com.mx' title='Bodas.com.mx'><img alt='Bodas.com.mx' src='https://www.bodas.com.mx/images/sellos/Sello-bodasmx--gg430370.png' style={{borderWidth:0}} /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/10 pt-8 text-center text-sm text-card/50">
          <p>© {new Date().getFullYear()} Palazzo Invites. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
