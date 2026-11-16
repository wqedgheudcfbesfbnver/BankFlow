
# AI Log – Etapa 7: Formular și validare

## Informații generale

**Proiect:** BankFlow  
**Disciplina:** Tehnologii Web  
**Student:** Nițu Ana Maria  
**Etapa:** 7 – Formular și validare  
**Data:** 16.11.2026  
**Instrument AI utilizat:** ChatGPT (OpenAI)

---

## 1. Obiectivul etapei

Obiectivul etapei 7 a fost implementarea unui formular
React pentru adăugarea conturilor bancare și realizarea
operațiilor CRUD printr-un API REST simulat.

Aplicația trebuie să permită utilizatorului să adauge,
să vizualizeze, să activeze, să dezactiveze și să
șteargă conturi bancare.

Modificările trebuie salvate pe server și păstrate
după reîncărcarea paginii.

---

## 2. Utilizarea instrumentului AI

Am utilizat ChatGPT pentru interpretarea cerințelor
din ghidul Etapei 7 și adaptarea acestora la proiectul
meu BankFlow.

Am solicitat explicații și corectarea codului , astfel încât să pot implementa cerințele progresiv și să verific funcționalitatea aplicației.

### Exemple de solicitări

1. Adaptarea Etapei 7 la structura BankFlow.
2. Implementarea funcțiilor GET, POST, PATCH și DELETE.
3. Crearea unui formular React cu validare.
4. Conectarea formularului la server.
5. Implementarea salvării persistente a datelor.
6. Adaptarea componentelor ContCard și ContList.
7. Integrarea atributelor data-testid.
8. Păstrarea designului și a modului light/dark.
9. Pregătirea testării și documentării proiectului.

---

## 3. Implementarea realizată

### 3.1. API și operații CRUD

Am modificat fișierul:

frontend/src/api.js

Am implementat funcția comună request(), utilizată
pentru comunicarea cu serverul JSON Server.

Operațiile disponibile sunt:

- GET /conturi – citirea conturilor
- POST /conturi – adăugarea unui cont
- PATCH /conturi/:id – modificarea stării
- DELETE /conturi/:id – ștergerea unui cont

### 3.2. Formularul React

Am creat componenta:

frontend/src/components/ContForm.jsx

Formularul permite introducerea numelui unui cont
și selectarea tipului acestuia.

Tipurile disponibile sunt:

- Current
- Savings
- Deposit

Am utilizat useState pentru gestionarea câmpurilor.

Fiecare câmp este controlat prin value și onChange.

### 3.3. Validarea datelor

Am implementat următoarele reguli:

- Numele contului este obligatoriu.
- Numele poate avea maximum 100 de caractere.
- Tipul contului trebuie să fie valid.
- Erorile sunt afișate în formular, fără alert().
- Datele invalide nu sunt trimise pe server.

În timpul salvării, butonul este dezactivat.

Formularul este golit numai după confirmarea
salvării de către server.

### 3.4. Integrarea în aplicație

Am modificat:

frontend/src/App.jsx

Am conectat formularul la funcțiile API.

Pentru adăugare și modificare, interfața este
actualizată folosind datele returnate de server.

Am păstrat:

- Contorul conturilor bancare
- Numărul conturilor active
- Funcționalitatea light/dark mode
- Lista conturilor bancare
- Mesajele de eroare

### 3.5. Componentele listei

Am modificat:

frontend/src/components/ContCard.jsx

frontend/src/components/ContList.jsx

Am integrat checkbox-ul pentru activare și
dezactivare și butonul pentru ștergere.

Am adăugat atribute data-testid pentru testarea
automată și data-id pentru identificarea conturilor.

### 3.6. Designul aplicației

Am actualizat:

frontend/src/App.css

Interfața include două panouri:

- Stânga: formularul de adăugare
- Dreapta: lista conturilor bancare

Designul este responsive și permite utilizarea
modului luminos sau întunecat.

### 3.7. Configurarea testării automate

Am creat fișierul tw.json în rădăcina proiectului.

Configurarea utilizează:

- resource: conturi
- title: accountName
- done: active
- sample: accountType = Savings

Am adaptat formularul pentru compatibilitate
cu aceste câmpuri.

---

## 4. Testarea manuală

Am verificat funcționalitățile împreună cu
instrumentul AI, prin testare manuală în browser.

### Testul 1 – Validare formular

Am încercat adăugarea unui cont fără nume.

Rezultat:
Formularul a afișat un mesaj de eroare, iar
contul nu a fost adăugat.

### Testul 2 – Adăugare cont

Am creat un cont cu numele:

Cont test etapa 7

Am selectat tipul Economii.

Rezultat:
Contul a fost adăugat cu succes în listă.

După reîncărcarea paginii, contul a rămas salvat.

### Testul 3 – Modificare stare

Am dezactivat contul creat anterior.

Rezultat:
Starea a devenit Inactiv și s-a păstrat după
reîncărcarea paginii.

### Testul 4 – Ștergere cont

Am șters contul utilizat pentru testare.

Rezultat:
Contul a dispărut din listă și nu a mai apărut
după reîncărcarea paginii.

### Testul 5 – Server oprit

Am oprit serverul API și am încercat să adaug
un cont nou.

Rezultat:
Aplicația a afișat un mesaj de eroare, iar
textul introdus în formular a fost păstrat.

### Testul 6 – Repornirea serverului

Am repornit serverul și am repetat salvarea.

Rezultat:
Contul a fost salvat, iar formularul s-a golit
după confirmarea operației.

---

## 5. Probleme și soluții

### Problema 1 – Adaptarea modelului de date

Exemplele din ghid folosesc task-uri, iar BankFlow
gestionează conturi bancare.

Soluție:
Am adaptat câmpurile și operațiile API la
structura specifică proiectului BankFlow.

### Problema 2 – Compatibilitatea cu testarea automată

Fișierul tw.json trebuie să corespundă
câmpurilor existente în baza de date.

Soluție:
Am utilizat accountName, active și accountType
și am actualizat atributele data-testid.

### Problema 3 – Pierderea datelor la eroarea serverului

Formularul nu trebuie golit dacă salvarea eșuează.

Soluție:
Am utilizat try/catch/finally și am mutat
resetarea formularului după await onAdd().

---

## 6. Verificarea și contribuția personală

ChatGPT a fost utilizat ca instrument de asistență
pentru generarea și explicarea codului.

Am integrat codul în proiectul BankFlow folosind
Visual Studio Code.

Am realizat testarea manuală a funcționalităților
în browser și am verificat comportamentul
operațiilor CRUD.

Am urmărit păstrarea funcționalităților dezvoltate
în etapele anterioare.

---

## 7. Concluzii

În Etapa 7 am implementat un formular React
controlat, cu validare și comunicare cu serverul.

Aplicația BankFlow suportă operațiile CRUD,
salvarea persistentă a datelor și gestionarea
erorilor de comunicare.

Am înțeles mai bine utilizarea useState,
a funcțiilor asincrone, a metodelor HTTP și
a relației dintre interfața React și API.

Instrumentul AI m-a ajutat să structurez
implementarea, dar funcționalitățile au fost
integrate și testate manual în proiect.

---

## 8. Fișierele etapei

- frontend/src/api.js
- frontend/src/App.jsx
- frontend/src/App.css
- frontend/src/components/ContForm.jsx
- frontend/src/components/ContCard.jsx
- frontend/src/components/ContList.jsx
- tw.json
- README.md
- ai-log/etapa-07.md
