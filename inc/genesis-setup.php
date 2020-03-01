<?php
/**
 * Genesis Setup
 *
 * @since  1.0.0
 * @global array $wp_styles
 */

// Theme Supports
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
add_theme_support( 'genesis-responsive-viewport' );
add_theme_support( 'genesis-structural-wraps', array( 'header', 'menu-secondary', 'site-inner', 'footer-widgets', 'footer' ) );
add_theme_support( 'genesis-menus', array( 'primary' => 'Primary Navigation Menu', 'secondary' => 'Secondary Navigation Menu' ) );
add_theme_support( 'genesis-footer-widgets', 3 );

add_theme_support( 'genesis-accessibility', array(
  '404-page',
  'drop-down-menu',
  'headings',
  'rems',
  'search-form',
  'skip-links',
) );