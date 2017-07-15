<?php

define( 'THEME_DIRECTORY', get_template_directory() );

/**
 * Theme Support and Site Settings
 */
// require_once THEME_DIRECTORY . '/inc/site-settings.php';

/**
 * Scripts and Styles
 */
require_once THEME_DIRECTORY . '/inc/enqueue-scripts.php';

/**
 * Cleanup WordPress and Reorder menus
 */
// require_once THEME_DIRECTORY . '/inc/cleanup-reorder.php';

/**
 * Shortcodes
 */
// require_once THEME_DIRECTORY . '/inc/shortcodes.php';




/**
 * Other useful functions
 */

if ( ! function_exists( 'log_me' ) ) :
	/**
	 * Simple error logging
	 *
	 * @param $message
	 * @return bool
	 */
	function log_me( $message )
	{
		if ( true !== WP_DEBUG ) return false;

		if ( is_array($message) || is_object($message) ) {
			return error_log( json_encode($message) );
		}

		return error_log( $message );
	}

endif;


if ( ! function_exists( 'extend_array' ) ) :

	/**
	 * jQuery style array extend
	 *
	 * @return array
	 */
	function extend_array()
	{
		$args     = func_get_args();
		$extended = array();

		if ( is_array( $args ) && count( $args ) )
		{
			foreach ( $args as $array )
			{
				if ( ! is_array( $array ) )	continue;
				$extended = array_merge( $extended, $array );
			}
		}

		return $extended;
	}

endif;

// This will prepare post and strip out the html tags from content

add_filter( 'rest_prepare_post', 'dt_use_raw_post_content', 10, 3 );
function dt_use_raw_post_content( $data, $post, $request ) {
    $data->data['content']['plaintext'] = $post->post_content;
    return $data;
}
