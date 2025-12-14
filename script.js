/* =========================
   LUMÉRA CIRCLE — script.js
   - mobile menu
   - i18n RU/EN
   - active nav
   - booking form -> WhatsApp/Telegram/email
   ========================= */

const I18N = {
  ru: {
    nav_home: "Главная",
    nav_services: "Услуги",
    nav_pricing: "Прайс",
    nav_reviews: "Отзывы",
    nav_booking: "Запись",
    nav_contacts: "Контакты",

    hero_h1: "Воздушная эстетика. Золотая точность.",
    hero_p: "Премиальная студия красоты в стиле мягкого света и идеальной геометрии. Прозрачные цены, стерильность, спокойная атмосфера и сервис, который чувствуется с первого визита.",
    btn_book: "Записаться",

    sec_dir: "Наши направления",
    dir_1_t: "Маникюр и педикюр",
    dir_1_p: "Аккуратная форма, чистая работа, покрытие без компромиссов.",
    dir_2_t: "Брови и ламинирование",
    dir_2_p: "Естественный результат и архитектура под ваш стиль лица.",
    dir_3_t: "Лазерная эпиляция",
    dir_3_p: "Комфортный протокол, деликатно и профессионально.",
    dir_4_t: "Косметология",
    dir_4_p: "Уход, который видно — мягко, точно, безопасно.",
    dir_5_t: "Массаж",
    dir_5_p: "Снятие напряжения и восстановление баланса тела.",

    sec_why: "Почему выбирают нас",
    why_1_t: "Стерильность",
    why_1_p: "Одноразовые расходники, обработка и строгие стандарты.",
    why_2_t: "Прозрачная цена",
    why_2_p: "Никаких сюрпризов — стоимость подтверждается до визита.",
    why_3_t: "Премиальный комфорт",
    why_3_p: "Тихо, красиво, воздушно. Вы отдыхаете — мы работаем.",

    services_h1: "Услуги",
    services_p: "Выберите направление — администратор уточнит детали и подтвердит удобное время.",
    srv_1_t: "Маникюр",
    srv_1_p: "Комби, укрепление, покрытие. Идеальная форма и блеск.",
    srv_2_t: "Педикюр",
    srv_2_p: "Комфортная обработка, аккуратность, эстетика.",
    srv_3_t: "Брови / ламинирование",
    srv_3_p: "Форма, оттенок, фиксация — естественно и выразительно.",
    srv_4_t: "Лазерная эпиляция",
    srv_4_p: "Деликатный протокол, безопасные интервалы, видимый результат.",
    srv_5_t: "Косметология",
    srv_5_p: "Уходы, чистки, базовые процедуры — мягко и профессионально.",
    srv_6_t: "Массаж",
    srv_6_p: "Тело и лицо: расслабление, лимфодренаж, восстановление.",

    pricing_h1: "Прайс",
    pricing_p: "Цены прозрачные. Точное время и стоимость подтверждаются перед визитом.",
    price_note: "Все цены в SEK. При необходимости подберём пакет процедур.",

    reviews_h1: "Отзывы",
    reviews_p: "Мы ценим доверие и работаем так, чтобы вам хотелось возвращаться.",
    r1: "«Очень аккуратно и спокойно. Чувствуется премиальный сервис.»",
    r2: "«Чистота, внимание к деталям и красивый результат.»",
    r3: "«Лазер — комфортно, без стресса. Всё объяснили и сделали деликатно.»",

    booking_h1: "Запись онлайн",
    booking_p: "Оставьте заявку — администратор подтвердит время и предложит удобное окно. Для срочной записи используйте WhatsApp или Telegram.",
    form_title: "Форма записи",
    ph_name: "Имя",
    ph_phone: "Телефон",
    ph_comment: "Комментарий… (услуга, пожелания)",
    opt_mani: "Маникюр",
    opt_pedi: "Педикюр",
    opt_brows: "Брови / ламинирование",
    opt_laser: "Лазерная эпиляция",
    opt_massage: "Массаж",
    opt_cosm: "Косметология",
    btn_send: "Отправить заявку",
    btn_wa: "WhatsApp",
    btn_tg: "Telegram",
    booking_note: "Оплата после подтверждения времени. Доступны: карта, Swish, наличные.",
    sent_ok: "Заявка сформирована. Сейчас откроется сообщение — отправьте его администратору.",

    contacts_h1: "Контакты",
    contacts_p: "Центр Стокгольма. Удобно добраться на метро/автобусе. Запись — в один клик.",
    c_phone: "Телефон",
    c_hours: "Часы",
    c_addr: "Адрес",
    c_social: "Соцсети",
    c_btn: "Записаться",
    footer_line: "© LUMÉRA CIRCLE · Stockholm",
    footer_credit: "Designed & built by"
  },

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_reviews: "Reviews",
    nav_booking: "Booking",
    nav_contacts: "Contacts",

    hero_h1: "Airy aesthetics. Golden precision.",
    hero_p: "A premium beauty studio built around soft light and clean geometry. Transparent pricing, sterile standards, calm atmosphere, and service you feel from the first visit.",
    btn_book: "Book now",

    sec_dir: "Our directions",
    dir_1_t: "Manicure & pedicure",
    dir_1_p: "Clean work, perfect shape, flawless finish.",
    dir_2_t: "Brows & lamination",
    dir_2_p: "Natural look with a tailored architecture for your face.",
    dir_3_t: "Laser hair removal",
    dir_3_p: "Comfort-first protocol, delicate and professional.",
    dir_4_t: "Cosmetology",
    dir_4_p: "Visible care — gentle, precise, safe.",
    dir_5_t: "Massage",
    dir_5_p: "Release tension and restore body balance.",

    sec_why: "Why clients choose us",
    why_1_t: "Sterile standards",
    why_1_p: "Disposable materials, proper sanitation, strict rules.",
    why_2_t: "Transparent pricing",
    why_2_p: "No surprises — confirmed before your visit.",
    why_3_t: "Premium comfort",
    why_3_p: "Quiet, airy, beautiful. You relax — we take care.",

    services_h1: "Services",
    services_p: "Choose a category — our manager will confirm details and the best time slot.",
    srv_1_t: "Manicure",
    srv_1_p: "Combined technique, strengthening, polish — clean and glossy.",
    srv_2_t: "Pedicure",
    srv_2_p: "Comfortable care, neat finish, aesthetics.",
    srv_3_t: "Brows / lamination",
    srv_3_p: "Shape, tone, fix — natural yet expressive.",
    srv_4_t: "Laser hair removal",
    srv_4_p: "Delicate protocol, safe intervals, visible results.",
    srv_5_t: "Cosmetology",
    srv_5_p: "Care routines and basic procedures — gentle and professional.",
    srv_6_t: "Massage",
    srv_6_p: "Body & face: relaxation, drainage, recovery.",

    pricing_h1: "Pricing",
    pricing_p: "Prices are transparent. Final duration and cost are confirmed before the visit.",
    price_note: "All prices in SEK. We can tailor a procedure package if needed.",

    reviews_h1: "Reviews",
    reviews_p: "We value trust and work so you truly want to come back.",
    r1: "“So neat and calm. You can feel the premium service.”",
    r2: "“Clean, attentive, and the result is beautiful.”",
    r3: "“Laser was comfortable and gentle. Everything was explained clearly.”",

    booking_h1: "Online booking",
    booking_p: "Leave a request — we’ll confirm the time and offer the best slot. For urgent bookings, use WhatsApp or Telegram.",
    form_title: "Booking form",
    ph_name: "Name",
    ph_phone: "Phone",
    ph_comment: "Comment… (service, notes)",
    opt_mani: "Manicure",
    opt_pedi: "Pedicure",
    opt_brows: "Brows / lamination",
    opt_laser: "Laser hair removal",
    opt_massage: "Massage",
    opt_cosm: "Cosmetology",
    btn_send: "Send request",
    btn_wa: "WhatsApp",
    btn_tg: "Telegram",
    booking_note: "Payment after time confirmation. Available: card, Swish, cash.",
    sent_ok: "Request prepared. A message will open — please send it to the manager.",

    contacts_h1: "Contacts",
    contacts_p: "Central Stockholm. Easy by metro/bus. Booking in one click.",
    c_phone: "Phone",
    c_hours: "Hours",
    c_addr: "Address",
    c_social: "Social",
    c_btn: "Book now",
    footer_line: "© LUMÉRA CIRCLE · Stockholm",
    footer_credit: "Designed & built by"
  }
};

