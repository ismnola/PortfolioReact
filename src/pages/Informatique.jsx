import React from "react";
import ThemeToggle from "../components/ThemeToggle"; // Importation du composant pour changer le thème

export default function Info() {
  return (
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-8">
      {/* En-tête */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Parcours Informatique</h1>
        
        {/* Barre de navigation */}
        <nav className="mt-6">
          <ul className="flex justify-center space-x-8">
            <li><a href="/" className="text-indigo-600 hover:text-indigo-800">Accueil</a></li>
            <li><a href="#projets" className="text-indigo-600 hover:text-indigo-800">Projets</a></li>
            <li><a href="#gestion-patrimoine" className="text-indigo-600 hover:text-indigo-800">Patrimoine IT</a></li>
            <li><a href="#support" className="text-indigo-600 hover:text-indigo-800">Support IT</a></li>
            <li><a href="#veille" className="text-indigo-600 hover:text-indigo-800">Veille Technologique</a></li>
            {/* Bouton pour changer le thème */}
            <li><ThemeToggle /></li>
          </ul>
        </nav>
      </header>

      {/* Section : Projets et Réalisations */}
      <section id="projets" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Mes Projets Informatiques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Projet : Boîte à Idées Numérique */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src="/images/fru.webp" alt="Boîte à Idées Numérique" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Boîte à Idées Numérique</h3>
              <p className="text-gray-500 mt-2">
                Plateforme collaborative permettant aux utilisateurs de soumettre et voter pour des idées.
              </p>
              <ul className="mt-4 text-sm">
                <li><strong>Contexte :</strong> Projet personnel</li>
                <li><strong>Technologies :</strong> Docker, GitLab CI/CD, Express.js, React, TailwindCSS</li>
                <li><strong>Rôle :</strong> Développement, CI/CD, hébergement</li>
                <li><strong>Résultat :</strong> Une plateforme fonctionnelle et déployée via Docker</li>
              </ul>
              <a href="https://github.com/votre-repo" className="inline-block mt-4 text-indigo-600 hover:text-indigo-800">
                Voir le projet
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2 : Gestion du Patrimoine Informatique */}
      <section id="gestion-patrimoine" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Gestion du Patrimoine Informatique</h2>
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-4 font-semibold text-sm text-gray-600 dark:text-gray-300">Outil</th>
              <th className="px-6 py-4 font-semibold text-sm text-gray-600 dark:text-gray-300">Usage</th>
              <th className="px-6 py-4 font-semibold text-sm text-gray-600 dark:text-gray-300">Explication</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">GLPI</td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Gestion du parc</td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Suivi des machines, tickets de support</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Active Directory</td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Gestion des accès</td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Création et gestion des utilisateurs</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Backup & Restore</td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Sauvegarde/restauration</td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Plan de sauvegarde et test de restauration</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Nmap & Wireshark</td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Sécurité réseau</td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Surveillance et analyse de trafic</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6">
          <p>J'ai mis en place un plan de sauvegarde et testé la restauration sur un serveur Debian. Voici une capture d'écran :</p>
          {/* Ajoute une image de capture d'écran ici */}
        </div>
      </section>

      {/* Section 3 : Support et Assistance IT */}
      <section id="support" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Support et Assistance IT</h2>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6">
          <h3 className="text-xl font-semibold">Exemple d'incident résolu</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Problème : L'utilisateur ne peut plus accéder à un dossier partagé sur Windows Server.</p>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Diagnostic : Vérification des droits d'accès dans Active Directory.</p>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Solution : Correction des permissions et test avec l'utilisateur.</p>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Outil utilisé : GLPI (gestion des tickets).</p>
          <a href="#" className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800">Voir le ticket</a>
        </div>
      </section>

      {/* Section 4 : Veille Technologique et Développement Personnel */}
      <section id="veille" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Veille Technologique et Développement Personnel</h2>
        <div>
          <p>Derniers articles de veille :</p>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800">Les tendances en cybersécurité 2025</a></li>
            <li><a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800">Docker et Kubernetes : l'avenir de l'orchestration</a></li>
            {/* Ajoute d'autres articles */}
          </ul>
        </div>

        <div className="mt-6">
          <p>Mon profil LinkedIn : <a href="https://www.linkedin.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800">Voir le profil</a></p>
          <p>Mon profil GitHub : <a href="https://github.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800">Voir le profil</a></p>
        </div>
      </section>

      {/* Section 5 : Travailler en Mode Projet */}
      <section id="projet" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Travailler en Mode Projet</h2>
        <p>Exemple d'un projet en méthodologie Agile :</p>
        <ul className="mt-4 space-y-2">
          <li>Rôle : Scrum Master</li>
          <li>Outil : Jira (planification des tâches)</li>
          <li>Diagramme de Gantt : <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800">Voir le diagramme</a></li>
        </ul>
        <div className="mt-6">
          <p>Documents associés :</p>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800">Cahier des charges</a></li>
            <li><a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800">Planification des livrables</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
