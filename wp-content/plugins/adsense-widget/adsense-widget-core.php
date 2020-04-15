<?php 

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Invalid request.' );
}

global $adsense_widget;
global $adsense_widget_ad_types;
global $adsense_formats;

require_once( MS_AW_PLUGIN_PATH . 'inc/class-wpa-plugin.php' ); 

$hide_ads_options = array(
	"no-one" => "Do not hide ads",
	"add_users" => "Admins Only",
	"moderate_comments" => "Admins + Editors",
	"edit_published_posts" => "Admins + Editors + Authors",
	"edit_posts" => "Admins + Editors + Authors + Contributors",
	"read" => "All Registered Users"
);

// Ad Format
$adsense_formats = array(
  'display' => 'Display',
  'in_feed' => 'In-Feed',
  'in_article' => 'In-Article',
  'matched_content' => 'Matched Content',
  'link' => 'Link'
);

$adsense_widget = new WPA_Plugin(
    'Adsense Widget',
    'adsense-widget',
    MS_AW_PLUGIN_PATH
);

$adsense_widget_options = array(

  array( 
    "name" => 'general-settings',
    "label" => __( 'General Settings', 'adsense-widget' ),
    "type" => "section"
  ),
	
		array(
			"type" => "text",
			"name" => __( "Publisher ID", 'adsense-widget' ),
			"id" => "adsense_id",
			"desc" => __( "Your unique Adsense ID. This field is required for your ads to work <a href='https://metinsaylan.com/wordpress/plugins/adsense-widget/help/#adsenseid' class='helplink' target='_blank'>(?)</a> </span>", 'adsense-widget' ),
			"std" => "",
			"placeholder" => "pub-00000000000000"
    ),
    
    array(
      'id' => 'auto_ads_enabled',
      'name' => __( 'Auto-Ads', 'adsense-widget' ),
      'desc' => __( 'Enable auto-ads by Google' ),
      'type' => 'checkbox',
      'std' => 'on'
    ),

    
    array(
			"type" => "select",
			"options" => $hide_ads_options,
			"name" => __( "Hide ads for", 'adsense-widget' ),
			"id" => "hide_ads_for",
			"desc" => __( "Who will see the ads on your site <a href='https://metinsaylan.com/wordpress/plugins/adsense-widget/help/#hide-ads' class='helplink' target='_blank'>(?)</a> </span>", 'adsense-widget' ),
			"std" => "no-one"
		),
		
		array(
			"type" => "checkbox",
			"name" => __( "Placeholders", 'adsense-widget' ),
			"id" => "show_placeholders",
			"desc" => __( "Shows placeholders in place of ads <a href='https://metinsaylan.com/wordpress/plugins/adsense-widget/help/#show-placeholders' class='helplink' target='_blank'>(?)</a> </span>", 'adsense-widget' ),
			"std" => "off"
		),
	
		
  array( "type" => "close"),
  
  array( 
    "name" => 'shortcode-settings',
    "label" => __( 'Shortcode Settings', 'adsense-widget' ),
    "type" => "section"
  ),

  array(
    "type" => "select",
    "options" => $adsense_formats,
    "name" => __( "Ad Format", 'adsense-widget' ),
    "id" => "default_ad_format",
    "desc" => __( "Default ad to be displayed using <code>[adsense]</code> shortcode with no attributes. See documentation for all shortcode options.<a href='https://metinsaylan.com/wordpress/plugins/adsense-widget/help/#default-ad-type' class='helplink' target='_blank'>(?)</a> </span>", 'adsense-widget' ),
    "std" => "display"
  ),


  array(
    "type" => "text", 
    "name" => __( "Slot Id", 'adsense-widget' ),
    "id" => "shortcode_slot",
    "desc" => __( "Default slot for shortcode", 'adsense-widget' ),
    "std" => ""
  ),

  array(
    "type" => "text", 
    "name" => __( "Sizes", 'adsense-widget' ),
    "id" => "shortcode_sizes",
    "desc" => __( "Default css sizing for shortcode", 'adsense-widget' ),
    "std" => "sm-rectangle md-banner lg-leaderboard"
  ),

  array( "type" => "close"),
  
  array( 
    "name" => 'advanced-settings',
    "label" => __( 'Advanced Settings', 'adsense-widget' ),
    "type" => "section"
  ),

  array(
    'id' => 'output_css',
    'name' => __( 'Output Plugin CSS', 'adsense-widget' ),
    'desc' => __( 'Turn on/off plugin CSS' ),
    'type' => 'checkbox',
    'std' => 'on'
  ),

  array( "type" => "close")

);

$adsense_widget->options = $adsense_widget_options;
$adsense_widget->options_nav = array( 
    array(
        'label' => 'Plugin Page',
        'link' => 'https://metinsaylan.com/wordpress/plugins/adsense-widget/'
    ),
    array(
        'label' => 'Usage',
        'link' => 'https://metinsaylan.com/wordpress/plugins/adsense-widget/help/'
    ),
    array(
        'label' => 'Shortcode',
        'link' => 'https://metinsaylan.com/wordpress/plugins/adsense-widget/shortcode/'
    ),
    array(
        'label' => 'Donate',
        'link' => 'https://metinsaylan.com/live/donate/'
    )
);