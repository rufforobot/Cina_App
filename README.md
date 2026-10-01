# App di viaggio (web app installabile)

Un'unica app (`index.html`) che legge i contenuti di ogni viaggio da un file separato in `trips/`.

## File da pubblicare
```
index.html          ← l'app (uguale per tutti i viaggi)
sw.js               ← funzionamento offline
manifest.json       ← nome e icona quando la installi sul telefono
icon-192.png  icon-512.png  apple-touch-icon.png
trips/cina-2026.js  ← i dati del viaggio in Cina
trips/_modello.js   ← modello vuoto per un nuovo viaggio
```

## Pubblicare su GitHub Pages
1. Su github.com: **New repository** → nome (es. `viaggi`) → **Public** → Create.
2. **Add file → Upload files**: trascina tutti i file sopra, **mantenendo la cartella `trips/`**
   (trascina la cartella intera, oppure crea il file con *Add file → Create new file* scrivendo `trips/cina-2026.js` come nome).
3. **Commit changes**.
4. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
5. Dopo 1–2 minuti l'indirizzo è `https://TUOUTENTE.github.io/viaggi/`.
6. Sul telefono: apri l'indirizzo in Safari → Condividi → **Aggiungi a Home**.

## Aprire un viaggio
- `https://TUOUTENTE.github.io/viaggi/` apre la Cina (viaggio predefinito).
- `https://TUOUTENTE.github.io/viaggi/?t=giappone-2027` apre `trips/giappone-2027.js`.

## Aggiornare i contenuti
Modifica il file in `trips/` su GitHub (matita ✏️ → Commit). Per far arrivare subito l'aggiornamento sul telefono,
cambia anche il numero in `sw.js` (`viaggio-v18` → `viaggio-v19`).

## Nuovo viaggio
Copia `trips/_modello.js`, rinominalo, compila i dati e caricalo in `trips/`.
I dati salvati sul telefono (spunte, spese, note) sono separati per viaggio.

## Nome e icona sulla Home del telefono
Nome, icona e indirizzo di avvio vengono generati dal file del viaggio (`title`, e se vuoi `shortTitle`, `themeColor`, `icon`).
Per un'icona diversa per viaggio metti le immagini in `trips/` e indicale in `meta.icon` (vedi `_modello.js`).
Se non le indichi si usano le icone standard. Per un'icona nuova, rimuovi e riaggiungi l'app alla Home.

## Lingua e scrittura locale
La frase per il tassista è la prima di `DRIVER_PHRASES` nel file del viaggio; la scrittura locale
(per togliere i caratteri locali dalle schermate generali) si riconosce da sola per cinese, giapponese, coreano e thai.
