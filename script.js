const eras=[{dates:'ABAD VII – XIII M',name:'Kerajaan Melayu Kuno',tag:'Era Abad VII – XIII M',title:'Kejayaan Kerajaan Melayu Kuno & Candi Muaro Jambi',subtitle:'Mercusuar Ilmu Pengetahuan di Tepian Sungai Batanghari',body:'Kawasan Muaro Jambi menyimpan jejak kompleks percandian dan aktivitas keagamaan serta pendidikan pada masa lampau. Situs ini menjadi salah satu warisan arkeologi penting di Sumatra.',quote:'Bata merah yang tersusun di Muaro Jambi menjadi saksi panjangnya perjalanan sejarah kawasan Batanghari.'},{dates:'ABAD XV – 1904',name:'Kesultanan Jambi',tag:'Era Kesultanan',title:'Kesultanan Jambi dan Jejak Adat Melayu',subtitle:'Kisah pemerintahan, perdagangan, dan kebudayaan',body:'Perkembangan pemerintahan kesultanan turut membentuk tradisi, tata kehidupan, serta identitas masyarakat Melayu Jambi. Sungai Batanghari menjadi jalur penting bagi hubungan antarkawasan.',quote:'Warisan adat hidup dalam bahasa, kesenian, dan cerita antargenerasi.'},{dates:'1904 – 1957',name:'Perjuangan & Provinsi',tag:'Era Perjuangan',title:'Perjuangan Menuju Pembentukan Provinsi',subtitle:'Dinamika masyarakat Jambi pada masa perubahan',body:'Pada abad ke-20, masyarakat Jambi mengalami perubahan politik dan sosial. Perjalanan menuju pembentukan Provinsi Jambi menjadi bagian penting dari sejarah daerah.',quote:'Ingatan akan perjuangan menjadi penghubung antara masa lalu dan masa depan.'},{dates:'1957 – KINI',name:'Jambi Modern',tag:'Era Modern',title:'Jambi Modern di Tepian Batanghari',subtitle:'Kota, masyarakat, dan budaya yang terus bertumbuh',body:'Jambi terus berkembang melalui pendidikan, pembangunan, ekonomi, dan kebudayaan. Di tengah perubahan, warisan sejarah dan tradisi tetap menjadi bagian dari identitas masyarakat.',quote:'Masa depan bertumbuh bersama ingatan yang terus dijaga.'}];
const cultures=[{type:'SITUS PURBAKALA & SPIRITUAL',name:'Candi Muaro Jambi',place:'Kabupaten Muaro Jambi',description:'Kompleks percandian bersejarah di kawasan Muaro Jambi yang berkaitan dengan tradisi keagamaan dan pembelajaran pada masa lampau.',art:'temple',detail:'Kawasan Cagar Budaya Nasional Muaro Jambi memiliki banyak tinggalan arkeologi. Penelitian sejarah dan arkeologi terus memperkaya pemahaman kita tentang peran kawasan ini.'},{type:'ARSITEKTUR & IKON KOTA',name:'Jembatan Gentala Arasy',place:'Sungai Batanghari, Kota Jambi',description:'Jembatan pedestrian melengkung yang menghubungkan kawasan pusat Kota Jambi dengan Seberang Kota Jambi.',art:'bridge',detail:'Jembatan dan menara Gentala Arasy menjadi penanda lanskap Kota Jambi dan tempat menikmati pemandangan Sungai Batanghari.'},{type:'PUSAKA KESULTANAN',name:'Keris Siginjai',place:'Kesultanan Jambi',description:'Pusaka yang dikenal sebagai salah satu simbol sejarah dan identitas Jambi.',art:'keris',detail:'Keris Siginjai memiliki kedudukan simbolis dalam ingatan sejarah Kesultanan Jambi. Kisahnya hidup dalam berbagai narasi budaya setempat.'},{type:'SENI KRIYA WASTRA',name:'Batik Jambi (Angso Duo)',place:'Seberang Kota Jambi',description:'Batik khas Jambi dengan beragam motif seperti Angso Duo, Kapal Sanggat, Durian Pecah, dan Tampuk Manggis.',art:'batik',detail:'Motif batik Jambi mencerminkan alam, cerita, dan simbol yang dekat dengan kehidupan masyarakat. Perajin menjaga tradisi ini melalui proses membatik.'},{type:'SENI TARI PENYAMBUTAN',name:'Tari Sekapur Sirih',place:'Provinsi Jambi',description:'Tarian penyambutan tamu yang menampilkan nilai penghormatan dan keramahan masyarakat Melayu Jambi.',art:'dance',detail:'Tari Sekapur Sirih sering ditampilkan pada acara penyambutan sebagai ekspresi penghormatan kepada tamu.'},{type:'ARSITEKTUR TRADISIONAL',name:'Rumah Adat Kajang Lako',place:'Jambi',description:'Rumah panggung tradisional yang mencerminkan pengetahuan lokal dalam bentuk dan konstruksi bangunan.',art:'house',detail:'Rumah Kajang Lako dikenal melalui bentuk rumah panggung dan atap khas, serta kaitannya dengan tata ruang dan adat masyarakat.'}];
const foods=[{label:'Cita Rasa Sungai Batanghari',name:'Tempoyak Ikan Patin',body:'Ketika musim durian tiba, buah durian matang dapat difermentasi dengan garam menjadi tempoyak. Dimasak bersama ikan patin, kunyit, dan cabai, kuahnya menghadirkan perpaduan rasa asam, gurih, dan pedas.',quote:'Aroma tempoyak mengingatkan pada dapur dan makan bersama keluarga.'},{label:'Sajian Kenduri & Hari Raya',name:'Gulai Tepek Ikan',body:'Olahan ikan dan sagu yang dibentuk, dipotong, lalu disajikan dengan kuah santan berbumbu. Hidangan ini dikenal dalam tradisi jamuan dan perayaan masyarakat Jambi.',quote:'Hidangan di meja bersama menghidupkan kenangan akan pertemuan keluarga.'},{label:'Kehangatan Pagi Kota Jambi',name:'Nasi Gemuk',body:'Nasi yang dimasak dengan santan dan rempah, lalu disajikan dengan pelengkap seperti sambal, telur, bawang goreng, dan lauk lainnya. Menjadi salah satu pilihan sarapan yang akrab.',quote:'Sebungkus nasi hangat menyimpan cerita pagi yang sibuk.'},{label:'Manis Lembut Takjil Ramadan',name:'Kue Padamaran',body:'Kue lembut berbahan tepung beras, santan, dan pandan yang biasa disajikan dalam wadah daun pisang. Teksturnya lembut dengan rasa manis dan gurih.',quote:'Wangi pandan membawa ingatan pada suasana berbuka.'}];
const initial=[{sender:'H. Syamsuddin',region:'Tepian Sungai Batanghari',era:'1986',story:'Sore hari di Tanggo Rajo tahun 80-an, kami sering duduk di tepi turap melihat perahu ketek hilir mudik membawa hasil kebun dari Seberang.'},{sender:'Rina Marlina (Perantau di Bandung)',region:'Pasar Angso Duo',era:'2004',story:'Setiap subuh menemani Ibu ke Pasar Angso Duo lama sebelum berangkat sekolah. Beli Nasi Gemuk dan Kue Padamaran hangat.'},{sender:'Zulkifli Kerinci',region:'Alam Kerinci',era:'1999',story:'Kabut pagi di kaki Gunung Kerinci dan hamparan kebun teh Kayu Aro selalu menjadi tempat pulang paling damai.'},{sender:'Siti Aisyah',region:'Muaro Jambi',era:'2012',story:'Bersepeda menyusuri jalan setapak di antara Candi Tinggi dan Candi Gumpung saat pagi masih berembun.'}];
function artSvg(kind){const base='<svg viewBox="0 0 340 180" role="img" aria-label="Ilustrasi budaya"><circle cx="248" cy="45" r="27" fill="#e5cf87"/>';const drawings={temple:'<path d="M45 145H295" stroke="#245342" stroke-width="4"/><path d="M85 143V121H255V143M108 121V97H231V121M133 97V73H207V97M153 73L170 47L188 73" fill="#b65d3b" stroke="#6c422f" stroke-width="3"/><rect x="160" y="102" width="20" height="41" fill="#553b2b"/>',bridge:'<path d="M35 138Q170 70 305 138" fill="none" stroke="#ae8729" stroke-width="7"/><path d="M30 145H310M40 157Q140 145 220 157T310 155" fill="none" stroke="#245342" stroke-width="3"/><path d="M258 133V47L270 25L282 133" fill="#245342"/><circle cx="270" cy="63" r="5" fill="white"/>',keris:'<path d="M112 45L132 58L150 50L158 63L141 73L219 145L204 139L137 90L122 97L113 85L129 76L102 61Z" fill="#735b40" stroke="#4c392a" stroke-width="3"/><path d="M95 38L124 64" stroke="#c8a03e" stroke-width="14"/>',batik:'<rect x="68" y="18" width="210" height="145" fill="#603728"/><rect x="81" y="30" width="185" height="120" fill="none" stroke="#d5b355" stroke-dasharray="6 5" stroke-width="2"/><path d="M137 63Q165 88 139 104Q125 119 148 127Q167 132 168 113Q167 103 159 94Q145 79 155 67M212 63Q184 88 210 104Q224 119 201 127Q182 132 181 113Q182 103 190 94Q204 79 194 67" fill="#fff6e4"/><circle cx="175" cy="66" r="10" fill="#d5b355"/>',dance:'<path d="M95 125Q170 102 245 125L227 148H113Z" fill="#bd952d"/><path d="M170 123Q135 85 149 56Q178 69 170 123M174 122Q171 74 191 46Q210 75 174 122M177 123Q205 80 226 71Q229 101 177 123" fill="#245342"/>',house:'<path d="M72 84L98 45Q172 57 242 45L267 84Z" fill="#245342" stroke="#493a28" stroke-width="3"/><rect x="102" y="84" width="136" height="47" fill="#a5744b" stroke="#493a28" stroke-width="3"/><path d="M115 131V161M224 131V161M72 161H267" stroke="#493a28" stroke-width="4"/><rect x="126" y="96" width="21" height="25" fill="#fff6df"/><rect x="193" y="96" width="21" height="25" fill="#fff6df"/>'};return base+drawings[kind]+'</svg>'}
const tabs=document.getElementById('eraTabs'),content=document.getElementById('eraContent');function showEra(i){tabs.querySelectorAll('button').forEach((b,j)=>{b.classList.toggle('active',i===j);b.setAttribute('aria-pressed',String(i===j))});const e=eras[i];content.replaceChildren();const pill=document.createElement('span');pill.className='pill';pill.textContent=e.tag;const h=document.createElement('h3');h.textContent=e.title;const sub=document.createElement('p');sub.style.color='#245342';sub.textContent=e.subtitle;const p=document.createElement('p');p.textContent=e.body;const q=document.createElement('blockquote');q.textContent='“'+e.quote+'”';content.append(pill,h,sub,p,q)}eras.forEach((e,i)=>{const b=document.createElement('button');b.type='button';b.className='era-button';b.innerHTML='<small></small><strong></strong>';b.querySelector('small').textContent=e.dates;b.querySelector('strong').textContent=e.name;b.addEventListener('click',()=>showEra(i));tabs.append(b)});showEra(0);
const cultureGrid=document.getElementById('cultureGrid');cultures.forEach(c=>{const card=document.createElement('article');card.className='culture-card';card.innerHTML='<div class="art"></div><span class="card-label"></span><h3 class="culture-title"></h3><p></p><div class="card-foot"><span></span><button type="button">Baca Kisah →</button></div>';card.querySelector('.art').innerHTML=artSvg(c.art);card.querySelector('.card-label').textContent=c.type;card.querySelector('h3').textContent=c.name;card.querySelector('p').textContent=c.description;card.querySelector('.card-foot span').textContent='📍 '+c.place;card.querySelector('button').addEventListener('click',()=>openDetail(c));cultureGrid.append(card)});function openDetail(c){const d=document.getElementById('dialogContent');d.replaceChildren();const tag=document.createElement('span');tag.className='card-label';tag.textContent=c.type;const h=document.createElement('h3');h.textContent=c.name;const p=document.createElement('p');p.textContent=c.detail;d.append(tag,h,p);document.getElementById('detailDialog').showModal()}document.getElementById('closeDialog').onclick=()=>document.getElementById('detailDialog').close();
const foodGrid=document.getElementById('foodGrid');foods.forEach(f=>{const c=document.createElement('article');c.className='food-card';c.innerHTML='<span class="pill"></span><h3 class="food-title"></h3><p></p><blockquote></blockquote>';c.querySelector('.pill').textContent=f.label;c.querySelector('h3').textContent=f.name;c.querySelector('p').textContent=f.body;c.querySelector('blockquote').textContent='“'+f.quote+'”';foodGrid.append(c)});
// Isi konfigurasi publik dari Supabase Dashboard > Project Settings > API.
// Jangan pernah memasukkan service_role atau TURNSTILE_SECRET_KEY di file ini.
const SUPABASE_URL = 'https://GANTI_PROJECT_REF.supabase.co';
const SUPABASE_ANON_KEY = 'GANTI_DENGAN_SUPABASE_PUBLISHABLE_ATAU_ANON_KEY';
const ENDPOINT = `${SUPABASE_URL}/functions/v1/kirim-kenangan`;
const filter = document.getElementById('filterRegion');
const formStatus = document.getElementById('formStatus');
let publicPosts = [];
[...new Set(initial.map(p => p.region).concat(['Wilayah Jambi Lainnya']))].forEach(r => {
  const option = document.createElement('option'); option.value = r; option.textContent = r; filter.append(option);
});
function renderPosts() {
  const all = [...publicPosts, ...initial];
  document.getElementById('archiveCount').textContent = `KOLEKSI KARTU POS (${all.length} INGATAN)`;
  const grid = document.getElementById('archiveGrid'); grid.replaceChildren();
  all.filter(p => filter.value === 'all' || p.region === filter.value).forEach(p => {
    const card = document.createElement('article'); card.className = 'archive-card';
    const meta = document.createElement('div'); meta.className = 'archive-meta';
    meta.textContent = '📍 ' + p.region.toUpperCase() + '　 •　 Era: ' + p.era;
    const story = document.createElement('p'); story.textContent = '“' + p.story + '”';
    const by = document.createElement('div'); by.className = 'byline'; by.textContent = '— ' + p.sender;
    card.append(meta, story, by); grid.append(card);
  });
  if (!grid.children.length) { const msg = document.createElement('p'); msg.textContent = 'Belum ada kenangan di wilayah ini.'; grid.append(msg); }
}
async function loadApprovedPosts() {
  if (SUPABASE_URL.includes('GANTI_') || SUPABASE_ANON_KEY.startsWith('GANTI_')) {
    formStatus.textContent = 'Konfigurasi Supabase belum diisi. Hubungi pengelola website.';
    renderPosts(); return;
  }
  try {
    const url = `${SUPABASE_URL}/rest/v1/kenangan?select=nama,wilayah,era,cerita&status=eq.approved&order=created_at.desc&limit=100`;
    const response = await fetch(url, { headers: { apikey: SUPABASE_ANON_KEY } });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const rows = await response.json();
    publicPosts = rows.map(x => ({ sender:x.nama, region:x.wilayah, era:x.era, story:x.cerita }));
    renderPosts();
  } catch (err) { console.error('Gagal membaca arsip', err); formStatus.textContent = 'Arsip online belum dapat dimuat.'; renderPosts(); }
}
filter.addEventListener('change', renderPosts);
document.getElementById('postcardForm').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const token = window.turnstile?.getResponse();
  if (!token) { formStatus.textContent = 'Selesaikan verifikasi CAPTCHA terlebih dahulu.'; return; }
  if (SUPABASE_URL.includes('GANTI_') || SUPABASE_ANON_KEY.startsWith('GANTI_')) {
    formStatus.textContent = 'Konfigurasi Supabase belum diisi.'; return;
  }
  const payload = {
    nama: document.getElementById('sender').value.trim(),
    wilayah: document.getElementById('region').value,
    era: document.getElementById('era').value.trim(),
    cerita: document.getElementById('story').value.trim(),
    turnstileToken: token
  };
  button.disabled = true; formStatus.textContent = 'Mengirim kenangan...';
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST', headers: { 'Content-Type':'application/json', apikey: SUPABASE_ANON_KEY },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
    formStatus.textContent = result.message || 'Cerita terkirim dan menunggu persetujuan admin.';
    form.reset();
  } catch (err) { formStatus.textContent = 'Gagal mengirim: ' + err.message; }
  finally { button.disabled = false; window.turnstile?.reset(); }
});
renderPosts(); loadApprovedPosts();
document.getElementById('sepiaBtn').addEventListener('click',e=>{const on=document.body.classList.toggle('sepia');e.currentTarget.setAttribute('aria-pressed',String(on));e.currentTarget.textContent=on?'▤ Matikan Sepia':'▤ Nuansa Sepia'});
const soundBtn=document.getElementById('soundBtn');
const bgMusic=document.getElementById('bgMusic');
bgMusic.volume=0.35;
soundBtn.setAttribute('aria-pressed','false');
soundBtn.addEventListener('click',async()=>{
  if(!bgMusic.paused){bgMusic.pause();soundBtn.textContent='♫ Putar Musik Jambi';soundBtn.setAttribute('aria-pressed','false');return;}
  try{await bgMusic.play();soundBtn.textContent='♫ Hentikan Musik';soundBtn.setAttribute('aria-pressed','true');}
  catch(e){soundBtn.textContent='Musik gagal diputar';console.error(e);}
});
