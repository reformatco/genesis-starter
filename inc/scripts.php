<?php
/**
 * Scripts Enqueuing
 *
 * @since  1.0.0
 * @global array $wp_styles
 */

function custom_enqueue_scripts() {

  wp_enqueue_script( 'main-js', get_stylesheet_directory_uri() . '/build/js/main.js', array( 'jquery' ), filemtime( get_stylesheet_directory() . '/build/js/main.js' ), true );

  // Move jQuery to footer
  // Replace with CDN version
  wp_deregister_script( 'jquery' );
  wp_register_script('jquery', 'https://code.jquery.com/jquery-3.4.1.min.js', false, '3.4.1', true);
  wp_enqueue_script( 'jquery' );

}

if( !is_admin() && 'wp-login.php' != $pagenow ){
  add_action( 'wp_enqueue_scripts', 'custom_enqueue_scripts' );
}
