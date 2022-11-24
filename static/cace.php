<?php require('./sasaki2022_wp/wp-blog-header.php'); ?>
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>広島の外壁塗装なら佐々木塗装 安心施工、保証付きのアフターサービス</title>

<meta name="viewport" content="width=1000,user-scalable=yes">

<link href="https://www.sasaki-tosou.co.jp/sasaki2022_wp/wp-content/themes/sasaki-tosou_theme/css/main.css" rel="stylesheet" type="text/css">
<link href="css/reset.css" rel="stylesheet" type="text/css">
<link href="css/text.css" rel="stylesheet" type="text/css">
<link href="css/jquery.bxslider.css" rel="stylesheet" type="text/css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
	
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

<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>

</head>

<body>
<div class="swiper-container2">
			<ul class="swiper-wrapper">
				<?php
  $args = [
    'post_type' => 'case', // カスタム投稿名が「case」の場合
    'posts_per_page' => 4, // 表示する数
  ];
  $my_query = new WP_Query($args); ?>
				<?php if ( $my_query->have_posts() ) : while ( $my_query->have_posts() ) : $my_query->the_post();?>
				<li class="swiper-slide">
					<div class="works_list_box">
						<div class="kanryo_icon"></div>
						<div class="kanryo_icon2"><img src="/images/kanryo_icon.png" /></div>
						<p><a href="<?php the_permalink(); ?>" target="_parent"><?php if (has_post_thumbnail()) : ?><?php the_post_thumbnail('full'); ?><?php else : ?><img src="<?php echo catch_that_image(); ?>" alt="<?php the_title(); ?>" /><?php endif ; ?></a></p>
						<p class="workstitle"><a href="<?php the_permalink(); ?>" target="_parent"><?php the_title(''); ?></a></p>
					</div>
				</li>
				<?php endwhile; endif; ?>
			</ul>
					<div class="swiper-pagination"></div>
					<div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
				</div>

<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
<script type="text/javascript" src="https://www.sasaki-tosou.co.jp/sasaki2022_wp/wp-content/themes/sasaki-tosou_theme/js/swiper_all.js"></script>

</body>
</html>
