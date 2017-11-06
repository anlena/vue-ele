<template>
  <div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" src="./avatar.jpg" alt="">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">粥品香坊(亚运村)</span>
				</div>
				<div class="description">
					蜂鸟转送/38分钟到达
				</div>
				<div class="support">
					<span class="icon descrease"></span>
					<span class="text">在线支付满28减5，满50减10</span>
				</div>
			</div>
			<div class="supports_count">
				<span class="count">5个</span>
				<span class="icon-keyboard_arrow_right"></span>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title"></span>
			<span class="bulletin-text">粥品香坊其烹饪粥料的秘方来源于中国千年古法，再融合现代工艺制作而成</span>
			<i class="keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img width="100%" height="100%" src="./avatar.jpg" alt="">
		</div>
		<div class="detail">
			<div class="detail-wrapper">
				<div class="detail-main">
					<div class="name">粥品香坊(亚运村)</div>
					<div class="star-wrapper">star组件内容</div>
					<div class="title"></div>
					<div class="text">优惠信息</div>
					<div class="line"></div>
				</div>
				<ul class="supports">
					<li class="support">
						<span class="icon"></span>
						<span class="text"></span>	
					</li>
				</ul>
				<div class="content">
					<p></p>
				</div>
			</div>
		</div>
		<div class="detail-close">
			<span class="icon-close"></span>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixins.styl"
	.header
		position relative
		color rgb(255,255,255)
		overflow hidden
		background-color rgba(7,17,27,0.5)
		.content-wrapper
			position relative
			padding 24px 12px 18px 24px
			font-size 0
			.avatar
				display inline-block
				vertical-align top
			.content
				display inline-block
				margin-left 16px
				padding 2px 0 2px
				.title
					margin 2px 0 8px 0
					.brand
						margin-right 6px
						vertical-align top
						bg-image(brand)
						display inline-block
						width 30px
						height 18px
						background-size 30px 18px
						background-repeat no-repeat
					.name
						font-size 16px
						color rgb(255,255,255)
						font-weight bold
						line-height 18px
				.description
					font-size 12px
					color rgb(255,255,255)
					font-weight 200
					margin-bottom 10px
					line-height 12px
				.support
					margin 10px 0 2px 0
					.icon
						margin-right 4px
						vertical-align top
						display inline-block
						width 12px
						height 12px
						background-size 12px 12px
						background-repeat no-repeat
						&.descrease
							bg-image(decrease_1)
						&.discount
							bg-image(discount_1)
						&.guarantee
							bg-image(guarantee_1)
						&.invoice
							bg-image(invoice_1)
						&.special
							bg-image(special_1)
					.text
						font-size 10px
						font-weight 200
						line-height 12px
			.supports_count
				position absolute
				right 12px
				bottom 15px
				height 24px
				padding 7px 8px
				border-radius 8px
				background-color rgba(0,0,0,0.2)
				box-sizing border-box
				.count
					vertical-align top
					font-size 10px
					line-height 12px
					font-weight 200
					margin-right 2px
				.icon-keyboard_arrow_right
					font-size 10px
					line-height 12px
					font-weight 200
			
		.bulletin-wrapper
			background-color rgba(7,17,27,0.2)
			padding	0 12px
			display block
			overflow hidden
			text-overflow ellipsis
			white-space nowrap
			.bulletin-title
				vertical-align middle
				display inline-block
				width 22px
				height 12px
				bg-image(bulletin)
				background-size 100% 100%
				background-repeat no-repeat
			.bulletin-text
				font-size 10px
				line-height 28px
			.icon-keboard_arrow_right
				position absolute
				right 12px
				bottom 9px
				font-size 10px
		
		.background
			position absolute
			left 0
			top 0
			width 100%
			height 100%
			z-index -1
			img 
				filter :blur(10px)
		.detail
			position fixed
			left 0
			top 0
			z-index 100
			width 100%
			height 100%
			background-color rgba(7,17,27,0.8)
			overflow auto
			backdrop-filter blur(10px)
			transition .5s
			.detail-wrapper
				display inline-block
				min-height 100%
				width 100%
				.detail-main
					margin-top 64px
					padding-bottom 64px
					.name
						text-align center
						font-size 16px
						line-height 16px
						font-weight 700
					.star-wrapper
						margin-top 16px
						text-align center
					.title
						display flex
						width 80%
						margin 28px auto 24px
						.text
							text-align center
							padding 0 12px
						.line
							flex 1
							position relative
							top -6px
							border-bottom 2px solid rgba(255,192,203,0.3)
        .supports
					width 80%
					padding 0 12px
					margin 0 auto
					.support
						margin-bottom 12px
						&:last-child
							margin-bottom 0
						.icon
							display inline-block
							width 16px
							height 16px
							background-size 16px 16px
							background-repeat no-repeat
							vertical-align top
							margin-right 6px
							&.discount
								bg-image(discount_2)
							&.decrease
								bg-image(decrease_2)
							&.discount
								bg-image(discount_2)
							&.discount
								bg-image(discount_2)
							&.discount
								bg-image(discount_2)
</style>


