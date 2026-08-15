# TopoCheck Website

Statische Projektwebsite für GitHub Pages und die Custom Domain `topocheck.dev`.

## Seiten

- `/` – Homepage mit den wichtigsten Projektinformationen
- `/playground/` – vorbereitete interaktive Playground-Vorschau
- `/docs/` – vorbereitete und durchsuchbare Projektdokumentation

## Lokal starten

Mit der VS-Code-Erweiterung **Live Server** die Datei `index.html` öffnen oder im Projektordner ausführen:

```bash
python -m http.server 8000
```

Danach `http://localhost:8000` öffnen.

## Dateien bearbeiten

- Gemeinsame Grundlagen: `assets/css/base.css`
- Header, Navigation, Buttons und Footer: `assets/css/components.css`
- Seitenspezifische Styles: `home.css`, `playground.css`, `docs.css`
- Scroll-Effekte: `assets/css/animations.css` und `assets/js/animations.js`
- Mobile Darstellung: `assets/css/responsive.css`
- Bilder: passende Unterordner in `assets/images/`

## Auf GitHub veröffentlichen

Den gesamten Inhalt in den Root des Repositorys committen. Unter **Settings → Pages** `Deploy from a branch`, `main` und `/ (root)` auswählen. Die Datei `CNAME` verbindet das Projekt mit `topocheck.dev`.

## Vor der Veröffentlichung prüfen

- Teamrollen und Texte aktualisieren
- echte Teamfotos und Screenshots einfügen
- Kontakt, Impressum und Datenschutz ergänzen
- Dokumentationsinhalte mit dem Entwicklungsstand abgleichen
