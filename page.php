<?php
/**
 * Page
 *
 * @package  Tim Groom Architects
 * @author  Ben Palmer
 * @link  https://reformat.co
 * @copyright  Copyright (c) 2020, Ben Palmer
 */


// Breadcrumbs before page title
add_action( 'genesis_entry_header', 'genesis_do_breadcrumbs', 8 );
remove_action( 'genesis_before_loop', 'genesis_do_breadcrumbs' );

genesis();
