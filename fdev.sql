-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:60133
-- Erstellungszeit: 31. Dez 2023 um 13:15
-- Server-Version: 10.6.16-MariaDB
-- PHP-Version: 8.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `fdev`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `accounts`
--

CREATE TABLE `accounts` (
  `id` varchar(32) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL DEFAULT -1,
  `profileImage` varchar(255) DEFAULT NULL,
  `lastLogin` datetime DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `deviceLinkNonces`
--

CREATE TABLE `deviceLinkNonces` (
  `id` varchar(32) NOT NULL,
  `accountId` varchar(32) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `devices`
--

CREATE TABLE `devices` (
  `id` varchar(32) NOT NULL,
  `product` varchar(255) NOT NULL,
  `version` varchar(255) NOT NULL,
  `udid` varchar(255) NOT NULL,
  `variant` varchar(255) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `accountId` varchar(32) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `packageFiles`
--

CREATE TABLE `packageFiles` (
  `id` varchar(32) NOT NULL,
  `packageId` varchar(32) NOT NULL,
  `packageVersionId` varchar(32) NOT NULL,
  `package` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `version` varchar(255) NOT NULL,
  `architecture` varchar(255) NOT NULL DEFAULT 'iphoneos-arm',
  `author` varchar(255) NOT NULL,
  `maintainer` varchar(255) DEFAULT NULL,
  `depends` varchar(255) DEFAULT NULL,
  `conflicts` varchar(255) DEFAULT NULL,
  `filename` varchar(255) NOT NULL,
  `md5sum` varchar(255) NOT NULL,
  `sha1` varchar(255) NOT NULL,
  `sha256` varchar(255) NOT NULL,
  `section` varchar(255) DEFAULT 'Tweaks',
  `size` int(11) DEFAULT NULL,
  `installedSize` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Daten für Tabelle `packageFiles`
--

INSERT INTO `packageFiles` (`id`, `packageId`, `packageVersionId`, `package`, `name`, `version`, `architecture`, `author`, `maintainer`, `depends`, `conflicts`, `filename`, `md5sum`, `sha1`, `sha256`, `section`, `size`, `installedSize`, `createdAt`, `updatedAt`) VALUES
('0', '0', '0', 'unprofessional', 'Unprofessional Package', '1.0', 'iphoneos-arm', 'Unprofessional Developer', NULL, '[]', '[]', './files/unprofessional_1.0_iphoneos-arm.deb', '0', '0', '0', 'Tweaks', 0, 0, '1970-01-01 01:00:00', '1970-01-01 01:00:00'),
('04a06a6887d7f8f91dfc92020f6d1db1', 'd228c5bbd55d721564580ceb', '589714d8d971396f46be3aa7', 'ml.festival.notchsimulator', 'Notch\'d', '0.5-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/ml.festival.notchsimulator_0.5-1_iphoneos-arm.deb', '69d04085cd6238f1700d5a29955036dc', '3004098915038a13fe591f540eb8b4589dd7fe18', 'd0a6cd3bc308c893a77ce796c59ce055290b0307c677980247c11dd23e90197c', 'Tweaks', 131740, 804, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('05aaa6e69c459218ecb852342de3ac0a', '32b515999cb677cd4c4f57ed7bff4da6', 'e0ffb70e5eba3b03baf6e7dbd92474db', 'tf.festival.kbstretcher', 'kbstretcher', '1.0.0', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate (>= 0.9.5000)\"]', '[]', './files/tf.festival.kbstretcher_1.0.0_iphoneos-arm.deb', 'e1cf7070fd114a42103118e7d8dc2005', '467ba464222e7f058186bfea424416fd66753629', '43ccef34d99bae858b6ae15ab42c9bb4cafefdeda37e367537c400bc8888b728', 'Tweaks', 7636, 204, '2021-04-26 22:10:17', '2021-04-26 22:10:17'),
('0f4910710247d5eac49f25353846f4c5', '8f940ee44de1a5636632fea8e830b937', '71c751dfdae607bda3710a918fbdd7dd', 'ml.festival.realcc', 'RealCC \"2\"', '1.1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[\"com.jakeashacks.realcc\"]', './files/ml.festival.realcc_1.1_iphoneos-arm.deb', 'beaab5ca970383273e667377e418d8f9', '6277dbbebedbba65b757ae7be3db0391055788c9', 'f7483f220376cf7e84cf6d01b5fa8ac1788e0a51a3d120fabfc973dcc5a8a769', 'Tweaks', 7500, 96, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('118efc49c235c99d6d1325937983135e', 'd228c5bbd55d721564580ceb', '902efe750737ee336400ee25e80aeb8f', 'ml.festival.notchsimulator', 'Notch\'d', '0.7', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.notchsimulator_0.7_iphoneos-arm.deb', '732441ed2861fb1e34025c966eac7471', '2b5baadf2cd86ef2d40ae227a887fe05f265d1de', '5213a1d644b5dd89bb3205db100a2345b4b21bcaabccd110c55415cbcb00c170', 'Tweaks', 466502, 1728, '2019-09-08 08:22:59', '2019-09-08 08:22:59'),
('135160fe8c710cce957c409067acff7c', '9b5206644c769c147b1e9d309a6fc7f9', 'b33351382db11f9628b1596f444f3ef8', 'ml.festival.proudlockxr', 'ProudLock Xr', '0.1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.proudlockxr_0.1_iphoneos-arm.deb', 'fdbc8e70b6f1963158e65ecbd3292739', '00bbf2b411209e88c99221feb2e77528db59d86c', 'b9e15592ef517c5e1c7e8d32a74a1e3c451cf201cfcd2cc7382b07f4fa44d010', 'Tweaks', 1249886, 4728, '2019-03-25 22:26:01', '2019-03-25 22:26:01'),
('1383880b893ebb7207dde4f005488854', '449607de72bca779c371e48d9e5b754a', '115993f3ea18b57eccff8f7aa30109ca', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13)', '2.0b3-u1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/ml.festival.lockwatch2_2.0b3-u1_iphoneos-arm.deb', 'cd8aa107dc49ffeca170e93988d57d3b', 'ad3bac9b4d511ee187c3291a099732d3e0bf0e4c', '893ae6bf0660af62dc1398a355c1e714618ce274e42e44aafa8d4a2c5fdc3e39', 'Tweaks', 7095016, 8828, '2020-07-24 15:22:59', '2020-07-24 15:22:59'),
('13d5bde5e64bc7f7cac845965d2db17b', '1aa0be9699a08a8b70f25c01', 'df3eafb10a367c2976b44313', 'ml.festival.lockwatch10', 'LockWatch Internal', '18w07b.lw-internal.180218', 'iphoneos-arm', 'Sniper_GER', 'Sniper_GER', '[\"mobilesubstrate\",\"ws.hbang.common\"]', '[\"ml.festival.lockwatch\"]', './files/ml.festival.lockwatch10_18w07b.lw-internal.180218_iphoneos-arm.deb', 'b93faffa3947ccd975e777636c5cadf2', 'b1adae534158b0311ef14e97f15a979d2175ee3a', '64f2d24fcf348227f6cc18b4cfca2883d23860df140fbf7c671a638b108404d5', 'Tweaks', 1270440, 3984, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('2827d30bb402279f603839512ebde441', '6c21780405f3d059b391824b521413d1', '25f1be2dd3c0b10d1bbc7c22c9f3af0d', 'tf.festival.rescale2', 'Re:Scale 2', '1.0.2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/tf.festival.rescale2_1.0.2_iphoneos-arm.deb', '5a2e565a2502fd23a39355567a3910bd', 'b5b4bb1ed0d9007542c6252aa67d0cd6ad767bf3', '492874f16b1c3deec69b5b3f1642adf92573e1d116f0b7c56ae87228f29df661', 'Tweaks', 97230, 976, '2021-04-24 18:15:44', '2021-04-24 18:15:44'),
('2888bd21d9fc95a67e3ad697978fb78c', 'e4758402605aace60bb8ad425175d18b', '77d858ee22214ca66c867da4e1b0b239', 'ml.festival.globalwarmingnomore', 'GlobalWarmingNoMore', '1.0', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[\"cy+model.ipad\"]', './files/ml.festival.globalwarmingnomore_1.0_iphoneos-arm.deb', '0914a9554df76617dae58b268f59d17b', '6d9505b67e7db16129a899c4a84c63a592172a46', '8eb8203f2de408ca874ed68721dc946e9f4dccd713b138a4abb2f3fceab0ee3e', 'Tweaks', 31188, 148, '2019-08-16 06:02:26', '2019-08-16 06:02:26'),
('391330f15ae55876cd76c41e87433673', '1aa0be9699a08a8b70f25c01', 'b8d632d4edc8545f74de0342', 'ml.festival.lockwatch10', 'LockWatch', '18w12a.lw-release.180320', 'iphoneos-arm', 'Sniper_GER', 'Sniper_GER', '[\"mobilesubstrate\",\"ws.hbang.common\"]', '[\"ml.festival.lockwatch\",\"firmware (>= 11.0)\"]', './files/ml.festival.lockwatch10_18w12a.lw-release.180320_iphoneos-arm.deb', '127768ee714ae7b574d04799564821f8', 'a9c4c0f8f5b55d3227f29abd244a5ccca94dd89b', '49895f0f26c6e095353a1aab798542e29889a0dcec080b9160cd41a8493b3ee8', 'Tweaks', 1387102, 4628, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('396c2f11f90763d156c01f7d362a3dc5', '6c21780405f3d059b391824b521413d1', '815c8d057fab62200b173157e8981732', 'tf.festival.rescale2', 'Re:Scale 2', '1.0.4', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\",\"firmware (>= 9.0)\"]', '[]', './files/tf.festival.rescale2_1.0.4_iphoneos-arm.deb', 'eee96ccc0fd6e3fe6504a4e85e823514', 'ac1de25c5cd7c01327d94bd4be9358845dcbe95f', '7684978717609f698640126969d83bd363489dd6d53327732e778eb4fc9de205', 'Tweaks', 104468, 976, '2021-04-27 19:45:29', '2021-04-27 19:45:29'),
('39af15c0958a01592b66ce1f5685fad8', '6c21780405f3d059b391824b521413d1', '34dabda88cb7913420ae35cbac5c6a11', 'tf.festival.rescale2', 'Re:Scale 2', '1.0', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/tf.festival.rescale2_1.0_iphoneos-arm.deb', 'b0d667560fc7d7cf279f0b38a2875eb5', '02e4a56063193f1fcf31cda076fc422b94188ad6', 'ec39a74da5c1dc63be1ced5bd19f9ed92dc8c10acc6f9865a5d82d6307288e59', 'Tweaks', 85508, 748, '2021-04-23 12:08:08', '2021-04-23 12:08:08'),
('4cecf845d244c75a5b619bfd409cb13e', '87ef496de97854c1a95edbf4', '3b4fdc8696e484066000188d', 'ml.festival.proudlock', 'ProudLock', '0.2-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"firmware (>= 11.0)\"]', '[\"gsc.main-screen-width (= 1125)\",\"gsc.main-screen-height (= 2436)\"]', './files/ml.festival.proudlock_0.2-1_iphoneos-arm.deb', '2d131c2d1f3280bcb46526e9ef9a2d77', 'e812e759c7be4f9c8cb5e50f849b715898b4f98c', '46743b77532efab887e32ac4cbfedb1eccc694f39881b6104f0bbdd31a55220f', 'Tweaks', 89264, 656, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('4e3a4dbdfd88b902f9459567a7365e2a', 'd228c5bbd55d721564580ceb', 'e23cca536ab51a78f055dd20', 'ml.festival.notchsimulator', 'Notch\'d', '0.2-6', 'iphoneos-arm', 'Sniper_GER', 'Sniper_GER', '[\"mobilesubstrate\",\"firmware (>= 11.0)\"]', '[]', './files/ml.festival.notchsimulator_0.2-6_iphoneos-arm.deb', '40e49204a6443f584c4845f5a89b498d', '94f08ee11bc02fc90f53297d563c9b96b5ad63c7', '40cf8435f6d24f66cd0ca77d225cf0d45ec0fac5f275a6e38e1305d0fdc0c085', 'Tweaks', 32442, 260, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('50f3676f451940cab678e845f7a1a020', '31253595b2715022820766f9', '729f596fffcf453ccec32c6b', 'ml.festival.signal', 'Signal', '1.3', 'iphoneos-arm', 'Sniper_GER <submissions@festival.ml>', 'Sniper_GER <submissions@festival.ml>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.signal_1.3_iphoneos-arm.deb', '9a8226baf2c1cc57fbe4d4b5298f4607', '4cab8140ca977e52355e7297e4ae55e3933f7285', '36e81befe80617ee6656d1d081e8efe9d20f21c885264c5b4aefce694ccee157', 'Tweaks', 48036, 348, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('5e4e5d726061eac044096d7686c91b1f', '449607de72bca779c371e48d9e5b754a', '07349db60d47a5baae8a0d060a024f1d', 'ml.festival.lockwatch2', 'LockWatch 2 (iOS 13)', '2.0b1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.lockwatch2_2.0b1_iphoneos-arm.deb', 'b52c0ec31ccc65a105f6b84876d53c38', 'bb31c31632e23130e1c41bab530ba4364e865c2b', '1a7b4c9be6518cbbc9eee84db46c1d9dbc4db2b6c7cd5f77cc6cc57ca4e5cd4f', 'Tweaks', 52768, 288, '2020-01-21 09:23:06', '2020-01-21 09:23:06'),
('5e9adeed8be80993c5ecb8b5cd0eb58d', '9b5206644c769c147b1e9d309a6fc7f9', 'e5221e639690b7ec2a95523dd1920d16', 'ml.festival.proudlockxr', 'ProudLock Xr', '0.3-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.ml>', '[\"mobilesubstrate\",\"firmware (>= 12.0)\"]', '[]', './files/ml.festival.proudlockxr_0.3-1_iphoneos-arm.deb', '910998bc50de9013d3f99caae7cfff3f', '496e62cfb21b3a0cb66af7cbe33bf315378d4589', 'cc995efbe7f8410889056d078f54ea2807f4f656111b0d7e3716f6c4811e066d', 'Tweaks', 1239992, 4872, '2020-06-18 06:37:26', '2020-06-18 06:37:26'),
('6845cfa5c6e1f457c83b70de070ad85f', 'b084fd420f8773c15db71a53', '5314aa6ca48fc68cec9123a0530d7f08', 'ml.festival.erie', 'Erie', '0.7', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"gsc.telephony\",\"ws.hbang.common\"]', '[]', './files/ml.festival.erie_0.7_iphoneos-arm.deb', 'cf2efc5c838c6af4c2309dfb6dff6f3e', '104699a84f8ea7343f9f71f819de4419b8b4a070', 'b2fa52e6343d5a5e0b6be83f102931e72150cfb9e35180bc3f21593f09f7e4da', 'Tweaks', 16862, 176, '2019-07-14 09:15:40', '2019-07-14 09:15:40'),
('69324918078b991da3c54e67e6d4d12e', '449607de72bca779c371e48d9e5b754a', 'f6535fb94f0a8e1d46cd99729e7ec9ab', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13)', '2.0b2-2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.lockwatch2_2.0b2-2_iphoneos-arm.deb', '7b774481c2d06b91fdd172ab09d6158e', 'd1d89bb49615235127eaaacfa2fe98d820c11f7f', 'bb773fa4da35df883f6637b474ea2124f0fbe8dd87783f88f0b829556a8f6c5b', 'Tweaks', 235944, 1436, '2020-04-02 14:49:09', '2020-04-02 14:49:09'),
('788f7e510465b60f72769fca1d664056', 'b9d8d453b27136bb05861042', 'e986d257bfdddb8812f3ca00', 'ml.festival.redstone', 'Redstone', '17w37a.rs-internal.170917', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"cc.tweak.libobjcipc\",\"applist\",\"ws.hbang.common\",\"ml.festival.libweathermanager\"]', '[]', './files/ml.festival.redstone_17w37a.rs-internal.170917_iphoneos-arm.deb', 'ba0a2c744d4e395ba44f606b1e84e47b', '682d70e850db6ec007381561ca6aa6de84589c05', '00fcdfaec209cf571635d2159f908c084f531344054e97c5d2395cfbfee258d2', 'Tweaks', 2512038, 7068, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('7dda89982389225c4d39e47029a3bc3f', 'd1dbc3cd455171b1cc6d1015d9afb962', '57ac938fffe6aaf2edd62361e633835c', 'ml.festival.blurred', 'Blur’d', '0.0.2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"firmware (>= 11.0)\"]', '[]', './files/ml.festival.blurred_0.0.2_iphoneos-arm.deb', '9f0c22143e5c04b3134cadf9e4b1daca', 'f20521bfb99102076c0f61d36a563250650e858c', '54d12003c84c5bcd5e3107a6e7299603bd01d9cf63e65371b14020f9a0a6fa5e', 'Tweaks', 3042, 72, '2019-01-02 22:42:20', '2019-01-02 22:42:20'),
('7ea964675ef7f69ee872bcc59c5b78cf', '6c21780405f3d059b391824b521413d1', 'c9307b644eb8344c3c5d43d1459b2917', 'tf.festival.rescale2', 'Re:Scale 2', '1.0.1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/tf.festival.rescale2_1.0.1_iphoneos-arm.deb', '69fe49cbfda15ced045818d3e6858ebe', '8953fe1c4425357b163883508b3a9e21c9db86f9', '10fff0459c5263c4755fdb2e8c354f552564a37fa3d9a80be9483e30241d8e7d', 'Tweaks', 97292, 976, '2021-04-24 11:54:02', '2021-04-24 11:54:02'),
('81301480096cc4253f5aadfcec011789', '6c21780405f3d059b391824b521413d1', '70aea13ea0483e434e30b8854018abd1', 'tf.festival.rescale2', 'Re:Scale 2', '1.0.3', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/tf.festival.rescale2_1.0.3_iphoneos-arm.deb', '0cda92bb912c8fe953b5451cf98c66ba', '49ba7deb8122d9a3bc76df6039881a8356bbdf7d', '8b99ac8270fa164ff13678eb7abff0d69a40430b015572f1a805da364cea23b7', 'Tweaks', 104190, 976, '2021-04-26 22:06:19', '2021-04-26 22:06:19'),
('842cbc0c0ce2727e1b3a6671d9ab2bc8', 'b9d8d453b27136bb05861042', '693a45c1b32f66d8e1c14c90', 'ml.festival.redstone', 'Redstone', '17w38a.rs-internal.170918', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"cc.tweak.libobjcipc\",\"applist\",\"ws.hbang.common\",\"ml.festival.libweathermanager\"]', '[]', './files/ml.festival.redstone_17w38a.rs-internal.170918_iphoneos-arm.deb', 'a31d8a43631f03186a003a1cae040ad3', '966d6148369bd39df17f43706d9413aec14e6e22', 'feccba34ba06d87832f40e44db10c998f12be75ff8067ff444af2c826c804640', 'Tweaks', 2611166, 7176, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('8559c5c06fc08d1f2b50d5ea012ed21f', 'e4758402605aace60bb8ad425175d18b', '6d02c5a76cc2fa174a9ba31de3c869b0', 'ml.festival.globalwarmingnomore', 'GlobalWarmingNoMore', '1.1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[\"cy+model.ipad\"]', './files/ml.festival.globalwarmingnomore_1.1_iphoneos-arm.deb', '558e719f493a6923d62cff63f2ac46ef', '72c37153c55765797d207d007227e485d01514b4', '618734a0a8c30c503829da863b87c10cf2b30f75213e6b058366f50e7c63c26b', 'Tweaks', 65160, 440, '2019-11-26 11:40:13', '2019-11-26 11:40:13'),
('86a9d34802691e6b2564fde874ff1074', '11161a8fa04aa151fa0ed637720c6a17', '96bf77a7e39bb38379ceb5532b02b231', 'ml.festival.lockwatch2.cases.s3', 'LockWatch 2 Cases - Series 3', '1.0', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Team FESTIVAL <weare@festival.tf>', '[\"ml.festival.lockwatch2 (>= 2.1-b1)\"]', '[]', './files/ml.festival.lockwatch2.cases.s3_1.0_iphoneos-arm.deb', 'd99ca230ed3e18450fcdf747935c995e', '7c2eb1ca2b8258a4562881206ccfc19418782785', 'd49f4d5fd7591dfa63cf2334b0bc91d306762cadc60c553126e50958359ba1e0', 'Cases (LockWatch 2)', 170246, 268, '2021-06-07 15:40:49', '2021-06-07 15:40:49'),
('8e47cdc811a7533c27b33f1b750d8de0', '449607de72bca779c371e48d9e5b754a', '802bcf82dcbccf0838c3348dcd4d8d62', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13)', '2.0b3-u2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/ml.festival.lockwatch2_2.0b3-u2_iphoneos-arm.deb', 'fe3b44002bb4701a014d4c2c369d2af5', 'fa7da83269c5f2ed5d667cc9fdd8642e3f4ae6f2', '06447ad473503e4641c842d8d1686176c6e962afa43c72b66d49bde9b0c75351', 'Tweaks', 7144928, 9096, '2020-08-26 21:12:13', '2020-08-26 21:12:13'),
('8e7a4fb2043c0a7c1ff4b12ba3444706', '449607de72bca779c371e48d9e5b754a', 'ae8670e25434fa3b81981d86830d65d4', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13)', '2.0b4', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/ml.festival.lockwatch2_2.0b4_iphoneos-arm.deb', 'd29ddd871a837a83537bd03d30b31ccd', 'f2d65378d3c5004fdf1efe107773d211e8a57e11', '5905239318338a80eb21fcb35ee82b5a28a50e6d291af695afd11a0b569a55e0', 'Tweaks', 7157548, 9148, '2020-09-07 10:00:10', '2020-09-07 10:00:10'),
('91a506afeb5d86cfe9ac72a985005a66', '449607de72bca779c371e48d9e5b754a', '4f4b0631d162348db1f8f4204475ffff', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13)', '2.0b4-u1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/ml.festival.lockwatch2_2.0b4-u1_iphoneos-arm.deb', '69cfa2d6d3e771d406dcef572925bbaf', 'c30598ac65363830c620b6e555adba48e7f134db', 'd5b08ee3bcbd670931b4fc36e3d2e1f9e5cf5969ba538a4c16963ee9d5927ff1', 'Tweaks', 7159056, 9152, '2020-09-07 21:17:31', '2020-09-07 21:17:31'),
('9278566bbcfa66447bdcd906c7b813e1', '6c21780405f3d059b391824b521413d1', 'f1e4a6fe24dc4d904679f75a66c39097', 'tf.festival.rescale2', 'Re:Scale 2', '1.0.5', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\",\"firmware (>= 9.0)\"]', '[]', './files/tf.festival.rescale2_1.0.5_iphoneos-arm.deb', '3caa0e4d67d0d02eb5f7dfa0b3bb62f4', '447572417d897130818a18c4c72e1e632ee07bda', 'df7ddb5f8784cc9301d2a3e9b6a83c511a162a34dda31db31549441c508ab70a', 'Tweaks', 175468, 1368, '2022-12-24 23:44:31', '2022-12-25 16:44:59'),
('9342f532088e0eec05da9a05a60cbeea', 'b084fd420f8773c15db71a53', 'ac47a41e81c56132c25c7d82', 'ml.festival.erie', 'Erie', '0.5-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"gsc.telephony\",\"ws.hbang.common\"]', '[]', './files/ml.festival.erie_0.5-1_iphoneos-arm.deb', '71e1867be43c39ea61ec527d772a42bc', '0179aefcc2f744ecdebf8079fde70f02682f2d18', 'cce4a9237757ae65e7282a12c2085a1f4c11700455c909a1d4be08eb6fdb0d81', 'Tweaks', 21398, 296, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('97ab0d256098776c5cf41b27d35f787c', '6c21780405f3d059b391824b521413d1', '05c50f2a0604cd4d2be2e1668c0bdbcc', 'tf.festival.rescale2', 'Re:Scale 2', '1.0.5-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\",\"firmware (>= 9.0)\"]', '[]', './files/tf.festival.rescale2_1.0.5-1_iphoneos-arm.deb', '4bf9cd78a9d38177a5df2680e7650802', 'b55690581f454be0e1cb6b5a71f75561e7d2be9c', '71f7ba65f558176f53af7d169d7d3292a7a7458e4f9df8bfa7461ec2cf8c49de', 'Tweaks', 175842, 1368, '2022-12-26 08:47:17', '2022-12-26 08:47:17'),
('9b791abd0765af1c4accacf379eda5dd', '9b5206644c769c147b1e9d309a6fc7f9', '3c9e1f763775add9b5c26ff492129a76', 'ml.festival.proudlockxr', 'ProudLock Xr', '0.1-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.proudlockxr_0.1-1_iphoneos-arm.deb', 'a235ed700f7d9553dcc8092d261db025', 'd58c9fc904da2d12dc2018498aaaf956852997d8', 'e51e3896949101d69227e5cb063de75efdcf0d055d5898d2cbd907bb9db8a5ff', 'Tweaks', 1251094, 4732, '2019-03-26 10:28:31', '2019-03-26 10:28:31'),
('9e3e417b2f910d1c96558cf6486a65dd', 'c898f107fb72e78da3284381', '819d8dbcd3892d54cf50d76c', 'ml.festival.medusa', 'Medusafied', '0.1', 'iphoneos-arm', 'Sniper_GER', 'Sniper_GER', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.medusa_0.1_iphoneos-arm.deb', 'b2c2265ada4248d0c28f0b00f0199891', '2e7aca007394cfa4aaab0bcbf944af9428cdbc3f', '13adc38995749f2aeb0dc8a8abcf4f42bd8c2a760e7978097c4bd198952c6a1b', 'Tweaks', 4360, 136, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('a157fc484cb7dd2d9f3bb1fe58999905', '449607de72bca779c371e48d9e5b754a', '2fbb87d2dc30974ec48d61461efabc6b', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13)', '2.0b2-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.lockwatch2_2.0b2-1_iphoneos-arm.deb', 'bb07ebd5c3fab4baaa365b57d12de895', 'aac908c27e33ed1be2d9273bc6c8637e6773d7d3', 'f8e848f079ba9b1cdfd5b08c74c6b1631b4c69bbe8e1d2692db62a64c8aea681', 'Tweaks', 235912, 1432, '2020-04-02 07:08:50', '2020-04-02 07:08:50'),
('a6f7faa01c3a137b3237b81b9b1997f1', '6c21780405f3d059b391824b521413d1', 'f90f0c227f183e6cad8b71fd64de723b', 'tf.festival.rescale2', 'Re:Scale 2', '1.0.4-2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\",\"firmware (>= 9.0)\"]', '[]', './files/tf.festival.rescale2_1.0.4-2_iphoneos-arm.deb', 'a29ab69bd6e765a0283cc11d7112f23f', 'd3cf058a87491cc1d926322958ca4dc3d4aa5f22', '24be66c41a4e454a94b5e6c323ead61fe77576ca45aed6052bd1f31182c45cff', 'Tweaks', 106204, 976, '2021-04-30 10:54:25', '2021-04-30 10:54:25'),
('a9216949d2ff242a569dbd1ac922629f', 'b084fd420f8773c15db71a53', 'a0cbf7026ab033e0c4a1e331', 'ml.festival.erie', 'Erie', '0.5', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"gsc.telephony\",\"ws.hbang.common\"]', '[]', './files/ml.festival.erie_0.5_iphoneos-arm.deb', '859b805e3527436fced0956f5a327808', 'd76f9f249d1578be6f317034ac77fc00ad34bcf9', 'a84fb45c2df29b62eda2c68ddab2469ea6d2a45526ef3f06d60572c6e0f02566', 'Tweaks', 21408, 296, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('ab043a41153abc3802e08d2fe3d1f5b3', '9b5206644c769c147b1e9d309a6fc7f9', '6db001eafe8b6f4b5a8b38f6d4f7df38', 'ml.festival.proudlockxr', 'ProudLock Xr', '0.3-3', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.ml>', '[\"mobilesubstrate\",\"firmware (>= 12.0)\"]', '[]', './files/ml.festival.proudlockxr_0.3-3_iphoneos-arm.deb', '1d8e06651eedb185a6941683a5bef4f2', 'ad814047b99765ddc9a10ba09c6b37d29bd27656', 'd42d6fb82c2ad0d6cd2bc82dac5fccbe5b062994f2fc250b479147eef609e005', 'Tweaks', 1240092, 4872, '2020-06-18 11:46:14', '2020-06-18 11:46:14'),
('ac594f9a764e7ee6d5e1c289aab969d4', '449607de72bca779c371e48d9e5b754a', '43926515b5c25ded0c4578833c0a76c3', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13/14)', '2.1-b1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate (>= 0.9.5000)\",\"preferenceloader\"]', '[]', './files/ml.festival.lockwatch2_2.1-b1_iphoneos-arm.deb', 'dbe655575bc77e3e73ef09e09b182218', 'ff1f083a6ce874e81334f5d6ef80ffc50f6044eb', 'b4652b4da2c72833a158f286c9ef666ef64a2924296e9738ea9bcd17f3c101f6', 'Tweaks', 592414, 6300, '2021-06-07 19:20:31', '2021-06-07 19:20:31'),
('b01226203563c46bb9fa7a8845d15b31', 'ae5f4c7ce13e4b68519a8a5ef6d5d5b6', '5fc0c60c8b5469d0b689b68a9cb580e5', 'ml.festival.lockwatch2.cases.s5', 'LockWatch 2 Cases - Series 5', '1.0', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Team FESTIVAL <weare@festival.tf>', '[\"ml.festival.lockwatch2 (>= 2.1-b1)\"]', '[]', './files/ml.festival.lockwatch2.cases.s5_1.0_iphoneos-arm.deb', '1c02f31ab6666400efd25fb2dbe41601', 'f628fb2efcb0bdeb4f23d2e872a8084f9cb9cf51', 'f68bd9e8f5f963c7e7fea7dcac85ce4693f761dc10ed817608f226163f99b173', 'Cases (LockWatch 2)', 250470, 372, '2021-06-07 15:44:12', '2021-06-07 15:44:12'),
('b6ab88c2ed62f47c4528f5fb5f1a23ec', '449607de72bca779c371e48d9e5b754a', '47c011c530dd616f6dcfa837360cd1e4', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13)', '2.0f', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/ml.festival.lockwatch2_2.0f_iphoneos-arm.deb', 'acdf2372845990e9ff4eae0f1ac5835d', 'c48db918e864732dfbded45e60c37ec02095c5ba', '2b752208c09d76fb7bffbc5d6a8b93aab4a45c0ec3b5f2e4d06a8228c882bbd5', 'Tweaks', 46928684, 48612, '2020-09-15 14:00:52', '2020-09-15 14:00:52'),
('ba8dac49d351997fb62a00c0b2c158be', '449607de72bca779c371e48d9e5b754a', '389ed0d19c011a59e9b324d526e71a91', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13)', '2.0b2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.lockwatch2_2.0b2_iphoneos-arm.deb', 'fe7337be85104761d47aa1e4f2a2bc85', '60a755f876ab5b8bc975ebcb8713dfec79db5cc8', '18ab7908993b60e5e520ad46a6651e7e155f2e5e1e2c3c1d0bd1735f73fcc88e', 'Tweaks', 233140, 1376, '2020-03-25 09:53:09', '2020-03-25 09:53:09'),
('bca7170cbfafd2ba57da55289c50cf79', 'd228c5bbd55d721564580ceb', 'bbbc516fe929e260b8f82608f60e5978', 'ml.festival.notchsimulator', 'Notch\'d', '0.6-RC1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.notchsimulator_0.6-RC1_iphoneos-arm.deb', '17116aed33d705609f31ddc99231470e', 'a6f34ee2a809a8b2aecbb252565c9f1f355ae0e2', 'd1cc9b99750b894859812a24aded7839a6687e840f1bef6b176795e3d9efd43b', 'Tweaks', 116572, 720, '2019-01-16 22:36:11', '2019-01-16 22:36:11'),
('bcbf1887ca0cbb8dfdb4f4c3eae984ca', '9b5206644c769c147b1e9d309a6fc7f9', '27175e0918222c303e7effbacd4db78f', 'ml.festival.proudlockxr', 'ProudLock Xr', '0.3', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"firmware (>= 12.0)\"]', '[]', './files/ml.festival.proudlockxr_0.3_iphoneos-arm.deb', '243d5c759d73f4a323f87dcbe9a6aaf4', '0271adf575ba0c5cfcc1360ad81d82878e05f018', '0b0f5dc47eebb49cb8ef7c75eef9c6736c742b8a35b8e68018a52c2f412d8a6a', 'Tweaks', 1252642, 4736, '2019-05-19 22:15:47', '2019-05-19 22:15:47'),
('be9f19adebd2045947ba12a450726e83', 'c28054ae58c255b40e8342e88b17a090', 'bd329e273835ef7685ad103a7addb322', 'ml.festival.mgcopyanswerdump', 'MGCopyAnswerDump', '0.1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[]', '[]', './files/ml.festival.mgcopyanswerdump_0.1_iphoneos-arm.deb', '1b04709888ab5ee4975ff6b6fe79d95d', 'b3a76beb9006c7b3f8becb8e64e9d8052f92639a', 'b086f54dc3bd15714363ed26e01716a97480f27f6ee079c65253ab88417edd79', 'Utilities', 36926, 172, '2019-01-01 01:08:15', '2019-01-01 01:08:15'),
('c095643e34d0d3c44537c155271cee4b', 'c28054ae58c255b40e8342e88b17a090', '2101cc8696088e80e41f6c86916d38a7', 'ml.festival.mgcopyanswerdump', 'MGCopyAnswerDump', '1.1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[]', '[]', './files/ml.festival.mgcopyanswerdump_1.1_iphoneos-arm.deb', 'cf984ef27b53ec92d7df78a3ec0a1936', 'e7b1c5e941aff4555be27920f6f8f1344ee07cd6', '63fbff532f9346bce6b8984c52e31ad7c2a8a9ef5ad2db80d1941b2cf39d822a', 'Utilities', 85578, 304, '2019-11-21 22:49:38', '2019-11-21 22:49:38'),
('cb608e630030af26c06f7f36cfcab090', '906f97c053fa8dc5212f33776abc0db8', '753dd027f81fd604e110b8be1069cc88', 'ml.festival.wallpaperfix', 'WallpaperFix', '0.0.1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.wallpaperfix_0.0.1_iphoneos-arm.deb', '0b8ce2bad0fa2021460fc456911f4a42', 'd14160f5c53c49bad26b5403e111133cbb25eb7e', 'b2d2e83baf39b997a7bb692d3819733307e66b650c2a2f0902ff90f0a9be3a22', 'Tweaks', 3244, 72, '2019-03-30 11:41:56', '2019-03-30 11:41:56'),
('d3f5558aeba3f2cdc8c9fd150b1b1d25', 'e4758402605aace60bb8ad425175d18b', '6082849eaeccd57be756014f458af791', 'ml.festival.globalwarmingnomore', 'GlobalWarmingNoMore', '1.0-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[\"cy+model.ipad\"]', './files/ml.festival.globalwarmingnomore_1.0-1_iphoneos-arm.deb', '4245f33af94c1a173a1590e7f1d9961f', '1c0683faa79b0ce45a199dfcbe4f61fb2ddfcb22', 'ae2fb1a4f8aebeaaecdcd67b126efef3c6c77e4a28f8b8081c9f9bfc3fa4cbd6', 'Tweaks', 44472, 220, '2019-08-19 09:28:02', '2019-08-19 09:28:02'),
('d44f9d6acdcd635f1df92833d6d1cfcc', 'b7b4b693846657aa73779f9ac5c674b6', '25e08ca766ca27b4dfb6784ec7394c4f', 'ml.festival.lockwatch2.cases.s6', 'LockWatch 2 Cases - Series 6', '1.0', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Team FESTIVAL <weare@festival.tf>', '[\"ml.festival.lockwatch2 (>= 2.1-b1)\"]', '[]', './files/ml.festival.lockwatch2.cases.s6_1.0_iphoneos-arm.deb', '2834e4a2cd7b295d86a5580399ea5d46', '3de701d7e7f5f0e3f135055b6985debeef084d52', '3208a7fe7bcc648cc5dcec14f5f7b0c7d892b1cbf3ca0a33b8583fbbd5c1f538', 'Cases (LockWatch 2)', 308724, 536, '2021-06-07 15:48:31', '2021-06-07 15:48:31'),
('d8b8468c743d883e259e5372151ad6fd', '87ef496de97854c1a95edbf4', '2fe4c049d02b011ad53e3ec3', 'ml.festival.proudlock', 'ProudLock', '0.2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"firmware (>= 11.0)\"]', '[\"gsc.main-screen-width (= 1125)\",\"gsc.main-screen-height (= 2436)\"]', './files/ml.festival.proudlock_0.2_iphoneos-arm.deb', '70f2d59cfb1efabb4589696a4b91498c', '009517bc9dbe287961d0c3b1610f77f054a896e7', '5ca256a1d05b0fbb4e65745c8c6b8e28938e5067a7e9aa4b1761437f170a67da', 'Tweaks', 88060, 648, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('d8f52d1e069d6c1875c30e613dbb62c2', '1329ee0e51712fe328131d36330abbca', 'a5069dcc83d23cfbfff5c9b1f0ba084a', 'ml.festival.lockwatch2.bands.s4', 'LockWatch 2 Bands - Series 4', '1.0', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Team FESTIVAL <weare@festival.tf>', '[\"ml.festival.lockwatch2 (>= 2.1-b1)\"]', '[]', './files/ml.festival.lockwatch2.bands.s4_1.0_iphoneos-arm.deb', 'f07e6dd37cb70e741d92b459f527318d', '853a2a46a8073283f45bcbf5aed1d1c05035f619', 'c18958d244f0358c5f633ff9a6056f121a11cbf20e449ac164734f5dbfd22fb8', 'Bands (LockWatch 2)', 1728280, 1848, '2021-06-07 19:17:53', '2021-06-07 19:17:53'),
('dc322a0bb1e39d09e6316fb210fbdb04', '87ef496de97854c1a95edbf4', '501846586ac8cbd80d964772', 'ml.festival.proudlock', 'ProudLock', '0.1-2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"firmware (>= 11.0)\"]', '[\"gsc.main-screen-width (= 1125)\",\"gsc.main-screen-height (= 2436)\"]', './files/ml.festival.proudlock_0.1-2_iphoneos-arm.deb', '48aec53193870519457742c008958cf8', '75d3f035335c2fa101a9fe965d7e1cf673c761ba', '057a012cb8d1af3b3c6bdca48edbdd113accaba38bec2fd30aa1027aa282ce2b', 'Tweaks', 78750, 512, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('dcf94fbe572256a8a1b6e5f90c086c1a', 'd228c5bbd55d721564580ceb', '3f3591fcb8a4c6d80bc5bdfbe8df7a37', 'ml.festival.notchsimulator', 'Notch\'d', '0.7-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.notchsimulator_0.7-1_iphoneos-arm.deb', '594304548ffbea45409bb037c28bc5e6', '09e64f7ae92c65360f5d80d864da45989f118914', 'd6d847fd1039175f859962fcaf80eb9ddc0ab784d56b3f0d28990e16def0680f', 'Tweaks', 477726, 1772, '2019-09-09 08:09:09', '2019-09-09 08:09:09'),
('de4f0a44a3213a06cb34397188d518b1', '449607de72bca779c371e48d9e5b754a', '855b51fc68e631338289ce00576268a4', 'ml.festival.lockwatch2', 'LockWatch 2 Beta (iOS 13)', '2.0b3', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.ml>', 'Sniper_GER <sniperger@festival.ml>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.lockwatch2_2.0b3_iphoneos-arm.deb', '75871f7eb2179b5bcf5cc913cdcebded', 'eac8a8685102f2023c82fc2a537169be2c02b4af', '8ac2853ab9fa7d5e52adb8a93333317ee9b2cbbe75e3d8f82c1470a730ed4448', 'Tweaks', 267550, 1708, '2020-04-19 21:38:58', '2020-04-19 21:38:58'),
('df6fbf250d89a05d79d9d0de1cc250ed', 'd228c5bbd55d721564580ceb', '0dbe3d2f3478e354304be21a', 'ml.festival.notchsimulator', 'Notch\'d', '0.5', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.notchsimulator_0.5_iphoneos-arm.deb', '87ceb87e440311f3ae57fa7e5e45c260', 'a00de13602b4ff0beaad3615cad81a0c70d39ef0', 'f684d720425ffc4f9a478dfb78b826a8ed1782a112e17b02f34b9817b2755afa', 'Tweaks', 131742, 804, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('e188b21afca27b01cde7f42dff1c1770', '31253595b2715022820766f9', '5e89b33936e5a0ceebcb764c', 'ml.festival.signal', 'Signal', '1.4', 'iphoneos-arm', 'Sniper_GER <submissions@festival.ml>', 'Sniper_GER <submissions@festival.ml>', '[\"mobilesubstrate\"]', '[\"gcs.cellular-data\"]', './files/ml.festival.signal_1.4_iphoneos-arm.deb', '67f346c95c7ccd523717a3ce081c3718', 'f916b9dcde94c95b4d409dd2a7f8b50170e0d993', '4f0d6f1e4f430e86dd78194dcf9bbd8beff131bc13e8dc809a4aa42d7924316d', 'Tweaks', 48500, 348, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('e842983efdb624bd3b337e06bf658983', '449607de72bca779c371e48d9e5b754a', '9d51880cd099c703e3a1435cb2ea4d11', 'ml.festival.lockwatch2', 'LockWatch 2 (iOS 13)', '2.0f-2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/ml.festival.lockwatch2_2.0f-2_iphoneos-arm.deb', '893e1a4aa0d4b9767fd0d4e1e07494cf', '54cc8c7eb8b963e62dd16efaede9090770fb9535', 'bfc4b52d2e33043eb38d01d7a210db32728834c80f46c94285799a1bcc0cfd50', 'Tweaks', 30768768, 33832, '2020-09-28 19:02:18', '2020-09-28 19:02:18'),
('ec320f7fc9e9d58284bac7c9082278dd', '4e28846095d85b0c9781c557', '6763d58d9a4e1e10c247d333', 'ml.festival.4kdegkelvin', 'Kelvin', '0.0.2', 'iphoneos-arm', 'Sniper_GER', 'Sniper_GER', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.4kdegkelvin_0.0.2_iphoneos-arm.deb', 'db6f1e791946150079479f08da2b8b73', 'ad63b9f753012f2750ac972c19d55fd368055737', 'dd94cb262b013b925b469449e8c740fa863dd650c0c2a4905add99d71151e25c', 'Tweaks', 5412, 124, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('ee9b54b4542c3203ebb549097296fa12', 'd228c5bbd55d721564580ceb', '61450de74f56e04d792053b95e98787c', 'ml.festival.notchsimulator', 'Notch\'d', '0.6-RC2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.notchsimulator_0.6-RC2_iphoneos-arm.deb', '33ea38b7fc004ad9c3fc9aec4c58b024', '3a21105c719b25ea1d54af790f4262893d7a7bc8', '6c1942c7bf08943b03a410748bc47cf63a06531a230c42d1b5c2a2486d33c84e', 'Tweaks', 122680, 716, '2019-04-01 20:41:46', '2019-04-01 20:41:46'),
('f062247c8cb2c17c5bd2407c48c6c63e', 'dbb0b76f55d488fd5e1100b2e7939a85', '4972d01f58ebe1c82139b72f94252c23', 'tf.festival.pointercontrolenabler', 'PointerControlEnabler', '1.0', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/tf.festival.pointercontrolenabler_1.0_iphoneos-arm.deb', '203832b5d59a57f7b1c81acb3120ddb8', 'b2066ebf08766c730485ecddd3dcc27fe614cb01', 'a9619a444a58216d170a24361f9cc940f3b80e2ad3bdcc7e8b8667d09a59a188', 'Tweaks', 2976, 168, '2020-05-26 06:09:09', '2020-05-26 06:09:09'),
('f2db4a1a3782e5e705bfd738337e84af', '449607de72bca779c371e48d9e5b754a', 'c80591de8dc0b20636a4eae2fa85e3ce', 'ml.festival.lockwatch2', 'LockWatch 2 (iOS 13)', '2.0f-3', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"preferenceloader\"]', '[]', './files/ml.festival.lockwatch2_2.0f-3_iphoneos-arm.deb', 'b49cc184b360fccf93209cacec1f95d8', 'f078d87279e7d269d48f5fb56c070a0426d223e4', '1082e3c8894b7d4442a909d1f0d42d4eae7252589fa649014749d379c91f6983', 'Tweaks', 16836712, 20660, '2021-03-30 21:22:54', '2021-03-30 21:22:54'),
('f2e070d6a6fd7458439473e4c4f97116', 'c28054ae58c255b40e8342e88b17a090', '486bea1a67feeb6160ecdb0b11ffbb61', 'ml.festival.mgcopyanswerdump', 'MGCopyAnswerDump', '0.1-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[]', '[]', './files/ml.festival.mgcopyanswerdump_0.1-1_iphoneos-arm.deb', 'f9037c89a95c4586f1b804fd40eb84f9', '3e7dbbde47555364fac7b4d69f371ff70d128a6f', 'dd0b4e3fb53e3f3c4f788a70e2770c0cce23c02d788bd4fa155431bf3f99416f', 'Utilities', 36902, 172, '2019-01-01 01:15:45', '2019-01-01 01:15:45'),
('f703537bb78e3d037dc1111457fac1fd', 'b9d8d453b27136bb05861042', '4c55b13b0bbbd6fef560e7be', 'ml.festival.redstone', 'Redstone', '17w37a.rs-internal.170916', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"cc.tweak.libobjcipc\",\"applist\",\"ws.hbang.common\",\"ml.festival.libweathermanager\"]', '[]', './files/ml.festival.redstone_17w37a.rs-internal.170916_iphoneos-arm.deb', '6de5cfbd823ed95a8b596fc08596eea7', 'ed6aa1143271dc7c4b3e112e2689df399a1cf198', '6b917f587d8501a3d18c65936fe06d24b3bfc2bc5ac6e955e442c10ce8981694', 'Tweaks', 2333754, 6344, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('fa6619cafacaccd5cef40f2910e1cfcb', 'b084fd420f8773c15db71a53', '53f01b06e52fc3296624fb2e', 'ml.festival.erie', 'Erie', '0.6', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"gsc.telephony\",\"ws.hbang.common\"]', '[]', './files/ml.festival.erie_0.6_iphoneos-arm.deb', 'b0ce8fe5c90847be66d1a216d41fa2fc', 'dbbad0c2de2eba5302695a73a19e589376b944f6', '86c68f47e45686ea513b393a0ba12a837e3f7bd7533fb3e30757f1c4255c3a15', 'Tweaks', 20834, 276, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('fb3eb7645dfab8303a7632866f6567e5', '1aa0be9699a08a8b70f25c01', '746e2b95f8d38b13cf00ad3e', 'ml.festival.lockwatch10', 'LockWatch Internal', '18w09a.lw-internal.180228', 'iphoneos-arm', 'Sniper_GER', 'Sniper_GER', '[\"mobilesubstrate\",\"ws.hbang.common\"]', '[\"ml.festival.lockwatch\"]', './files/ml.festival.lockwatch10_18w09a.lw-internal.180228_iphoneos-arm.deb', '6024c4f3168b40875a74831a1d98f4cf', 'ac74e6dc2d119f051568c418bc7e9fde828063c7', '49dd143fdbd49cdd84fe6345eddb170a35f27cbf3ad43e710080068180d9de68', 'Tweaks', 1350200, 4064, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('fb66e0786471acab3d39cfabed1371aa', 'd228c5bbd55d721564580ceb', '4e5a3d7e56f13597ea1bd9ff', 'ml.festival.notchsimulator', 'Notch\'d', '0.3-1', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\"]', '[]', './files/ml.festival.notchsimulator_0.3-1_iphoneos-arm.deb', 'a24cd7a0121d724961a29013b0a3dfb3', '9865ba8b8456ce2da340c5da5261b7f099d8c1a2', '580b7be4b20b70d411bb3334ca108c579af8534b169f22c064ad5571a3a9e11c', 'Tweaks', 120676, 728, '2018-12-23 14:37:13', '2018-12-23 14:37:13'),
('fd466d2308f1468ba0b7907c443e4ec6', '4809e3e8f2ee07c06ad19c578835359e', 'a67500bca65f3f9f936fc41e8c61646b', 'ml.festival.lockwatch2.faces', 'LockWatch2CustomFaces', '1.0', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"ml.festival.lockwatch2 (>= 2.0b4)\"]', '[]', './files/ml.festival.lockwatch2.faces_1.0_iphoneos-arm.deb', '9d3b389d81bfa73855b956903c18f89b', '0e54e9d7533fa1dad76112eec30adbc458c98c4e', '0a3f6742c221fb34aec4292b57cab74ca9332cf277738d2b3f1d03563cf9de9e', 'Watch Faces (LockWatch 2)', 72926, 244, '2020-09-07 10:27:47', '2020-09-07 10:27:47'),
('fdfc87307099637e843da6eab26069e6', '9b5206644c769c147b1e9d309a6fc7f9', '5f7fcda1c1939b7e89cdc1117806f1f6', 'ml.festival.proudlockxr', 'ProudLock Xr', '0.2', 'iphoneos-arm', 'Sniper_GER <sniperger@festival.tf>', 'Sniper_GER <sniperger@festival.tf>', '[\"mobilesubstrate\",\"firmware (>= 12.0)\"]', '[]', './files/ml.festival.proudlockxr_0.2_iphoneos-arm.deb', 'b578bbb444d5755dd19b96ab0fc8cb10', 'a68cbd42de2e12684ee89400d455d1ccd0367a4d', '023d81e7c3b6ed8277c7b2ee4c8cd66041316f24f153f22b99eb1516a11326af', 'Tweaks', 1251776, 4732, '2019-05-11 08:14:52', '2019-05-11 08:14:52');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `packages`
--

CREATE TABLE `packages` (
  `id` varchar(32) NOT NULL,
  `name` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `shortDescription` varchar(255) NOT NULL,
  `detailedDescription` text NOT NULL,
  `minOSVersion` varchar(255) NOT NULL,
  `maxOSVersion` varchar(255) DEFAULT NULL,
  `accountId` varchar(32) NOT NULL,
  `visible` tinyint(1) DEFAULT 0,
  `icon` varchar(255) DEFAULT NULL,
  `screenshots` text DEFAULT NULL,
  `bugsReportURL` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Daten für Tabelle `packages`
--

INSERT INTO `packages` (`id`, `name`, `identifier`, `shortDescription`, `detailedDescription`, `minOSVersion`, `maxOSVersion`, `accountId`, `visible`, `icon`, `screenshots`, `bugsReportURL`, `createdAt`, `updatedAt`) VALUES
('0', 'Unprofessional Package', 'unprofessional', 'An unprofessional package', 'This is an unprofessional package, and it\'s not recommended to install this package.', '1.0', '99.0', 'a0ef029cbcfdf4067797', 0, NULL, '{\"iphone\":[],\"ipad\":[]}', NULL, '1970-01-01 01:00:00', '1970-01-01 01:00:00'),
('11161a8fa04aa151fa0ed637720c6a17', 'LockWatch 2 Cases - Series 3', 'ml.festival.lockwatch2.cases.s3', 'Apple Watch Series 3 (and earlier) cases for LockWatch 2', 'This package includes Apple Watch Series 3 (and earlier) cases for LockWatch 2.\n\n• Apple Watch (Stainless Steel)\n• Apple Watch Sport (Aluminum)\n• Apple Watch Edition (18-Karat Gold, Ceramic)', '13.0', '', 'a0ef029cbcfdf4067797', 1, NULL, '{\"iphone\":[],\"ipad\":[]}', NULL, '2021-06-07 15:40:48', '2021-06-07 19:20:42'),
('1329ee0e51712fe328131d36330abbca', 'LockWatch Bands - Series 4', 'ml.festival.lockwatch2.bands.s4', 'An incomplete collection of Apple Watch Bands released for Series 4 and earlier', 'This package includes an incomplete collection of bands that have been released for Apple Watch Series 4 and earlier.\n\nBecause Apple started the Apple Watch Studio with Series 5, a lot of assets for bands before that have never been made available separate from the cases.\n\nThis package includes the following bands:\n• (PRODUCT)RED Sport Band\n• Black Sport Band\n• Pink Sand Sport Band\n• Stone Sport Band\n• White Sport Band\n• Gold Milanese Loop\n• Silver Milanese Loop\n• Space Black Milanese Loop\n• Silver Link Bracelet\n• Space Black Link Bracelet\n• Anthracite\\/Black Nike Sport Band\n• Pure Platinum\\/Black Nike Sport Band\n• Black Nike Sport Loop\n• Pride Edition Sport Loop\n• Summit White Nike Sport Loop\n• Ébène Barénia Leather Single Tour Deployment Buckle\n• Fauve Barénia Leather Double Tour\n• Fauve Barénia Leather Single Tour\n• Fauve Barénia Leather Single Tour Deployment Buckle\n• Feu Epsom Leather Double Tour\n• Feu Epsom Leather Single Tour', '13.0', '', 'a0ef029cbcfdf4067797', 1, NULL, '{\"iphone\":[],\"ipad\":[]}', NULL, '2021-06-07 19:17:52', '2021-06-07 19:21:00'),
('1aa0be9699a08a8b70f25c01', 'LockWatch', 'ml.festival.lockwatch10', 'Display watch faces on your iOS Lock Screen – inspired by Apple Watch', 'Compatible with iOS 10. iOS 9 support following in early 2018, iOS 11 support following as soon as a proper jailbreak is released.\n\nLockWatch brings an almost perfect recreation of most of the watch faces included in watchOS 4 – right to your iOS LockScreen.\n\nIt works just like Apple Watch: Force touch a watch face to enter selection mode, swipe through all available Watch Faces and select the one you like, or customize it the way you want. On devices that do not feature 3D Touch, you can long press to enter selection mode. To leave selection mode, either tap on a Watch Face or press the home button.\n\nIncluded Watch Faces:\n• Activity Analog\n• Activity Digital\n• Numerals (Regular and Rounded style only)\n• Utility\n• Simple\n• Color\n• Chronograph\n• X-Large\n\nA Weather Face is also planned. Most of the Watch Faces can also be colored in one of the 40 colors supported in watchOS 4.\n\nSpecial Thanks to Anthony Bouchard for his great <a href=\"http://www.idownloadblog.com/2017/12/06/lockwatch/\">article on iDownloadBlog</a> motivating me to work on LockWatch again!\n\nThe source code is available on <a href=\"https://github.com/SniperGER/LockWatch\">GitHub</a>', '10.0', '10.2', 'a0ef029cbcfdf4067797', 0, '1aa0be9699a08a8b70f25c01.png', '{\"iphone\":[\"0001\",\"0002\",\"0003\",\"0004\"],\"ipad\":[]}', NULL, '2018-01-21 09:36:00', '2018-03-20 19:34:42'),
('31253595b2715022820766f9', 'Signal', 'ml.festival.signal', 'Fake a cellular connection on your iPad or iPod touch', 'Signal allows you to fake a cellular connection on your WiFi-only iPad or iPod touch.\n\nYou can either choose to fake a plain cellular connection using a custom carrier, a static signal strength and a custom connection type, or, probably for the first time ever, simulate a cellular connection using your WiFi connection.\n\nIn static mode, Signal makes your device pretend to search for a cellular network (\"Searching...\") and \"finding\" one after a few seconds. After \"establishing\" a connection, a custom carrier name is shown, alongside a real fake strength indicator.\n\nIf you choose to show your WiFi connection, your device is still pretending to search for a network, but uses the WiFi connection (if available) to show the details in the status bar. If you\'re not connected, it says \"No Service\", just as you would expect.\n\nSignal also allows you to override the data connection type. Connected to a WiFi network? Make it show LTE instead. Not connected to anything? That lousy GPRS connection will do.', '10.0', '11.3.1', 'a0ef029cbcfdf4067797', 1, '31253595b2715022820766f9.png', '{\"iphone\":[],\"ipad\":[]}', NULL, '2016-11-20 19:23:00', '2016-11-20 19:23:00'),
('32b515999cb677cd4c4f57ed7bff4da6', 'kbstretcher', 'tf.festival.kbstretcher', 'Stretches keyboards to appropriate sizes', 'kbstretcher is a standalone tweak implementing the same keyboard layout fixes as Re:Scale 2. It\'s intended to be used if you choose to use a different resolution changing tweak (maXscale, System Info, etc) and suffer from a shifted keyboard. This tweak stretches your keyboard to an appropriate size if your have set a custom screen resolution on your device.\n\nSpecial thanks to /u/zediana for encouraging me to fix this after all these years of people setting custom resolutions (and complaining their keyboard is broken)!', '9.0', '14.3', 'a0ef029cbcfdf4067797', 1, NULL, '{\"iphone\":[],\"ipad\":[]}', 'https://github.com/SniperGER/ReScale2', '2021-04-26 22:10:17', '2021-04-27 19:43:49'),
('449607de72bca779c371e48d9e5b754a', 'LockWatch 2 Beta (iOS 13 & 14)', 'ml.festival.lockwatch2', 'The idea of having an Apple Watch on your lock screen – continued', 'Team FESTIVAL is proud to announce LockWatch 2, the next big step in lock screen tweaks. With support for iOS 13 and iPadOS, LockWatch 2 is expected to release in 2020, free and open source, as usual for Team FESTIVAL software.\n\nContinuing on the principles and the usability of the original LockWatch, LockWatch 2 will include the following features:\n• 40+ native watch faces, including Mickey Mouse and Series 4+/Nike/Hermès exclusives\n• Custom watch faces\n• Native complications\n• Inline watch face management and customization\n• Device emulation if you don\'t own an Apple Watch\n• iOS 13 and iPadOS* support\n\n<em>* Support for iPadOS currently requires additional steps because of legal issues regarding redistribution of copyrighted assets. More on that coming as development proceeds.</em>\n\n<strong>40+ native watch faces</strong>\nLockWatch 2 supports most, if not all watch faces included in watchOS 6 (or rather, iOS 13). This includes Utility, Modular, the much requested Mickey Mouse and many more, as well as Series 4/5, Nike and Hermès exclusives, such as California, Gradient, Solar Dial or Noir Hermès.\n\n<strong>Custom watch faces</strong>\nLockWatch 2 will also support custom watch faces, created by either Team FESTIVAL or you, the community. This allows you to create new watch faces based on existing ones, or create something entirely from scratch. Remember when I told you you could create a \"Nyan Cat\" face for the original LockWatch? Someone actually created it a while ago. And you can do that too with LockWatch 2.\n\n<strong>Native complications</strong>\nNo offense, Complications is a great tweak, and I respect /u/bengiannis for this incredible work. But having them natively on your lock screen is even more incredible, isn\'t it? Anyways, LockWatch 2 will make every complication supplied by watch faces actually work. Activity, Weather, and even Now Playing will show correct data. There is also the possibility we might see third-party app complications, but I can\'t guarantee that.\n\n<strong>Watch face management & Customization</strong>\nAs seen in the original LockWatch, you will be able to customize watch faces right from the lock screen. Tap and hold (or press firmly on 3D Touch/Apple Pencil capable devices) to bring up the watch face picker. Here you can also customize watch faces to your liking.\nWhat\'s new with LockWatch 2 however is, that you can add new watch faces from your lock screen too. And if you have a paired Apple Watch, you can also add watch faces from within the Watch app, or synchronize the faces on your lock screen with those on your Apple Watch.\n\n<strong>Device Emulation</strong>\nIf you don\'t have an Apple Watch at all, you don\'t have to worry. LockWatch 2 allows you to emulate one so it can be used by your selected watch faces, even if you have a paired Apple Watch. You can customize just about anything, like screen size, corner radius or the product type.\n\n<strong>iOS 13 and iPadOS support</strong>\nLockWatch 2 will support at least iOS 13, and even iPadOS, although this (currently) requires additional steps you have to take because some frameworks are limited to iPhone and simply redistributing them may get me into legal trouble. It\'s also planned to make this compatible with iOS 12, and maybe even iOS 11 if you really want it. Also it\'s planned to support future versions of iOS and iPadOS.', '13.0', '14.3', 'a0ef029cbcfdf4067797', 1, '449607de72bca779c371e48d9e5b754a.png', '{\"iphone\":[\"IMG_1627\",\"IMG_1628\",\"IMG_1629\",\"IMG_1630\",\"IMG_1631\",\"IMG_1632\"],\"ipad\":[]}', 'https://github.com/SniperGER/LockWatch2', '2020-01-21 09:23:05', '2021-06-07 19:18:22'),
('4809e3e8f2ee07c06ad19c578835359e', 'LockWatch 2 Custom Faces', 'ml.festival.lockwatch2.faces', 'Custom faces for LockWatch 2, created by Team FESTIVAL', 'This package contains custom watch faces for LockWatch 2, created by Team FESTIVAL.\n\n• BInary: This watch face was one of the first custom watch faces for LockWatch from 2015. Now it returns for LockWatch 2, fully customizable and native AF.', '13.0', '13.6.1', 'a0ef029cbcfdf4067797', 1, NULL, '{\"iphone\":[],\"ipad\":[]}', NULL, '2020-09-07 10:27:47', '2020-09-07 10:27:47'),
('4e28846095d85b0c9781c557', 'Kelvin', 'ml.festival.4kdegkelvin', 'All Aperture technologies remain safely operational up to 4000 degrees Kelvin', 'Have you ever wanted to display your weather forecast in scientific values, measured in Kelvin? Now you can!\n\nKelvin allows you to convert your weather forecast from Celsius/Fahrenheit to Kelvin system-wide. The Weather app, its widget and even Siri will use Kelvin from now on.\n\nThis is not intended to be useful at all, it only utilizes something that is implemented in iOS already, but never actually used.', '10.0', '14.7', 'a0ef029cbcfdf4067797', 1, '4e28846095d85b0c9781c557.png', '{\"iphone\":[],\"ipad\":[]}', NULL, '2017-03-19 22:28:00', '2018-02-14 11:10:55'),
('6c21780405f3d059b391824b521413d1', 'Re:Scale 2', 'tf.festival.rescale2', 'A modern (and safe) Upscale alternative!', '<i>Compatible with (at least) iOS 9-14. iOS 8 support is untested.</i>\n\nHave you ever wanted to change the screen resolution of your iPhone, iPad or iPod touch, but people told you to not mess with system files or your resolution as it could send your device into an actual boot loop? With Re:Scale 2 you can. It\'s safe to use and the resolution is only applied while you\'re jailbroken.\n\nRe:Scale 2 supports every resolution of devices that run iOS 8 or later:\n\n• iPhone 4s (3.5\", @2x)\n• iPhone 5/5s/5c/SE (4\", @2x)\n• iPhone 6/6s/7/8, SE 2020 (4.7\", @2x)\n• iPhone 6/6s/7/8 Plus (5.5\", @3x)\n• iPhone X/XS, 11 Pro (5.8\", @3x)\n• iPhone XR, 11 (6.1\", @2x)\n• iPhone XS Max, 11 Pro Max (6.5\", @3x)\n• iPhone 12/12 Pro (6.1\", @3x)\n• iPhone 12 mini (5.4\", @3x)\n• iPhone 12 Pro Max (6.7\", @3x)\n• iPad 2, iPad mini (9.7\", @1x)\n• iPad 3/4/5/6, Air 1/2, mini 2/3/4/5, Pro (9.7\", @2x)\n• iPad 7/8 (10.2\", @2x)\n• iPad Air 3, Pro (10.5\", @2x)\n• iPad Air 4 (10.9\", @2x)\n• iPad Pro (11\", @2x)\n• iPad Pro (12.9\", @2x)\n\n<i>Note: Not every resolution may be compatible with every version of iOS.</i>\n\n<strong style=\"font-weight: bold\">What makes Re:Scale 2 different from tweaks like Upscale/Re:Scale 1, LittleBrother or SystemInfo?</strong>\n\n• Upscale (and Re:Scale 1) persisted the changed resolution in a file that is read by iOS even when not jailbroken, which could lead to a boot loop if an incompatible resolution is applied. Also, this tweak is hasn\'t really been updated since it released back in the days of iOS 8, so it only includes resolutions from iPhone 4s up to iPhone 6 Plus.\n• LittleBrother was basically only supported from iOS 8 to iOS 10 and hasn\'t received any update ever since. It was a paid release, and only allowed the user to choose between 3 Display Zoom modes on iPhone 6 and 6s.\n• System Info\'s resolution changing portion works similar to Upscale, only that the persisted change is reverted after applying a resolution, so you have to apply this resolution manually every time after reboot.\n\nRe:Scale 2 works similar to LittleBrother as it hooks into the process responsible for doing \"framebuffer magic\" (aka <code style=\"font-family: monospace\">backboardd</code>). Instead of loading the resolution from <code style=\"font-family: monospace\">com.apple.iokit.IOMobileGraphicsFamily.plist</code>, the values are overriden by Re:Scale 2 at runtime, so the resolution is only applied while your jailbreak is active. Additionally, if you\'re running iOS 11 or later and get the \"Red Status Bar\" bug (&#x1F633; <code style=\"font-family: monospace\">rdar:45025538</code>), you can set an appropriate Status Bar right in the preferences pane.\n\n<strong style=\"font-weight: bold\">If you have set a higher resolution and your device is rebooted, it is recommended to rejailbreak with tweaks disabled (\"Safe Mode\" in checkra1n) and disable Re:Scale 2 using iCleaner before rejailbreaking again with tweaks enabled.</strong>', '8.0', '14.7', 'a0ef029cbcfdf4067797', 1, '6c21780405f3d059b391824b521413d1.png', '{\"iphone\":[],\"ipad\":[]}', 'https://github.com/SniperGER/ReScale2', '2021-04-23 12:08:07', '2021-04-30 19:50:42'),
('87ef496de97854c1a95edbf4', 'ProudLock', 'ml.festival.proudlock', 'Be proud of that lock!', 'ProudLock enables the Face ID latch glyph, internally called SBUIProudLockIconView, on older devices.\n\nSource code available on <a href=\"https://github.com/SniperGER/ProudLock\">GitHub</a>', '11.0', '11.3.1', 'a0ef029cbcfdf4067797', 1, '87ef496de97854c1a95edbf4.png', '{\"iphone\":[],\"ipad\":[]}', NULL, '2018-07-26 11:39:29', '2018-07-26 11:42:58'),
('8f940ee44de1a5636632fea8e830b937', 'RealCC \"2\"', 'ml.festival.realcc', 'RealCC improved', 'RealCC \"2\" is an improved build of RealCC, a tweak to make the iOS 11 Control Center actually disable WiFi and Bluetooth.\r\n\r\nThis build fixes a few graphical glitches, such as \"alternative\" backgrounds, and displays correct texts when toggling WiFi or Bluetooth.', '11.0', '11.3.1', 'a0ef029cbcfdf4067797', 0, NULL, '{\"iphone\":[],\"ipad\":[]}', NULL, '2018-10-22 22:33:00', '2018-12-31 15:45:16'),
('906f97c053fa8dc5212f33776abc0db8', 'WallpaperFix', 'ml.festival.wallpaperfix', 'Fixes custom wallpapers not appearing in Settings', 'Since iOS 12, custom wallpapers stored in /Library/Wallpapers won\'t appear in Settings when choosing a new wallpaper.\n\nThis tweak allows you to store custom wallpapers in /Library/Wallpapers again and lets you use iOS\' \"special handling\" (eg. centering and zoom) of system wallpapers for your own.\n\nCustom wallpapers are always appended to the list *after* stock wallpapers.', '12.0', '12.1.2', 'a0ef029cbcfdf4067797', 0, NULL, '{\"iphone\":[],\"ipad\":[]}', 'https://github.com/SniperGER/WallpaperFix', '2019-03-30 11:41:55', '2019-03-30 11:47:52'),
('9b5206644c769c147b1e9d309a6fc7f9', 'ProudLock Xr', 'ml.festival.proudlockxr', 'Be proud of that lock – Reloaded!', 'ProudLock Xr enables the Face ID latch glyph, internally called SBUIProudLockIconView, on older devices.\n\nThis version supports both iOS 12 and iOS/iPadOS 13. Source Code available at <a href=\"https://github.com/SniperGER/ProudLock2\">https://github.com/SniperGER/ProudLock2</a>.', '12.0', '13.5', 'a0ef029cbcfdf4067797', 1, '9b5206644c769c147b1e9d309a6fc7f9.png', '{\"iphone\":[],\"ipad\":[]}', 'https://github.com/SniperGER/ProudLock2', '2019-03-25 22:25:58', '2020-06-18 06:35:45'),
('ae5f4c7ce13e4b68519a8a5ef6d5d5b6', 'LockWatch 2 Cases - Series 5', 'ml.festival.lockwatch2.cases.s5', 'Apple Watch Series 5 cases for LockWatch 2', 'This package includes Apple Watch Series 5 cases for LockWatch 2.\n\n• Apple Watch (Aluminum, Stainless Steel, Ceramic)\n• Apple Watch Nike (Aluminum)\n• Apple Watch Hermès (Stainless Steel)', '13.0', '', 'a0ef029cbcfdf4067797', 1, NULL, '{\"iphone\":[],\"ipad\":[]}', NULL, '2021-06-07 15:44:12', '2021-06-07 19:20:47'),
('b084fd420f8773c15db71a53', 'Erie', 'ml.festival.erie', 'Haptic feedback when pressing buttons – Inpspired by iPhone 7', 'Requires a device with Taptic Engine (iPhone 6s or later). This tweak is currently not confirmed to work on iOS 9.\n\nInspired by iPhone 7\'s force-sensitive home button, Erie allows you to add haptic feedback to any hardware button on your device.\nYou can choose from the following supported buttons:\n\n• Home Button\n• Touch ID\n• Volume Up/Down\n• Sleep Button\n\nProminent Haptics fires a different vibration when pushing a button down to create a more realistic feel of..., well... pushing buttons.\nThis feature will allow you to recreate the feeling of pressing the home button on an iPhone 7.\n\nThe source code is available on <a href=\"https://github.com/SniperGER/Erie\">GitHub</a>', '10.0', '12.2', 'a0ef029cbcfdf4067797', 1, 'b084fd420f8773c15db71a53.png', '{\"iphone\":[\"0001\"],\"ipad\":[]}', 'https://github.com/SniperGER/Erie', '2017-08-17 23:09:51', '2019-07-14 09:13:23'),
('b7b4b693846657aa73779f9ac5c674b6', 'LockWatch 2 Cases - Series 6', 'ml.festival.lockwatch2.cases.s6', 'Apple Watch Series 6 cases for LockWatch 2', 'This package includes Apple Watch Series 6 cases for LockWatch 2.\n\n• Apple Watch (Aluminum, Stainless Steel, Titanium)\n• Apple Watch Nike (Aluminum)\n• Apple Watch Hermès (Stainless Steel)\n• Apple Watch SE (Aluminum)\n• Apple Watch Nike SE (Aluminum)', '13.0', '', 'a0ef029cbcfdf4067797', 1, NULL, '{\"iphone\":[],\"ipad\":[]}', NULL, '2021-06-07 15:48:31', '2021-06-07 19:20:54'),
('b9d8d453b27136bb05861042', 'Redstone', 'ml.festival.redstone', 'A Tweak to bring the Windows 10 Mobile experience to iOS', '<strong>Redstone is not compatible with iOS 11</strong>\n\nRedstone is a home screen replacement for your iPhone and iPod touch. Based on the idea of Paragon, bringing the tile based UI of Windows Phone 8.1 to your iOS device, Redstone delivers a more modern approach using the modern UI of Windows 10 Mobile.\n\nYou can customize your start screen by pinning the tiles you need while unpinning those you don\'t need, resizing and rearranging them however you like. Choose an accent color you like that fits your current mood. Uninstall apps directly from the app list without leaving Redstone at all. These are just a few features of many to come.\n\nCurrent features:\n• Pin, unpin, resize and rearrange tiles\n• Launch apps from App List and quickly navigate using Jump List\n• Tile badges (eg. Notification count, updates etc)\n• Uninstall apps from within Redstone\n• Per-app Launch Screen\n• Extendable with tile icons and per-tile accent colors\n• Lock screen replacement (with media and passcode support)\n• Notifications\n• Live tiles (another extension part)\n• System-wide volume control\n\nPlanned features:\n• App Switcher\n• 3D Touch support for tiles and App List\n\nRedstone is based on Windows 10 Mobile (Build 10.0.15063.0). Please note that this is a pre-release preview with features that are subject to change at any time.', '10.0', '10.2', 'a0ef029cbcfdf4067797', 0, 'b9d8d453b27136bb05861042.png', '{\"iphone\":[\"0001\",\"0002\",\"0003\",\"0004\"],\"ipad\":[]}', NULL, '2017-05-18 22:00:00', '2018-07-10 15:46:52'),
('c28054ae58c255b40e8342e88b17a090', 'MGCopyAnswerDump', 'ml.festival.mgcopyanswerdump', 'Dump MobileGestalt keys', 'This is a development application that lets you dump \"answers\" from MGCopyAnswer. MobileGestalt basically controls what your device is capable of. By overriding these answers, your device can be tricked into being another device (eg. iPhone X).\n\nIf you have one of the following devices, please send me your dumps using the Mail button in the top left corner:\n• iPhone 8 (iPhone10,1, iPhone10,4)\n• iPhone 8 Plus (iPhone10,2, iPhone10,5)\n• iPhone X (iPhone10,3, iPhone10,6)\n• iPhone Xs (iPhone11,2)\n• iPhone Xs Max (iPhone11,4, iPhone11,6)\n• iPhone Xr (iPhone11,8)\n• iPhone 11 (iPhone12,1)\n• iPhone 11 Pro (iPhone12,3)\n• iPhone 11 Pro Max (iPhone12,5)\n• iPad Pro 11\" (iPad8,1, iPad8,2, iPad8,3, iPad8,4)\n• iPad Pro 12.9\" (3rd gen) (iPad8,5, iPad8,6, iPad8,7, iPad8,8)\n\nUsing one of these devices, you will be asked to send your MobileGestalt data to Team FESTIVAL. Your data will not be shared with third-parties and is only saved for as long as it\'s used for development.\n\nThis application is based on MGCopyAnswerTable by Timac (seriously, check out his MobileGestalt posts: <a href=\"https://blog.timac.org/2017/0124-deobfuscating-libmobilegestalt-keys/\" target=\"_blank\">#1</a>, <a href=\"https://blog.timac.org/2018/1126-deobfuscated-libmobilegestalt-keys-ios-12/\" target=\"_blank\">#2</a>).', '11.0', '13.2.3', 'a0ef029cbcfdf4067797', 1, 'c28054ae58c255b40e8342e88b17a090.png', '{\"iphone\":[],\"ipad\":[]}', 'https://github.com/SniperGER/MGCopyAnswerDump', '2019-01-01 01:08:15', '2019-11-21 21:01:21'),
('c898f107fb72e78da3284381', 'Medusafied', 'ml.festival.medusa', 'Enable Slide Over on iPhone and unsupported iPads', 'Medusafied allows you to use Slide Over and Split View (codenamed Medusa) on iPhone and unsupported iPads.\n\nIt\'s actually nothing special, and other people have done it before. This is just my own take at enabling disabled features.', '9.0', '10.3.3', 'a0ef029cbcfdf4067797', 0, 'c898f107fb72e78da3284381.png', '{\"iphone\":[\"0001\"],\"ipad\":[]}', NULL, '2016-10-16 07:29:00', '2018-02-25 21:49:09'),
('d1dbc3cd455171b1cc6d1015d9afb962', 'Blur\'d', 'ml.festival.blurred', 'Improving iOS 11’s blurred folders', 'Just a little tweak to make folders in iOS 11 a little more blurry than usual.', '11.0', '', 'a0ef029cbcfdf4067797', 0, NULL, '{\"iphone\":[],\"ipad\":[]}', 'https://github.com/SniperGER/FolderBlur', '2019-01-02 22:42:19', '2019-01-02 22:42:19'),
('d228c5bbd55d721564580ceb', 'Notch\'d', 'ml.festival.notchsimulator', 'Simulate that iPhone Xs notch!', 'This is Notch\'d.\n\nNotch\'d enables iPhone Xs/iPad Pro (2018) features included in iOS, and simulates the Notch and Rounded Corners on any non-iPhone Xs device.\n\nWhy? Because why not. Transform your old, dated iPhone or iPad into an iPhone Xs or iPad Pro (2018) with Notch\'d. (Hardware-side features limited to iPhone Xs/iPad Pro (2018) not included.)', '11.0', '12.1.2', 'a0ef029cbcfdf4067797', 1, 'd228c5bbd55d721564580ceb.png', '{\"iphone\":[],\"ipad\":[]}', 'https://github.com/SniperGER/NotchSimulator', '2018-07-07 11:49:28', '2019-04-01 20:55:40'),
('dbb0b76f55d488fd5e1100b2e7939a85', 'PointerControlEnabler', 'tf.festival.pointercontrolenabler', 'Enables Pointer Control settings for every accessory', 'This tweak enables the hidden \"Pointer Control\" settings in iOS/iPadOS 13 for every accessory.', '13.0', '', 'a0ef029cbcfdf4067797', 1, NULL, '{\"iphone\":[],\"ipad\":[]}', NULL, '2020-05-26 06:09:08', '2020-05-26 06:09:08'),
('e4758402605aace60bb8ad425175d18b', 'GlobalWarmingNoMore', 'ml.festival.globalwarmingnomore', 'Well boys, we did it. Global Warming is no more!', 'GlobalWarmingNoMore allows you to change the weather info in the stock iOS Weather app, as requested by /u/smacpats <a href=\"https://www.reddit.com/r/jailbreak/comments/cncza1/request_tweak_that_lets_you_change_the_values_in/\">here</a>. This tweak is verified to be compatible on iOS 12.2, but should also be working on iOS 11 and above.\n\n<strong style=\"font-weight: bold\">How does it work?</strong>\n• Tap and hold on any *open* city in Weather to bring up the editor.\n• The editor is split into three sections: <i>Current Conditions</i>, <i>Hourly Forecast</i> and <i>Day Forecast</i>.\n• Tapping any item in <i>Current Conditions</i> allows you to directly edit its value. Changes appear when you tap Done.\n• Tapping any item in <i>Hourly/Day Forecast</i> allows you to edit a specific forecast\'s properties.\n• You can also undo your changes by tapping Reset\n• For extra fun, press Randomize!\n\n<strong style=\"font-weight: bold\">Known Issues</strong>\n• Partial Translation: Only selected strings are found inside Weather.framework, others have to be translated manually. Currently, for some strings, there is only English and German available.\n• Swiping between cities doesn\'t work sometimes after the Editor view has been dismissed.\n\n<strong style=\"font-weight: bold\">Contributing</strong>\nYou can always check out the source code at https://github.com/SniperGER/GlobalWarmingNoMore and help to fix issues or buy me a beer/coffee/2012 Mac mini CPU Fan at https://paypal.me/SniperGER. However, I would appreciate it if you actually invest your money into fixing Global Warming rather than some stranger developing strange tweaks.\n\nIf you have any game-breaking issues, you can always reach me on Twitter (<a href=\"https://twitter.com/Sniper_GER\">@Sniper_GER</a>) or open an issue on GitHub. But please don\'t report any of the known issues kthxbye.', '11.0', '12.4', 'a0ef029cbcfdf4067797', 1, 'e4758402605aace60bb8ad425175d18b.png', '{\"iphone\":[],\"ipad\":[]}', 'https://github.com/SniperGER/GlobalWarmingNoMore', '2019-08-16 06:02:25', '2019-08-19 09:43:52');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `packageVersionRatings`
--

CREATE TABLE `packageVersionRatings` (
  `id` varchar(32) NOT NULL,
  `packageId` varchar(32) NOT NULL,
  `packageVersionId` varchar(32) NOT NULL,
  `packageVersionReviewId` varchar(32) NOT NULL,
  `value` int(11) NOT NULL DEFAULT 1,
  `accountId` varchar(32) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `packageVersionReviewMessages`
--

CREATE TABLE `packageVersionReviewMessages` (
  `id` varchar(32) NOT NULL,
  `packageId` varchar(32) NOT NULL,
  `packageVersionId` varchar(255) DEFAULT NULL,
  `packageVersionReviewId` varchar(255) DEFAULT NULL,
  `text` text NOT NULL,
  `fromDeveloper` tinyint(1) NOT NULL DEFAULT 0,
  `accountId` varchar(32) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `packageVersionReviews`
--

CREATE TABLE `packageVersionReviews` (
  `id` varchar(32) NOT NULL,
  `packageId` varchar(32) NOT NULL,
  `packageVersionId` varchar(32) NOT NULL,
  `title` varchar(255) NOT NULL,
  `accountId` varchar(32) NOT NULL,
  `deviceId` varchar(32) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `packageVersions`
--

CREATE TABLE `packageVersions` (
  `id` varchar(32) NOT NULL,
  `packageId` varchar(32) NOT NULL,
  `version` varchar(255) NOT NULL DEFAULT '1.0',
  `changeText` text NOT NULL,
  `visible` tinyint(1) DEFAULT 0,
  `downloadCount` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Daten für Tabelle `packageVersions`
--

INSERT INTO `packageVersions` (`id`, `packageId`, `version`, `changeText`, `visible`, `downloadCount`, `createdAt`, `updatedAt`) VALUES
('0', '0', '1.0', 'No release, because I\'m unprofessional', 1, 0, '1970-01-01 01:00:00', '1970-01-01 01:00:00'),
('012cb533b1d264b5856ab639', 'b084fd420f8773c15db71a53', '0.4', 'Initial release', 1, 0, '2017-08-17 23:09:51', '2017-08-17 23:09:51'),
('05c50f2a0604cd4d2be2e1668c0bdbcc', '6c21780405f3d059b391824b521413d1', '1.0.5-1', 'Fixed status bar not being set correctly on iOS 15 or newer', 1, 7161, '2022-12-26 08:47:17', '2023-12-31 07:03:02'),
('07349db60d47a5baae8a0d060a024f1d', '449607de72bca779c371e48d9e5b754a', '2.0b1', 'Welcome to the very first beta of LockWatch 2!\n\nPlease note that nothing is currently considered finished and is subject to change. This release also disables iPad support for now, since there is currently no proper way for this package to download required files.\n\nCurrently known issues:\n• High battery drain\n• No preferences (selected face resets after restarting SpringBoard)\n• No watch face management (add/remove/reorder)\n• No complication support\n• Missing transitions\n• Video/picture based faces don\'t show anything\n• Probably a lot of layout issues', 1, 1687, '2020-01-21 09:23:05', '2023-12-04 01:29:50'),
('0dbe3d2f3478e354304be21a', 'd228c5bbd55d721564580ceb', '0.5', 'This is a more or less complete rewrite, so we\'re skipping 0.4 entirely. Also, I was working on a huge Java EE project, which is why this update took so long. However, this project is done, so I now have time to do some iOS Development again.\n\nAnyways, here\'s your changelog for today:\n• More or less complete rewrite (one single tweak file instead of three, hoping to improve battery life even more)\n• \"Hide in Screenshots\" returns (formerly \"Hide Visuals in Screenshots\")\n• \"Improved Barmoji Compatibility\" setting to prevent Notch\'d from messing with the keyboard dock size\n• Localized settings (now in English and German, additional languages following soon)\n• A ton of bug fixes, especially when it comes to per-app settings', 1, 730, '2018-09-12 09:32:31', '2023-11-22 22:00:20'),
('115993f3ea18b57eccff8f7aa30109ca', '449607de72bca779c371e48d9e5b754a', '2.0b3-u1', 'After you had to wait for it (way too long), the first update for LockWatch 2 Beta 3 is here. Including general improvements (more on that later), this update includes the \"big 5\" Weather complications. Here\'s a list of every complication added in this update:\n\n• Weather / Weather Temp\n• Weather Conditions\n• Wind\n• Air Quality Index (AQI)\n• UV Index\n\nAdditionally, this update contains the following bug fixes and improvements:\n\n• Complications are finally useful! Supported complications will now open their assigned app or invoke their assigned actions.\n	• Battery: Tapping will toggle Low Power Mode\n	• Date: Opens the Calendar app, showing today\'s events\n	• Now Playing: Opens the app that\'s currently playing music\n	• Weather complications will open the Weather app showing current conditions\n	• Activity: Opens the Activity app and shows the current Activity ring progress\n	• World Clock: Opens the Clock app and shows configured world clocks	\n• Adds onboarding and post-update notifications. Onboarding introduces new and existing users to the capabilities of LockWatch 2, while post-update notifications tell you what changed in an update.\n• Adds layout compatibility for <a href=\"cydia://package/com.cemck/photon\">Photon</a>.\n• Adds support for video-based watch faces (beta). Required assets won\'t be shipped with LockWatch 2.\n• Adds support for light wallpapers.\n• You can now select between \"Off\", \"Translucent\" or \"Solid Black\" as the watch face background.\n• Fixes a crash that occured when selecting a system language or changing \"Bold Fonts\".\n• Fixes layout issues on iPhone in landscape mode.\n• Fixes an issue that was causing some Apple Watch models to not show various complications.\n• Improves suspending watch faces when the display is turned off.\n• Improves the appearance of the \"Nike Analog\" watch face on iOS 13.5.\n• Improves the appearance of the \"Customize\"/\"Cancel\" buttons for Apple Watch Series 4/5.\n• Adds \"preferenceloader\" as a dependency. I guess it\'s common law to always forget that.\n• Improvements to the zoom animation when selecting a watch face.\n• Improvements to localization.\n• For developers: Compiled for arm64 and arm64e with an iOS 11.2/13.3 hybrid SDK on High Sierra (see <a href=\"https://github.com/SniperGER/iOS13-Private-SDK\">https://github.com/SniperGER/iOS13-Private-SDK</a> for more details)\n\n<strong>Currently known issues:</strong>\n\n• Weather complications are currently not compatible with iPad due to missing frameworks.\n• The \"UV Index\" complication may cause layout issues when used with the \"Infograph Modular\" face. This does, in fact, also happen without LockWatch as a data source. thx apple.\n• Weather complications may not be updated automatically after restarting.\n	<strong>Workaround</strong>: Load weather data using the stock \"Weather\" widget and display LockWatch again.\n• The complication \"Battery\" may show incorrect colors when toggling Low Power Mode.', 1, 867, '2020-07-24 15:22:50', '2023-12-07 08:52:56'),
('2101cc8696088e80e41f6c86916d38a7', 'c28054ae58c255b40e8342e88b17a090', '1.1', 'This version of MGCopyAnswerDump contains bug fixes and improvements.\n\n• Rebuilt from scratch\n• iOS 13 support – Dark Mode, Context Menus\n• Fixed an issue that prevents a user from sending their MobileGestalt data via Mail\n• Shiny new icon', 1, 259, '2019-11-21 22:49:38', '2023-12-22 03:13:48'),
('25e08ca766ca27b4dfb6784ec7394c4f', 'b7b4b693846657aa73779f9ac5c674b6', '1.0', 'Initial Release', 1, 246, '2021-06-07 15:48:31', '2023-12-06 00:22:01'),
('25f1be2dd3c0b10d1bbc7c22c9f3af0d', '6c21780405f3d059b391824b521413d1', '1.0.2', '• Localization updates', 1, 18780, '2021-04-24 18:15:43', '2023-12-30 19:13:52'),
('2695212fc3e5e425c8dc4ffd', 'd228c5bbd55d721564580ceb', '0.2-2', '• Fixed Electra Re-Jailbreak issues by removing \"libobjcipc\" dependency (wasn\'t required anyways)\n• Fixed crashes when attempting to shutdown or unlock the SIM card', 1, 16, '2018-07-08 13:09:42', '2018-07-08 13:09:42'),
('27175e0918222c303e7effbacd4db78f', '9b5206644c769c147b1e9d309a6fc7f9', '0.3', 'Here\'s another update! This time, I\'ve got something special for you!\n\n• \"Rest to Unlock\" support: Previously, ProudLock Xr prevented your device from automatically unlocking your device using Touch ID while \"Rest to Unlock\" was enabled. This update finally fixes that.\n\n• Additional layout improvements: While not covering every layout improvement requested so far (looking at you, landscape people), this update does improve layout on iPhones, especially notifications and \"Today\" view.\n\nThis update wouldn\'t be possible without <a href=\"https://github.com/ryannair05>ryannair05</a>, who is currently working on implementing ProudLock as part of his own tweak LittleXS. <a href=\"https://github.com/binksxela/LittleXS\">Check it our right here!</a>', 1, 6590, '2019-05-19 22:15:45', '2023-12-03 21:42:03'),
('2fb1334dae88cb81114d5bbb', 'b9d8d453b27136bb05861042', '17w37a.rs-internal.170914', '• Fixed wallpapers not being updated\n• Fixed App Lost being invisible after app termination\n• Added automatic partial theme color based on wallpaper\n• Changing App Mode doesn\'t require a respring anymore\n• Live Tiles are started if an app crashed\n• Added localization to settings\n• Fixed Live Tiles being initialized with an incorrect frame\n• Weather Tile now uses the currently selected City in Weather.app if Location Services are disabled', 1, 0, '2017-09-14 21:56:00', '2018-02-13 08:55:00'),
('2fbb87d2dc30974ec48d61461efabc6b', '449607de72bca779c371e48d9e5b754a', '2.0b2-1', 'This is a hotfix release to fix a few reported issues by the community.\n\n• Fixed a crash while getting a CALayer\'s parent view hierarchy.\n• Added an option to hide the watch face background. (disabled by default)\n• Added an option to hide the lock screen battery charging view. (enabled by default)', 1, 306, '2020-04-02 07:08:49', '2023-12-07 08:52:47'),
('2fe4c049d02b011ad53e3ec3', '87ef496de97854c1a95edbf4', '0.2', '• Added preferences\n• Face ID latch can now be moved vertically (Thanks to <strong>@jacc</strong> on GitHub for the inspiration!)', 1, 1095, '2018-08-15 22:40:27', '2023-12-31 06:54:07'),
('3334dda9e576aa463b54fd40', 'd228c5bbd55d721564580ceb', '0.3', 'The wait is finally over! It\'s unbelievably hot outside, and I\'m probably sweating more than I can drink, but I still did something here!\n\n• Completely rewritten Notch\'d from scratch\n• Now includes ProudLock to enable the Face ID latch on the lock screen\n• Control Center animation on lock screen? No problemo!\n• Fixed a few crashes here and there\n• Notch\'d components can now be disabled per app (instead of only the notch)\n• Look at that fresh icon that probably could have looked better\n• Probably more that I forgot due to that heat around here (34° C, 93° retard units, 307 K)\n\nAlso thanks to everyone who has submitted feedback in the last versions! You guys are great!\n\nAnd if you would like to donate, you can do so here: <a href=\"https://paypal.me/SniperGER\">https://paypal.me/SniperGER</a>', 1, 1327, '2018-07-26 11:34:54', '2018-07-26 11:34:54'),
('34dabda88cb7913420ae35cbac5c6a11', '6c21780405f3d059b391824b521413d1', '1.0', 'Initial Release', 1, 1900, '2021-04-23 12:08:07', '2023-12-10 18:32:55'),
('389ed0d19c011a59e9b324d526e71a91', '449607de72bca779c371e48d9e5b754a', '2.0b2', 'LockWatch 2 Beta 2 is a complete rewrite of Beta 1. While Beta 1 was just focussing on getting things up and running and showing what\'s possible in future builds, Beta 2 has been developed from scratch, mostly to fix existing bugs and add new features. So much has changed actually, I may not be able to provide a full changelog.\n\n• Completely rewritten from scratch, using the iOS 13 SDK. Which also means every device that uses an A12 processor or later is supported now. Basically.\n• Drastically reduced battery drain.\n• Preferences: Selected watch faces won\'t reset and you can select which Apple Watch you want to emulate, if you want to emulate one at all.\n• Watch face management: Add, reorder or remove watch faces right from the lock screen. Also, you can reset watch faces to system defaults now.\n• Customization: Customize any supported watch face to your taste. Again, right from the lock screen.\n• \"Watch\" integration (limited to iPhone): Sync the watch faces on your lock screen with those on your physical watch, including customization. Or add new watch faces from the \"Watch Faces\" tab.\n• So. Many. Layout fixes. In fact, every layout issue in Beta 1 (as far as I know) has been fixed, and there\'s almost no glitching whatsoever (at least while I was testing it).\n• Did I mention that battery drain has been drastically reduced?', 1, 2316, '2020-03-25 09:53:08', '2023-12-04 14:04:56'),
('3b4fdc8696e484066000188d', '87ef496de97854c1a95edbf4', '0.2-1', '• ProudLock now respects your Notch\'d settings (if you have installed both for some reason). This means if you have enabled Notch\'d and its Face ID latch, ProudLock won\'t do anything to prevent issues.\n• Fixed an overlapping issue with the passcode screen\n• Preferences are now localized in English and German. You\'ll soon be able to submit your own localizations.', 1, 3479, '2018-09-12 09:19:40', '2023-12-25 10:25:22'),
('3be214b14535e75a5cf0e23a', 'd228c5bbd55d721564580ceb', '0.2-5', '• Added Barmoji compatibility again (@saigon_heat, @eduard77jos)\n• Fixed X Mode not respecting Notch\'d kill switch\n• X Mode is now respecting \"Rounded Corners\" setting (@saigon_heat)\n• You can now choose to keep visual elements in screenshots', 1, 169, '2018-07-09 16:41:35', '2018-07-10 20:20:01'),
('3c9d88ac1a4c957b50f40407', 'b9d8d453b27136bb05861042', '17w37a.rs-internal.170912', '• Fixed Audio Controls not being updated on first appearance\n• Fixed Audio Controls appearing on Lock Screen when attempting to change ringer volume\n• Started working on call volume handling\n• Added CallService subproject to change call UI visuals\n• Fixed the Notification component affecting stock notifications while Redstone is completely disabled\n• Added unfinished theme support', 1, 0, '2017-09-12 21:53:00', '2018-02-13 08:54:03'),
('3c9e1f763775add9b5c26ff492129a76', '9b5206644c769c147b1e9d309a6fc7f9', '0.1-1', '• Fixed clock layout issues, but there\'s still a lot more to be done\n\nThis update *may* break compatibility with lockscreen tweaks (eg. Jellyfish), so if you are using such tweaks, you may want to stick with version 0.1', 1, 2787, '2019-03-26 10:28:30', '2023-12-10 12:59:07'),
('3f3591fcb8a4c6d80bc5bdfbe8df7a37', 'd228c5bbd55d721564580ceb', '0.7-1', 'This is a small update that just focusses on the Settings\n\n• Added \"What\'s New\" so you can always check the release notes from within the Settings\n• Added \"Report Issue\" and \"Donate\" buttons', 1, 5924, '2019-09-09 08:09:09', '2023-12-31 01:31:47'),
('40e43ce379ace1390d45155f', 'b084fd420f8773c15db71a53', '0.4.1', '• Fixed Volume button haptics using Home button settings', 1, 2689, '2017-08-18 12:23:55', '2017-08-18 12:23:55'),
('4141ac5a9804e3cbce1be779', 'b9d8d453b27136bb05861042', '17w36a.rs-internal-170908', '• Finally finished passcode support on Lock Screen\n• Fixed stock notifications not appearing in certain situations\n• Fixed Weather tile being always \"ready\".', 1, 0, '2017-09-08 08:47:00', '2017-09-08 08:47:00'),
('43926515b5c25ded0c4578833c0a76c3', '449607de72bca779c371e48d9e5b754a', '2.1-b1', 'Welcome to the LockWatch 2.1 beta! This update includes a plethora of fixes and compatibility for iOS 14. Some things may not work as expected, so please report issues via <a href=\"https://github.com/SniperGER/LockWatch2\">GitHub</a> or <a href=\"https://twitter.com/Sniper_GER\">Twitter</a>.\n\n• Partially rewritten to support iOS 14.\n• Split cases and bands into separate packages to further reduce package sizes (and you can now instally only the cases/bands you want).\n• Complications are now split into separate bundles. If one complication doesn\'t work, the others remain available. Also this (theoretically) opens up • complication bundles by third party developers.\n• Watch face sharing reloaded: You can now import supported watch faces exported from iOS 14 or watchOS 7 (or downloaded from any website), as well as export • faces from iOS 13 and add them to watchOS 7!\n• UILabels shown inside the emulated watch are now using the \"SF Compact\" system font.\n• The case/band picker has been redesigned to show the assigned collection of a selected element. This also fixed the delay while loading a lot of assets.\n• A huge amount of bug fixes and improvements. So many that I don\'t even remember what I changed specifically.\n\n<strong>Currently known issues:</strong>\n• Some complications may not work as intended on iOS 14. (I don\'t have an iPhone on iOS 14 to test this)\n• Performance issues when sliding to the Camera view on the lock screen.\n• OnBoarding is not yet completed so it has been disabled temporarily.', 1, 1348, '2021-06-07 19:20:31', '2023-12-16 18:01:34'),
('4526344af109f4a3fb4b694e', 'b9d8d453b27136bb05861042', '17w35a.rs-internal-170903', '• Added detailed status to Lock Screen\n• Added notifications\n• Fixed Volume HUD not disappearing when locking the device\n• Fixed malformed \"Author\" label in Cydia\n• Fixed Volume HUD appearing when attempting to change Ringer volume on Lock Screen\n• Fixed various layout issues on smaller resolutions\n• Fixed Notifications not hiding the Volume HUD\n• Fixed miscalculation of Tile positions when saving the Tile layout\n• Fixed Status Bar overlapping a Flyout menu at certain positions', 1, 0, '2017-09-03 14:47:00', '2017-09-03 14:47:00'),
('47c011c530dd616f6dcfa837360cd1e4', '449607de72bca779c371e48d9e5b754a', '2.0f', 'Here it is: the final version of LockWatch 2 – live and in color! After working on it for almost a whole year, LockWatch 2 is now officially leaving its beta phase. And even after reporting the \"feature completeness\" in the last beta, one additional feature made it to the final version: cases and bands! (Only Series 4 and Series 5 supported. Please send your complaints to Apple for not providing Series 3 assets)\n\nThis idea already existed while I was working on Onboarding in Beta 3, but I discarded it pretty quickly. Now it turned out (thanks to <a href=\"https://twitter.com/Yznco\">@Yznco</a> on Twitter) that there are actually people who would like this feature. So, here it is. Apart from that, there\'s nothing new in this version. I\'ve just removed a developer setting that was intended to be used in the beta phase.\n\nAt this point I\'d like to say \"thank you\" again to everyone who supported me – morally, financially, or through issue reports – it\'s because of you that LockWatch 2 could be completed at this quality level. As a gift, LockWatch 2 will not only be released on Team FESTIVAL, but also soon on Dynastic – at no additional cost. (Updates will still be released on Team FESTIVAL first)\n\nAs a closing note, there\'s only one thing left to say: Have fun! Tell your friends you\'ve got an Apple Watch on your iPhone lock screen. Continue supporting development through issue report, because even though LockWatch 2 is finished per se, there\'s always room for improvement. (*cough*Complications*cough*)', 0, 735, '2020-09-15 14:00:06', '2023-06-23 21:22:23'),
('486bea1a67feeb6160ecdb0b11ffbb61', 'c28054ae58c255b40e8342e88b17a090', '0.1-1', 'Fixed Mail compose window not appearing by linking missing MessageUI framework', 1, 206, '2019-01-01 01:15:45', '2023-11-26 07:29:33'),
('4972d01f58ebe1c82139b72f94252c23', 'dbb0b76f55d488fd5e1100b2e7939a85', '1.0', 'Initial Release', 1, 223, '2020-05-26 06:09:08', '2023-12-04 17:10:33'),
('4b50eef9c9935d40e884ca96', '31253595b2715022820766f9', '1.0', 'Initial release', 1, 0, '2016-11-20 19:23:00', '2016-11-20 19:23:00'),
('4c55b13b0bbbd6fef560e7be', 'b9d8d453b27136bb05861042', '17w37a.rs-internal.170916', '• Fixed preferences initializing with incorrect key\n• Added Activity tile demo', 1, 98, '2017-09-16 21:59:00', '2020-04-03 06:21:35'),
('4e5a3d7e56f13597ea1bd9ff', 'd228c5bbd55d721564580ceb', '0.3-1', '• Added missing settings from LittleX, including per-app settings\n• Restructured settings. If you\'ve had per-app settings, you might want to check them again.\n• Face ID latch can now be moved vertically (Thanks to <strong>@jacc</strong> on GitHub for the inspiration!)\n• Fixed Notch appearing sometimes even when being globally disabled\n• Fixed X Mode and Face ID latch still working while global kill switch is turned off.', 1, 1625, '2018-08-15 22:41:26', '2023-12-05 17:59:49'),
('4f4b0631d162348db1f8f4204475ffff', '449607de72bca779c371e48d9e5b754a', '2.0b4-u1', 'This build fixes an issue where settings would be reset unexpectedly, caused by mixing up paths intended for the iOS Simulator with those for the release build.', 1, 603, '2020-09-07 21:17:25', '2023-11-09 20:22:01'),
('501846586ac8cbd80d964772', '87ef496de97854c1a95edbf4', '0.1-2', '• Fixed an issue that prevented ProudLock from initializing', 1, 1275, '2018-07-27 08:23:29', '2023-12-13 16:34:08'),
('5314aa6ca48fc68cec9123a0530d7f08', 'b084fd420f8773c15db71a53', '0.7', 'Erie has been updated for iOS 12, including support for iOS 12.2!\n\n• Support for iOS 12 (no arm64e/A12 yet)\n• Partial rewrite to match current code style\n• Improved preferences reliability\n• Preferences are now localized in English and German', 1, 822, '2019-07-14 09:15:38', '2023-12-21 08:06:04'),
('53f01b06e52fc3296624fb2e', 'b084fd420f8773c15db71a53', '0.6', '• Fixed a crash when force-touching icons (and probably other 3D Touch related stuff)', 1, 721, '2018-07-09 17:00:59', '2023-11-22 08:32:54'),
('57ac938fffe6aaf2edd62361e633835c', 'd1dbc3cd455171b1cc6d1015d9afb962', '0.0.2', 'Initial Release', 1, 0, '2019-01-02 22:42:19', '2019-01-02 22:42:19'),
('589714d8d971396f46be3aa7', 'd228c5bbd55d721564580ceb', '0.5-1', 'This version does not yet fix the bugs reported after September 17 (at least  reported in the reviews). There will be another version soon.\n\n• Fixed MobilePhone.app layout (at least on 4.7\", couldn\'t test this on an actual 5.5\" or larger screen)\n• Added PreferenceLoader dependency', 1, 1144, '2018-09-21 09:47:24', '2023-12-03 22:39:57'),
('5a6546fb95fc57aff0405990', 'b9d8d453b27136bb05861042', '17w36a.rs-internal-170907', '• Weather Tile should now work on iOS 9', 1, 0, '2017-09-07 21:57:00', '2017-09-07 21:57:00'),
('5e89b33936e5a0ceebcb764c', '31253595b2715022820766f9', '1.4', '• Fixed multiple crashes related to internal iOS API changes in iOS 11 – Now fully iOS 11 compatible!', 1, 654, '2018-07-09 17:02:58', '2023-12-29 00:57:45'),
('5f7fcda1c1939b7e89cdc1117806f1f6', '9b5206644c769c147b1e9d309a6fc7f9', '0.2', 'This update contains bug fixes and improvements.\n\nAnd because this is not ANY app developer worldwide, here\'s the changelog:\n\n• Finally added the padlock animation that was missing all the time (fixed with just 8 lines of code, and 15 lines just to bring back the glyph view)\n• Improved compatibility with Jellyfish\n\nSome devices may still require additional layout work.', 1, 878, '2019-05-11 08:14:50', '2023-12-21 11:47:16'),
('5fc0c60c8b5469d0b689b68a9cb580e5', 'ae5f4c7ce13e4b68519a8a5ef6d5d5b6', '1.0', 'Initial Release', 1, 127, '2021-06-07 15:44:12', '2023-10-24 00:56:54'),
('6082849eaeccd57be756014f458af791', 'e4758402605aace60bb8ad425175d18b', '1.0-1', '• Fixed temperatures being stuck when pressing \"Reset\"\n• Other minor improvements', 1, 314, '2019-08-19 09:28:02', '2023-12-01 18:39:18'),
('61450de74f56e04d792053b95e98787c', 'd228c5bbd55d721564580ceb', '0.6-RC2', 'It\'s official! The long awaited iOS 12 update for Notch\'d is here! And it\'s not even an April\'s Fools joke!\n\n• Updated for iOS 12 (I\'m unsure about iOS 11 compatibility right now, as I don\'t have any device on iOS 11 to test this)\n• iPad support! Now you can use Notch\'d to turn your iPad into a 2018 iPad Pro!\n• Completely removed ProudLock component (will be replaced by ProudLock itself soon)\n\n*Note: This is still considered a Release Candidate as it just includes iOS 12/iPad support, and probably the same bugs as RC1', 1, 3976, '2019-04-01 20:41:46', '2023-12-11 18:47:29'),
('6763d58d9a4e1e10c247d333', '4e28846095d85b0c9781c557', '0.0.2', 'Initial release', 1, 462, '2018-02-12 09:45:25', '2023-12-20 23:44:40'),
('693a45c1b32f66d8e1c14c90', 'b9d8d453b27136bb05861042', '17w38a.rs-internal.170918', '• More fixing Start Screen animations\n• Weather tile doesn\'t update that often anymore.\n• Added Activity tile icon\n• Fixed App List section background not appearing after leaving apps', 1, 1610, '2017-09-18 09:53:00', '2020-08-25 16:52:43'),
('6d02c5a76cc2fa174a9ba31de3c869b0', 'e4758402605aace60bb8ad425175d18b', '1.1', '• Support for iOS 13 (Dark Mode, Modal View Controllers)\n• Fixes layout issues on 4\" devices\n• Localization improvements', 1, 303, '2019-11-26 11:40:13', '2023-12-10 06:20:30'),
('6db001eafe8b6f4b5a8b38f6d4f7df38', '9b5206644c769c147b1e9d309a6fc7f9', '0.3-3', 'This build fixes ProudLock overriding too many CoreAnimation packages, as seen in the system overlay when switching from ringer to silent modes (or vice-versa).\n\nThis is an updated build of 0.3-2 that aims to fix the broken iOS/iPadOS 13 support.', 1, 2516, '2020-06-18 11:46:13', '2023-12-25 10:23:02'),
('707029e4592d5b386502cd64', 'b9d8d453b27136bb05861042', '17w36a.rs-internal-170906', '• Lock Screen should now be working on iOS 9', 1, 0, '2017-09-06 21:58:00', '2017-09-06 21:58:00'),
('70aea13ea0483e434e30b8854018abd1', '6c21780405f3d059b391824b521413d1', '1.0.3', '• Added automatic reset dialog: If you select an unsupported resolution and your screen goes black, just wait 30 seconds and the resolution will be reset to default (thanks to /u/Prosoch for this suggestion!)\n• More localization improvements', 0, 672, '2021-04-26 22:06:19', '2023-10-08 22:00:39'),
('71c751dfdae607bda3710a918fbdd7dd', '8f940ee44de1a5636632fea8e830b937', '1.1', 'Initial Release', 1, 7, '2018-10-22 22:33:00', '2018-12-31 15:44:27'),
('729f596fffcf453ccec32c6b', '31253595b2715022820766f9', '1.3', '• Completely rewritten from scratch (did that before, therefore the jump to 1.3)\n• Added option to simulate a cellular connection using WiFi\n• Added partial support for devices with cellular capabilities (iPhone, iPad WiFi+Cellular)\n• Settings are applied instantly and only need a Respring for the Kill Switch to work', 1, 3459, '2017-11-18 00:14:28', '2023-12-21 11:47:47'),
('746e2b95f8d38b13cf00ad3e', '1aa0be9699a08a8b70f25c01', '18w09a.lw-internal.180228', '• Fixed unwanted animations in Activity faces\n• Fixed pixel alignment of most of the watch face images\n• Added the missing minute indicator for Chronograph\'s stopwatch\n\nThis should be the very last preview build of LockWatch before the full release. If everything goes well, the submission is scheduled for this weekend (March 3 or March 4), and the official 1.0 release will happen on the next BigBoss repo update.', 1, 636, '2018-02-28 06:59:12', '2023-12-01 20:44:39'),
('753dd027f81fd604e110b8be1069cc88', '906f97c053fa8dc5212f33776abc0db8', '0.0.1', 'Initial Release', 1, 673, '2019-03-30 11:41:56', '2020-08-25 23:18:04'),
('760eb429981f45fc1a428dff', 'd228c5bbd55d721564580ceb', '0.1', 'Initial release', 1, 123, '2018-07-07 11:49:28', '2018-07-07 12:49:09'),
('77d858ee22214ca66c867da4e1b0b239', 'e4758402605aace60bb8ad425175d18b', '1.0', 'Initial Release', 1, 78, '2019-08-16 06:02:25', '2023-11-25 10:14:43'),
('797363301c66b03c4a51d888', 'b9d8d453b27136bb05861042', '17w35a.rs-internal-170828', 'Initial release', 1, 0, '2017-08-28 22:00:00', '2017-08-28 22:00:00'),
('7d928c01d426205dce0d3680', 'b9d8d453b27136bb05861042', '17w35a.rs-internal-170901', '• Added Lock Screen notification area\n• Finally managed to get reliable (and localized) preferences\n• Fixed tile interaction while launching apps again and again and again\n• Slightly improved Lock Screen layout\n• Added support for third-party tile icons again. And third-party icons\n• Started working on detailed status view on Lock Screen', 1, 0, '2017-09-01 21:59:00', '2017-09-01 21:59:00'),
('7e298db9f39589ecd273d68a', '87ef496de97854c1a95edbf4', '0.0.1-18+debug', '<strong>DO NOT DOWNLOAD THIS VERSION!</strong>\nInitial release', 0, 132, '2018-07-26 11:39:29', '2018-07-27 08:23:01'),
('802bcf82dcbccf0838c3348dcd4d8d62', '449607de72bca779c371e48d9e5b754a', '2.0b3-u2', 'This update includes a bunch of fixes and improvements, and a truckload of new complications. Some existing complications have been reworked to fix a few issues.\n\n• A truckload of new complications, both launchers and data sources:\n	• Alarm\n	• Astrononmy (Earth, Moon, Solar System)\n	• Calendar\n	• Cellular Data\n	• Find My\n	• Home\n	• Mail\n	• Maps\n	• Messages\n	• Music\n	• News (Launcher only)\n	• People\n	• Phone\n	• Podcasts\n	• Radio\n	• Rain\n	• Reminders (Launcher only)\n	• Remote\n	• Siri\n	• Solar\n	• Timer\n	• Voice Memos\n\n• LockWatch 2 can finally be positioned everywhere you want. Just set the positions for Portrait and Landscape modes undes Settings → \"Advanced\".\n• The \"Now Playing\" complication has been extended and now supports \"Music\", \"Podcasts\" and \"Radio\". Also, there\'s finally a now playing indicator.\n• Nike and Hermès watch faces won\'t be listed at the top of available watch faces anymore.\n• Fixes a crash when moving watch faces.\n• Fixes an issue where the watch face library gets stuck when the device is unlocked while \"New\" is selected.\n• Fixes an issue where Photon wouldn\'t make LockWatch 2 exit the watch face library automatically.\n• Fixes an issue where the \"Battery\" complication shows an incorrect color while charging with Low Power Mode enabled.\n• Fixes an issue where the user could delete watch faces outside of the switcher.\n• Fixes an issue where a watch face isn\'t selected when it\'s being customized.\n• Fixes an issue where the display wouldn\'t turn off after interacting with LockWatch.\n• Improved switching between an emulated and a physical Apple Watch.\n• Layout improvements.', 1, 795, '2020-08-27 14:11:27', '2023-12-10 11:10:32'),
('815c8d057fab62200b173157e8981732', '6c21780405f3d059b391824b521413d1', '1.0.4', '• Fixed crashes on iOS 9-12 because I took some code from LockWatch, thinking it would just work on anything older than iOS 13. <i>Sometimes my stupidity is almost frightening.</i> <sup>That\'s a Top Gear reference, by the way</sup>\nFor this, I had to increase the minimum iOS requirement to iOS 9, which shouldn\'t be too much of a problem, since iPhone 4s and iPad 2 both support iOS 9.', 0, 1146, '2021-04-27 19:45:29', '2023-12-17 16:25:00'),
('819d8dbcd3892d54cf50d76c', 'c898f107fb72e78da3284381', '0.1', 'Initial release', 1, 5700, '2016-10-16 07:29:00', '2023-12-03 09:27:28'),
('855b51fc68e631338289ce00576268a4', '449607de72bca779c371e48d9e5b754a', '2.0b3', 'LockWatch beta 3 is here, and it finally introduces the long awaited Complications. This beta contains the first batch of working complications, with more complications being added in subsequent updates, including the following:\n\n• Battery\n• Date\n• Digital Time\n• Now Playing\n• Activity\n• World Clock\n\nApart from complications, beta 3 includes the following fixes and improvements:\n\n• Added a security measurement so you can only switch/customize watch faces when your device is unlocked.\n• Fixed watch faces reacting to input outside of the main container view.\n• Replaced UIVisualEffectViews with MTMaterialViews to appear more like iOS 13.\n• Performance improvements.\n• Localization fixes.', 1, 957, '2020-04-19 21:38:58', '2023-12-03 22:39:52'),
('87172d80e9a152534093620c', '31253595b2715022820766f9', '1.1', '• Added a Respring button in Settings', 1, 0, '2016-11-20 19:40:00', '2016-11-20 19:40:00'),
('902efe750737ee336400ee25e80aeb8f', 'd228c5bbd55d721564580ceb', '0.7', 'Finally, another update for Notch\'d! This time, I\'ve got some pretty sweet stuff for you. Check this out:\n\n• Partial rewrite to ensure support for iOS 11*\n• The return of ProudLock included in Notch\'d! And it even supports iOS 11*!\n• Fixed the keyboard moving to the right when using it in landscape\n• Fixed setting a video\'s gravity (fit/fill) – which, for some reason, doesn\'t work in WKWebView\n• More iPad-specific improvements\n• Fixed Notch window moving when activating Reachability\n• Improved Camera layout (which added new layout issues ¯\\_(ツ)_/¯)\n• Added Portrait mode to Camera (but not the functionality, sorry)\n• Finally implemented App-specific settings\n• Added a little bit of optional Notch details. Why? I don\'t know. It looks kinda intersting.\n\n\n* Since I do not have any device on iOS 11 anymore, I\'ve tested this only inside the Simulator. I may have missed something this way, but it appeared to be working.', 1, 477, '2019-09-08 08:22:59', '2023-11-27 13:23:39'),
('96bf77a7e39bb38379ceb5532b02b231', '11161a8fa04aa151fa0ed637720c6a17', '1.0', 'Initial Release', 1, 113, '2021-06-07 15:40:48', '2023-10-27 00:56:17'),
('96c879bc18a9ccc96f55fe6f', 'b9d8d453b27136bb05861042', '17w36a.rs-internal-170905', '• Fixed notifications appearing after a respring\n• Fixed removing notifications not updating Lock Screen notification views\n• Fixed notification window being active without any notifications\n• Added Weather library based on libWeatherInfo by Allan Kerr\n• Added support for Live Tiles\n• Completed Weather Live tile (iOS 10, current location only)\n• Added instant Accent Color changing\n• Improved package descriptions\n• Added option to hide wallpaper, \"Show More Tiles\" and disabling Live Tiles\n• Added \"People\" tile\n• Fixed incorrect property attributes for Live Tiles', 1, 0, '2017-09-05 21:48:00', '2017-09-05 21:48:00'),
('996b68fa390da70ec42a9af3', 'd228c5bbd55d721564580ceb', '0.2-1', '• Fixed rounded corners not being applied to UIKit apps', 1, 46, '2018-07-08 11:24:05', '2018-07-08 11:24:05'),
('9b346d2a5f59f56d22e596c8', 'b9d8d453b27136bb05861042', '17w37a.rs-internal.170911', '• Added landscape layout for Audio Controls (doesn\'t update yet while open)\n• Added missing English and French localization\n• Added landscape layout for Notifications\n• Added missing french tile names', 1, 0, '2017-09-11 09:16:00', '2017-09-11 09:16:00'),
('9d51880cd099c703e3a1435cb2ea4d11', '449607de72bca779c371e48d9e5b754a', '2.0f-2', '• Fixed broken case/band selection on iPhone. (Thank you, <a href=\"https://twitter.com/Yznco\">@Yznco</a>!)\n\nChanges in 2.0f-1:\n• Added cases and bands introduced with Apple Watch Series 6 after Apple\'s September 2020 Special Event, which now results in a total of 13 cases and 121 unique bands.\n• Reduced package size by 50% thanks to HEIC conversion. Quality may have suffered a bit, but it\'s still acceptable.\n• Improved case/band selection performance.\n• Improved compatibility with HSWidgets (Date & Time).\n• If an Apple Watch case is being displayed, user interaction is only possible inside the simulated frame.\n• Removed \"Beta\" from the package name. And yes, that\'s worth a bullet point because that wasn\'t intentional.', 0, 1511, '2020-09-28 19:01:49', '2023-06-15 03:04:47'),
('a0cbf7026ab033e0c4a1e331', 'b084fd420f8773c15db71a53', '0.5', '• Ensured iOS 11 compatibility\n• Moved preferences management to Cephei (might break iOS 11 compatibility, but I don\'t trust my preferences skills anymore)\n• Optimizations to code', 1, 232, '2018-02-12 18:43:22', '2023-12-02 11:40:55'),
('a5069dcc83d23cfbfff5c9b1f0ba084a', '1329ee0e51712fe328131d36330abbca', '1.0', 'Initial Release', 1, 224, '2021-06-07 19:17:52', '2023-12-06 00:20:05'),
('a67500bca65f3f9f936fc41e8c61646b', '4809e3e8f2ee07c06ad19c578835359e', '1.0', 'Initial Release', 1, 655, '2020-09-07 10:27:47', '2023-11-25 14:32:36'),
('ac47a41e81c56132c25c7d82', 'b084fd420f8773c15db71a53', '0.5-1', '• Fixed \"erieprefs\" appearing in Settings', 1, 320, '2018-03-06 21:45:53', '2023-12-05 17:59:44'),
('ae4e38556050267628768510', 'd228c5bbd55d721564580ceb', '0.2', '• Completely rewrote from scratch\n• Now with Settings: Enable or disable the notch or rounded corners, or blacklist the notch in certain apps\n• Fixed incorrect notch corner radius', 1, 1, '2018-07-08 09:02:44', '2018-07-08 11:15:48'),
('ae8670e25434fa3b81981d86830d65d4', '449607de72bca779c371e48d9e5b754a', '2.0b4', 'As of Beta 4, LockWatch 2 is now officially considered feature complete. Thank you to everyone who has reported issues in the beta phase so far! Because of you, LockWatch 2 is near perfect! This beta introduces the last two features: Third-party watch faces, as well as sharing watch faces, inspired by watchOS 7.\n\n• Support for third-party watch faces! You can now install third-party watch faces using a package manager of your choice. This marks also the return of the \"Binary\" watch face, one of the first external watchfaces of LockWatch from 2015.\n• Share watch faces with your friends: Inspired by watchOS 7, you can now share watch faces (including customization) with your friends. Even third-party watch faces are supported! And if a watch face is missing, LockWatch will automatically open Cydia, Zebra or Sileo for you to install its package. NOTE: Watch face files from iOS 14 are currently not supported.\n• Fixes an issue where the model selection appears twice in Settings. (Thank you, /u/Guanran928)\n• Fixes an issue (again) where the \"Date\" complication wouldn\'t show up in various faces. This is my fault all alone, after I reworked complications. (Thanks you, Damian V)\n• Improvement to animations.\n• Various improvements.', 1, 346, '2020-09-07 10:00:02', '2023-11-14 10:50:56'),
('b33351382db11f9628b1596f444f3ef8', '9b5206644c769c147b1e9d309a6fc7f9', '0.1', 'Initial Release', 1, 755, '2019-03-25 22:25:58', '2023-12-08 19:11:07'),
('b473728755ed83cfcb0d2c66', 'd228c5bbd55d721564580ceb', '0.2-3', '• Fixed rounded corners not being hidden if chosen', 1, 204, '2018-07-08 13:39:01', '2018-07-08 13:39:01'),
('b64096c7c349eb701ffb3954', '1aa0be9699a08a8b70f25c01', '18w07a.lw-internal.180218', '• Watch Faces can now be reordered in Settings\n• Fixed clock hand animation glitches when waking the device\n• Fixed a crash on iOS 10.1 and below\n• Added automatic updating whenever time starts updating again (made for Activity faces)\n• Added automatic detection of regional clock format (12h/24h)', 1, 141, '2018-02-17 10:03:38', '2018-02-18 12:07:32'),
('b8d632d4edc8545f74de0342', '1aa0be9699a08a8b70f25c01', '18w12a.lw-release.180320', 'Please note: Unless a proper jailbreak comes out for iOS 11, every LockWatch build (starting with this one) will be marked as incompatible with iOS 11. Electra does not correctly patch the iOS Sandbox, which is why Watch Faces can\'t be loaded without sacrificing storage on iOS 10 and below. For more details, see <a target=\"_blank\" href=\"https://medium.com/@Sniper_GER/lockwatch-and-ios-11-playing-in-the-sandbox-7d3f1daf74f4\">this story on Medium</a>.\n\nNow for the changelog:\n• Fixed an issue when preventing clock updates using an iPad Smart Cover\n• Fixed leaving Customization being blocked by passcode entry screen\n• Selection/Editing modes are reset when locking the device while being in these modes', 1, 1573, '2018-03-20 19:31:40', '2023-12-03 12:55:36'),
('bbbc516fe929e260b8f82608f60e5978', 'd228c5bbd55d721564580ceb', '0.6-RC1', 'Update 0.6 is a complete rewrite of Notch\'d. Instead of hacking everything together, most of the tweaking is now done by hooking MobileGestalt (MGCopyAnswer in particular).\n\nThis update should now work with almost any app as this is the most \"native\" way possible to enable iPhone X features. No more weird frame manipulations on a somewhat per app basis.\n\n<strong>However</strong>, there is something very important with RC1:\nThis release unfortunately still includes a bug that puts your device at a huge security risk. For some reason, your device may stay unlocked even though it should be locked with a passcode or Touch ID. If you experience this bug, <strong>disable the Face ID latch as soon as possible</strong>! Don\'t tell me I didn\'t warn you! IT\'S RIGHT HERE! I really hope I can fix this bug in a later release.\n\nAnyways, here\'s the changelog you\'ve been waiting for:\n• Completely rewritten, should now work with any app\n• Various speed improvements thanks to single MobileGestalt hook\n• Even more iPhone X detail (Face ID icon while unlocking)\n• Fixed widgets being pushed down when on home screen\n• Face ID latch now scrolls with notifications\n\nAlso, here\'s a list of currently known issues (I know it\'s longer than the changelog, but it\'s still RC1):\n• Severe: Face ID latch may keep the device unlocked at all time\n	Workaround: Restart SpringBoard or disable \"Face ID Latch\"\n• Critical: Per-App settings not implemented\n• Major: Currently incompatible with Discord (maybe other apps)\n• Minor: Layout incompatibility with StackXI\n• Minor: Face ID latch is not hidden if unlocking with Touch ID fails within 5 attempts\n	Workaround: Turn off screen and try again', 1, 2075, '2019-01-16 22:36:10', '2023-12-02 09:50:18'),
('bd329e273835ef7685ad103a7addb322', 'c28054ae58c255b40e8342e88b17a090', '0.1', 'Initial Release', 1, 99, '2019-01-01 01:08:15', '2023-12-04 12:31:33'),
('c51dc0de5194b5509ce2e130', '1aa0be9699a08a8b70f25c01', '18w03a.lw-internal.180120', 'This is the initial release of LockWatch as a tweak, which is based on LockWatch 1.2.\n\nThe complete changelog can be found <a href=\"https://github.com/SniperGER/LockWatch/releases\">here</a>', 1, 6, '2018-01-21 09:36:00', '2018-02-15 06:35:18'),
('c80591de8dc0b20636a4eae2fa85e3ce', '449607de72bca779c371e48d9e5b754a', '2.0f-3', 'Changes in 2.0f-3:\n• Reduces the package size in case a downgrade from a future version is required.\n\nChanges in 2.0f-2:\n• Fixed broken case/band selection on iPhone. (Thank you, <a href=\"https://twitter.com/Yznco\">@Yznco</a>!)\n\nChanges in 2.0f-1:\n• Added cases and bands introduced with Apple Watch Series 6 after Apple\'s September 2020 Special Event, which now results in a total of 13 cases and 121 unique bands.\n• Reduced package size by 50% thanks to HEIC conversion. Quality may have suffered a bit, but it\'s still acceptable.\n• Improved case/band selection performance.\n• Improved compatibility with HSWidgets (Date & Time).\n• If an Apple Watch case is being displayed, user interaction is only possible inside the simulated frame.\n• Removed \"Beta\" from the package name. And yes, that\'s worth a bullet point because that wasn\'t intentional.\n\nHere it is: the final version of LockWatch 2 – live and in color! After working on it for almost a whole year, LockWatch 2 is now officially leaving its beta phase. And even after reporting the \"feature completeness\" in the last beta, one additional feature made it to the final version: cases and bands! (Only Series 4 and Series 5 supported. Please send your complaints to Apple for not providing Series 3 assets)\n\nThis idea already existed while I was working on Onboarding in Beta 3, but I discarded it pretty quickly. Now it turned out (thanks to <a href=\"https://twitter.com/Yznco\">@Yznco</a> on Twitter) that there are actually people who would like this feature. So, here it is. Apart from that, there\'s nothing new in this version. I\'ve just removed a developer setting that was intended to be used in the beta phase.\n\nAt this point I\'d like to say \"thank you\" again to everyone who supported me – morally, financially, or through issue reports – it\'s because of you that LockWatch 2 could be completed at this quality level. As a gift, LockWatch 2 will not only be released on Team FESTIVAL, but also soon on Dynastic – at no additional cost. (Updates will still be released on Team FESTIVAL first)\n\nAs a closing note, there\'s only one thing left to say: Have fun! Tell your friends you\'ve got an Apple Watch on your iPhone lock screen. Continue supporting development through issue report, because even though LockWatch 2 is finished per se, there\'s always room for improvement. (*cough*Complications*cough*)', 1, 537, '2021-03-30 21:22:49', '2023-11-20 12:08:55'),
('c9307b644eb8344c3c5d43d1459b2917', '6c21780405f3d059b391824b521413d1', '1.0.1', '• Fixed keyboard layout on iPhone when using unsupported resolutions (literally any resolution that\'s larger than stock)\n• Fixed resolution values not being copied correctly when setting a custom resolution (eg. 1240x0@3x)\n• Added support for saving custom resolutions\n• Added a button to reset the current resolution to default\n• Added an option to reverse resolutions (height x width) on iPad', 1, 816, '2021-04-24 11:54:02', '2023-11-15 14:42:19'),
('d83600030269ed943ec4534e', 'd228c5bbd55d721564580ceb', '0.2-4', '• Fixed notch and rounded corners being visible on screenshots (@master2911)\n• Added iPhone X Mode – a battery efficient rewrite of LittleX (yes, I\'m using the LittleX code for this, @auxiliumdev)\n• Includes an experimental file modification check. Don\'t worry, it won\'t prevent you from using it.', 1, 112, '2018-07-09 09:19:29', '2018-07-10 20:20:33'),
('df3eafb10a367c2976b44313', '1aa0be9699a08a8b70f25c01', '18w07b.lw-internal.180218', '• Activity Faces should now also work on iOS 10 again', 1, 565, '2018-02-18 22:03:29', '2023-12-08 17:24:24'),
('e0ffb70e5eba3b03baf6e7dbd92474db', '32b515999cb677cd4c4f57ed7bff4da6', '1.0.0', 'Initial Release', 1, 1153, '2021-04-26 22:10:17', '2023-12-29 20:51:37'),
('e23cca536ab51a78f055dd20', 'd228c5bbd55d721564580ceb', '0.2-6', '• Fixed MobilePhone.app dial pad layout issues (@eduard77jos, @ulviarslan)\n• Fixed Snapchat not being sble to record videos with X Mode enabled (@UnJa1lbroken)\n• File modification check now only checks after unlocking the device (to prevent unnecessary waiting)', 1, 1486, '2018-07-10 17:48:38', '2023-11-27 16:41:34'),
('e3e61671aed3281c49c6eb13', 'b9d8d453b27136bb05861042', '17w35a.rs-internal-170829', '• Fixed interaction block on Lock Screen\n• Improved Lock Screen keypad layout\n• Removed passcode support for Lock Screen, will be reworked later', 1, 0, '2017-08-29 20:36:00', '2017-08-29 20:36:00'),
('e5221e639690b7ec2a95523dd1920d16', '9b5206644c769c147b1e9d309a6fc7f9', '0.3-1', 'This version finally adds iOS/iPadOS 13 support to ProudLock Xr. This also fixes Rest to Unlock not working on iOS/iPadOS 13 or later.', 1, 102, '2020-06-18 06:37:25', '2023-11-28 09:29:10'),
('e8aa82cde86f52c87c4b30a0', '1aa0be9699a08a8b70f25c01', '18w04a.lw-internal.180124', 'This hotfix build fixes a dependency issue that prevented LockWatch from working. Seriously, why am I always forgetting to add libraries as a dependency?\n\nThis build should also fix a potential issue while upgrading LockWatch.', 1, 187, '2018-01-24 22:23:00', '2018-02-15 06:35:08'),
('e986d257bfdddb8812f3ca00', 'b9d8d453b27136bb05861042', '17w37a.rs-internal.170917', '• Completely reworked Start Screen animation system (reliable as fuck)\n• Stopped shipping Activity tile for now (will return once I figure out how to bypass privacy restrictions)\n• Tried to fix stuck App List entries', 1, 95, '2017-09-17 21:55:00', '2020-04-01 23:50:39'),
('f1e4a6fe24dc4d904679f75a66c39097', '6c21780405f3d059b391824b521413d1', '1.0.5', 'Merry Christmas to everyone using Re:Scale 2 out there! As for day 2 of \"3 Days of Christmas - 3 Presents\", Re:Scale 2 has finally been updated to include all device resolutions up to iPhone 14 Pro (Max), as well as new status bar compatibility options. Enjoy!\n\n• Added Activator action to quickly reset the resolution and status bar to default (recommended to set <i>before</i> setting a resolution)\n• This update also brings back the 30 second timeout for automatically resetting the resolution in case of a black screen. And this time it should actually work.\n• Updated available screen resolutions and status bars up to iOS 16 (maybe setting the status bar to \"Dynamic Island\" will actually enable the Dynamic Island on pre-iPhone 14 Pro devices running iOS 16)\n• Added \"What\'s New\" to Re:Scale preferences', 1, 307, '2022-12-24 23:44:30', '2023-12-30 16:21:22'),
('f6535fb94f0a8e1d46cd99729e7ec9ab', '449607de72bca779c371e48d9e5b754a', '2.0b2-2', '• Fixed an issue that prevented watch face editing if a user had set their 3D Touch sensitivity to \"Firm\".\n• Fixed an issue that caused watch faces to appear above notification detail views.', 1, 959, '2020-04-02 14:49:08', '2023-12-12 23:26:18'),
('f90f0c227f183e6cad8b71fd64de723b', '6c21780405f3d059b391824b521413d1', '1.0.4-2', '• Fixed lockscreen timeout once and for all\n• Hopefully improved battery usage', 0, 485, '2021-04-30 10:54:25', '2023-12-18 05:48:40'),
('fc8381e28d53e30e47c77860', 'b9d8d453b27136bb05861042', '17w37a.rs-internal.170915', '• Improved initialization of attributed strings\n• Fixed App List search showing incorrectly colored text\n• Fixed \"All Apps\" button fonts\n• Fixed more fonts\n• Fixed Notification area not updating when the Lock Screen appears\n• Tried to improve Start Screen animation again', 1, 0, '2017-09-15 20:59:00', '2018-02-13 08:55:24');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `repoInfo`
--

CREATE TABLE `repoInfo` (
  `Origin` varchar(50) NOT NULL,
  `Label` varchar(50) NOT NULL,
  `Suite` varchar(20) NOT NULL,
  `Version` varchar(10) NOT NULL,
  `Codename` varchar(20) NOT NULL,
  `Architecture` varchar(20) NOT NULL,
  `Components` varchar(10) NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Daten für Tabelle `repoInfo`
--

INSERT INTO `repoInfo` (`Origin`, `Label`, `Suite`, `Version`, `Codename`, `Architecture`, `Components`, `Description`) VALUES
('Team FESTIVAL', 'Team FESTIVAL', 'stable', '1.0', 'stark', 'iphoneos-arm', 'main', 'The Team FESTIVAL Cydia Repository');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `requests`
--

CREATE TABLE `requests` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `accountId` varchar(32) NOT NULL DEFAULT '',
  `type` varchar(255) NOT NULL,
  `status` int(11) DEFAULT -1,
  `reviewedBy` varchar(32) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `statistics`
--

CREATE TABLE `statistics` (
  `id` varchar(32) NOT NULL,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `week` int(11) NOT NULL,
  `downloads` int(11) DEFAULT 0,
  `reviews` int(11) DEFAULT 0,
  `accountCreations` int(11) DEFAULT 0,
  `packageUploads` int(11) DEFAULT 0,
  `versionUploads` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indizes für die Tabelle `deviceLinkNonces`
--
ALTER TABLE `deviceLinkNonces`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `deviceLinkNonces_accountId_foreign_idx` (`accountId`);

--
-- Indizes für die Tabelle `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `udid` (`udid`),
  ADD KEY `accountId` (`accountId`);

--
-- Indizes für die Tabelle `packageFiles`
--
ALTER TABLE `packageFiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `packageFiles_packageId_foreign_idx` (`packageId`),
  ADD KEY `packageFiles_packageVersionId_foreign_idx` (`packageVersionId`),
  ADD KEY `packageFiles_package_foreign_idx` (`package`);

--
-- Indizes für die Tabelle `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `identifier` (`identifier`),
  ADD KEY `packages_accountId_foreign_idx` (`accountId`);

--
-- Indizes für die Tabelle `packageVersionRatings`
--
ALTER TABLE `packageVersionRatings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `ratings_packageId` (`packageId`),
  ADD KEY `ratings_packageVersionId` (`packageVersionId`),
  ADD KEY `packageVersionRatings_packageVersionReviewId_foreign_idx` (`packageVersionReviewId`),
  ADD KEY `packageVersionRatings_accountId_foreign_idx` (`accountId`);

--
-- Indizes für die Tabelle `packageVersionReviewMessages`
--
ALTER TABLE `packageVersionReviewMessages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `packageId` (`packageId`),
  ADD KEY `packageVersionId` (`packageVersionId`),
  ADD KEY `packageVersionReviewId` (`packageVersionReviewId`),
  ADD KEY `accountId` (`accountId`);

--
-- Indizes für die Tabelle `packageVersionReviews`
--
ALTER TABLE `packageVersionReviews`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `reviews_packageId` (`packageId`),
  ADD KEY `reviews_packageVersionId` (`packageVersionId`),
  ADD KEY `packageVersionReviews_accountId_foreign_idx` (`accountId`),
  ADD KEY `packageVersionReviews_deviceId_foreign_idx` (`deviceId`);

--
-- Indizes für die Tabelle `packageVersions`
--
ALTER TABLE `packageVersions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `versions_packageId` (`packageId`);

--
-- Indizes für die Tabelle `repoInfo`
--
ALTER TABLE `repoInfo`
  ADD PRIMARY KEY (`Origin`);

--
-- Indizes für die Tabelle `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `accountId` (`accountId`),
  ADD KEY `requests_reviewedBy_foreign_idx` (`reviewedBy`);

--
-- Indizes für die Tabelle `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `deviceLinkNonces`
--
ALTER TABLE `deviceLinkNonces`
  ADD CONSTRAINT `deviceLinkNonces_accountId_foreign_idx` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints der Tabelle `devices`
--
ALTER TABLE `devices`
  ADD CONSTRAINT `devices_accountId_foreign_idx` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `packageFiles`
--
ALTER TABLE `packageFiles`
  ADD CONSTRAINT `packageFiles_packageId_foreign_idx` FOREIGN KEY (`packageId`) REFERENCES `packages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `packageFiles_packageVersionId_foreign_idx` FOREIGN KEY (`packageVersionId`) REFERENCES `packageVersions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `packageFiles_package_foreign_idx` FOREIGN KEY (`package`) REFERENCES `packages` (`identifier`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `packages`
--
ALTER TABLE `packages`
  ADD CONSTRAINT `packages_accountId_foreign_idx` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `packageVersionRatings`
--
ALTER TABLE `packageVersionRatings`
  ADD CONSTRAINT `packageVersionRatings_accountId_foreign_idx` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `packageVersionRatings_packageId_foreign_idx` FOREIGN KEY (`packageId`) REFERENCES `packages` (`id`),
  ADD CONSTRAINT `packageVersionRatings_packageVersionId_foreign_idx` FOREIGN KEY (`packageVersionId`) REFERENCES `packageVersions` (`id`),
  ADD CONSTRAINT `packageVersionRatings_packageVersionReviewId_foreign_idx` FOREIGN KEY (`packageVersionReviewId`) REFERENCES `packageVersionReviews` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `packageVersionReviewMessages`
--
ALTER TABLE `packageVersionReviewMessages`
  ADD CONSTRAINT `packageVersionReviewMessages_accountId_foreign_idx` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `packageVersionReviewMessages_packageId_foreign_idx` FOREIGN KEY (`packageId`) REFERENCES `packages` (`id`),
  ADD CONSTRAINT `packageVersionReviewMessages_packageVersionId_foreign_idx` FOREIGN KEY (`packageVersionId`) REFERENCES `packageVersions` (`id`),
  ADD CONSTRAINT `packageVersionReviewMessages_packageVersionReviewId_foreign_idx` FOREIGN KEY (`packageVersionReviewId`) REFERENCES `packageVersionReviews` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `packageVersionReviews`
--
ALTER TABLE `packageVersionReviews`
  ADD CONSTRAINT `packageVersionReviews_accountId_foreign_idx` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `packageVersionReviews_deviceId_foreign_idx` FOREIGN KEY (`deviceId`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `packageVersionReviews_packageId_foreign_idx` FOREIGN KEY (`packageId`) REFERENCES `packages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `packageVersionReviews_packageVersionId_foreign_idx` FOREIGN KEY (`packageVersionId`) REFERENCES `packageVersions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `packageVersions`
--
ALTER TABLE `packageVersions`
  ADD CONSTRAINT `packageVersions_packageId_foreign_idx` FOREIGN KEY (`packageId`) REFERENCES `packages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_accountId_foreign_idx` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `requests_reviewedBy_foreign_idx` FOREIGN KEY (`reviewedBy`) REFERENCES `accounts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
