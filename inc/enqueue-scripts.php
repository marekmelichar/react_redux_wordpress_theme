<?php

/**
 * Add scripts & styles
 */

add_action('wp_enqueue_scripts', 'default_theme_scripts');
function default_theme_scripts()
{

	// wp_register_script( 'config-js', get_template_directory_uri() . '/app/scripts/config.js', array(), '', true );
	// wp_enqueue_script( 'config-js' );

	wp_register_script( 'main-js', get_template_directory_uri() . '/app/scripts/main.js', array(), '', true );
	wp_enqueue_script( 'main-js' );



	wp_enqueue_style(
		'api-bootstrap', 'https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css'
	);

	wp_enqueue_style(
		'api-icons', 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
	);

	wp_enqueue_style(
		'api-styles', get_template_directory_uri() . '/app/style/app_custom_style.css'
	);

	wp_enqueue_style(
		'default-style', get_stylesheet_uri()
	);

}

























// add_action('wp_enqueue_scripts', 'default_calculator_scripts');
// function default_calculator_scripts()
// {
//
//   wp_register_script( 'api-js', plugins_url( '../app/scripts/main.js', __FILE__ ) );
//   wp_enqueue_script( 'api-js', '', '', false, true );
//
//   wp_register_style( 'api-lib', plugins_url( '../app/style/api_lib.css', __FILE__ ), array(), '20120208', 'all' );
//   wp_enqueue_style( 'api-lib' );
//   wp_register_style( 'api-style', plugins_url( '../app/style/api_style.css', __FILE__ ), array(), '20120208', 'all' );
//   wp_enqueue_style( 'api-style' );
//
// }
