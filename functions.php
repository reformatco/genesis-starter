<?php
/**
 * Theme customizations
 *
 * @package  Tim Groom Architects
 * @author  Ben Palmer
 * @link  https://reformat.co
 * @copyright  Copyright (c) 2020, Ben Palmer
 */

add_action( 'genesis_setup', 'child_theme_setup', 15);
load_child_theme_textdomain( 'timgroom' );

/**
 * Theme setup.
 *
 * Attach all of the site-wide functions to the correct hooks and filters. All
 * the functions themselves are defined below this setup function.
 *
 * @since 1.0.0
 */
function child_theme_setup() {

  // Constants
  define( 'CHILD_THEME_NAME', 'Tim Groom Architects' );
  define( 'CHILD_THEME_VERSION', filemtime( get_stylesheet_directory() . '/build/css/main.css' ) );

  // General
  include_once( get_stylesheet_directory() . '/inc/genesis-setup.php' );
  include_once( get_stylesheet_directory() . '/inc/cleanup.php' );

  // Theme
  include_once( get_stylesheet_directory() . '/inc/navbar.php' );
  include_once( get_stylesheet_directory() . '/inc/layouts.php' );
  include_once( get_stylesheet_directory() . '/inc/sidebars.php' );
  include_once( get_stylesheet_directory() . '/inc/styles.php' );
  include_once( get_stylesheet_directory() . '/inc/scripts.php' );


  // Editor Styles
  add_theme_support( 'editor-styles' );
  add_editor_style( 'build/css/editor-style.css' );

  // Responsive Embeds
  add_theme_support( 'responsive-embeds' );

}