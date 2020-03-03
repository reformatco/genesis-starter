<?php
/**
 * Gutenberg
 *
 * @since  1.0.0
 * @global array $wp_styles
 */


add_filter( 'allowed_block_types', 'custom_allowed_block_types' );

function custom_allowed_block_types( $allowed_blocks ) {

	return array(
    /* Common
    *****************************************/
    'core/paragraph',
    'core/columns',
    'core/image',
    'core/heading',
    'core/gallery',
    'core/list',
    'core/quote',
    'core/audio',
    'core/cover',
    'core/file',
    'core/video',
    /* Formatting
    *****************************************/
    'core/table',
    // 'core/verse',
    // 'core/code',
    // 'core/freeform',
    'core/html',
    // 'core/preformatted',
    'core/pullquote',
    // layout
    'core/button',
    'core/text-columns',
    'core/media-text',
    // 'core/more',
    'core/nextpage',
    'core/separator',
    'core/spacer',
    /* Widgets
    *****************************************/
    'core/shortcode',
    'core/archives',
    'core/categories',
    // 'core/latest-comments',
    'core/latest-posts',
    // 'core/calendar',
    // 'core/rss',
    'core/search',
    // 'core/tag-cloud',
    /* Embed
    *****************************************/
    'core/embed',
    'core-embed/twitter',
    'core-embed/youtube',
    'core-embed/facebook',
    'core-embed/instagram',
    // 'core-embed/wordpress',
    // 'core-embed/soundcloud',
    // 'core-embed/spotify',
    // 'core-embed/flickr',
    'core-embed/vimeo',
    // 'core-embed/animoto',
    // 'core-embed/cloudup',
    // 'core-embed/collegehumor',
    // 'core-embed/dailymotion',
    // 'core-embed/funnyordie',
    // 'core-embed/hulu',
    // 'core-embed/imgur',
    // 'core-embed/issuu',
    // 'core-embed/kickstarter',
    // 'core-embed/meetup-com',
    // 'core-embed/mixcloud',
    // 'core-embed/photobucket',
    // 'core-embed/polldaddy',
    // 'core-embed/reddit',
    // 'core-embed/reverbnation',
    // 'core-embed/screencast',
    // 'core-embed/scribd',
    // 'core-embed/slideshare',
    // 'core-embed/smugmug',
    // 'core-embed/speaker',
    // 'core-embed/ted',
    // 'core-embed/tumblr',
    // 'core-embed/videopress',
    // 'core-embed/wordpress-tvcore/embed'
    /* Atomic Blocks
    *****************************************/
    'atomic-blocks/ab-columns',
    'atomic-blocks/ab-column',
	);

}

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