/* ===== Helpers ===== */
function getLang(){
  return localStorage.getItem("lang") || "ru";
}
function setLang(lang){
  localStorage.setItem("lang", lang);
  applyI18n(lang);
  markLangButtons(lang);
}
function applyI18n(lang){
  const dict = I18N[lang] || I18N.ru;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if(dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  // Update title
  const titleKey = document.body.getAttribute("data-title-key");
  if(titleKey && dict[titleKey]){
    document.title = `${dict[titleKey]} — LUMÉRA CIRCLE`;
  }else{
    document.title = `LUMÉRA CIRCLE — Premium Beauty Studio`;
  }
}
function markLangButtons(lang){
  document.querySelectorAll(".langBtn").forEach(btn=>{
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
}

/* ===== Mobile menu ===== */
function initMobileMenu(){
  const burger = document.getElementById("burger");
  const panel = document.getElementById("mobilePanel");

  if(!burger || !panel) return;

  const toggle = () => {
    const open = panel.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  };

  burger.addEventListener("click", toggle);

  // close when click a link
  panel.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      panel.classList.remove("is-open");
      burger.setAttribute("aria-expanded","false");
    });
  });

  // close on ESC
  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
      panel.classList.remove("is-open");
      burger.setAttribute("aria-expanded","false");
    }
  });
}

