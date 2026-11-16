# AI Log – Etapa 8: Navigare și stilizare pe componente

## Informații generale

**Proiect:** BankFlow  
**Disciplina:** Tehnologii Web  
**Student:** Nițu Ana Maria  
**Etapa:** 8 – Navigare și stilizare pe componente  
**Data:** 16.11.2026  
**Instrument AI utilizat:** ChatGPT (OpenAI)

---

## 1. Obiectivul etapei

Obiectivul Etapei 8 a fost transformarea aplicației BankFlow într-o aplicație React cu mai multe pagini, folosind React Router.

Aplicația trebuie să permită navigarea fără reîncărcarea completă a paginii, afișarea detaliilor fiecărui cont bancar și tratarea adreselor inexistente.

De asemenea, stilurile CSS trebuie reorganizate în fișiere CSS Modules, păstrând funcționalitățile realizate în Etapa 7.

---

## 2. Utilizarea instrumentului AI

Am utilizat ChatGPT pentru interpretarea cerințelor din ghidul Etapei 8 și adaptarea acestora la proiectul meu BankFlow.

Implementarea a fost realizată progresiv, fiecare modificare fiind introdusă și verificată înainte de continuarea etapei.

### Exemple de solicitări

1. Instalarea și configurarea React Router.
2. Organizarea folderelor components și pages.
3. Crearea componentei Layout.
4. Configurarea rutelor aplicației.
5. Mutarea operațiilor CRUD în ConturiPage.
6. Crearea paginii de detalii pentru fiecare cont bancar.
7. Implementarea useParams pentru citirea ID-ului.
8. Crearea paginilor Despre și NotFound.
9. Transformarea titlurilor conturilor în linkuri.
10. Separarea stilurilor folosind CSS Modules.
11. Păstrarea funcționalităților dezvoltate în Etapa 7.
12. Testarea navigării și a operațiilor CRUD.

---

## 3. Implementarea realizată

### 3.1. Instalarea React Router

Am instalat biblioteca React Router folosind comanda:

`npm install react-router-dom`

Am modificat fișierul:

`frontend/src/main.jsx`

Am adăugat BrowserRouter în jurul componentei App.

Acesta permite navigarea între paginile aplicației fără reîncărcarea completă a documentului HTML.

### 3.2. Configurarea rutelor

Am modificat:

`frontend/src/App.jsx`

Am configurat următoarele rute:

- `/` – pagina principală cu lista conturilor.
- `/conturi/:id` – pagina detaliilor unui cont bancar.
- `/despre` – pagina de prezentare a aplicației.
- `*` – pagina pentru adrese inexistente.

Am utilizat componentele Routes și Route.

### 3.3. Componenta Layout

Am creat fișierele:

- `frontend/src/components/Layout.jsx`
- `frontend/src/components/Layout.module.css`

Layout conține elementele comune tuturor paginilor:

- Antetul BankFlow.
- Meniul de navigare.
- Butonul pentru modul luminos/întunecat.
- Conținutul paginii curente.
- Subsolul aplicației.

Am utilizat NavLink pentru evidențierea paginii active și Outlet pentru afișarea conținutului corespunzător rutei.

### 3.4. Pagina principală

Am creat:

- `frontend/src/pages/ConturiPage.jsx`
- `frontend/src/pages/ConturiPage.module.css`

Am mutat logica de gestionare a conturilor bancare din App.jsx în ConturiPage.jsx.

Pagina conține formularul de adăugare, lista conturilor, contorul conturilor active și mesajele de eroare.

Operațiile CRUD au fost păstrate.

### 3.5. Pagina de detalii

Am creat:

- `frontend/src/pages/ContDetaliuPage.jsx`
- `frontend/src/pages/ContDetaliuPage.module.css`

Pagina afișează informațiile unui singur cont bancar.

Am folosit useParams pentru a prelua ID-ul contului din URL.

Informațiile afișate sunt:

- Numele contului.
- Tipul contului.
- Starea contului.
- Categoria contului.
- Utilizatorul asociat.
- ID-ul contului.

Datele sunt încărcate direct de pe server.

### 3.6. Extinderea API-ului

Am modificat:

`frontend/src/api.js`

Am adăugat funcția:

`fetchCont(id)`

Aceasta realizează o cerere GET către ruta:

`/conturi/:id`

Funcțiile pentru citirea listei, adăugarea, modificarea și ștergerea conturilor au fost păstrate.

### 3.7. Pagina Despre

Am creat:

`frontend/src/pages/DesprePage.jsx`

Pagina prezintă scopul aplicației, funcționalitățile, tehnologiile utilizate și informațiile despre proiect.

### 3.8. Pagina 404

Am creat:

`frontend/src/pages/NotFoundPage.jsx`

Aceasta afișează un mesaj atunci când utilizatorul accesează o adresă necunoscută.

Am adăugat și un link pentru revenirea la pagina principală.

### 3.9. CSS Modules

Am reorganizat stilurile folosind fișiere CSS Modules.

Fișierele create sunt:

- Layout.module.css
- ContCard.module.css
- ContList.module.css
- ContForm.module.css
- ConturiPage.module.css
- ContDetaliuPage.module.css

Am creat și actualizat fișierul global:

`frontend/src/index.css`

