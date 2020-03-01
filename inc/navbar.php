<?php
/**
 * Navbar
 *
 * @package      EdPlus
 * @author       Ben Palmer
 * @since        1.0.0
 * @copyright  Copyright (c) 2020, Ben Palmer
**/


remove_action( 'genesis_after_header', 'genesis_do_nav' );
add_action( 'genesis_header_right', 'genesis_do_nav' );

//* Disable the superfish script
add_action( 'wp_enqueue_scripts', 'sp_disable_superfish' );
function sp_disable_superfish() {
	wp_deregister_script( 'superfish' );
	wp_deregister_script( 'superfish-args' );
}

/**
 * Entirely replace the classes on the
 * nav-primary > ul and remove the class .js-superfish
**/
function yourprefix_remove_superfish_nav_primary( $args ) {
  if( 'primary' == $args['theme_location'] ) {
  $args['menu_class'] = 'menu genesis-nav-menu menu-primary';
    }
 return $args;
 }
 add_filter( 'wp_nav_menu_args', 'yourprefix_remove_superfish_nav_primary' );



 /*
  * Entirely replace the classes on the
  * nav-secondary > ul and remove the class .js-superfish
*/

 function yourprefix_remove_superfish_nav_secondary( $args ) {
  if( 'secondary' == $args['theme_location'] ) {
  $args['menu_class'] = 'menu genesis-nav-menu menu-secondary';
    }
 return $args;
 }
 add_filter( 'wp_nav_menu_args', 'yourprefix_remove_superfish_nav_secondary' );