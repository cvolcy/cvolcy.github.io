<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clefs secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur 
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C'est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d'installation. Vous n'avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', $_SERVER['DB_NAME']);

/** Utilisateur de la base de données MySQL. */
define('DB_USER', $_SERVER['DB_USER']);

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', $_SERVER['DB_PASSWORD']);

/** Adresse de l'hébergement MySQL. */
define('DB_HOST', $_SERVER['DB_HOST']);

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8');

/** Type de collation de la base de données. 
  * N'y touchez que si vous savez ce que vous faites. 
  */
define('DB_COLLATE', '');

/**#@+
 * Clefs uniques d'authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant 
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n'importe quel moment, afin d'invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'L#-lG3q?f<-^^($=IJa@(3%jTZn&Z9/n.+hlg&Z<|PUK!o-J*b!:uI.80|RwRj#P');
define('SECURE_AUTH_KEY',  '<~~O|?cVCB[qK Iq)1GEiX3TAuH-PcQ0)|++: dh/J_^/Mhh}{YlN5;,H 3-NYu<');
define('LOGGED_IN_KEY',    '&#kBrE^WEieS ~RG5#FSmfci4EiY3g< d]IIuFj${ivQmt3zS@,7+d&)|m4t{sIo');
define('NONCE_KEY',        'T:0yp,U%:{i-l}-7=}VJBZ+1XEL<6CRoROx#990Q}ZHvCc5c:$,voydgB~[D.0-l');
define('AUTH_SALT',        'v>uA.,|iA7u|`j<X#9Ro&+V?I*M4J*QF}p!wov(*|0}]^egLl6/$F(>(C7<j|o$d');
define('SECURE_AUTH_SALT', 'E,v$3Hg7 R#;ai~IH{t{e9*mTd{AJW>DMPbw*7Bt<b{4=Ud|8{(#-9v]eDOzN|FN');
define('LOGGED_IN_SALT',   '/fk-G7e1CON)fX|:#7 U|qwWxSH[K&uEIf!I#^0ft?}@y@3}$Ez;(ZH|SIne-xpu');
define('NONCE_SALT',       ',BlstHyr**vUn#yn>kIXG-e-`5n1FHo|Zwi-ZXDwd[y{py-=$;DFJL`y#=$`plc}');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique. 
 * N'utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés!
 */
$table_prefix  = 'wp_';

/**
 * Langue de localisation de WordPress, par défaut en Anglais.
 *
 * Modifiez cette valeur pour localiser WordPress. Un fichier MO correspondant
 * au langage choisi doit être installé dans le dossier wp-content/languages.
 * Par exemple, pour mettre en place une traduction française, mettez le fichier
 * fr_FR.mo dans wp-content/languages, et réglez l'option ci-dessous à "fr_FR".
 */
define('WPLANG', 'fr_FR');

/** 
 * Pour les développeurs : le mode deboguage de WordPress.
 * 
 * En passant la valeur suivante à "true", vous activez l'affichage des
 * notifications d'erreurs pendant votre essais.
 * Il est fortemment recommandé que les développeurs d'extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de 
 * développement.
 */ 
define('WP_DEBUG', false); 

/* C'est tout, ne touchez pas à ce qui suit ! Bon blogging ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');