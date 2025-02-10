class PhotoView {
	constructor(parent, content, img_src) {
		this.img_src = img_src;
		this.separator = document.createElement("div");
		this.separator.classList.add("PhotoView_separator");
		this.separator.classList.add("PhotoView_separator2");
		this.container = document.createElement("div");
		this.container.classList.add("PhotoView_container");
		var img;
		if (img_src.includes(".mp4")) {
			img = document.createElement("video");
			img.autoplay = true;
			img.loop = true;
			img.muted = true;
			const source = document.createElement("source");
			source.src = img_src;
			source.type = "video/mp4";
			img.appendChild(source);
		} else {
			img = document.createElement("img");
			img.src = img_src;
		}

		this.img = img;
		this.img.classList.add("PhotoView_img");

		if (content.main.type == "text") {
			this.content = document.createElement("p");
			this.content.classList.add("PhotoView_content");
			this.content.innerHTML = content.main.content;
		} else {
			this.content = content.main.content;
		}

		this.footer_left = document.createElement("div");
		this.footer_right = document.createElement("div");
		this.footer_left.classList.add("PhotoView_footer");
		this.footer_right.classList.add("PhotoView_footer");
		this.footer_left.classList.add("PhotoView_bottom-left");
		this.footer_right.classList.add("PhotoView_bottom-right");
		if (content.camera) {
			this.footer_left.innerHTML = `<p><i class="fa fa-camera"></i> ${content.camera}</p>`;
		}
		if (content.location) {
			this.footer_right.innerHTML = `<p><i class="fa fa-map-marker"></i> ${content.location}</p>`;
		}
		if (content.color) {
			this.footer_left.style.color = content.color;
			this.footer_right.style.color = content.color;
		}
		this.separator.appendChild(this.content);
		this.container.appendChild(this.img);
		this.container.appendChild(this.footer_left);
		this.container.appendChild(this.footer_right);
		this.separator.appendChild(this.container);
		this.line_separator = document.createElement("hr");
		this.separator.appendChild(this.line_separator);
		parent.appendChild(this.separator);
	}
}

class TitleView {
	constructor(parent, title, subtitles, classes) {
		this.separator = document.createElement("div");
		this.separator.classList.add("PhotoView_separator");
		this.separator.classList.add("PhotoView_title");
		if (classes) {
			for (const ss of classes) {
				this.separator.classList.add(ss);
			}
		}
		this.container = document.createElement("div");
		this.container.classList.add("PhotoView_centering_container");

		this.title = document.createElement("h1");
		this.title.classList.add("PhotoView_title_header");
		this.title.innerHTML = title;
		if (title) {
			this.container.appendChild(this.title);
		}
		if (classes) {
			for (const ss of classes) {
				if (ss.includes("text")) {
					this.title.classList.add(ss);
				}
			}
		}
		for (const subtitle_value of subtitles) {
			const subtitle = document.createElement("h3");
			subtitle.classList.add("PhotoView_title_subtitle");
			if (classes) {
				for (const ss of classes) {
					if (ss.includes("text")) {
						subtitle.classList.add(ss);
					}
				}
			}
			subtitle.innerHTML = subtitle_value;
			this.container.appendChild(subtitle);
		}
		this.separator.appendChild(this.container);
		parent.appendChild(this.separator);
	}
}

class MosaicView {
	constructor(parent, photos) {
		this.separator = document.createElement("div");
		this.separator.classList.add("PhotoView_separator");
		this.separator.classList.add("PhotoView_mosaic");
		this.container = document.createElement("div");
		this.container.classList.add("PhotoView_centering_container_mosaic");
		for (const photo_value of photos) {
			const img_wrap = document.createElement("div");
			img_wrap.classList.add("PhotoView_img_container");
			var img;
			if (photo_value.src.includes(".mp4")) {
				img = document.createElement("video");
				img.autoplay = true;
				img.loop = true;
				img.muted = true;
				const source = document.createElement("source");
				source.src = photo_value.src;
				source.type = "video/mp4";
				img.appendChild(source);
			} else {
				img = document.createElement("img");
				img.src = photo_value.src;
			}

			img.classList.add("PhotoView_img");
			img.classList.add("PhotoView_img_mosaic");

			const desc_cont = document.createElement("div");
			desc_cont.classList.add("PhotoView_img_overlay");

			const desc = document.createElement("div");

			desc.classList.add("PhotoView_img_text");
			desc.innerHTML = photo_value.description;

			desc_cont.appendChild(desc);
			img_wrap.appendChild(desc_cont);
			img_wrap.appendChild(img);
			this.container.appendChild(img_wrap);
		}
		this.separator.appendChild(this.container);
		parent.appendChild(this.separator);
	}
}

class NPhotoView {
	constructor(parent, contents, imgs) {
		this.separator = document.createElement("div");
		this.separator.classList.add("PhotoView_separator");
		this.separator.classList.add("PhotoView_separator2");

		for (let i = 0; i < contents.length; i++) {
			const content = contents[i];
			const image = imgs[i];

			const container = document.createElement("div");
			container.classList.add("PhotoView_container2");
			var img;
			if (image.src.includes(".mp4")) {
				img = document.createElement("video");
				img.autoplay = true;
				img.loop = true;
				img.muted = true;
				const source = document.createElement("source");
				source.src = image.src;
				source.type = "video/mp4";
				img.appendChild(source);
			} else {
				img = document.createElement("img");
				img.src = image.src;
			}
			img.classList.add("PhotoView_img2");

			const footer_left = document.createElement("div");
			const footer_right = document.createElement("div");
			footer_left.classList.add("PhotoView_footer");
			footer_right.classList.add("PhotoView_footer");
			footer_left.classList.add("PhotoView_bottom-left");
			footer_right.classList.add("PhotoView_bottom-right");
			if (image.camera) {
				footer_left.innerHTML = `<p><i class="fa fa-camera"></i> ${image.camera}</p>`;
			}
			if (image.location) {
				footer_right.innerHTML = `<p><i class="fa fa-map-marker"></i> ${image.location}</p>`;
			}
			if (image.color) {
				footer_left.style.color = image.color;
				footer_right.style.color = image.color;
			}
			this.separator.appendChild(content);
			container.appendChild(img);
			container.appendChild(footer_left);
			container.appendChild(footer_right);
			this.separator.appendChild(container);
			this.separator.appendChild(document.createElement("br"));
		}

		this.line_separator = document.createElement("hr");
		this.separator.appendChild(this.line_separator);
		parent.appendChild(this.separator);
	}
}

export { PhotoView, TitleView, MosaicView, NPhotoView };