/* ===== Active nav ===== */
function markActiveNav(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(`a[href$="${path}"]`).forEach(a=>a.classList.add("is-active"));
}

/* ===== Booking actions ===== */
function initBooking(){
  const form = document.getElementById("bookingForm");
  const btnWA = document.getElementById("btnWA");
  const btnTG = document.getElementById("btnTG");

  // !!! ВАЖНО: Поменяй контакты клиента тут
  const WHATSAPP_NUMBER = "467000000000"; // пример: 46 + номер без +
  const TELEGRAM_USERNAME = "yourSalonTelegram"; // пример: salon_manager

  function buildMessage(data){
    const lang = getLang();
    const d = I18N[lang] || I18N.ru;

    const lines = [
      `✨ LUMÉRA CIRCLE — ${d.booking_h1}`,
      `Имя/Name: ${data.name || "-"}`,
      `Телефон/Phone: ${data.phone || "-"}`,
      `Услуга/Service: ${data.service || "-"}`,
      `Дата/Date: ${data.date || "-"}`,
      `Комментарий/Comment: ${data.comment || "-"}`
    ];
    return lines.join("\n");
  }

  function openWA(message){
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  }

  function openTG(message){
    // Telegram direct message (opens chat with username)
    const url = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  }

  if(btnWA){
    btnWA.addEventListener("click", ()=>{
      const message = "Здравствуйте! Хочу записаться в LUMÉRA CIRCLE.";
      openWA(message);
    });
  }
  if(btnTG){
    btnTG.addEventListener("click", ()=>{
      const message = "Здравствуйте! Хочу записаться в LUMÉRA CIRCLE.";
      openTG(message);
    });
  }

  if(!form) return;

  form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const msg = buildMessage(data);

    const lang = getLang();
    const d = I18N[lang] || I18N.ru;
    alert(d.sent_ok);

    // по умолчанию отправим в WhatsApp (самое удобное)
    openWA(msg);

    form.reset();
  });
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", ()=>{
  // language
  const lang = getLang();
  applyI18n(lang);
  markLangButtons(lang);

  document.querySelectorAll(".langBtn").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
  });

  initMobileMenu();
  markActiveNav();
  initBooking();
});
