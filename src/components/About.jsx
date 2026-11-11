
const About = () => {
  return (
    <section id="about" className="section relative">
      <div className="container">
        <div className="flex flex-col items-start mb-10" data-aos="fade-up">
          <h2 className="headline-2">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-900/40 flex flex-col min-h-[420px] sm:min-h-[500px] lg:min-h-full group shadow-xl"
            data-aos="fade-left"
          >
            <div className="relative w-full h-full flex-1 overflow-hidden min-h-[420px] lg:min-h-full">
              <img
                src="/img/about.JPG"
                alt="M. Dimas Syafutra - Wisuda Universitas Amikom Yogyakarta"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              <div className="absolute top-4 left-4 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700/60 text-xs font-medium text-zinc-200 shadow-md">
                  <span className="material-symbols-rounded text-sm text-[#5ca499]">
                    school
                  </span>
                  <span>Universitas Amikom Yogyakarta</span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 pt-28 pb-6 px-6 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent flex flex-col justify-end">
                <p className="text-white font-semibold text-base sm:text-lg tracking-tight drop-shadow">
                  M. Dimas Syafutra, A.Md.Kom.
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-xs sm:text-sm text-zinc-300 drop-shadow">
                    D3 Teknik Informatika
                  </span>
                  <span className="text-xs drop-shadow font-medium">
                    &bull; Cum Laude (IPK 3.65)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-9 lg:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 relative overflow-hidden"
            data-aos="fade-right"
          >
            <div>
              <div className="flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#1B4242]"></span>
                <span>Professional Background</span>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Saya merupakan lulusan D3 Teknik Informatika dari
                  Universitas Amikom Yogyakarta. Ketertarikan saya pada
                  teknologi dimulai sejak masa kuliah, ketika saya mulai
                  mempelajari pengembangan website dan membangun aplikasi
                  untuk kebutuhan tertentu.
                </p>

                <p>
                  Pengalaman profesional pertama saya dimulai saat menjalani
                  magang sebagai IT Support di PT KAI UPT Balai Yasa Lahat.
                  Selain membantu kebutuhan teknis, saya juga terlibat dalam
                  pembuatan sistem manajemen acara dan administrasi tamu.
                  Pengalaman ini memberi saya kesempatan untuk menerapkan
                  kemampuan teknis secara langsung di lingkungan kerja.
                </p>

                <p>
                  Setelah itu, saya bergabung dengan Bank Mandiri sebagai
                  Sales Generalis Konsumtif. Di posisi ini, saya banyak
                  berinteraksi dengan nasabah, mengenal berbagai produk
                  perbankan, mengelola data calon nasabah, serta membantu
                  proses awal pengajuan kredit.
                </p>

                <p>
                  Saya kemudian melanjutkan pengalaman di bidang perbankan
                  sebagai Mortgage &amp; Auto Loan Assistant (MALA). Pekerjaan
                  saya lebih berfokus pada administrasi pembiayaan KPR dan
                  kredit kendaraan, mulai dari pemeriksaan dokumen,
                  pengelolaan data pengajuan, hingga koordinasi dengan tim
                  terkait.
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm pt-4 border-t border-zinc-800/70">
                  Dari pengalaman tersebut, saya terbiasa bekerja dengan
                  data, dokumen, sistem, dan proses operasional. Saya ingin
                  terus mengembangkan kemampuan di bidang teknologi maupun
                  administrasi, serta memanfaatkan keduanya untuk membantu
                  pekerjaan menjadi lebih terstruktur dan efisien.
                </p>
              </div>
            </div>

            {/* Key Information */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-zinc-800/80">
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">
                  Pengalaman
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-100 mt-1">
                  Banking &amp; IT
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">
                  Bidang Keahlian
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-100 mt-1">
                  Admin &amp; Data
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">
                  Teknologi
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-100 mt-1">
                  Web &amp; Database
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
