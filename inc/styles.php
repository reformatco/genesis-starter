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

  wp_register_style( 'main-style', get_stylesheet_directory_uri() . '/build/css/main.css', array(), filemtime( get_stylesheet_directory() . '/build/css/main.css' ) );
  wp_enqueue_style( 'main-style' );
}

if( !is_admin() && 'wp-login.php' != $pagenow ){
  add_action( 'wp_enqueue_scripts', 'custom_enqueue_styles' );
}
