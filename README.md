# RealEstateCare Inspectie Applicatie - Prototype

Dit project is een frontend prototype voor de RealEstateCare inspectie applicatie, gebouwd met Vue.js 3. Het simuleert de functionaliteit voor inspecteurs om vastgoedinspecties te bekijken, gedetailleerde informatie vast te leggen over schade, onderhoud, technische installaties, modificaties, en om foto's (metadata) toe te voegen aan een inspectie.

## Technologie Stack
*   **Frontend Framework:** Vue.js 3 (met Composition API en `<script setup>`)
*   **State Management:** Pinia
*   **Routing:** Vue Router
*   **Styling:** Tailwind CSS (met custom CSS variabelen voor huisstijl)
*   **Build Tool:** Vite
*   **Asynchroon Programmeren:** JavaScript Fetch API (async/await)
*   **Data Formaat:** JSON

## Kenmerken van het Prototype
*   **Gebruikersauthenticatie:** Gesimuleerde login met een 2-Factor Authenticatie (2FA) stap.
*   **Route Beveiliging:** Navigatieguards beschermen routes, zodat alleen geauthenticeerde en 2FA-geverifieerde gebruikers toegang hebben tot de applicatiefunctionaliteit.
*   **Overzicht Inspecties:** Twee hoofdschermen voor 'Openstaande Inspecties' en 'Uitgevoerde Inspecties'.
*   **Inspectie Details:** Een gedetailleerde weergave van een specifieke inspectie, opgedeeld in interactieve tabbladen voor:
    *   Schade opnemen
    *   Achterstallig onderhoud
    *   Technische installaties
    *   Modificaties
    *   Foto's uploaden (alleen metadata wordt lokaal in de store opgeslagen)
