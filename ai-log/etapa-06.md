
# Jurnal AI – Etapa 6

## Proiect: BankFlow

**Student:** Nitu Ana Maria  
**Disciplina:** Tehnologii Web  
**Etapa:** 6 – Date de la un API (useEffect)  
**An universitar:** 2026–2027

---

## 1. Obiectivul etapei

Obiectivul Etapei 6 a fost conectarea aplicatiei
BankFlow la un API REST realizat cu json-server.

Datele conturilor bancare au fost mutate din
componenta React intr-un fisier db.json.

Aplicatia incarca automat conturile folosind
fetch, async/await si useEffect.

Au fost implementate trei stari:
- Loading
- Success
- Error

## 2. Utilizarea inteligentei artificiale

Pentru realizarea acestei etape am utilizat
ChatGPT ca instrument de asistenta.

AI-ul m-a ajutat la:

- Intelegerea cerintelor din laborator.
- Instalarea json-server versiunea 0.17.4.
- Crearea fisierului db.json.
- Configurarea comenzii npm run api.
- Rezolvarea unei erori JSON din package.json.
- Crearea fisierului src/api.js.
- Configurarea variabilei VITE_API_URL.
- Implementarea useEffect in App.jsx.
- Adaptarea datelor API la structura BankFlow.
- Implementarea starilor loading si error.
- Stilizarea mesajelor in App.css.
- Testarea functionarii aplicatiei.

## 3. Modificari realizate

Au fost create fisierele:

- frontend/db.json
- frontend/src/api.js
- frontend/.env.example
- ai-log/etapa-06.md

Au fost modificate:

- frontend/package.json
- frontend/package-lock.json
- frontend/src/App.jsx
- frontend/src/App.css
- README.md

## 4. Probleme intampinate

### Problema 1 – Eroare JSON

La pornirea serverului a aparut eroarea
EJSONPARSE din cauza unei probleme de
sintaxa in package.json.

Solutia a fost corectarea structurii JSON.

### Problema 2 – Oprirea serverului

Pentru testarea mesajului de eroare a fost
necesara identificarea terminalului in care
rula json-server.

Serverul a fost oprit cu Ctrl + C.

### Problema 3 – Testarea incarcarii

API-ul local raspundea prea rapid pentru
a observa mesajul de incarcare.

Solutia a fost pornirea temporara cu
optiunea --delay 4000.

## 5. Testarea aplicatiei

Au fost efectuate urmatoarele verificari:

1. API-ul a returnat 5 conturi bancare.
2. Aplicatia a afisat 3 conturi active.
3. Mesajul de eroare a aparut cu API-ul oprit.
4. Mesajul loading a aparut la intarzierea API-ului.
5. Tema intunecata a fost pastrata.
6. Datele au fost afisate in componentele React.

## 6. Limitari

In Etapa 6, activarea, dezactivarea si
stergerea conturilor modifica doar state-ul
local al aplicatiei React.

Modificarile nu sunt salvate pe server
si dispar dupa reincarcarea paginii.

Persistenta datelor va fi implementata
in Etapa 7.

## 7. Concluzie

Etapa 6 a permis trecerea de la date
statice la date incarcate dintr-un API REST.

Am inteles rolul functiilor fetch,
async/await si useEffect, precum si
importanta tratarii starilor loading,
success si error.

Codul propus de AI a fost adaptat si
verificat in aplicatia BankFlow.
