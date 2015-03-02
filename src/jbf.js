var JBF = JBF || {};

(function($) {
	'use strict';

	JBF.Icon = Backbone.View.extend({
		tagName: 'i'
		, initialize: function(iconName, style) {
			this.iconName = 'icon-'+iconName;
			this.style = style;
		}
		, render: function() {
			this.$el.addClass(this.iconName);
			if (this.style) {
				this.$el.css(this.style);
			}
			return this;
		}
	});
	
	JBF.Button = Backbone.View.extend({
		  tagName: 'a'
		, events: {
			'click' : 'clickHandler'
		}
		, className: 'btn'
		, classList: {
			  'gray' : 'btn btn-gray'
			, 'gray-puple': 'btn btn-gray-purple'
			, 'gray-black': 'btn btn-gray-black'
			, 'purple': 'btn btn-purple'
			, 'purple-gray': 'btn btn-purple-gray'
			, 'purple-black': 'btn btn-purple-black'
			, 'black': 'btn btn-black'
			, 'black-gray': 'btn btn-black-gray'
			, 'black-black': 'btn btn-black-black'
		}
		, initialize: function(container, options, handler) {
			this.text = options.text;

			this.class = this.classList[options.class];
			this.disabled = options.disabled;
			this.rect = options.rect;
			this.setStyle(options.class);
			this.clickHandler = handler;
			this.icon = options.icon;

			this.addTo(container);
		}
		, render: function() {
			if (this.disabled) {
				this.enable();
			}
			if (this.rect) {
				this.setRect();
			}

			this.$el.text(' ' + this.text);

			if (this.icon) {
				this.$el.prepend( (new JBF.Icon("gear")).render().el );
			}
			
			return this;
		}
		, enable: function() {
			this.$el.removeClass('disabled');
		}
		, disable: function() {
			this.$el.addClass('disabled');
		}
		, setRect: function() {
			this.$el.addClass('btn-flat btn-rect');
		}
		, show: function() {
			this.$el.show();
		}
		, hide: function() {
			this.$el.hide();
		}
		, addTo: function(selector) {
			$(this.render().el).appendTo(selector);
		}
		, setStyle: function(style) {
			if ($.isPlainObject(style)) {
				this.$el.css(style);
			} else {
				this.class = this.classList[style];
				this.$el.removeClass();
				this.$el.addClass(this.class);
			}
		}
		, setIcon: function(icon) {

		}
	});
})(jQuery);