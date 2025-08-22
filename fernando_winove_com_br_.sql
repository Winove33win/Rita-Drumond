-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 13/08/2025 às 13:54
-- Versão do servidor: 10.11.14-MariaDB
-- Versão do PHP: 8.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fernando_winove_com_br_`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `resumo` text DEFAULT NULL,
  `conteudo` longtext DEFAULT NULL,
  `imagem_destacada` text DEFAULT NULL,
  `data_publicacao` datetime DEFAULT current_timestamp(),
  `autor` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Despejando dados para a tabela `blog_posts`
--

INSERT INTO `blog_posts` (`id`, `titulo`, `slug`, `resumo`, `conteudo`, `imagem_destacada`, `data_publicacao`, `autor`) VALUES
(1, 'Bem-vindo ao Blog', 'bem-vindo-ao-blog', 'Post inaugural dando boas vindas ao blog.', '<p>Este é o nosso primeiro post no blog!</p>', 'https://exemplo.com/post1.jpg', '2025-07-31 16:20:27', 'Admin'),
(2, 'Novidades da Plataforma', 'novidades-da-plataforma', 'Veja o que mudou na última atualização.', '<p>Muitas melhorias implementadas.</p>', 'https://exemplo.com/post2.jpg', '2025-07-31 16:20:27', 'Admin'),
(3, 'Dicas de Produtividade', 'dicas-de-produtividade', 'Pequenas ações para melhorar seu dia a dia.', '<p>Confira nossas dicas valiosas.</p>', 'https://exemplo.com/post3.jpg', '2025-07-31 16:20:27', 'Equipe Winove');

-- --------------------------------------------------------

--
-- Estrutura para tabela `casers`
--

CREATE TABLE `casers` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `cliente` varchar(255) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `resultados` text DEFAULT NULL,
  `imagem_capa` text DEFAULT NULL,
  `data_publicacao` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cases`
--

CREATE TABLE `cases` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `excerpt` text DEFAULT NULL,
  `coverImage` varchar(500) DEFAULT NULL,
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`)),
  `metrics` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metrics`)),
  `gallery` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`gallery`)),
  `content` longtext DEFAULT NULL,
  `client` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Despejando dados para a tabela `cases`
--

INSERT INTO `cases` (`id`, `title`, `slug`, `excerpt`, `coverImage`, `tags`, `metrics`, `gallery`, `content`, `client`, `category`, `created_at`) VALUES
(1, 'E-commerce Moderno para Moda', 'ecommerce-moderno-moda', 'Desenvolvimento de plataforma e-commerce completa com foco em conversão e experiência do usuário.', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '[\"E-commerce\", \"UX/UI\", \"Desenvolvimento\"]', '{\"conversao\": \"+250%\", \"vendas\": \"+180%\", \"usuarios\": \"50k+\"}', '[]', '<p>Projeto completo de e-commerce para marca de moda...</p>', 'FashionBrand', 'E-commerce', '2025-08-01 02:39:36'),
(2, 'App Mobile para Delivery', 'app-mobile-delivery', 'Aplicativo mobile nativo para delivery de comida com sistema de rastreamento em tempo real.', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '[\"Mobile\", \"React Native\", \"Backend\"]', '{\"downloads\": \"100k+\", \"rating\": \"4.8\", \"pedidos\": \"10k+\"}', '[]', '<p>Desenvolvimento de aplicativo mobile completo...</p>', 'DeliveryApp', 'Mobile', '2025-08-01 02:39:36'),
(3, 'Sistema SaaS para Gestão', 'sistema-saas-gestao', 'Plataforma SaaS completa para gestão empresarial com dashboard em tempo real e relatórios avançados.', 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '[\"SaaS\", \"Dashboard\", \"Analytics\"]', '{\"usuarios\": \"5k+\", \"uptime\": \"99.9%\", \"satisfacao\": \"95%\"}', '[]', '<p>Sistema SaaS completo para gestão empresarial...</p>', 'GestãoPro', 'SaaS', '2025-08-01 02:39:36');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pagamentos`
--

CREATE TABLE `pagamentos` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `data_pagamento` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Despejando dados para a tabela `pagamentos`
--

INSERT INTO `pagamentos` (`id`, `nome`, `valor`, `data_pagamento`) VALUES
(1, 'Fernando Winove', 199.90, '2025-07-31 12:34:36');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Índices de tabela `casers`
--
ALTER TABLE `casers`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `cases`
--
ALTER TABLE `cases`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Índices de tabela `pagamentos`
--
ALTER TABLE `pagamentos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `casers`
--
ALTER TABLE `casers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cases`
--
ALTER TABLE `cases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `pagamentos`
--
ALTER TABLE `pagamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
