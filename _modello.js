/* MODELLO PER UN NUOVO VIAGGIO
   1. Copia questo file come trips/nome-viaggio.js (es. trips/giappone-2027.js)
   2. Compila i dati qui sotto (la struttura va lasciata com'è)
   3. Apri l'app con  https://TUOUTENTE.github.io/NOMEREPO/?t=nome-viaggio
   Le chiavi con il trattino basso iniziale (_) sono note e vengono ignorate. */
window.TRIP_DATA = (function () {

const meta = {
  id: 'nome-viaggio',                 // identificativo: usato per backup, calendario e dati salvati sul telefono
  title: 'Giappone 2027', subtitle: '3 Apr - 17 Apr', logo: '日',
  heroTitle: 'Il Giappone, <br>giorno per giorno.',
  heroText: "La tua dashboard personale. Segui l'itinerario, spunta le tappe e scrivi il diario.",
  country: 'Japan', countryIt: 'Giappone',
  flag: '🇯🇵', tz: 'Asia/Tokyo', tts: 'ja-JP',      // fuso orario della destinazione e lingua della voce
  start: '2027-04-03T00:00:00+02:00', end: '2027-04-17T23:00:00+09:00',
  stateKey: 'nome-viaggio-state-v1', wxKey: 'nome-viaggio-weather',
  currency: { symbol: '¥', name: 'Yen', rate: 160 },  // quante unità di valuta locale per 1 €
  emergency: [['110', 'Polizia'], ['119', 'Ambulanza / Fuoco'], ['+81 3 3501 0110', 'Assistenza turisti']],
  emergencyNote: 'Numeri locali in Giappone.',
  assistance: { label: 'Assistenza assicurazione', tel: '+390000000000' },
  // facoltativi: shortTitle (nome sotto l'icona), themeColor ('#ff3b30'), script (intervalli unicode della scrittura locale, es. '\u3040-\u30ff\u3400-\u9fff'),
  // icon: { '192': 'trips/giappone-192.png', '512': 'trips/giappone-512.png', apple: 'trips/giappone-180.png' }
  weather: { 'Tokyo': [35.68, 139.69] }          // città: [latitudine, longitudine]; i nomi devono coincidere con trip.cities
};

/* Date giorno per giorno. day = numero progressivo; date = GG/MM; city = nome della città (con " → " nei giorni di trasferimento) */
const trip = {
  start: '2027-04-03', end: '2027-04-17',
  cities: [
    {name: 'Tokyo', dates: '4–10 aprile', days: [2, 3]}
  ],
  days: [
    {day: 1, date: '03/04', dow: 'sabato', city: 'In viaggio', title: 'Milano → Tokyo', stops: []},
    {day: 2, date: '04/04', dow: 'domenica', city: 'Tokyo', title: 'Arrivo', stops: []},
    {day: 3, date: '05/04', dow: 'lunedì', city: 'Tokyo', title: 'Asakusa e Ueno', stops: []}
  ]
};

const CITY_KEY = {'Tokyo': 'TK'};

/* Hotel: chiave = quella di CITY_KEY. name/en = nome e indirizzo in caratteri latini; zh/addr = nome e indirizzo nella lingua/scrittura locale (solo per il pulsante "Mostra al tassista") */
const HOTELS = {
  TK: { city: 'Tokyo', nights: '4–6 apr', name: 'Nome hotel', zh: '', py: '', addr: '', pya: 'Indirizzo in caratteri latini', en: 'Indirizzo in caratteri latini', tel: '', telShow: '',
        metro: 'Come arrivare con i mezzi', cin: 'dopo le 15:00', cout: 'entro le 11:00', booking: 'Prenotazione · PIN', v: 'chk', warn: '', src: '' }
};

/* Frasi per il tassista: [lingua locale, pronuncia, italiano] */
const DRIVER_PHRASES = [
  ['この住所までお願いします。', 'Kono jūsho made onegai shimasu.', 'Mi porti a questo indirizzo, per favore.']
];

/* Diario dettagliato. Per ogni giorno: sleep = chiave dell'hotel in cui si dorme (null se in viaggio), stops = tappe.
   Tappa: t=ora, title, sum=sintesi, zh/py/addr/pya=luogo nella lingua locale/pronuncia/indirizzo/indirizzo latino, how=come arrivare,
   hours, cost, book, tips[], warn, tel, h=chiave hotel, v='ok'|'chk' (verificato o da verificare), guide=titolo della guida collegata */
const DIARY = {
  1: { sleep: null, stops: [] },
  2: { sleep: 'TK', stops: [ { t: '15:00', title: 'Check-in hotel', sum: '', v: 'chk' } ] },
  3: { sleep: 'TK', stops: [] }
};

/* Prenotazioni: id, type, title, date, status ('✅ Prenotato' o '🟡 Da prenotare'), ref, opens (data di apertura vendite, opzionale) */
const reservations = [];

/* Trasferimenti: dep = partenza in ora locale con fuso; zh = nome in lingua locale del luogo di partenza (opzionale) */
const transfers = [
  {id: 'fl1', type: '✈️ Volo', title: 'XX123 · Milano MXP → Tokyo Haneda', dep: '2027-04-03T10:00:00+02:00', arr: 'Arrivo 04/04 alle 06:00'}
];

const checklistData = [
  {group: 'Documenti', items: [['pass', 'Passaporto valido'], ['esim', 'eSIM installata e attivata']]}
];

/* Guide per tappa: [{name: 'Tokyo', stops: [{tag: null|'local'|'influencer', title, native, text, curiosita, tradizioni, oggi, particolarita, osservare:[...], foto, parola}]}] */
const companionData = [];

/* Frasario: [categoria, italiano, lingua locale, pronuncia] */
const phrases = [
  ['Base', 'Ciao', 'こんにちは', 'konnichiwa']
];

const CATS = [['cibo','🍜','Cibo'],['trasporti','🚕','Trasporti'],['ingressi','🎟️','Ingressi'],['shopping','🛍️','Shopping'],['alloggio','🏨','Alloggio'],['altro','📦','Altro']];

return { meta, trip, companionData, HOTELS, DRIVER_PHRASES, DIARY, CITY_KEY, reservations, transfers, checklistData, phrases, CATS };
})();