*   **State Management:** Gebruik van Pinia stores voor het centraal en reactief beheren van de inspectiedata en de authenticatiestatus van de gebruiker.
*   **Externe API Koppeling:** De initiële inspectiegegevens worden opgehaald van een publieke placeholder API (https://jsonplaceholder.typicode.com/posts) en lokaal verrijkt met de vereiste datastructuur voor inspectiedetails.
*   **Huisstijl Implementatie:** Het RealEstateCare logo en kleurenpalet zijn nauwkeurig toegepast via Tailwind CSS utility classes en custom CSS variabelen (`--rec-teal`, `--rec-ink`, etc.).
*   **Responsief Design:** De gebruikersinterface is ontworpen om goed te functioneren en zich aan te passen aan verschillende schermgroottes.

## Authenticatie Details (Gesimuleerd)

Voor het inloggen in dit prototype kunt u de volgende gesimuleerde credentials gebruiken:

*   **Gebruikersnaam:** `testuser` (elke niet-lege waarde werkt ook)
*   **Wachtwoord:** `welkom` (elke niet-lege waarde werkt ook)

Na het succesvol inloggen, wordt u gevraagd om een 2-Factor Authenticatie (2FA) code in te voeren. De hardcoded code hiervoor is:

*   **2FA-code:** `1111`

Deze authenticatie is puur een client-side simulatie voor demonstratiedoeleinden en maakt geen verbinding met een externe authenticatieservice.

## Project Opzet & Lokale Installatie
Om dit prototype lokaal te draaien, volgt u de onderstaande stappen:

1.  **Clone de repository:**
    ```bash
    git clone [Jouw GitHub Repo URL hier]
    cd [Naam van je repository map]
    ```
2.  **Installeer afhankelijkheden:** Dit project is gebouwd met Node.js en maakt gebruik van npm (Node Package Manager) voor het beheer van afhankelijkheden. Zorg ervoor dat Node.js op uw systeem is geïnstalleerd.
    ```bash
    npm install
    ```
3.  **Start de ontwikkelserver:**
    ```bash
    npm run dev
    ```
    De applicatie is nu toegankelijk via `http://localhost:5173/` (of een vergelijkbare poort, zoals aangegeven in uw console).

4.  **Build voor productie:**
    ```bash
    npm run build
    ```
    Dit commando genereert de geoptimaliseerde statische bestanden in de `dist/` map, klaar voor deployment naar een webserver.

## Verantwoording van Principes en Best Practices
Dit prototype is ontwikkeld met een sterke focus op algemene principes, style guides en best practices om een onderhoudbare, veilige en toegankelijke webapplicatie te leveren.

### Style Guides & Best Practices
*   **Vue.js Style Guide:** De code volgt de aanbevolen conventies van de officiële Vue.js Style Guide, waaronder het gebruik van Single File Components (SFCs), de Composition API met `<script setup>` voor een gestructureerde en leesbare code.
*   **Component-Based Architecture:** De applicatie is modulair opgebouwd uit kleine, herbruikbare componenten (`SchadeForm`, `FotoUpload`, etc.), wat de leesbaarheid, testbaarheid en onderhoudbaarheid aanzienlijk bevordert. Elk component heeft een specifieke, afgebakende verantwoordelijkheid.
*   **State Management (Pinia):** Pinia is gekozen als de state management oplossing en is geïmplementeerd volgens de best practices. Dit zorgt voor een gecentraliseerd en voorspelbaar beheer van de applicatiestatus, wat essentieel is voor schaalbaarheid en onderhoudbaarheid. Pinia stores kunnen worden gezien als een implementatie van het Singleton Design Pattern voor de applicatiestatus.
*   **Design Patterns & Principles:** De architectuur volgt de principes van een Model-View-ViewModel (MVVM) patroon (een afgeleide van MVC), waarbij Vue-componenten als 'View' en 'ViewModel' fungeren door de UI te renderen en te reageren op gebruikersinteractie, en Pinia stores de 'Model'-laag vertegenwoordigen door data en bedrijfslogica te scheiden.
*   **Tailwind CSS:** Gekozen voor een utility-first CSS-aanpak, wat resulteert in een consistente en gemakkelijk aanpasbare styling die de RealEstateCare huisstijl perfect volgt zonder overbodige CSS. Dit heeft geleid tot het bouwen van custom componenten met flexibele styling in plaats van het integreren van een complete, kant-en-klare UI-componentenbibliotheek (zoals Vuetify of Angular Materials), wat de controle over het design maximaliseert.

### Veiligheid (Security) - Conform OWASP Richtlijnen
Gezien de aard van een frontend prototype, ligt de primaire verantwoordelijkheid voor diepgaande beveiliging (zoals databasebescherming en server-side inputvalidatie) bij de backend. Echter, op frontend-niveau zijn de volgende maatregelen genomen om de veiligheid te waarborgen:

*   **XSS Preventie:** Vue.js escaped standaard automatisch HTML-content die in templates wordt gerenderd, wat beschermt tegen veelvoorkomende Cross-Site Scripting (XSS) aanvallen.
*   **Authenticatie Simulatie:** Er is een gesimuleerde login en tweefactorauthenticatie geïmplementeerd met client-side routeguards. Deze guards voorkomen ongeautoriseerde toegang tot beschermde routes, wat een belangrijke best practice is voor client-side beveiliging.
*   **Kwetsbare Afhankelijkheden:** Hoewel dit project een prototype is, is het een best practice om regelmatig `npm audit` uit te voeren om bekende kwetsbaarheden in gebruikte bibliotheken te identificeren en op te lossen.
*   **Gebruikersinvoer Validatie:** Voor een productieapplicatie zou uitgebreide client-side en server-side validatie van alle gebruikersinvoer geïmplementeerd moeten worden om injection-aanvallen en data-corruptie te voorkomen. Dit is in het huidige prototype beperkt tot basis HTML5 attributen.

### Toegankelijkheid (Accessibility) - Conform WCAG 2.1 Niveau A
Er is veel aandacht besteed aan de toegankelijkheid van de applicatie om deze bruikbaar te maken voor een breed scala aan gebruikers, inclusief degenen die afhankelijk zijn van ondersteunende technologieën (zoals screenreaders).

*   **Semantische HTML:** De applicatie maakt consistent gebruik van semantische HTML-elementen (`<header>`, `<nav>`, `<main>`, `<section>`, `<h2>`, `<label>`, `<button>`, `<ul>`, `<li>`), wat de structuur begrijpelijk maakt voor screenreaders en andere toegankelijkheidshulpmiddelen.
*   **Formulierlabels:** Alle formulierinvoervelden zijn correct gekoppeld aan hun `<label>` elementen (via `id` en `for` attributen), wat essentieel is voor screenreader-gebruikers om de functie van een invoerveld te begrijpen.
*   **Afbeelding Alt-teksten:** Het logo in de navigatiebalk heeft een beschrijvend `alt`-attribuut, wat cruciale informatie biedt voor visueel gehandicapte gebruikers.
*   **ARIA Attributen:** Er is strategisch gebruikgemaakt van ARIA (Accessible Rich Internet Applications) attributen, met name voor de tab-navigatie (`role="tablist"`, `role="tab"`, `aria-selected`), om de rol en status van interactieve elementen duidelijk te maken voor ondersteunende technologieën. Foutmeldingen (bijv. bij de login) gebruiken `role="alert"` om de gebruiker direct te informeren.
*   **Toetsenbordnavigatie:** De applicatie is volledig navigeerbaar met het toetsenbord, met duidelijke focus-indicatoren (door Tailwind's `focus:ring` stijlen) op alle interactieve elementen, wat cruciaal is voor gebruikers die geen muis kunnen gebruiken.
*   **WCAG 2.1 A Conformiteit:** De applicatie voldoet aan de meeste criteria voor WCAG 2.1 niveau A door middel van de bovenstaande implementaties.

Wat nog ontbreekt voor volledige WCAG 2.1 AA/AAA conformiteit en verdere verbetering:

*   **Kleurcontrast:** Hoewel de huisstijlkleuren zorgvuldig zijn gekozen, zou een grondige audit met een kleurcontrastchecker nodig zijn om de AAA-conformiteit voor alle tekst- en achtergrondcombinaties te garanderen.
*   **Spring-links (Skiplinks):** Voor complexere pagina's kunnen "skip-to-content" links worden toegevoegd voor toetsenbordgebruikers om repetitieve navigatie te omzeilen.
*   **Live Regions:** Voor dynamisch bijgewerkte content (bijv. na een succesvolle opslag), zouden ARIA live regions geïmplementeerd kunnen worden om screenreaders proactief op de hoogte te stellen van veranderingen.

### Usability (Bruikbaarheid) - Conform Jacob Nielsen's 10 Heuristieken
De applicatie streeft ernaar een intuïtieve en efficiënte gebruikerservaring te bieden, met inachtneming van Nielsen's heuristieken:

*   **Zichtbaarheid van systeemstatus:** Huidig: De applicatie geeft visuele feedback op button-clicks (hover/active states). Echter, bij asynchrone bewerkingen (data laden, opslaan) ontbreekt momenteel een expliciete laadindicator of succes-/foutmelding. Verbetering: Implementeer laadspinners of skeleton screens bij data-fetching, en toast-meldingen (korte pop-up notificaties) voor succesvolle opslag of fouten bij API-interacties.
*   **Match tussen systeem en de echte wereld:** Huidig: De terminologie (Nederlands) en de structuur van de inspectieformulieren sluiten nauw aan bij de dagelijkse praktijk van vastgoedinspecties.
*   **Gebruikerscontrole en vrijheid:** Huidig: De "← Terug" knop in de detailweergave biedt gebruikers de mogelijkheid om gemakkelijk terug te navigeren naar het overzicht. Verbetering: In een volwaardige applicatie zouden undo-functionaliteit of duidelijke annuleringsopties overwogen kunnen worden.
*   **Consistentie en standaarden:** Huidig: De applicatie volgt consistente styling (via Tailwind CSS klassen en custom variabelen), lay-outpatronen en navigatiestructuren over alle schermen, wat de leercurve voor gebruikers verlaagt.
*   **Foutpreventie:** Huidig: Enkele basis HTML5 input types (zoals `type="date"`) bieden al wat preventie. Verbetering: Uitgebreide client-side formuliervalidatie (bijv. verplichte velden, specifieke formaten, numerieke checks) zou verdere foutinvoer voorkomen en de gebruiker begeleiden.
*   **Herkenning in plaats van herinnering:** Huidig: Formuliervelden zijn duidelijk gelabeld en de tabbladen zijn direct zichtbaar en herkenbaar, wat onnodige geheugenbelasting van de gebruiker voorkomt.
*   **Flexibiliteit en efficiëntie van gebruik:** Huidig: De tabbladen in de inspectiedetailweergave zorgen voor een efficiënte organisatie en snelle toegang tot verschillende secties. Verbetering: Voor power-users zouden sneltoetsen of autocomplete-functionaliteit kunnen worden overwogen.
*   **Esthetisch en minimalistisch design:** Huidig: De gebruikersinterface is schoon, overzichtelijk en vrij van overbodige elementen, met focus op de kernfunctionaliteit, wat bijdraagt aan een plezierige gebruikerservaring.
*   **Help gebruikers bij het herkennen, diagnosticeren en herstellen van fouten:** Huidig: Bij de login en 2FA zijn duidelijke, directe foutmeldingen aanwezig wanneer ongeldige invoer wordt gedetecteerd. Verbetering: Meer context-specifieke foutmeldingen voor individuele formuliervelden zouden de gebruiker helpen om fouten nog sneller te corrigeren.
*   **Hulp en documentatie:** Huidig: Er is geen in-app help of documentatie aanwezig. Verbetering: Voor een complete applicatie zouden contextuele tooltips, een FAQ, of een uitgebreidere help-sectie kunnen worden toegevoegd.

## Wat nog niet goed werkt / Waarom dit niet lukte (Prototype Beperkingen)
Als frontend prototype focust dit project op de gebruikersinterface en de interactie, en simuleert het backend-communicatie. Om deze reden zijn de volgende functionaliteiten niet volledig geïmplementeerd of gesimuleerd:

*   **Geen Permanente Data Opslag:** Alle wijzigingen die via de formulieren worden gedaan (bijv. het invullen van schade-informatie) worden alleen in de Pinia store in het geheugen van de browser opgeslagen. Bij het verversen van de pagina gaan deze wijzigingen verloren. Dit komt doordat de data momenteel wordt opgehaald van een statische JSON placeholder API (jsonplaceholder.typicode.com/posts) die geen schrijfacties ondersteunt. Voor permanente opslag is een volwaardige backend API met PUT/POST functionaliteit nodig.
*   **Geen Echte Foto-upload:** Bij de foto-upload functionaliteit (`FotoUpload.vue`) wordt alleen de metadata (naam, grootte, type) van de geselecteerde bestanden opgeslagen in de Pinia store en weergegeven. De daadwerkelijke bestandsinhoud wordt niet naar een server geüpload. Dit vereist een backend-implementatie voor bestandsopslag en -verwerking.
*   **Gesimuleerde Authenticatie:** De login- en 2FA-processen zijn volledig gesimuleerd met hardcoded waarden in de `authStore.js`. Er vindt geen communicatie plaats met een externe authenticatieservice.
*   **Geen Volledige CRUD voor Inspecties:** De applicatie kan inspecties lezen (Read) en gedeeltelijk bijwerken (Update via patches naar de store). Het toevoegen (Create) of verwijderen (Delete) van inspecties is niet geïmplementeerd, aangezien dit verder gaat dan de scope van een prototype dat data alleen van een placeholder API ophaalt.
*   **Geen Real-time Updates:** Wijzigingen die in de applicatie worden aangebracht, zijn niet direct zichtbaar voor andere gebruikers of andere browser-instanties, omdat er geen WebSocket-verbindingen of vergelijkbare push-mechanismen zijn geïmplementeerd.

## Oplevering
Dit project is opgeleverd door middel van:

*   Een werkend prototype: Toegankelijk via een online hostingdienst op: `reliable-baklava-6a3329.netlify.app`
*   De broncode: Beschikbaar via GitHub op: `https://github.com/TechWarriorsports/real_estate_care` Let op: De `node_modules` map en andere gegenereerde bestanden zijn uitgesloten via `.gitignore`, conform de best practice.
*   De debriefing: Als PDF-document, apart aangeleverd.
