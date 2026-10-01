const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const wasOpen = item.classList.contains('open');
    item.closest('.accordion').querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
    });
    if (!wasOpen) item.classList.add('open');
  });
});

document.querySelector('#accordion-pidana .accordion-item')?.classList.add('open');

const overlay = document.getElementById('detailOverlay');
const detailContent = document.getElementById('detailContent');
const closeDetail = document.getElementById('closeDetail');

function openDetail(key) {
  const data = caseData[key];
  if (!data) return;
  detailContent.innerHTML = `
    <span class="badge">${data.badge}</span>
    <h2>${data.title}</h2>
    <div class="detail-section">
      <h3>📖 Pengertian Garis Besar</h3>
      <p>${data.pengertian}</p>
    </div>
    <div class="detail-section">
      <h3>📜 Pasal-Pasal Terkait</h3>
      ${data.pasal.map(p => `<div class="pasal-box">${p}</div>`).join('')}
    </div>
    <div class="detail-section">
      <h3>⚖️ Studi Kasus</h3>
      <div class="case-study"><p>${data.studi}</p></div>
    </div>
    <p style="font-size:0.85rem;color:#6B7280;margin-top:20px;">
      <em>Catatan: Informasi ini bersifat edukatif. Untuk penanganan kasus konkret, konsultasikan dengan advokat berlisensi.</em>
    </p>
    <div style="margin-top:20px;">
      <a href="#kontak" class="btn btn-primary" onclick="closeDetailPanel()">Konsultasi Sekarang</a>
    </div>
  `;
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeDetailPanel() {
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

document.querySelectorAll('.detail-btn, .sub-card').forEach(el => {
  el.addEventListener('click', (e) => {
    const card = e.target.closest('.sub-card');
    if (card) openDetail(card.dataset.case);
  });
});

closeDetail.addEventListener('click', closeDetailPanel);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeDetailPanel();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDetailPanel();
});

document.querySelectorAll('.choice-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.next) {
      document.querySelectorAll('.identify-step').forEach(s => s.classList.remove('active'));
      document.getElementById(btn.dataset.next).classList.add('active');
    } else if (btn.dataset.result) {
      showIdentifyResult(btn.dataset.result);
    }
  });
});

document.querySelectorAll('.btn-back').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.identify-step').forEach(s => s.classList.remove('active'));
    document.querySelector('.identify-step[data-step="1"]').classList.add('active');
  });
});

function showIdentifyResult(key) {
  const data = caseData[key];
  if (!data) return;
  document.querySelectorAll('.identify-step').forEach(s => s.classList.remove('active'));
  document.getElementById('result-step').classList.add('active');
  document.getElementById('identifyResult').innerHTML = `
    <h3>${data.title}</h3>
    <p style="color:var(--gold);font-weight:600;margin-bottom:12px;">${data.badge}</p>
    <p>${data.pengertian.substring(0, 180)}...</p>
    <p style="margin-top:16px;font-size:0.9rem;"><strong>Langkah selanjutnya:</strong> Pelajari pasal terkait & studi kasus, atau langsung konsultasi dengan advokat kami.</p>
    <button class="btn-sm" style="margin-top:12px;" onclick="openDetail('${key}')">Lihat Detail Lengkap</button>
  `;
}

function resetIdentify() {
  document.querySelectorAll('.identify-step').forEach(s => s.classList.remove('active'));
  document.querySelector('.identify-step[data-step="1"]').classList.add('active');
}

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = e.target.nama.value;
  alert(`Terima kasih, ${nama}!\n\nPesan Anda telah diterima. Tim Feri Law Firm akan menghubungi Anda melalui WhatsApp dalam 1x24 jam kerja.\n\n(Demo — di production data dikirim ke server.)`);
  e.target.reset();
});
