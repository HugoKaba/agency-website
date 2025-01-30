# 3 Big Brain - Mini-agence Web

Bienvenue dans le projet **3 Big Brain**, une mini-agence fictive utilisant **Next.js**, **React Server Components (RSC)** et **Prisma** pour gérer l'interface utilisateur et la base de données. Ce projet a pour but de créer un site web dynamique et performant pour une agence de création de projets web. Nous avons intégré des fonctionnalités modernes, une optimisation de la performance et un design attractif.

## Table des matières

- [3 Big Brain - Mini-agence Web](#3-big-brain---mini-agence-web)
  - [Table des matières](#table-des-matières)
  - [Description du projet](#description-du-projet)
  - [Technologies utilisées](#technologies-utilisées)
  - [Fonctionnalités implémentées](#fonctionnalités-implémentées)
    - [1. **Landing Page**](#1-landing-page)
    - [2. **Projets**](#2-projets)
    - [3. **Page individuelle des projets**](#3-page-individuelle-des-projets)
    - [4. **Équipe et Témoignages**](#4-équipe-et-témoignages)
    - [5. **Formulaire de contact**](#5-formulaire-de-contact)
  - [Instructions d'installation et de lancement](#instructions-dinstallation-et-de-lancement)
    - [1. **Cloner le repository**](#1-cloner-le-repository)
    - [2. **Installation des Dépendances**](#2-installation-des-dépendances)
    - [3. **Lancement de la BDD en local avec Docker**](#3-lancement-de-la-bdd-en-local-avec-docker)
    - [4. **Lancement du Projet**](#4-lancement-du-projet)
  - [Choix de conception et justification de l'utilisation des RSC](#choix-de-conception-et-justification-de-lutilisation-des-rsc)
    - [Pourquoi utiliser **React Server Components (RSC)** ?](#pourquoi-utiliser-react-server-components-rsc-)
    - [Avantages de RSC dans notre projet](#avantages-de-rsc-dans-notre-projet)
    - [Exemples d'utilisation des RSC dans notre projet](#exemples-dutilisation-des-rsc-dans-notre-projet)
    - [Conclusion](#conclusion)
  - [Rapport de performance](#rapport-de-performance)
    - [📌 Objectif](#-objectif)
    - [🛠️ Outils d'analyse utilisés](#️-outils-danalyse-utilisés)
    - [📊 Métriques évaluées](#-métriques-évaluées)
      - [✅ **Core Web Vitals**](#-core-web-vitals)
      - [📈 **Autres métriques**](#-autres-métriques)
  - [🔍 Résultats de l'analyse](#-résultats-de-lanalyse)
  - [🚀 Recommandations et optimisations](#-recommandations-et-optimisations)
  - [📢 Conclusion](#-conclusion)

---

## Description du projet

 **3Big Brain** est une agence fictive de création web, qui propose des services allant de la création de sites web à la gestion de projets numériques. Le site inclut plusieurs pages et fonctionnalités qui présentent les services de l'agence et permettent aux utilisateurs de la contacter facilement.

---

## Technologies utilisées

- **Next.js** : Framework principal pour le développement du site, avec l'App Router et les React Server Components pour une gestion efficace du rendu côté serveur.
- **React** : Utilisé pour la création des composants de l'interface utilisateur.
- **Prisma** : ORM pour la gestion de la base de données, permettant de sauvegarder les messages envoyés via le formulaire de contact.
- **Tailwind CSS** : Framework CSS pour la création d'un design rapide, réactif et moderne.
- **TypeScript** : Langage utilisé pour garantir un code robuste et facile à maintenir.
- **Docker** : Utilisé pour la conteneurisation de la base de données PostgreSQL afin de simplifier le développement et la gestion des environnements locaux.

---

## Fonctionnalités implémentées

### 1. **Landing Page**
   - Présentation de l'agence : Nom, Logo, Slogan, Valeurs, Équipe.
   - Un bouton de contact pour encourager les utilisateurs à entrer en contact avec l'agence.
   - Un design attractif et réactif réalisé avec **Tailwind CSS**.

### 2. **Projets**
   - Liste des projets réalisés avec des descriptions, des images et des liens vers des pages de détails pour chaque projet.

### 3. **Page individuelle des projets**
   - Détails complets sur chaque projet : Contexte, Objectifs, Technologies utilisées, Résultats.

### 4. **Équipe et Témoignages**
   - **Présentation de l'équipe** : Description des membres de l'équipe et de leurs rôles au sein de l'agence.
   - **Témoignages clients** : Le site présente des témoignages clients, soulignant l'expérience des clients et les résultats obtenus.

### 5. **Formulaire de contact**
   - Champs : Nom, Email, Message.
   - Validation des données côté client et côté serveur pour garantir que les informations soumises sont valides.
   - Sauvegarde des données envoyées dans une base de données PostgreSQL grâce à **Prisma**.

---

## Instructions d'installation et de lancement

### 1. **Cloner le repository**

   Clonez le dépôt GitHub dans votre machine locale :

   ```bash
   git clone https://github.com/By-Kvn/agency-website.git
   ```

### 2. **Installation des Dépendances**
   ```bash
   npm install
   ```
### 3. **Lancement de la BDD en local avec Docker**
   ```bash
   docker-compose up -d
   ```
### 4. **Lancement du Projet**
   ```bash
   npm run dev
   ```
Le serveur de développement sera lancé et vous pourrez accéder au site à l'adresse suivante : http://localhost:3000.

---

## Choix de conception et justification de l'utilisation des RSC

### Pourquoi utiliser **React Server Components (RSC)** ?  
L'utilisation des **React Server Components (RSC)** dans ce projet permet d'améliorer la performance globale du site en optimisant le rendu et la gestion des données côté serveur.

### Avantages de RSC dans notre projet

1. **Optimisation du rendu côté serveur**  
   - Moins de JavaScript est envoyé au client, ce qui réduit la taille des bundles et améliore le temps de chargement initial.
   - Le rendu des composants côté serveur permet d'éviter le re-render inutile sur le client.

2. **Amélioration des performances et du SEO**  
   - Les pages s'affichent plus rapidement avec un contenu pré-rendu, ce qui améliore l'expérience utilisateur et le référencement naturel (**SEO**).
   - Grâce au rendu côté serveur, les moteurs de recherche peuvent mieux indexer le contenu.

3. **Gestion efficace des données avec Prisma**  
   - Les requêtes à la base de données sont exécutées côté serveur, éliminant la nécessité de faire des appels API côté client.
   - Réduction du passage de données entre le serveur et le client, ce qui diminue la latence.

4. **Réduction de la charge sur le client**  
   - Les RSC permettent d’envoyer uniquement du HTML et du CSS au navigateur, évitant ainsi le rendu JavaScript gourmand en ressources côté client.
   - Meilleure accessibilité et compatibilité avec des appareils plus anciens.

5. **Modularité et maintenabilité du code**  
   - Séparation claire entre les composants interactifs (Client Components) et les composants statiques (Server Components).
   - Facilite la gestion des dépendances et améliore la structure globale du projet.

### Exemples d'utilisation des RSC dans notre projet  

- **Page individuelle des projets**  
  - Chaque page de projet est rendue directement sur le serveur avec toutes ses informations, ce qui accélère le chargement et garantit une bonne indexation SEO.

### Conclusion  
L'utilisation des **React Server Components** dans notre projet **3 Big Brain** nous permet d'améliorer considérablement les performances, de réduire la charge côté client et d'optimiser le référencement SEO, tout en gardant une architecture modulable et maintenable. Cette approche garantit une expérience utilisateur fluide et rapide, adaptée aux exigences modernes du développement web.

---

## Rapport de performance  

### 📌 Objectif  
L'objectif de ce rapport est d'analyser et documenter les performances du site web déployé sur **Vercel** en utilisant des outils d'analyse web. Nous nous basons sur les métriques essentielles de **web performance** pour évaluer la rapidité, la stabilité et l'interactivité du site.  

### 🛠️ Outils d'analyse utilisés  
- **Google PageSpeed Insights**  
- **Lighthouse (via Chrome DevTools)**  

### 📊 Métriques évaluées  
#### ✅ **Core Web Vitals**  
- **LCP (Largest Contentful Paint)** : Temps nécessaire pour afficher l'élément principal de la page.  
- **CLS (Cumulative Layout Shift)** : Stabilité visuelle du contenu pendant le chargement.  
- **INP (Interaction to Next Paint)** : Temps de réponse aux interactions utilisateur.  

#### 📈 **Autres métriques**  
- **FCP (First Contentful Paint)** : Temps avant l'affichage du premier élément visible.  
- **TTI (Time to Interactive)** : Temps nécessaire avant que la page devienne totalement interactive.  
- **TBT (Total Blocking Time)** : Temps où la page est bloquée par du JavaScript lourd.  
- **Temps de chargement total** : Temps nécessaire pour charger entièrement la page.  
- **Taille totale de la page** : Poids des ressources chargées (HTML, CSS, JS, images).  

---

## 🔍 Résultats de l'analyse  
📅 **Date et heure de l'analyse** : _[Ajoute ici la date et l’heure de l’analyse]_  
🌍 **URL du site testé** : [_Ajoute ici l'URL du site déployé_]  

| Métrique                | Score / Valeur Mesurée | Seuil Recommandé |
|-------------------------|-----------------------|------------------|
| **LCP**                 | _[Ajoute valeur]_      | 🟢 < 2.5s |
| **CLS**                 | _[Ajoute valeur]_      | 🟢 < 0.1 |
| **INP**                 | _[Ajoute valeur]_      | 🟢 < 200ms |
| **FCP**                 | _[Ajoute valeur]_      | 🟢 < 1.8s |
| **TTI**                 | _[Ajoute valeur]_      | 🟢 < 5s |
| **TBT**                 | _[Ajoute valeur]_      | 🟢 < 200ms |
| **Temps de chargement**  | _[Ajoute valeur]_      | 🟢 < 3s |
| **Taille de la page**    | _[Ajoute valeur]_      | 🟢 < 1MB |

📸 **Captures d’écran des résultats Lighthouse et PageSpeed Insights**  
_Ajoute ici les screenshots des tests effectués._  

📌 **Analyse des points forts et faibles**  
✅ **Points forts** :  
- _[Liste les aspects bien optimisés, ex : chargement rapide, bon CLS, bonne compression des images…]_  
⚠️ **Axes d'amélioration** :  
- _[Liste les métriques faibles et les problèmes identifiés, ex : JavaScript trop volumineux, longs temps de réponse…]_  

---

## 🚀 Recommandations et optimisations  

**Problèmes identifiés & Solutions**  

| Problème détecté | Solution recommandée | Implémentation |
|------------------|---------------------|---------------|
| LCP élevé | Optimiser le chargement des images prioritaires | Utiliser lazy loading |
| TBT élevé | Réduire l'impact des scripts tiers | Charger les scripts en mode async/defer et limiter leur usage |
| _CLS mauvais_ | Assurer la stabilité des éléments en CSS | Définir des tailles fixes pour les images et les polices chargées dynamiquement |
| _INP trop élevé_ | Optimiser le rendu des interactions | Minimiser le JavaScript bloquant et améliorer la gestion des événements |

📌 **Mise en œuvre** :  
- Prioriser les **optimisations d'images** (lazy loading).  
- Minimiser le **JavaScript bloquant** et optimiser le rendu côté serveur.  
- Améliorer la gestion du **caching** pour réduire les requêtes inutiles.  

---

## 📢 Conclusion  
Les performances du site **3 Big Brain** sont globalement bonnes, mais certaines métriques peuvent être améliorées. En mettant en œuvre les optimisations recommandées, nous pourrons garantir un chargement rapide, une bonne interactivité et une expérience utilisateur fluide sur tous les appareils. 🚀  
