<?php
/**
 * Styles Enqueuing
 *
 * @since  1.0.0
 * @global array $wp_styles
 */

function custom_enqueue_styles() {

  wp_dequeue_style( 'child-theme' );

  wp_deregister_style( 'editor-buttons' );
  wp_deregister_style( 'wp-block-library' );

  if( custom_theme_fonts_url() ){
    wp_enqueue_style( 'custom-fonts', custom_theme_fonts_url() );
  }

  wp_register_style( 'main-style', get_stylesheet_directory_uri() . '/build/css/style.css', array(), filemtime( get_stylesheet_directory() . '/build/css/style.css' ) );
  wp_enqueue_style( 'main-style' );
}

if( !is_admin() && 'wp-login.php' != $pagenow ){
  add_action( 'wp_enqueue_scripts', 'custom_enqueue_styles' );
}

/**
 * Theme Fonts URL
 *
 */
function custom_theme_fonts_url() {
  return "https://fonts.googleapis.com/css?family=Public+Sans:300,300i,600&display=swap";
	return false;
}