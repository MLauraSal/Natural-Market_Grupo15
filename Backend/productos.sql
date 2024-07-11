-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-07-2024 a las 04:09:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `naturalmarket_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `img` text NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `name`, `img`, `description`, `price`, `stock`) VALUES
(1, 'legumbres', 'https://imgs.search.brave.com/OXrcAcUlZXP1t_d_YCXYBe0ZXg8To2rTvgauQmYLQGQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lm5hdGlvbmFs/Z2VvZ3JhcGhpYy5j/b20uZXMvbWVkaW8v/MjAyMC8wMi8wOC9s/YXMtbGVndW1icmVz/LWhhbi1zaWRvLXVu/by1kZS1sb3MtYWxp/bWVudG9zLW51dHJp/dGl2b3MtZGUtbGEt/bmF0dXJhbGV6YS1t/YXMtY29uc3VtaWRv/cy1kZXNkZS1oYWNl/LW1pbGVzLWRlLWFu/b3NfM2MxMzQxNTVf/MTI4MHg4NTMuanBn', 'Porotos, lentejas, arvejas', 2000.00, 100),
(2, 'Aceite de Coco', 'https://imgs.search.brave.com/zi_k1AeqRt7B-gEubuj0gpxa5kHkQo6pdNG7D6UtQQ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zMS5l/bGVzcGFub2wuY29t/LzIwMjEvMDUvMjgv/YWN0dWFsaWRhZC81/ODQ3MDI0ODlfMTg2/NDk0ODAxXzE3MDZ4/OTYwLmpwZw', 'Aceite', 1500.00, 50),
(3, 'Harina de Mandioca', 'https://imgs.search.brave.com/OXrcAcUlZXP1t_d_YCXYBe0ZXg8To2rTvgauQmYLQGQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lm5hdGlvbmFs/Z2VvZ3JhcGhpYy5j/b20uZXMvbWVkaW8v/MjAyMC8wMi8wOC9s/YXMtbGVndW1icmVz/LWhhbi1zaWRvLXVu/by1kZS1sb3MtYWxp/bWVudG9zLW51dHJp/dGl2b3MtZGUtbGEt/bmF0dXJhbGV6YS1t/YXMtY29uc3VtaWRv/cy1kZXNkZS1oYWNl/LW1pbGVzLWRlLWFu/b3NfM2MxMzQxNTVf/MTI4MHg4NTMuanBn', 'Mandioca por kilo', 2000.00, 100),
(4, 'Leche avellanas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTR5gzYUSQ-ZEyTMJFpTdiy3KMhUhCeCJTuQ&s', 'Sin azucar, leche vegetal', 2000.00, 100),
(5, 'Leche de avellanas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QA2L10bSHWZsag5l6FKMmKdXwWYM0a8ALQ&s', 'Sin azucar, leche vegetal', 2000.00, 100);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
