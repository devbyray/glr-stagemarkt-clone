# Git Installeren

Git is een version control systeem waarmee je je code kunt opslaan en beheren. Je hebt het nodig om dit project te downloaden (clonen).

## 🪟 Windows

### Optie 1: Git voor Windows (Aanbevolen)

1. Ga naar [git-scm.com/download/win](https://git-scm.com/download/win)
2. De download start automatisch
3. Open het gedownloade `.exe` bestand
4. Volg de installatie wizard:
   - Klik steeds op "Next"
   - **Belangrijk:** Bij "Adjusting your PATH environment" kies **"Git from the command line and also from 3rd-party software"**
   - Bij "Choosing the default editor" kies je favoriete editor (of laat "Vim" staan als je het niet weet)
   - Andere opties kun je op default laten

### Optie 2: GitHub Desktop (Makkelijkst voor beginners)

Als je Git moeilijk vindt, gebruik dan GitHub Desktop:

1. Ga naar [desktop.github.com](https://desktop.github.com/)
2. Download en installeer GitHub Desktop
3. Dit installeert ook Git automatisch!

### Controleer of het werkt

Open **Command Prompt** of **Git Bash** en typ:

```bash
git --version
```

Je zou iets moeten zien als `git version 2.x.x`

---

## 🍎 macOS

Git is waarschijnlijk al geïnstalleerd op je Mac! Controleer eerst:

### Controleer of je Git al hebt

Open **Terminal** en typ:

```bash
git --version
```

### Als Git nog niet is geïnstalleerd

**Optie 1: Via Xcode Command Line Tools (Aanbevolen)**

Als je `git --version` typt, vraagt macOS vaak automatisch om de Command Line Tools te installeren. Klik op "Install".

Of run dit in Terminal:

```bash
xcode-select --install
```

**Optie 2: Via Homebrew**

Als je Homebrew hebt:

```bash
brew install git
```

**Optie 3: GitHub Desktop**

Download [GitHub Desktop](https://desktop.github.com/) - dit installeert ook Git automatisch.

---

## 🐧 Linux (Ubuntu/Debian)

Open **Terminal** en run:

```bash
sudo apt-get update
sudo apt-get install git
```

### Controleer of het werkt

```bash
git --version
```

Je zou iets moeten zien als `git version 2.x.x`

---

## ⚙️ Git configureren (Eerste keer setup)

Na het installeren van Git, configureer je naam en email (dit wordt gebruikt bij je commits):

```bash
git config --global user.name "Jouw Naam"
git config --global user.email "jouw.email@voorbeeld.nl"
```

**Voorbeeld:**
```bash
git config --global user.name "Lisa de Vries"
git config --global user.email "lisa.devries@glr.nl"
```

### Controleer je configuratie

```bash
git config --global --list
```

---

## 📥 Project downloaden (clonen)

Nu je Git hebt, kun je het project downloaden:

### Via Command Line / Terminal

```bash
git clone https://github.com/JOUW-USERNAME/glr-stagemarkt-clone.git
cd glr-stagemarkt-clone
```

### Via GitHub Desktop

1. Open GitHub Desktop
2. Klik op "Clone a repository from the Internet"
3. Zoek het project of plak de URL
4. Kies waar je het wilt opslaan
5. Klik op "Clone"

---

## ✅ Klaar!

Git is nu geïnstalleerd en geconfigureerd. Ga terug naar de [README](../README.md) om verder te gaan! 🚀

---

## 📚 Extra bronnen

- [Git Basics - Officiële Git documentatie](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Skills - Interactieve tutorials](https://skills.github.com/)
- [Git Cheat Sheet (PDF)](https://education.github.com/git-cheat-sheet-education.pdf)
