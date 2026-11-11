
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const emailAddress = 'mdimassyafutra10@gmail.com';
  const phoneNumber = '0813-7995-558';
  const whatsappNumber = '628137995558';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    const message = [
      `Halo Dimas, saya ${formData.name.trim() || 'HRD/Klien'}.`,
      `Email: ${formData.email.trim() || '-'}`,
      `Pesan: ${formData.message.trim() || 'Saya tertarik untuk berdiskusi terkait peluang kerja atau kolaborasi.'}`,
    ].join('\n');

    const url = `${whatsappUrl}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="section relative pb-16">
      <div className="container">
        <div
          className="flex flex-col items-start mb-10"
          data-aos="fade-up"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Get in Touch
          </span>

          <h2 className="headline-2">Contact Me</h2>

          <p className="text-zinc-400 mt-2 max-w-[65ch] text-sm sm:text-base leading-relaxed">
            Open to career opportunities, professional collaborations, and meaningful projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div
            className="lg:col-span-5 space-y-4"
            data-aos="fade-right"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Hubungi melalui WhatsApp di ${phoneNumber}`}
              className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-105 shrink-0 transition-all">
                  <span className="material-symbols-rounded text-2xl">
                    chat
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    WhatsApp
                  </p>

                  <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {phoneNumber}
                  </h4>

                  <p className="text-xs text-zinc-400 mt-0.5">
                    Hubungi langsung melalui WhatsApp
                  </p>
                </div>
              </div>

              <span className="material-symbols-rounded text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">
                arrow_forward
              </span>
            </a>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 shrink-0">
                  <span className="material-symbols-rounded text-2xl">
                    mail
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Email
                  </p>

                  <h4 className="text-sm sm:text-base font-bold text-white truncate mt-0.5">
                    {emailAddress}
                  </h4>

                  <p className="text-xs text-zinc-400 mt-0.5">
                    Pengiriman berkas dan komunikasi profesional
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-zinc-800">
                <a
                  href={`mailto:${emailAddress}`}
                  className="btn btn-outline text-xs flex-1 justify-center py-2 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-200"
                >
                  <span className="material-symbols-rounded text-sm text-zinc-400">
                    send
                  </span>
                  <span>Kirim Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn text-xs flex-1 justify-center py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 active:scale-95 transition-all"
                >
                  <span className="material-symbols-rounded text-sm text-zinc-400">
                    {copied ? 'check' : 'content_copy'}
                  </span>

                  <span aria-live="polite">
                    {copied ? 'Tersalin!' : 'Salin Email'}
                  </span>
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                Find Me Online
              </p>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/m-dimas-syafutra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-2"
                >
                  LinkedIn
                  <span className="material-symbols-rounded text-xs">
                    open_in_new
                  </span>
                </a>

                <a
                  href="https://github.com/mdimassyafutraa?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-2"
                >
                  GitHub
                  <span className="material-symbols-rounded text-xs">
                    open_in_new
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/_mdimas.s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-2"
                >
                  Instagram
                  <span className="material-symbols-rounded text-xs">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800"
            data-aos="fade-left"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Send Me a Message
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Punya pertanyaan, peluang kerja, atau ingin berdiskusi?
                Silakan kirim pesan melalui formulir berikut.
              </p>
            </div>

            <form
              action="https://getform.io/f/alllpmpa"
              method="POST"
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="label">
                    Nama / Perusahaan
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="name"
                    className="text-field"
                    required
                    placeholder="Nama Anda atau Perusahaan"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label">
                    Alamat Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    className="text-field"
                    required
                    placeholder="email@perusahaan.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label">
                  Pesan / Keterangan
                </label>

                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="text-field resize-none"
                  required
                  placeholder="Tuliskan pesan Anda..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary w-full sm:w-auto flex-1 justify-center"
                >
                  <span className="material-symbols-rounded text-base">
                    send
                  </span>

                  <span>Kirim Pesan</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="btn btn-outline w-full sm:w-auto flex-1 flex items-center justify-center gap-2 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-200"
                >
                  <span className="material-symbols-rounded text-base text-zinc-400">
                    chat
                  </span>

                  <span>Kirim via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
