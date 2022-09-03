CREATE DATABASE veffaly_db;
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-09-2022 a las 01:19:35
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `veffaly_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `id_product` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) NOT NULL,
  `total_price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito-users`
--

CREATE TABLE `carrito-users` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_carrito` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name_category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name_category`) VALUES
(1, 'vestidos'),
(2, 'abrigos'),
(3, 'pantalon_dama'),
(4, 'pantalon_hombre'),
(5, 'camisa'),
(6, 'otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `size` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `discount`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Vestido Retazeado', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 1, 'M', '100', '15', 'prenda1.png', '2022-08-18 21:34:11', '2022-08-18 21:34:11'),
(2, 'Chaqueta Texturizada', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 2, 'M', '85', '15', 'prenda2.png', '2022-08-18 22:59:18', '2022-08-18 22:59:18'),
(3, 'Conjunto a Cuadros', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 1, 'S', '120', '10', 'prenda3.png', '2022-08-18 21:35:27', '2022-08-18 21:35:27'),
(4, 'Chaqueta Retazeada', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 2, 'L', '130', '20', 'prenda4.png', '2022-08-18 21:36:02', '2022-08-22 22:00:25'),
(5, 'Pantalón Retazeado', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 3, 'L', '90', '15', 'prenda5.png', '2022-08-18 21:37:11', '2022-08-18 21:37:11'),
(6, 'Chaqueta a cuadros', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 2, 'M', '130', '15', 'prenda6.png', '2022-08-18 21:37:54', '2022-08-18 21:37:54'),
(7, 'Gorra revestida', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 6, 'S', '30', '5', 'prenda7.png', '2022-08-18 22:15:04', '2022-08-18 22:15:04'),
(8, 'Pantalón a cuadros', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 4, 'L', '130', '20', 'prenda8.png', '2022-08-20 15:20:03', '2022-08-20 15:20:03'),
(9, 'Camisa revestida', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 5, 'S', '100', '15', 'prenda9.png', '2022-08-20 15:21:30', '2022-08-20 15:21:30'),
(10, 'Pantalón Hippie', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 3, 'M', '85', '15', 'prenda10.png', '2022-08-20 15:31:04', '2022-08-20 15:31:04'),
(11, 'Gorro Pesquero', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 6, 'S', '35', '5', 'prenda11.png', '2022-08-20 15:32:33', '2022-08-20 15:32:33'),
(12, 'Pantalón Razgado', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 4, 'L', '110', '20', 'prenda12.png', '2022-08-20 15:33:36', '2022-08-20 15:33:36'),
(13, 'Pantalón Vintage', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 3, 'L', '100', '15', 'prenda13.png', '2022-08-20 15:35:49', '2022-08-20 15:35:49'),
(14, 'Pantalón Marcado', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 3, 'M', '105', '15', 'prenda14.png', '2022-08-20 15:38:23', '2022-08-20 15:38:23'),
(15, 'Pantalón Marcado', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 3, 'M', '120', '10', 'prenda15.png', '2022-08-20 15:40:01', '2022-08-20 15:40:01'),
(16, 'Bufanda', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 6, 'XL', '50', '5', 'prenda16.png', '2022-08-20 15:40:44', '2022-08-20 15:40:44'),
(17, 'Camisa simple', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 5, 'M', '45', '5', 'prenda17.png', '2022-08-20 15:40:58', '2022-08-20 15:40:58'),
(18, 'Pantalón grande', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 3, 'XL', '150', '25', 'prenda18.png', '2022-08-20 15:41:03', '2022-08-20 15:41:03'),
(19, 'Chaqueta Jean', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 2, 'L', '120', '10', 'prenda19.png', '2022-08-20 15:41:07', '2022-08-20 15:41:07'),
(20, 'Camisa a Cuadros', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 5, 'S', '50', '5', 'prenda20.png', '2022-08-20 15:41:12', '2022-08-20 15:41:12'),
(21, 'Camisa simple', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 5, 'M', '50', '5', 'prenda21.png', '2022-08-20 15:41:18', '2022-08-20 15:41:18'),
(22, 'Zapatos', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 6, 'S', '70', '10', 'prenda22.png', '2022-08-20 15:41:23', '2022-08-20 15:41:23'),
(23, 'Chaqueta a cuadros', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 2, 'L', '120', '10', 'prenda23.png', '2022-08-20 15:41:28', '2022-08-20 15:41:28'),
(24, 'Chaqueta Retazeada', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 2, 'M', '130', '20', 'prenda24.png', '2022-08-20 15:41:34', '2022-08-20 15:41:34'),
(25, 'Camisa a Cuadros', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos sed esse obcaecati doloribus possimus dolore, soluta consectetur maxime nostrum, modi, ipsam dicta qui quae error voluptatibus vero numquam. Iure?', 5, 'M', '65', '10', 'prenda25.png', '2022-08-20 15:41:40', '2022-08-20 15:41:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `password`, `category`, `image`, `createdAt`, `updatedAt`) VALUES
(4, 'Elian', 'Velez', 'bazurto@gmail.com', '$2a$10$JdIYnyjCvaQwrJ/cROeL/.qTgr/TKIHOGXToPRYg2l4YMUOQi7EW6', 'hombres', 'image-1661211909743-192888816.png', '2022-08-22 23:45:09', '2022-08-22 23:45:09'),
(6, 'Elian', 'Velez', 'danksco@gmail.com', '$2a$10$xzo5EVMZkXq9o9Mf/uikFeV7Y3wi6wXnX5ZLa7tk58fCQkEY2EkdO', 'hombres', 'image-1661213253230-9644229.png', '2022-08-23 00:07:33', '2022-08-23 00:07:33'),
(8, 'Elian', 'Velez', 'elinarnyex@gmail.com', '123456', 'hombres', 'image-1661897487340-818489747.jpg', '2022-08-30 22:11:27', '2022-08-30 22:11:27'),
(11, 'Vestido Retazeado', 'fdfffewfwwef', 'xassasasaex@gmail.com', '$2a$10$3euVid13NplnIGIYVNFKv.JzSyuzEU7sXvLkUsAz7xOu6Fulss81q', 'hombres', 'image-1661898000761-845306089.jpg', '2022-08-30 22:20:00', '2022-08-30 22:20:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `carrito-users`
--
ALTER TABLE `carrito-users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_carrito` (`id_carrito`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unico` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carrito-users`
--
ALTER TABLE `carrito-users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `carrito-users`
--
ALTER TABLE `carrito-users`
  ADD CONSTRAINT `carrito-users_ibfk_1` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id`),
  ADD CONSTRAINT `carrito-users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;