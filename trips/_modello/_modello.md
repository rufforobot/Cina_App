---
id: giappone-2027
title: Giappone 2027
subtitle: 3 Apr - 17 Apr
logo: 日
heroTitle: Il Giappone, <br>giorno per giorno.
heroText: La tua dashboard personale. Segui l'itinerario, spunta le tappe e scrivi il diario.
country: Japan
countryIt: Giappone
flag: 🇯🇵
tz: Asia/Tokyo
tts: ja-JP
start: 2027-04-03T00:00:00+02:00
end: 2027-04-17T23:00:00+09:00
stateKey: giappone-2027-state-v1
wxKey: giappone-2027-weather
currency:
  symbol: ¥
  code: JPY
  name: Yen
  rate: 160
emergency:
  - 110 | Polizia
  - 119 | Ambulanza / Fuoco
  - +81 3 3501 0110 | Assistenza turisti
emergencyNote: Numeri locali in Giappone.
assistance:
  label: Assistenza assicurazione
  tel: +390000000000
maps: google
taxi: Uber
guideLang: it-IT
apps:
  - 💳 Apri PayPay | paypay://
weather:
  Tokyo: 35.68, 139.69
---

> MODELLO DI UN NUOVO VIAGGIO. Le righe che iniziano con ">" sono note e vengono ignorate.
> 1. Copia questo file come trips/nome-viaggio.md  2. Compila  3. Apri l'app con ?t=nome-viaggio
> Facoltativi nell'intestazione: maps (apple, google o amap: l'app di mappe dei pulsanti 🧭 e 🚇), guideLang (lingua di lettura delle guide, es. it-IT), apps (pulsanti per aprire app del posto, formato "  - Etichetta | schema://"), shortTitle (nome sotto l'icona), themeColor (es. #ff3b30),
> icon: con righe "  192: trips/x-192.png", "  512: trips/x-512.png", "  apple: trips/x-180.png"
> Regole: ogni riga di dato è "- chiave: valore". Gli elenchi sono righe "  - voce" sotto la chiave.
> I nomi delle città nei giorni e in "Città" devono coincidere con quelli di "weather".

# Città

> nome | date | chiave hotel | numeri dei giorni in cui dormi lì
- Tokyo | 4–10 aprile | TK | 2,3

# Hotel

> chiave uguale a quella in "Città". nome/indirizzo in caratteri latini; "locale" e "indirizzo-locale" nella scrittura del posto (si vedono solo in "Mostra al tassista")
## TK
- città: Tokyo
- notti: 4–6 apr
- nome: Nome hotel
- locale: ホテル名
- pronuncia: Hoteru-mei
- indirizzo-locale: 東京都台東区…
- indirizzo: 1-2-3 Asakusa, Taito City, Tokyo
- tel: +81300000000
- tel-mostrato: +81 3 0000 0000
- metro: Come arrivare con i mezzi
- checkin: dopo le 15:00
- checkout: entro le 11:00
- prenotazione: Numero prenotazione · PIN
- verificato: da-verificare
- avviso:
- fonte:

# Itinerario

> "## Giorno N · GG/MM · giorno · città · titolo". Nei giorni di spostamento la città è "A → B".
> dorme: chiave dell'hotel (oppure "-" se sei in viaggio)
## Giorno 1 · 03/04 · sabato · In viaggio · Milano → Tokyo
- dorme: -

### 10:00 · Volo XX123 Milano → Tokyo
- sintesi: Check-in a Malpensa verso le 07:30
- come: Come arrivare / cosa fare
- consigli:
  - Primo consiglio
  - Secondo consiglio
- verificato: ok

## Giorno 2 · 04/04 · domenica · Tokyo · Arrivo
- dorme: TK

> Per una tappa all'hotel: "- luogo: hotel" riempie da solo nome/indirizzo/telefono dell'hotel (e serve "- hotel: TK")
### 15:00 · Check-in hotel
- luogo: hotel
- hotel: TK
- sintesi: Lascia i bagagli e riposa

### 17:00 · Tempio Senso-ji
- sintesi: Passeggiata serale
- locale: 浅草寺
- pronuncia: Sensō-ji
- indirizzo-locale: 東京都台東区浅草2-3-1
- indirizzo: 2-3-1 Asakusa, Taito City, Tokyo
- orari: Sempre aperto; edifici 06:30–17:00
- costi: Gratis
- prenotazione:
- attenzione:
- tel:
- hotel: TK
- guida: Senso-ji
- verificato: da-verificare

# Trasferimenti

> "## id · tipo · titolo". partenza: data e ora LOCALI con fuso (+02:00 Italia, +09:00 Giappone). locale: nome in scrittura locale del luogo di partenza (solo se è nel paese di destinazione)
## fl1 · ✈️ Volo · XX123 · Milano MXP → Tokyo Haneda
- partenza: 2027-04-03T10:00:00+02:00
- note: Arrivo 04/04 alle 06:00

# Prenotazioni

> id | tipo | titolo | data | stato | riferimento | apertura vendite (facoltativa)
- tempio | 🎟️ Attrazione | Ingresso esempio | 05/04 | 🟡 Da prenotare | Apertura 01/03 | 2027-03-01

# Checklist

## Documenti
> id | testo
- pass | Passaporto valido
- esim | eSIM installata e attivata

# Guide

> Una sezione per città, una guida per tappa. tag: local, influencer oppure "-"
## Tokyo

### Senso-ji
- tag: -
- nativo: 浅草寺 · Sensō-ji
- testo: Testo da leggere o ascoltare.
- curiosita: Una curiosità.
- tradizioni: Una tradizione.
- oggi: Com'è oggi.
- particolarita: Una particolarità.
- osservare:
  - Cosa osservare
- foto: Consiglio fotografico.
- parola: 寺 · tera = tempio.

# Frasi

## Base
> italiano | scrittura locale | pronuncia
- Ciao | こんにちは | konnichiwa

# Frasi tassista

> locale | pronuncia | italiano — la prima è quella grande nel "Mostra al tassista"
- この住所までお願いします。 | Kono jūsho made onegai shimasu. | Mi porti a questo indirizzo, per favore.

# Categorie spese

- cibo | 🍜 | Cibo
- trasporti | 🚕 | Trasporti
- ingressi | 🎟️ | Ingressi
- shopping | 🛍️ | Shopping
- alloggio | 🏨 | Alloggio
- altro | 📦 | Altro

# Info paese

> Una sezione per argomento (## titolo con emoji), poi un elenco "- testo". Se la sezione è vuota la scheda non compare.
## 🔌 Elettricità
- Tensione 100 V, prese di tipo A e B: serve un adattatore.

## 💰 Mance
- Non si usa lasciare mance.
