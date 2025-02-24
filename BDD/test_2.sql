-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 25 mai 2024 à 23:23
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `test.2`
--

-- --------------------------------------------------------

--
-- Structure de la table `backlog`
--

CREATE TABLE `backlog` (
  `id` int(11) NOT NULL,
  `tache` int(11) NOT NULL,
  `projet` int(11) NOT NULL,
  `date_d` date NOT NULL,
  `date_f` date NOT NULL,
  `descr` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `direction`
--

CREATE TABLE `direction` (
  `id` int(11) NOT NULL,
  `nom_direction` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `direction`
--

INSERT INTO `direction` (`id`, `nom_direction`) VALUES
(1, 'Direction des Systèmes d\'Information');

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `id` int(11) NOT NULL,
  `descr` varchar(266) NOT NULL,
  `date_d` date NOT NULL,
  `date_f` date NOT NULL,
  `client` varchar(266) NOT NULL,
  `chef_p` varchar(266) NOT NULL,
  `validation` tinyint(1) NOT NULL,
  `budget` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ressources`
--

CREATE TABLE `ressources` (
  `id` int(11) NOT NULL,
  `type_1` varchar(266) NOT NULL,
  `type_2` varchar(266) NOT NULL,
  `détail` varchar(266) NOT NULL,
  `projet` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ress_hum`
--

CREATE TABLE `ress_hum` (
  `id` int(11) NOT NULL,
  `descr` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ress_log`
--

CREATE TABLE `ress_log` (
  `id` int(11) NOT NULL,
  `descr` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ress_mat`
--

CREATE TABLE `ress_mat` (
  `id` int(11) NOT NULL,
  `descr` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(266) NOT NULL,
  `prenom` varchar(266) NOT NULL,
  `photo` varchar(266) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `direction` varchar(266) DEFAULT NULL,
  `poste` varchar(266) DEFAULT NULL,
  `compte` tinyint(1) NOT NULL DEFAULT 1,
  `CRUD` tinyint(1) NOT NULL,
  `import` tinyint(1) NOT NULL,
  `export` tinyint(1) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `Add_project` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `photo`, `username`, `password`, `direction`, `poste`, `compte`, `CRUD`, `import`, `export`, `admin`, `Add_project`) VALUES
(1, 'mostefaoui', 'houda', 'photo_1716029687509.jpg', 'houda', 'houda', 'Direction des Systèmes d\'Information', 'Développeur', 1, 1, 1, 1, 1, 1),
(2, 'Anane', 'Nardjes', 'photo_1711452099733.PNG', 'nerssece', 'soficlef', 'Direction des Systèmes d\'Information', '//', 1, 1, 1, 1, 1, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `backlog`
--
ALTER TABLE `backlog`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `direction`
--
ALTER TABLE `direction`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ressources`
--
ALTER TABLE `ressources`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ress_hum`
--
ALTER TABLE `ress_hum`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ress_log`
--
ALTER TABLE `ress_log`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ress_mat`
--
ALTER TABLE `ress_mat`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `backlog`
--
ALTER TABLE `backlog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `direction`
--
ALTER TABLE `direction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ressources`
--
ALTER TABLE `ressources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ress_hum`
--
ALTER TABLE `ress_hum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ress_log`
--
ALTER TABLE `ress_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ress_mat`
--
ALTER TABLE `ress_mat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
