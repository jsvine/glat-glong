.PHONY: default jshint

default:
	@echo "No default rule"

hint:
	find glat-glong/js -maxdepth 1 -name "*.js" -exec jshint {} \;	

zip:
	cd glat-glong; zip -r ../glat-glong.zip .

screenshots/cropped/: screenshots/raw/
	convert screenshots/raw/screenshot-* -resize 1280x -crop 1280x800+0+0 screenshots/cropped/1280x800/screenshot.png
	convert screenshots/raw/promo-* -resize x280 -crop 440x280+0+0 screenshots/cropped/440x280/promo.png
	convert screenshots/raw/promo-* -resize x680 -crop 920x680+0+0 screenshots/cropped/920x680/promo.png
	convert screenshots/raw/promo-* -resize 1400x -crop 1400x560+0+0 screenshots/cropped/1400x560/promo.png
