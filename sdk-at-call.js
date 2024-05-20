(function (wind) {
	const AT_child = () => {
		const ctxAt = {}
		ctxAt["onHeight"] = (callback, error) => {
			const resizeObserver = new ResizeObserver((entries) => {
				for (const entry of entries) {
					if (entry.contentBoxSize) {

						var alturaDocumento = document.documentElement.scrollHeight;

						const send = {
							detail: {
								height: alturaDocumento,
								baseUrl: wind.location.href
							}
						}

						const hosts = [
							"http://localhost:3001/",
							"http://localhost:3012/",
							"https://www.apuestatotal.com/",
							"https://calimaco.apuestatotal.dev/",
							"https://my-iframe-test.vercel.app/",
							"https://my-app-main.vercel.app/"
						]
						const parentUrl = wind.location?.ancestorOrigins[0]
						if (!parentUrl) {
							error("no se esta llamado desde una pagina externa")
							return;
						}

						const originRef = `${new URL(parentUrl).origin}/`

						if (hosts.indexOf(originRef) === -1) {
							error("el host no esta permitido")
							return
						}

						callback({ send, parentUrl })
					}
				}
			});

			const divContent = wind.document.querySelector("body")
			if (divContent) {
				resizeObserver.observe(divContent)
			}
		}

		return ctxAt
	}
	const AT_page = (option) => {
		const ctxAt = {
			ID_FRAME: "",
			nameCustomEvent: null,
			hosts: [
				"http://localhost:3012/",
				"http://localhost:3000/",
				"http://localhost:8090/",
				"http://localhost:8091/",
				"https://www.apuestatotal.com/",
				"https://calimaco.apuestatotal.dev/",
				"https://camisetas.apuestatotal.com/",
				"https://my-iframe-test.vercel.app/",
				"https://my-app-main.vercel.app/",
			],

			start() {
				try {
					this.ID_FRAME = option.id
					this.SRC_FRAME = option.src
					this["nameCustomEvent"] = `height-${this.ID_FRAME}`
					const self = this
					function handleMessage(event) {
						const uriInfo = new URL(event.origin)

						if (self.hosts.indexOf(`${uriInfo.origin}/`) === -1) return null

						if (typeof event.data === "object" && !event.data?.detail) return null

						if (
							self.SRC_FRAME &&
							event.data?.detail?.baseUrl &&
							!(new URL(self.SRC_FRAME).origin) &&
							!(new URL(event.data?.detail.baseUrl).origin)
						) {
							return null
						}

						// const src_frame_origin = new URL(self.SRC_FRAME).origin + self.ID_FRAME
						// const detail_baseUrl_origin = new URL(event.data?.detail.baseUrl).origin + self.ID_FRAME

						// change base url
						const iframebaseUrl = event.data?.detail?.baseUrl;

						console.log(iframebaseUrl, self.SRC_FRAME);

						if (iframebaseUrl !== self.SRC_FRAME) {

							self.SRC_FRAME = iframebaseUrl;

							const custonChangeURL = new CustomEvent(self["nameCustomEvent"] + "-change", {
								detail: {
									iframebaseUrl,
									height: event.data?.detail.height,
								}
							});
							wind.dispatchEvent(custonChangeURL);
						}

						const send = {
							detail: {
								height: event.data?.detail.height,
							},
						}

						// se crear el evento CustomEvent
						const custonSend = new CustomEvent(self["nameCustomEvent"], send);
						// enviar
						wind.dispatchEvent(custonSend)
					}
					// Verificar si ya existe un event listener para el evento 'message' en window
					// Agregar el event listener si no existe
					if (window.handleMessage) {
						window.removeEventListener("message", handleMessage, false)
					}
					window.addEventListener("message", handleMessage, false)
				} catch (error) {
					console.log("error AT start :: ", error)
				}
			},
			onHeight(handleMessage) {
				if (this.nameCustomEvent) {
					wind.addEventListener(this.nameCustomEvent, handleMessage);
				}
			},

			onChangeURL(handleChange) {
				if (this.nameCustomEvent) {
					wind.addEventListener(this["nameCustomEvent"] + "-change", handleChange)
				}
			},

			closeMss() {
				wind.removeEventListener("message", null, false)
			},
		}
		ctxAt.start(option)
		return ctxAt
	}

	// lib: child | page
	// option : { host:  }
	const AT = function (libKey, option = {}) {
		try {
			// init defaul context
			const lib = {
				child: AT_child,
				page: AT_page,
			}

			return lib[libKey](option)
		} catch (error) {
			console.log("error", error)
		}
	}

	wind.AT = AT
	console.log("AT cargardo ")
})(window)
