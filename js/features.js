(() => {
  const WA = '6281234567890';
  const waLink = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
  const $ = (s, r = document) => r.querySelector(s);
  const store = { get: k => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
  let lang = store.get('lang') || 'id';

  /* ---------- content (ID / EN) ---------- */
  const team = [
    { n: 'Feri Ramdhani, S.H., M.H.', r: ['Pendiri & Advokat Senior', 'Founder & Senior Advocate'], s: ['Pidana & Korupsi', 'Criminal & Corruption'], y: 15, photo: '' },
    { n: 'Sinta Maharani, S.H.', r: ['Advokat', 'Advocate'], s: ['Perdata & Hukum Keluarga', 'Civil & Family Law'], y: 9, photo: '' },
    { n: 'Dimas Pratama, S.H., C.L.A.', r: ['Advokat', 'Advocate'], s: ['Pertanahan & Korporasi', 'Land & Corporate'], y: 8, photo: '' }
  ];
  const testi = [
    { t: ['Prosesnya jelas dan tim sangat sabar menjelaskan pasal demi pasal. Saya jadi tenang.', 'Clear process, and the team patiently explained every article. I felt reassured.'], n: 'Ibu R., Sukabumi', c: ['Perceraian', 'Divorce'] },
    { t: ['Sengketa tanah keluarga kami selesai lewat mediasi. Cepat dan profesional.', 'Our family land dispute was settled through mediation. Fast and professional.'], n: 'Bapak H., Cicurug', c: ['Sengketa Tanah', 'Land Dispute'] },
    { t: ['Respons WhatsApp cepat, dokumen yang diminta jelas. Sangat membantu.', 'Fast WhatsApp replies and clear document requests. Very helpful.'], n: 'Sdr. A., Cibadak', c: ['Hutang Piutang', 'Debt'] },
    { t: ['Pendampingan KDRT dilakukan dengan empati dan tetap tegas secara hukum.', 'Domestic violence assistance was empathetic yet firm legally.'], n: 'Ibu S., Sukabumi', c: ['KDRT', 'Domestic Violence'] }
  ];
  const faq = [
    [['Apakah konsultasi awal benar-benar gratis?', 'Is the first consultation really free?'], ['Ya. Konsultasi awal untuk memahami kasus Anda tidak dipungut biaya.', 'Yes. The initial consultation to understand your case is free.']],
    [['Berapa biaya jasa advokat?', 'How much are legal fees?'], ['Biaya bergantung jenis dan kompleksitas kasus. Rincian disepakati tertulis sebelum kuasa ditandatangani.', 'Fees depend on case type and complexity. Details are agreed in writing before the power of attorney is signed.']],
    [['Dokumen apa yang harus disiapkan?', 'What documents should I prepare?'], ['KTP, KK, kronologi, dan bukti terkait. Lihat bagian Checklist Dokumen untuk daftar per kasus.', 'ID, family card, chronology, and related evidence. See the Document Checklist section for a per-case list.']],
    [['Apakah data saya dijaga kerahasiaannya?', 'Is my data kept confidential?'], ['Ya. Advokat terikat kewajiban menjaga kerahasiaan informasi klien.', 'Yes. Advocates are bound to keep client information confidential.']],
    [['Berapa lama kasus selesai?', 'How long does a case take?'], ['Bervariasi. Mediasi bisa beberapa minggu, perkara di pengadilan bisa berbulan-bulan.', 'It varies. Mediation may take weeks; court cases may take months.']],
    [['Apakah bisa konsultasi online?', 'Can I consult online?'], ['Bisa lewat WhatsApp atau telepon. Gunakan tombol Chat Konsultasi atau buat janji temu.', 'Yes, via WhatsApp or phone. Use the Chat Consultation button or book an appointment.']]
  ];
  const arts = [
    { d: '12 Sep 2026', t: ['Langkah Awal Saat Menjadi Korban KDRT', 'First Steps for Domestic Violence Victims'], e: ['Amankan diri, simpan bukti, dan segera lapor.', 'Get safe, keep evidence, and report promptly.'], f: ['Prioritas utama adalah keselamatan. Dokumentasikan luka, lakukan visum, simpan pesan ancaman, lalu laporkan ke kepolisian atau lembaga pendamping. UU PKDRT memberi hak perlindungan dan pemulihan bagi korban.', 'Safety comes first. Document injuries, get a medical report, keep threatening messages, then report to police or a support agency. The DV Law grants victims protection and recovery rights.'] },
    { d: '28 Agu 2026', t: ['Somasi: Kapan Hutang Bisa Digugat?', 'Demand Letters: When Can a Debt Be Sued?'], e: ['Somasi biasanya mendahului gugatan wanprestasi.', 'A demand letter usually precedes a breach-of-contract suit.'], f: ['Somasi adalah teguran tertulis agar debitur memenuhi kewajiban. Bila tidak dipenuhi dalam tenggat, kreditur dapat menggugat wanprestasi. Simpan perjanjian dan bukti transfer.', 'A demand letter is a written warning to perform an obligation. If ignored past the deadline, the creditor may sue for breach. Keep the agreement and transfer proofs.'] },
    { d: '10 Agu 2026', t: ['Cek Legalitas Tanah Sebelum Membeli', 'Check Land Legality Before Buying'], e: ['Pastikan sertifikat asli dan bebas sengketa.', 'Make sure the certificate is genuine and dispute-free.'], f: ['Periksa keaslian sertifikat di kantor pertanahan, cocokkan data penjual, cek status sengketa atau agunan, dan lakukan jual beli di hadapan PPAT.', 'Verify the certificate at the land office, match the seller data, check dispute or collateral status, and complete the sale before a land deed official (PPAT).'] }
  ];
  const kw = { kdrt: 'domestic violence rumah tangga', seksual: 'sexual harassment rape', bersama: 'group violence', penganiayaan: 'assault', narkoba: 'narcotics drugs', korupsi: 'corruption', hutang: 'debt loan utang', tanah: 'land property', company: 'corporate business', perceraian: 'divorce cerai', konsumen: 'consumer' };

  /* ---------- static EN translations of page text ---------- */
  const EN = [
    ['.nav-links a[href="#beranda"]', 'Home'], ['.nav-links a[href="#praktik"]', 'Practice'], ['.nav-links a[href="#identifikasi"]', 'Identify'],
    ['.nav-links a[href="#tim"]', 'Team'], ['.nav-links a[href="#artikel"]', 'Articles'], ['.nav-links a[href="#tentang"]', 'About'], ['.btn-nav', 'Free Consultation'],
    ['.hero-badge', 'Law Firm · Sukabumi'], ['.hero h1', 'Understand Your Legal Issue<br><span>Before You Act</span>'],
    ['.hero-desc', 'Feri Law Firm\'s interactive site helps you recognize your case type, related articles of law, and case examples — from domestic violence and narcotics to civil disputes.'],
    ['.hero-cta .btn-wa span', 'Chat Consultation'],
    ['.wa-float span', 'Chat Consultation'],
    ['.qm-item:nth-child(1) strong', 'Practice'], ['.qm-item:nth-child(1) small', 'Criminal & Civil'], ['.qm-item:nth-child(2) strong', 'Identify'], ['.qm-item:nth-child(2) small', 'Find your case type'], ['.qm-item:nth-child(3) small', 'Common questions'],
    ['#praktik .section-label', 'Practice Areas'], ['#praktik h2', 'Criminal & Civil Law'], ['#praktik .section-desc', 'Pick a category to see sub-menus, definitions, related articles, and case studies.'],
    ['#caseSearch@placeholder', 'Search cases: domestic violence, land, debt...'], ['.tab[data-tab="pidana"]', 'Criminal'], ['.tab[data-tab="perdata"]', 'Civil'],
    ['#identifikasi .section-label', 'Interactive Tool'], ['#identifikasi h2', 'Identify Your Legal Issue'], ['#identifikasi .section-desc', 'Answer a few short questions to get an initial picture of your case type and next steps.'],
    ['#tim .section-label', 'Our Advocates'], ['#tim h2', 'Experienced Advocates'], ['#tim .section-desc', 'Meet the team who will assist you.'],
    ['#testimoni .section-label', 'Testimonials'], ['#testimoni h2', 'What Our Clients Say'],
    ['#checklist .section-label', 'Document Checklist'], ['#checklist h2', 'Prepare Documents Before Consulting'], ['#checklist .section-desc', 'Choose a case type, view the document list, download as PDF.'],
    ['#faq .section-label', 'FAQ'], ['#faq h2', 'Frequently Asked Questions'], ['#artikel .section-label', 'Legal Articles'], ['#artikel h2', 'Short Legal Insights'],
    ['#janji .section-label', 'Booking'], ['#janji h2', 'Book an Appointment'], ['#janji .section-desc', 'Pick a date and time. Confirmation is sent via WhatsApp.'],
    ['label[for="bkNama"]', 'Full Name'], ['label[for="bkDate"]', 'Date'], ['label[for="bkTime"]', 'Time'], ['label[for="bkJenis"]', 'Case Type'],
    ['.book-note', 'Monday – Friday, 09:00 – 17:00 WIB.'], ['#bookForm .btn span', 'Send Booking via WhatsApp'],
    ['#tentang .section-label', 'About Us'], ['#tentang h2', 'Feri Law Firm — Legal Solutions Made Easy to Understand'],
    ['#tentang .tentang-text p:nth-of-type(2)', 'We believe everyone has the right to understand their legal problem before choosing a legal step. This site helps visitors get a clear picture of case definitions, related articles, and case studies.'],
    ['#tentang .tentang-text p:nth-of-type(3)', 'Our experienced advocates are ready to assist at every stage, in court and out of court (mediation, negotiation, and consultation).'],
    ['.check-list li:nth-child(1)', 'Educational & transparent approach'], ['.check-list li:nth-child(2)', 'Focus on practical solutions'], ['.check-list li:nth-child(3)', 'Experience in criminal & civil law'], ['.check-list li:nth-child(4)', 'Free initial consultation'],
    ['.tentang-card h3', 'Our Mission'], ['.tentang-card p', 'To help people understand the law in simple, accurate language, and provide professional, ethical legal assistance in Sukabumi and surroundings.'],
    ['#kontak .section-label', 'Contact Us'], ['#kontak h2', 'Free Initial Consultation'], ['#kontak .section-desc', 'Tell us your problem. Our team will respond as soon as possible.'],
    ['.kontak-info .info-item:nth-child(1) strong', 'Address'], ['.kontak-info .info-item:nth-child(2) strong', 'Phone / WhatsApp'], ['.kontak-info .info-item:nth-child(4) strong', 'Office Hours'],
    ['.kontak-info .info-item:nth-child(4) p', 'Monday – Friday: 09:00 – 17:00 WIB'],
    ['.kontak-form .btn', 'Send & Request Consultation'],
    ['.footer-brand p', 'A law firm in Sukabumi that prioritizes clients\' understanding of their legal issues.'], ['.footer-links:nth-child(2) h4', 'Practice Areas'], ['.footer-links:nth-child(3) h4', 'Company'],
    ['.disclaimer', 'Information on this website is educational and does not replace formal legal advice. Consult a licensed advocate about your case.']
  ];
  const items = [];
  EN.forEach(([sel, en]) => {
    const [q, attr] = sel.split('@'); const el = $(q); if (!el) return;
    items.push({ el, attr, id: attr ? el.getAttribute(attr) : el.innerHTML, en });
  });
  const t = (a) => a[lang === 'en' ? 1 : 0];

  /* ---------- renders ---------- */
  function renderTeam() {
    $('#teamGrid').innerHTML = team.map(m => {
      const ini = m.n.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('');
      const av = m.photo ? `<img class="avatar" src="${m.photo}" alt="${m.n}">` : `<div class="avatar" aria-hidden="true">${ini}</div>`;
      return `<div class="team-card">${av}<h3>${m.n}</h3><p class="role">${t(m.r)}</p><p>${lang === 'en' ? 'Specialization' : 'Spesialisasi'}: ${t(m.s)}</p><span class="chip">${m.y}+ ${lang === 'en' ? 'years experience' : 'tahun pengalaman'}</span></div>`;
    }).join('');
  }
  let slide = 0, timer;
  function renderTesti() {
    $('#slideTrack').innerHTML = testi.map(x => `<div class="slide"><div class="t-card"><div class="stars">★★★★★</div><p>“${t(x.t)}”</p><strong>${x.n}</strong><small>${t(x.c)}</small></div></div>`).join('');
    $('#dots').innerHTML = testi.map((_, i) => `<button class="dot" aria-label="${i + 1}" data-i="${i}"></button>`).join('');
    goSlide(slide);
  }
  function goSlide(i) {
    slide = (i + testi.length) % testi.length;
    $('#slideTrack').style.transform = `translateX(-${slide * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, k) => d.classList.toggle('on', k === slide));
  }
  function autoplay() { clearInterval(timer); timer = setInterval(() => goSlide(slide + 1), 6000); }
  function renderFaq() {
    $('#faqList').innerHTML = faq.map(f => `<details class="faq-item"><summary>${t(f[0])}</summary><div>${t(f[1])}</div></details>`).join('');
  }
  function renderArts() {
    $('#articleGrid').innerHTML = arts.map((a, i) => `<article class="article-card" data-i="${i}"><small>${a.d}</small><h3>${t(a.t)}</h3><p>${t(a.e)}</p><p class="more">${t(a.f)}</p><button class="btn-sm" type="button">${lang === 'en' ? 'Read more' : 'Baca selengkapnya'}</button></article>`).join('');
  }
  const caseTitle = k => (typeof caseData !== 'undefined' && caseData[k]) ? caseData[k].title : k;
  const cName = k => lang === 'en' ? checklistData[k].en : checklistData[k].id;
  function fillCases() {
    const opts = Object.keys(checklistData).map(k => `<option value="${k}">${cName(k)}</option>`).join('');
    const ck = $('#ckSelect'), bk = $('#bkJenis'), v1 = ck.value, v2 = bk.value;
    ck.innerHTML = opts; bk.innerHTML = opts; if (v1) ck.value = v1; if (v2) bk.value = v2;
    renderCk();
  }
  function renderCk() {
    const k = $('#ckSelect').value, d = checklistData[k], L = lang;
    const list = a => `<ul class="ck-list">${a.map(i => `<li>${i}</li>`).join('')}</ul>`;
    $('#ckBody').innerHTML = `<h4>${L === 'en' ? 'General Documents' : 'Dokumen Umum'}</h4>${list(checklistCommon[L])}<h4>${L === 'en' ? 'Case-Specific Documents' : 'Dokumen Khusus'}</h4>${list(d['x_' + L])}<a class="btn btn-primary btn-full" href="assets/pdf/checklist-${k}-${L}.pdf" download>${L === 'en' ? 'Download PDF' : 'Unduh PDF'}</a>`;
  }
  function fillTimes() {
    $('#bkTime').innerHTML = [9, 10, 11, 13, 14, 15, 16].map(h => `<option>${String(h).padStart(2, '0')}.00</option>`).join('');
  }

  /* ---------- language ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    items.forEach(i => { const v = lang === 'en' ? i.en : i.id; i.attr ? i.el.setAttribute(i.attr, v) : (i.el.innerHTML = v); });
    $('#langBtn').textContent = lang === 'en' ? 'ID' : 'EN';
    renderTeam(); renderTesti(); renderFaq(); renderArts(); fillCases();
    document.querySelectorAll('.reveal').forEach(e => e.classList.add('in'));
  }
  $('#langBtn').onclick = () => { lang = lang === 'en' ? 'id' : 'en'; store.set('lang', lang); applyLang(); };

  /* ---------- theme ---------- */
  const root = document.documentElement;
  const dark0 = store.get('theme') ? store.get('theme') === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const setTheme = d => { root.dataset.theme = d ? 'dark' : 'light'; store.set('theme', d ? 'dark' : 'light'); };
  setTheme(dark0);
  $('#themeBtn').onclick = () => setTheme(root.dataset.theme !== 'dark');

  /* ---------- WhatsApp ---------- */
  const msg = () => lang === 'en' ? 'Hello Feri Law Firm, I would like a legal consultation.' : 'Halo Feri Law Firm, saya ingin konsultasi hukum.';
  document.querySelectorAll('.js-wa').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; a.addEventListener('click', () => { a.href = waLink(msg()); }); a.href = waLink(msg()); });

  /* ---------- search ---------- */
  const inp = $('#caseSearch'), res = $('#searchResults');
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { res.hidden = true; return; }
    const hits = Object.keys(caseData).filter(k => (caseData[k].title + ' ' + caseData[k].badge + ' ' + caseData[k].pengertian + ' ' + (kw[k] || '')).toLowerCase().includes(q)).slice(0, 6);
    res.innerHTML = hits.length ? hits.map(k => `<button type="button" data-k="${k}">${caseData[k].title}<small>${caseData[k].badge}</small></button>`).join('') : `<p>${lang === 'en' ? 'No matching case.' : 'Kasus tidak ditemukan.'}</p>`;
    res.hidden = false;
  });
  res.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { openDetail(b.dataset.k); res.hidden = true; } });
  document.addEventListener('click', e => { if (!e.target.closest('.search-box')) res.hidden = true; });

  /* ---------- booking ---------- */
  const dEl = $('#bkDate'); dEl.min = new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  dEl.addEventListener('change', () => {
    const day = new Date(dEl.value + 'T00:00').getDay();
    if (day === 0 || day === 6) { alert(lang === 'en' ? 'Please choose a weekday (Mon–Fri).' : 'Pilih hari kerja (Senin–Jumat).'); dEl.value = ''; }
  });
  $('#bookForm').addEventListener('submit', e => {
    e.preventDefault();
    const nm = $('#bkNama').value, dt = dEl.value, tm = $('#bkTime').value, jn = cName($('#bkJenis').value);
    const txt = lang === 'en' ? `Hello Feri Law Firm, I would like to book an appointment.\nName: ${nm}\nDate: ${dt}\nTime: ${tm} WIB\nCase: ${jn}` : `Halo Feri Law Firm, saya ingin booking janji temu.\nNama: ${nm}\nTanggal: ${dt}\nJam: ${tm} WIB\nJenis masalah: ${jn}`;
    window.open(waLink(txt), '_blank', 'noopener');
  });

  /* ---------- events ---------- */
  $('#ckSelect').addEventListener('change', renderCk);
  $('#faqList').addEventListener('toggle', e => { if (e.target.open) document.querySelectorAll('#faqList details').forEach(d => d !== e.target && (d.open = false)); }, true);
  $('#articleGrid').addEventListener('click', e => { const b = e.target.closest('.btn-sm'); if (!b) return; const c = b.closest('.article-card'); c.classList.toggle('open'); b.textContent = c.classList.contains('open') ? (lang === 'en' ? 'Show less' : 'Tutup') : (lang === 'en' ? 'Read more' : 'Baca selengkapnya'); });
  $('#prevSlide').onclick = () => { goSlide(slide - 1); autoplay(); };
  $('#nextSlide').onclick = () => { goSlide(slide + 1); autoplay(); };
  $('#dots').addEventListener('click', e => { if (e.target.dataset.i) { goSlide(+e.target.dataset.i); autoplay(); } });
  let sx = 0; const sl = $('#slider');
  sl.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  sl.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) { goSlide(slide + (dx < 0 ? 1 : -1)); autoplay(); } });
  sl.addEventListener('mouseenter', () => clearInterval(timer)); sl.addEventListener('mouseleave', autoplay);

  const hv = $('.bg-fixed video');
  if (hv && matchMedia('(prefers-reduced-motion: reduce)').matches) { hv.removeAttribute('autoplay'); hv.pause(); }
  else if (hv) hv.play().catch(() => {});

  const deep = $('.bg-deep'), heroEl = $('.hero');
  const ov = () => { deep.style.opacity = Math.min(1, Math.max(0, scrollY / (heroEl.offsetHeight * .7))); };
  addEventListener('scroll', ov, { passive: true }); ov();

  /* ---------- scroll reveal ---------- */
  fillTimes(); applyLang(); autoplay();
  const targets = document.querySelectorAll('.section-header,.tabs,.accordion,.identify-box,.tentang-grid,.kontak-grid,.grid-3,.slider,.ck-box,.faq-list,.book-box,.map-wrap,.search-box');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => { el.classList.add('reveal'); io.observe(el); });
  }
})();