Acesta conține variabilele de culoare și stilurile comune.

Am păstrat designul albastru BankFlow și modurile luminos/întunecat.

### 3.10. Constantele aplicației

Am creat:

`frontend/src/constants.js`

Acest fișier centralizează tipurile conturilor bancare, etichetele utilizate în interfață și corespondența dintre valorile aplicației și cele ale API-ului.

---

## 4. Testarea manuală

### Testul 1 – Pagina principală

Am pornit serverul API și aplicația React.

Rezultat: pagina principală BankFlow s-a afișat corect, împreună cu formularul și lista conturilor.

### Testul 2 – Navigarea către detalii

Am apăsat pe numele contului „Cont curent”.

Rezultat: s-a deschis pagina de detalii a contului, cu informațiile încărcate de pe server.

### Testul 3 – Pagina Despre

Am accesat secțiunea Despre din meniul de navigare.

Rezultat: pagina de prezentare s-a afișat corect.

### Testul 4 – Modul luminos/întunecat

Am verificat utilizarea butonului pentru schimbarea temei.

Rezultat: tema aplicației a putut fi schimbată și pe paginile noi.

### Testul 5 – Cont inexistent

Am accesat adresa:

`/conturi/999`

Rezultat: aplicația a afișat mesajul de eroare HTTP 404 și linkul pentru revenirea la lista conturilor.

### Testul 6 – Adresă inexistentă

Am accesat adresa:

`/ceva`

Rezultat: aplicația a afișat pagina personalizată 404.

### Testul 7 – Adăugarea unui cont

Am adăugat un cont numit:

`Test etapa 8`

Rezultat: contul a apărut în listă și a rămas salvat după reîncărcarea paginii.

### Testul 8 – Modificarea stării

Am activat și dezactivat contul de test.

Rezultat: modificările au fost salvate și păstrate după reîncărcarea paginii.

### Testul 9 – Ștergerea unui cont

Am șters contul utilizat pentru testare.

Rezultat: contul a dispărut din listă și nu a mai apărut după reîncărcarea paginii.

---

## 5. Probleme întâmpinate și soluții

### Problema 1 – Instalarea React Router

Inițial a fost utilizată o comandă cu denumirea greșită a pachetului.

Soluție: am verificat instalarea și am utilizat pachetul corect react-router-dom.

### Problema 2 – Pornirea aplicației

La pornirea aplicației a fost introdusă greșit comanda npm.

Soluție: am corectat comanda și am pornit aplicația folosind:

`npm run dev`

### Problema 3 – Organizarea stilurilor

În Etapa 7, o mare parte din stiluri erau definite în App.css.

Soluție: am reorganizat stilurile în index.css și fișiere CSS Modules, separând stilurile globale de cele specifice componentelor.

### Problema 4 – Adaptarea exemplelor la BankFlow

Exemplele din ghidul profesorului utilizează task-uri.

Soluție: am adaptat rutele și componentele la modelul de date BankFlow, folosind resursa conturi și câmpurile accountName, accountType și active.

---

## 6. Verificarea automată

Am păstrat fișierul tw.json din Etapa 7.

Resursa configurată este:

`conturi`

Ruta de detalii este:

`/conturi/:id`

Am păstrat atributele data-testid din Etapa 7 și le-am adăugat pe cele necesare în Etapa 8:

- nav
- item-link
- detail
- detail-title
- loading
- error
- not-found

Aceste atribute permit identificarea elementelor în cadrul testelor automate.

---

## 7. Contribuția personală

Am integrat modificările în proiect folosind Visual Studio Code.

Am organizat structura aplicației, am creat fișierele necesare și am verificat manual funcționalitățile în browser.

ChatGPT a fost utilizat pentru interpretarea cerințelor, generarea codului, explicarea componentelor și îndrumarea etapelor de implementare.

Codul sugerat a fost introdus în proiect și verificat prin rularea aplicației.

---

## 8. Concluzii

În Etapa 8 am transformat BankFlow într-o aplicație React cu navigare între mai multe pagini.

Am învățat să utilizez BrowserRouter, Routes, Route, Link, NavLink, Outlet și useParams.

Am implementat pagini dinamice de detaliu și tratarea adreselor inexistente.

Am reorganizat stilurile aplicației folosind CSS Modules și am păstrat funcționalitățile CRUD realizate anterior.

Această etapă pregătește aplicația pentru Etapa 9, în care serverul de test va fi înlocuit cu un backend propriu folosind Node.js și Express.

---

## 9. Fișierele etapei

- frontend/src/main.jsx
- frontend/src/App.jsx
- frontend/src/api.js
- frontend/src/constants.js
- frontend/src/index.css
- frontend/src/components/Layout.jsx
- frontend/src/components/Layout.module.css
- frontend/src/components/ContCard.jsx
- frontend/src/components/ContCard.module.css
- frontend/src/components/ContList.jsx
- frontend/src/components/ContList.module.css
- frontend/src/components/ContForm.jsx
- frontend/src/components/ContForm.module.css
- frontend/src/pages/ConturiPage.jsx
- frontend/src/pages/ConturiPage.module.css
- frontend/src/pages/ContDetaliuPage.jsx
- frontend/src/pages/ContDetaliuPage.module.css
- frontend/src/pages/DesprePage.jsx
-