<?php
/**
 * Gutenberg
 *
 * @since  1.0.0
 * @global array $wp_styles
 */

// Wide
// add_theme_support( 'align-wide' );

// Editor Styles
add_theme_support( 'editor-styles' );
add_editor_style( 'build/css/editor-style.css' );

// Responsive Embeds
add_theme_support( 'responsive-embeds' );

// Disable custom font sizes
add_theme_support( 'disable-custom-font-sizes' );

// Editor Font Styles
// add_theme_support( 'editor-font-sizes', array(
//   array(
//     'name'      => __( 'Small', 'refgensta' ),
//     'shortName' => __( 'S', 'refgensta' ),
//     'size'      => 14,
//     'slug'      => 'small'
//   ),
//   array(
//     'name'      => __( 'Normal', 'refgensta' ),
//     'shortName' => __( 'M', 'refgensta' ),
//     'size'      => 20,
//     'slug'      => 'normal'
//   ),
//   array(
//     'name'      => __( 'Large', 'refgensta' ),
//     'shortName' => __( 'L', 'refgensta' ),
//     'size'      => 24,
//     'slug'      => 'large'
//   ),
// ) );

// Disable Custom Colors
add_theme_support( 'disable-custom-colors' );

// Editor Color Palette
add_theme_support( 'editor-color-palette', array(
  array(
    'name'  => __( 'Blue', 'refgensta' ),
    'slug'  => 'blue',
    'color'	=> '#05306F',
  ),
  array(
    'name'  => __( 'Grey', 'refgensta' ),
    'slug'  => 'grey',
    'color' => '#FAFAFA',
  ),
) );

/**
 * Gutenberg scripts and styles
 *
 */
function custom_gutenberg_scripts() {
	wp_enqueue_style( 'custom-fonts', custom_theme_fonts_url() );
	wp_enqueue_script( 'custom-editor', get_stylesheet_directory_uri() . '/build/js/editor.js', array( 'wp-blocks', 'wp-dom' ), filemtime( get_stylesheet_directory() . '/build/js/editor.js' ), true );
}
add_action( 'enqueue_block_editor_assets', 'custom_gutenberg_scripts' );