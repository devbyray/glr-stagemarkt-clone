# Node.js Installeren

Node.js is nodig om deze applicatie te draaien. Installeer de **LTS versie** (Long Term Support).

## 🪟 Windows

1. Ga naar [nodejs.org](https://nodejs.org/)
2. Download de **LTS versie** (bijv. "24.x.x LTS - Recommended For Most Users")
3. Open het gedownloade `.msi` bestand
4. Volg de installatie wizard (klik steeds op "Next")
5. ✅ Zorg dat "Add to PATH" aangevinkt staat
6. Herstart je computer na installatie

### Controleer of het werkt

Open **Command Prompt** (zoek "cmd" in het Start menu) en typ:

```bash
node --version
```

Je zou iets moeten zien als `v24.x.x`

Als dit werkt, typ dan ook:

```bash
npm --version
```

Dit should iets laten zien als `10.x.x`

✅ Perfect! Je bent klaar om te gaan!

### ❌ Problemen?

**"node is not recognized"**
- Je hebt waarschijnlijk je computer niet herstart na installatie
- Of "Add to PATH" was niet aangevinkt tijdens installatie

**Oplossing:** Verwijder Node.js via "Apps & features" in Windows instellingen, en installeer opnieuw (zorg dat "Add to PATH" aangevinkt is!)

---

## 🍎 macOS

### Optie 1: Via de website (Makkelijkst)

1. Ga naar [nodejs.org](https://nodejs.org/)
2. Download de **LTS versie**
3. Open het `.pkg` bestand en volg de installatie
4. Voer je wachtwoord in als daarom gevraagd wordt

### Optie 2: Via Homebrew (Als je dat al hebt)

Als je Homebrew al geïnstalleerd hebt, open Terminal en run:

```bash
brew install node
```

### Controleer of het werkt

Open **Terminal** en typ:

```bash
node --version
```

Je zou iets moeten zien als `v24.x.x`

---

## 🐧 Linux (Ubuntu/Debian)

Open de **Terminal** en run:

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Controleer of het werkt

```bash
node --version
```

Je zou iets moeten zien als `v24.x.x`

---

## ✅ Klaar!

Node.js en npm zijn nu geïnstalleerd. Ga terug naar de [README](../README.md) om verder te gaan! 🚀
