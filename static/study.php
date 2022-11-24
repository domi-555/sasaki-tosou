<?php require('./sasaki2022_wp/wp-blog-header.php'); ?>
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>広島の外壁塗装なら佐々木塗装 安心施工、保証付きのアフターサービス</title>

<meta name="viewport" content="width=1000,user-scalable=yes">

<link href="../css/main.css" rel="stylesheet" type="text/css">
<link href="../css/reset.css" rel="stylesheet" type="text/css">
<link href="../css/text.css" rel="stylesheet" type="text/css">

<!-- web font icon -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css" integrity="sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E" crossorigin="anonymous">
<script defer src="https://use.fontawesome.com/releases/v5.9.0/js/all.js" integrity="sha384-7Gk1S6elg570RSJJxILsRiq8o0CO99g1zjfOISrqjFUCjxHDn3TmaWoWOqt6eswF" crossorigin="anonymous"></script>
<!-- web font icon -->
	
<!--レスポンシブ対応-->
<!--[if lt IE 9]>
<script src="js/html5shiv.js"></script>
<![endif]-->
<!--[if lt IE 9]>
<script src="//css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->
<!--[if lt IE 9]>
<script src="js/html5shiv.min.js"></script>
<![endif]-->
<!--[if lt IE 8]><script src="js/selectivizr.js"></script><![endif]-->
<meta name="viewport" content="width=device-width,user-scalable=no,maximum-scale=1" />
<!--レスポンシブ対応-->

</head>

<body>
	
<dl class="study_list">					
					<?php
					$args = [
						'post_type' => 'nurikae', // カスタム投稿名が「nurikae」の場合
						'posts_per_page' => 5, // 表示する数
					];
					$my_query = new WP_Query($args); ?>
					<?php if ( $my_query->have_posts() ) : while ( $my_query->have_posts() ) : $my_query->the_post();?>
					<dt><?php echo get_the_date( 'Y/m/d（D）' ); ?></dt>
					<dd><?php the_title(''); ?>
<?php $value = get_post_meta($post->ID, 'url_link', true);?><?php if(empty($value)):?><?php else: ?><span class="stydy_bt_box"><a href="<?php the_field('url_link'); ?>" target="_blank" class="study_bt">詳しくはこちら</a></span><?php endif; ?>
<?php $value = get_post_meta($post->ID, 'file_link', true);?><?php if(empty($value)):?><?php else: ?><span class="stydy_bt_box"><a href="<?php the_field('file_link'); ?>" target="_blank" class="study_bt">詳しくはこちら</a></span><?php endif; ?>
<?php $value = get_post_meta($post->ID, 'perma_link', true);?><?php if(empty($value)):?><?php else: ?><span class="stydy_bt_box"><a href="<?php the_permalink(); ?>" class="study_bt">詳しくはこちら</a></span><?php endif; ?>
<?php $value = get_post_meta($post->ID, 'mousikomi_link', true);?><?php if(empty($value)):?><?php else: ?><span class="stydy_bt_box"><a href="<?php echo esc_url( home_url( '/' ) ); ?>contact/" class="study_bt">勉強会に申し込む</a></span><?php endif; ?>
<?php $value = get_post_meta($post->ID, 'syuryo', true);?><?php if(empty($value)):?><?php else: ?><span class="stydy_bt_box study_bt_off">ご好評につき終了</span><?php endif; ?></dd>
				<?php endwhile; endif; ?>
</dl>
</body>
</html>