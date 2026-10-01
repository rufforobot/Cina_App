# App di viaggio (web app installabile)

Un'unica app (`index.html`) che legge i contenuti di ogni viaggio da un file **markdown** in `trips/`.
Per cambiare viaggio non si tocca il codice: si cambia solo il file `.md`.

## File da pubblicare
```
index.html            ← l'app (uguale per tutti i viaggi)
trip-md.js            ← legge i file markdown dei viaggi
sw.js                 ← funzionamento offline
manifest.json  icon-192.png  icon-512.png  apple-touch-icon.png
trips/cina-2026.md    ← i dati del viaggio in Cina
trips/_modello.md     ← modello vuoto per un nuovo viaggio
```

## Pubblicare su GitHub Pages
1. github.com → **New repository** → nome (es. `viaggi`) → **Public** → Create.
2. **Add file → Upload files**: carica `index.html`, `trip-md.js`, `sw.js`, `manifest.json` e le tre icone nella radice.
3. Crea la cartella `trips`: **Add file → Create new file**, nome `trips/cina-2026.md`, incolla il contenuto del file, Commit.
   Ripeti per `trips/_modello.md` (facoltativo).
4. **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**.
5. Dopo 1–2 minuti l'app è su `https://TUOUTENTE.github.io/viaggi/`.
6. Sul telefono apri l'indirizzo in Safari → Condividi → **Aggiungi a Home**.

> L'app non si apre facendo doppio clic sul file `index.html` dal computer: i viaggi si leggono via web (GitHub Pages va bene).

## Se la pagina è vuota o non risponde
1. Crea nel repository un file vuoto chiamato **`.nojekyll`** (Add file → Create new file → nome `.nojekyll` → Commit).
   Senza, GitHub Pages può trasformare i file `.md` in pagine web e l'app non li trova più.
2. Apri nel browser `https://TUOUTENTE.github.io/NOMEREPO/trips/cina-2026.md`: deve comparire il testo del viaggio (non un errore 404).
3. Controlla che nella radice ci siano `index.html`, `trip-md.js`, `sw.js` e che il viaggio sia in `trips/`.
4. Se l'app ha comunque un problema, in alto compare una striscia rossa con l'errore.
5. Sul telefono: Impostazioni → Safari → Avanzate → Dati dei siti web → elimina quello del sito, poi riapri (cancella la vecchia versione in cache).

## Aprire un viaggio
- `https://TUOUTENTE.github.io/viaggi/` apre la Cina (predefinito).
- `https://TUOUTENTE.github.io/viaggi/?t=giappone-2027` apre `trips/giappone-2027.md`.
Ogni viaggio ha i propri dati salvati sul telefono (spunte, spese, note), separati dagli altri.

## Modificare un viaggio
Su GitHub apri il file in `trips/`, matita ✏️, modifica, **Commit**. Per far arrivare subito la modifica sul telefono
cambia anche il numero in `sw.js` (`viaggio-v19` → `viaggio-v20`); altrimenti compare alla seconda apertura.

## Come è scritto un file di viaggio
Parti da `trips/_modello.md` (ha una nota per ogni sezione). In breve:
- **Intestazione** tra `---`: titolo, fuso orario, valuta, numeri di emergenza, coordinate delle città per il meteo.
- **Sezioni** con `# Città`, `# Hotel`, `# Itinerario`, `# Trasferimenti`, `# Prenotazioni`, `# Checklist`, `# Guide`, `# Frasi`, `# Frasi tassista`.
- Ogni dato è una riga `- chiave: valore`; gli elenchi sono righe `  - voce` sotto la chiave.
- Le righe che iniziano con `>` sono note e vengono ignorate.
- Una tappa all'hotel si scrive `- luogo: hotel` + `- hotel: SH`: nome, indirizzo e telefono si prendono dalla sezione Hotel.
- Per andare a capo dentro un valore usa `\n`.

## Nome e icona sulla Home
Nome, icona e indirizzo di avvio vengono dall'intestazione del viaggio (`title`, e se vuoi `shortTitle`, `themeColor`, `icon`).
Ogni viaggio può avere la sua icona: metti i PNG (192, 512 e 180 px) in `trips/` e indicali in `icon:` (`192`, `512`, `apple`). Per cambiarla rimuovi e riaggiungi l app alla Home.

## Lingua e scrittura locale
La frase per il tassista è la prima di `# Frasi tassista`. La scrittura locale (da togliere dalle schermate generali)
si riconosce da sola per cinese, giapponese, coreano e thai.

## Impostazioni per paese (nell'intestazione del viaggio)
- `maps: apple | google | amap` — app di mappe usata dai pulsanti 🧭 Mappa e 🚇 Metro (predefinita: apple).
- `guideLang: it-IT` — lingua di lettura delle guide; `tts` — lingua di lettura delle frasi locali.
- `currency` — se non è l'euro compaiono convertitore e scelta valuta nelle spese.
- `apps` — pulsanti per aprire le app del posto (Alipay, PayPay…); senza `apps` la sezione sparisce.
- `# Info paese` — schede pratiche (elettricità, mance, orari, pagamenti…); senza questa sezione la scheda sparisce.
- `# Frasi` — se vuota, la sezione Frasi utili sparisce.
