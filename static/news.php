<?php require('./sasaki2022_wp/wp-blog-header.php'); ?>
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>広島の外壁塗装なら佐々木塗装 安心施工、保証付きのアフターサービス</title>

<link href="https://sasaki-tosou.co.jp/sasaki2022_wp/wp-content/themes/sasaki-tosou_theme/css/main.css" rel="stylesheet" type="text/css">
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

<body id="top">
<div id="news_r">
				<dl>
					<?php $paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$my_query = new WP_Query(array(
						'paged' => $paged,
						'posts_per_page' => 10,
						'cat' => '-7996',
						'post_type' => 'post' )
											);?>
					<?php if ( $my_query->have_posts() ) : while ( $my_query->have_posts() ) : $my_query->the_post(); $counter++; ?>
					<?php if ($counter <= 5): ?><!–　最初の記事判別　–>
					<dt><?php echo get_the_date( 'Y年m月d日' ); ?>
						</dt>
					<dd>						
						<?php
					$categories = get_the_category();
					if ( $categories ) {						
						foreach ( $categories as $category ) {
							echo '<div class="'.$category->slug.'">'.$category->name.'</div>';
						}
					}
					?><br class="smp">
						<a href="<?php the_permalink(); ?>" target="_parent"><?php the_title(''); ?></a><img src="<?php echo get_template_directory_uri(); ?>/images/new_icon.png" class="new_icon" width="35" alt="NEW"></dd>
					<?php else:?>
					<dt><?php echo get_the_date( 'Y年m月d日' ); ?></dt>
					<dd><?php
					$categories = get_the_category();
					if ( $categories ) {						
						foreach ( $categories as $category ) {
							echo '<div class="'.$category->slug.'">'.$category->name.'</div>';
						}
					}
					?><a href="<?php the_permalink(); ?>" target="_parent"><?php the_title(''); ?></a></dd>
<?php endif;?>
					
					<?php endwhile; endif; ?>
				</dl>
			</div>

<script type="text/javascript" src="/js/common.js"></script>
</body>
</html>
